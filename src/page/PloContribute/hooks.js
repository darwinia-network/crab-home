import { useEffect, useState, useRef } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";

export const useApi = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    // const wsProvider = new WsProvider("wss://rpc.polkadot.io");
    const wsProvider = new WsProvider("wss://kusama.api.onfinality.io/public-ws");
    ApiPromise.create({ provider: wsProvider })
      .then((_api) => setApi(_api))
      .catch((err) => console.error(err));
  }, []);

  return { api };
};

export const useCurrentBlockNumber = (api) => {
  const unsubRef = useRef(null);
  const [currentBlockNumber, setCurrentBlockNumber] = useState(null);

  useEffect(() => {
    if (api) {
      api.rpc.chain
        .subscribeNewHeads((header) => {
          // console.log(`Chain is at block: #${header.number}`);
          setCurrentBlockNumber(Number(`${header.number}`));
        })
        .then((unsub) => {
          unsubRef.current && unsubRef.current();
          unsubRef.current = unsub;
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return () => {
      unsubRef.current && unsubRef.current();
      unsubRef.current = null;
    };
  }, [api]);

  return { currentBlockNumber };
};

export const useBalanceAll = (api, address) => {
  const unsubRef = useRef(null);
  const [currentAccountBalannce, setCurrentAccountBalannce] = useState({
    freeBalance: "0",
    lockedBalance: "0",
    availableBalance: "0",
  });

  useEffect(() => {
    if (api && address) {
      api.derive.balances
        .all(address, (balancesAll) => {
          setCurrentAccountBalannce({
            freeBalance: balancesAll.freeBalance.toString(),
            lockedBalance: balancesAll.lockedBalance.toString(),
            availableBalance: balancesAll.availableBalance.toString(),
          });
        })
        .then((unsub) => {
          unsubRef.current && unsubRef.current();
          unsubRef.current = unsub;
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return () => {
      unsubRef.current && unsubRef.current();
      unsubRef.current = null;
    };
  }, [api, address]);

  return { currentAccountBalannce };
};
