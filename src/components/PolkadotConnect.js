import React, { memo, useState, useEffect, useRef } from "react";

import { web3Enable, web3AccountsSubscribe } from "@polkadot/extension-dapp";
import Identicon from "@polkadot/react-identicon";
import { Keyring } from "@polkadot/api";
import { ApiPromise, WsProvider } from "@polkadot/api";

import { toShortAddress } from "../utils/tools";
import { formatKSMBalance } from "../page/Plo/utils";

import { typesBundleForPolkadot } from "@darwinia/types/mix";

const AccountItem = (props) => {
  const {
    account,
    api,
    index,
    indexSelected,
    onSelect,
    accountInfoAlready, // if got this, never update 「accountInfo」 by api in useEffect
  } = props;

  const unsub = useRef(null);
  const [loading, setLoading] = useState(false);
  const [accountInfo, setAccountInfo] = useState(null);

  // handle select, let the parent component know the current accountInfo
  useEffect(() => {
    if (index === indexSelected) {
      onSelect && onSelect(accountInfo);
    }
  }, [index, indexSelected, onSelect, accountInfo]);

  // update accountInfo
  useEffect(() => {
    if (!api || !account || accountInfoAlready) {
      accountInfoAlready && setAccountInfo(accountInfoAlready);
      return;
    }
    setLoading(true);

    const keyring = new Keyring();
    keyring.setSS58Format(2); // Kusama format address
    const pair = keyring.addFromAddress(account.address);

    api.derive.balances
      .all(pair.address, (balancesAll) => {
        setAccountInfo({
          name: account.meta.name,
          address: pair.address,
          freeBalance: balancesAll.freeBalance,
          lockedBalance: balancesAll.lockedBalance,
          availableBalance: balancesAll.availableBalance,
        });
        setLoading(false);
      })
      .then((_unsub) => {
        unsub.current && unsub.current();
        unsub.current = _unsub;
      })
      .catch((err) => {
        setLoading(false);
        console.error("balances.all:", err);
      });

    return () => {
      unsub.current && unsub.current();
      unsub.current = null;
    };
  }, [account, api, accountInfoAlready]);

  return accountInfo ? (
    <div className={`d-inline-flex align-items-center`}>
      <Identicon value={accountInfo.address} size={42} theme="polkadot" />
      <p className="m-0 ms-4 text-start">
        <span className="me-3">{accountInfo.name}</span>
        <span>{toShortAddress(accountInfo.address)}</span>
        <br />
        <span>Balance: {formatKSMBalance(accountInfo.freeBalance)}</span>
      </p>
      {loading && <div className="spinner-border" role="status" />}
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center w-100">
      <div className="spinner-border" role="status" />
    </div>
  );
};

const PolkadotConnect = (props) => {
  const {
    className,
    onApiChange, // Polkadot.{js} api
    onAccountsChange, // accounts from Polkadot.{js} extension
    onAccountInfoSelected, // the current accounts info
    onIndexOfSelected, // the current index
    onError, // String msg
  } = props;

  const api = useRef(null);
  const unsubAccounts = useRef(null);

  const [accounts, setAccounts] = useState([]); // accounts from Polkadot.{js} extension
  const [connectLoading, setConnectLoading] = useState(false); // connecting extension

  const [accountInfoSelected, setAccountInfoSelected] = useState(null);
  const [indexSelectAccountInfo, setIndexSelectAccountInfo] = useState(0);

  const handleClickSelectIndex = (index) => {
    setIndexSelectAccountInfo(index);
    onIndexOfSelected && onIndexOfSelected(index);
  };

  // AccountItem callback
  const handleSelectedAccountInfo = (acci) => {
    setAccountInfoSelected(acci);
    onAccountInfoSelected && onAccountInfoSelected(acci);
  };

  // click connect
  const handleClickConnect = async () => {
    if (!api.current) {
      onError && onError("WebSocket is not connected yet.");
      return;
    }
    setConnectLoading(true);

    const allInjected = await web3Enable("crab.network");
    if (allInjected.length === 0) {
      onError &&
        onError(
          "Cannot get the account address from Polkadot Extension. Ensure you have Polkadot Extension installed and allow crab.network access."
        );
      setConnectLoading(false);
      return;
    }

    unsubAccounts.current && unsubAccounts.current();
    unsubAccounts.current = await web3AccountsSubscribe((accounts) => {
      setAccounts(accounts);
      setIndexSelectAccountInfo(0);
      setConnectLoading(false);
      onAccountsChange && onAccountsChange(accounts);
    });
  };

  // clearup
  useEffect(() => {
    return () => {
      unsubAccounts.current && unsubAccounts.current();
      unsubAccounts.current = null;
    };
  }, []);

  // init api
  useEffect(() => {
    if (api.current) {
      return;
    }

    // const wsProvider = new WsProvider("wss://crab-rpc.darwinia.network");
    const wsProvider = new WsProvider("wss://kusama.elara.patract.io");

    ApiPromise.create({
      provider: wsProvider,
      typesBundle: {
        spec: {
          Crab: typesBundleForPolkadot.spec.darwinia,
        },
      },
    })
      .then((papi) => {
        api.current = papi;
        onApiChange && onApiChange(papi);
      })
      .catch((err) => {
        console.error("create api:", err);
        onError && onError("Oops, something went wrong when create api.");
      });
  }, [onApiChange, onError]);

  return accounts.length === 0 ? (
    <div className={className}>
      <button className="btn btn-primary-soft d-block w-100" onClick={handleClickConnect} disabled={connectLoading}>
        <span
          className={`spinner-border spinner-border-sm me-2 ${connectLoading ? "" : "invisible"}`}
          role="status"
          aria-hidden="true"
        ></span>
        <span>Connect Polkadot.js Extension</span>
      </button>
    </div>
  ) : (
    <div className={className}>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle w-100 d-inline-flex justify-content-between align-items-center"
          type="button"
          id="accountsDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <AccountItem accountInfoAlready={accountInfoSelected} />
        </button>
        <ul
          className="dropdown-menu w-100 overflow-auto"
          style={{ maxHeight: "220px" }}
          aria-labelledby="accountsDropdown"
        >
          {accounts.map((account, index) => (
            <li key={index}>
              <button className="dropdown-item mb-2" onClick={() => handleClickSelectIndex(index)}>
                <AccountItem
                  account={account}
                  api={api.current}
                  index={index}
                  indexSelected={indexSelectAccountInfo}
                  onSelect={handleSelectedAccountInfo}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(PolkadotConnect);
