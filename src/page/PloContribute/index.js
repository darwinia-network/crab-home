import React, { useRef, useEffect, useState, useMemo } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Tooltip, Modal, Typography, Spin, message, notification } from "antd";
import Fade from "react-reveal/Fade";

import brand from "./img/crab-plo-brand.svg";
import infoIcon from "./img/info-icon.png";
// import dotIcon from "./img/dot-icon.png";
import modalCloseIcon from "./img/modal-close.png";
import copyIcon from "./img/copy-icon.png";
import crabRewardsNoticeIcon from "./img/crab-rewards-notice.svg";

import twitterIcon from "./img/twitter.png";
import mediumIcon from "./img/medium.png";
import telegramIcon from "./img/telegram.png";
import discordIcon from "./img/discord.png";
import BTCReward from "./components/btc-reward";
import MetaverseNFT from "./components/metaverse-nft";
import ringIcon from "./img/ring-icon.png";
import ktonIcon from "./img/kton-icon.png";

import crowdloanContributeds from "./data/crowdloanContributeds.json";
import crowdloanMemos from "./data/crowdloanMemos.json";
import crowdloanReferStatistics from "./data/crowdloanReferStatistics.json";
import crowdloanWhoStatistics from "./data/crowdloanWhoStatistics.json";
import accountsContributed from "./data/accounts.json";

import { useEcharts } from "./useEcharts";
import { useApi, useCurrentBlockNumber, useBalanceAll } from "./hooks";

import {
  DOT_PRECISION,
  shortAddress,
  isInsufficientBalance,
  isValidContributeDOTInput,
  isValidAddressPolkadotAddress,
  formatBalanceFromOrigToDOT,
  formatBalanceFromDOTToOrig,
  polkadotAddressToReferralCode,
  referralCodeToPolkadotAddress,
  RING_REWARD,
  KTON_REWARD,
} from "./utils";
import { isMobile } from "../../utils";

// Polkadot
import { web3Enable, web3AccountsSubscribe, web3FromAddress, web3Accounts } from "@polkadot/extension-dapp";
import Identicon from "@polkadot/react-identicon";
import { Keyring } from "@polkadot/keyring";
import { stringToHex } from "@polkadot/util";

import BN from "bn.js";
import Big from "big.js";

import GlobalContributionActivity from "./components/global-contribution-activity";
import ReferralLeaderboard from "./components/referral-leaderboard";
import ConnectionFailedModal from "./components/connection-failed-modal";
import btcTop5 from "./top5.json";

const cx = classNames.bind(styles);

const PARA_ID = 2105;
const T1_BLOCK_NUMBER = 10914000;
const LOCAL_STORAGE_CURRENT_ADDRESS_KEY = stringToHex("plo current address");

/**
 * PLO Contribute
 * @returns ReactNode
 */
const PloContribute = () => {
  const echartsRef = useRef();
  const unsubscribeAccounts = useRef(null);
  const [currentAccount, setCurrentAccount] = useState(null);

  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [contributeBtnLoading, setContributeBtnLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [inputDot, setInputDot] = useState("");
  const [inputReferralCode, setInputReferralCode] = useState("");
  const [showTransactionInProgress, setShowTransactionInProgress] = useState(false);
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);
  const [showThanksForSupportModal, setShowThanksForSupportModal] = useState(false);
  const [showConnectionFailedModal, setShowConnectionFailedModal] = useState(false);

  const { api } = useApi();
  const { currentBlockNumber } = useCurrentBlockNumber(api);
  const { totalContributed } = useEcharts(echartsRef.current);
  const { currentAccountBalannce } = useBalanceAll(api, currentAccount ? currentAccount.address : null);

  const globalTotalPower = new BN("7099040920573355");

  const myContributeHistory = currentAccount
    ? crowdloanContributeds.data.crowdloanContributeds.nodes.filter((item) => item.who === currentAccount.address)
    : [];
  const myContributedStatistic = currentAccount
    ? crowdloanWhoStatistics.data.crowdloanWhoStatistics.nodes.find((item) => item.user === currentAccount.address)
    : null;
  const myReferContributedStatistic = currentAccount
    ? crowdloanReferStatistics.data.crowdloanReferStatistics.nodes.find(
        (item) => item.user === polkadotAddressToReferralCode(currentAccount.address)
      )
    : null;
  const myContributeRank = currentAccount
    ? accountsContributed.data.accounts.nodes.findIndex((node) => node.id === currentAccount.address)
    : -1;
  const myReferralCode = currentAccount ? crowdloanMemos.data.crowdloanMemos.nodes.find((item) => item.who === currentAccount.address) : null;

  const myTotalContribute = myContributedStatistic ? new BN(myContributedStatistic.totalBalance) : new BN(0);
  const myContributeTotalPower = myContributedStatistic ? new BN(myContributedStatistic.totalPower) : new BN(0);
  const myReferTotalPower = myReferContributedStatistic ? new BN(myReferContributedStatistic.totalPower) : new BN(0);
  const myContributedShare = Big(myTotalContribute.toString()).div(globalTotalPower.toString());

  const myTotalPower = myReferTotalPower.add(myContributeTotalPower);
  const myRingReward = myTotalPower.isZero()
    ? "0"
    : Big(myTotalPower).div(globalTotalPower.toString()).mul(Big("200000000")).toFixed(4);
  const myKtonReward = myTotalPower.isZero()
    ? "0"
    : Big(myTotalPower).div(globalTotalPower.toString()).mul(Big("8000")).toFixed(4);

  let referralsContributeHistory = [];
  if (myReferContributedStatistic) {
    const tmp = [];
    for (let node of myReferContributedStatistic.contributors.nodes) {
      const {
        block: { number },
        extrinsicId,
        timestamp,
        balance,
        id,
      } = node;
      tmp.push({
        number,
        balance,
        timestamp,
        extrinsicId,
        index: id.split("-")[1],
      });
    }
    referralsContributeHistory = tmp;
  }

  const allReferContributeData = [];
  crowdloanReferStatistics.data.crowdloanReferStatistics.nodes.forEach((node) => {
    allReferContributeData.push({
      user: referralCodeToPolkadotAddress(node.user),
      totalPower: node.totalPower,
      totalBalance: node.totalBalance,
      contributorsCount: node.contributors.totalCount,
    });
  });

  const myReferralCodeFromGql = myReferralCode ? referralCodeToPolkadotAddress(myReferralCode.memo) : null;

  let auctionSuccessReward = {
    base: { ring: Big(0), kton: Big(0) },
    bonus: { ring: Big(0), kton: Big(0) },
    referral: { ring: Big(0), kton: Big(0) },
    total: { ring: Big(0), kton: Big(0) },
  };
  if (currentBlockNumber && Number(inputDot) && Number(inputDot) > 0) {
    const inputDotBN = Big(Number(inputDot)).times(DOT_PRECISION);
    const contributePer = Big(inputDotBN.toString()).div(globalTotalPower.toString());

    const bonusN = currentBlockNumber < T1_BLOCK_NUMBER ? 0.2 : 0;
    const referN =
      isValidAddressPolkadotAddress(inputReferralCode) || isValidAddressPolkadotAddress(myReferralCodeFromGql)
        ? 0.05
        : 0;

    const base = {
      ring: contributePer.mul(RING_REWARD),
      kton: contributePer.mul(KTON_REWARD),
    };
    const bonus = {
      ring: base.ring.mul(bonusN),
      kton: base.kton.mul(bonusN),
    };
    const referral = {
      ring: base.ring.add(bonus.ring).mul(referN),
      kton: base.kton.add(bonus.kton).mul(referN),
    };
    const total = {
      ring: base.ring.add(bonus.ring).add(referral.ring),
      kton: base.kton.add(bonus.kton).add(referral.kton),
    };

    auctionSuccessReward = { base, bonus, referral, total };
  }

  const top5contribute = useMemo(() => btcTop5.reduce((acc, cur) => acc.add(new Big(cur.amount)), new Big("0")), []);

  useEffect(() => {
    const address = localStorage.getItem(LOCAL_STORAGE_CURRENT_ADDRESS_KEY);
    (async () => {
      const extensions = await web3Enable("darwinia.network");
      if (extensions.length === 0) {
        // no extension installed, or the user did not accept the authorization
        // in this case we should inform the use and give a link to the extension
        return;
      }

      const keyring = new Keyring();
      keyring.setSS58Format(2); // Kusama format address

      if (isMobile()) {
        const allAccounts = await web3Accounts();
        setAccounts(
          allAccounts.map((account) => {
            if (isValidAddressPolkadotAddress(account.address)) {
              const pair = keyring.addFromAddress(account.address);
              if (pair.address === address) {
                setCurrentAccount({ ...account, address: pair.address });
              }
              return { ...account, address: pair.address };
            } else {
              return null;
            }
          })
        );
      } else {
        unsubscribeAccounts.current && unsubscribeAccounts.current();
        unsubscribeAccounts.current = await web3AccountsSubscribe((allAccounts) => {
          setAccounts(
            allAccounts.map((account) => {
              if (isValidAddressPolkadotAddress(account.address)) {
                const pair = keyring.addFromAddress(account.address);
                if (pair.address === address) {
                  setCurrentAccount({ ...account, address: pair.address });
                  // setCurrentAccount({ ...account, address: 'FsyQNF17naZjZMutC8DAYEhxgGTgKB1dZcjumqDN4uKct8r' });
                }
                return { ...account, address: pair.address };
                // return { ...account, address: 'FsyQNF17naZjZMutC8DAYEhxgGTgKB1dZcjumqDN4uKct8r'};
              } else {
                return null;
              }
            })
          );
        });
      }
    })();

    return () => {
      unsubscribeAccounts.current && unsubscribeAccounts.current();
      unsubscribeAccounts.current = null;
    };
  }, []);

  const handleClickConnectWallet = async () => {
    if (accounts.length) {
      setShowSelectAccountModal(true);
      return;
    }

    const extensions = await web3Enable("darwinia.network");
    if (extensions.length === 0) {
      // no extension installed, or the user did not accept the authorization
      // in this case we should inform the use and give a link to the extension
      setShowConnectionFailedModal(true);
      return;
    }

    const keyring = new Keyring();
    keyring.setSS58Format(2); // Polkadot format address

    if (isMobile()) {
      const allAccounts = await web3Accounts();
      setAccounts(
        allAccounts.map((account) => {
          if (isValidAddressPolkadotAddress(account.address)) {
            const pair = keyring.addFromAddress(account.address);
            return { ...account, address: pair.address };
          } else {
            return null;
          }
        })
      );
      setShowSelectAccountModal(true);
    } else {
      unsubscribeAccounts.current && unsubscribeAccounts.current();
      unsubscribeAccounts.current = await web3AccountsSubscribe((allAccounts) => {
        setAccounts(
          allAccounts.map((account) => {
            if (isValidAddressPolkadotAddress(account.address)) {
              const pair = keyring.addFromAddress(account.address);
              return { ...account, address: pair.address };
            } else {
              return null;
            }
          })
        );

        setShowSelectAccountModal(true);
      });
    }
  };

  const handleClickSelectAccount = async (account) => {
    setShowSelectAccountModal(false);
    account && setCurrentAccount(account);
    localStorage.setItem(LOCAL_STORAGE_CURRENT_ADDRESS_KEY, account.address);
  };

  const handleChangeInputDot = (e) => {
    if (isValidContributeDOTInput(e.target.value)) {
      setInputDot(e.target.value);
      if (isInsufficientBalance(currentAccountBalannce.availableBalance, e.target.value)) {
        setInsufficientBalance(true);
      } else {
        setInsufficientBalance(false);
      }
    }
  };

  const handleChangeInputReferral = (e) => {
    try {
      const referral = new URLSearchParams(new URL(e.target.value).searchParams).get("referral");
      referral && setInputReferralCode(referral);
    } catch (error) {
      setInputReferralCode(e.target.value);
    }
  };

  const handleClickContribute = async () => {
    if (!api) {
      message.warning("api does not connect yet");
      return;
    }

    if (Number(inputDot) >= 0.1) {
      const extrinsicContribute = api.tx.crowdloan.contribute(PARA_ID, formatBalanceFromDOTToOrig(inputDot), null);
      const extrinsicAddMemo = myReferralCodeFromGql
        ? api.tx.crowdloan.addMemo(PARA_ID, polkadotAddressToReferralCode(myReferralCodeFromGql))
        : isValidAddressPolkadotAddress(inputReferralCode)
        ? api.tx.crowdloan.addMemo(PARA_ID, polkadotAddressToReferralCode(inputReferralCode))
        : null;
      const injector = await web3FromAddress(currentAccount.address);
      const tx = extrinsicAddMemo ? api.tx.utility.batch([extrinsicContribute, extrinsicAddMemo]) : extrinsicContribute;

      try {
        setContributeBtnLoading(true);
        const unsub = await tx.signAndSend(
          currentAccount.address,
          { signer: injector.signer },
          ({ events = [], status }) => {
            events.forEach(({ phase, event: { data, method, section } }) => {
              console.log(`${phase}: ${section}.${method}:: ${data}`);

              if (method === "Contributed" && section === "crowdloan") {
                // setContributedValue(formatKSMBalance(data[2]));
              }

              if (method === "ExtrinsicSuccess" && section === "system") {
                if (status.isInBlock) {
                  // setContributedBlockHash(status.asInBlock);
                  setShowTransactionInProgress(false);
                  setShowThanksForSupportModal(true);
                  setContributeBtnLoading(false);
                } else if (status.isFinalized) {
                  unsub && unsub();
                }
              }

              if (method === "ExtrinsicFailed" && section === "system") {
                setShowTransactionInProgress(false);
                setContributeBtnLoading(false);
              }
            });
          }
        );
        setShowTransactionInProgress(true);
      } catch (err) {
        console.log(err);
        notification.warning({
          message: "Failed To Contribute",
          description: err.message,
        });
        setShowTransactionInProgress(false);
        setContributeBtnLoading(false);
      } finally {
        //
      }
    }
  };

  const handleClickMaxInput = () => {
    const max = Big(currentAccountBalannce.availableBalance).sub(Big("100000000"));

    if (max.gte(Big("100000000000"))) {
      setInputDot(formatBalanceFromOrigToDOT(max.toString()));
    } else {
      message.error("Insufficient balance");
    }
  };

  useEffect(() => {
    const referral = new URLSearchParams(window.location.search).get("referral");
    referral && setInputReferralCode(referral);
  }, []);

  useEffect(() => {
    if (currentAccount && inputReferralCode && currentAccount.address === inputReferralCode) {
      notification.warning({
        message: "Referral Check",
        description: "Can not set yourself account as a referral",
      });
      setInputReferralCode("");
    }
  }, [currentAccount, inputReferralCode]);

  return (
    <div className={cx("main")}>
      <div className={cx("magic-01")} />
      <div className={cx("magic-02")} />

      <div className={cx("rewards-time-notice")}>
        <img alt="..." src={crabRewardsNoticeIcon} />
        <div className={cx("rewards-time-notice-content")}>
          <p>
            Supporters! May's 7.5% CRAB + CKTON rewards from Crab Kusama Parachain Slot Auction have been delivered.
            There is a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://darwinianetwork.medium.com/metaverse-nft-package-rewards-release-now-4f4544e3c5a6"
            >
              guide
            </a>{" "}
            for you to claim your NFT reward. The calculation of the second round of PLO rewards distribution will end
            on June 30, 17:00 (UTC+8). Kindly claim the NFT package before this time. Please Note: Contributors who
            claim after the 30th of June will no longer receive the NFT Package rewards!
          </p>
        </div>
      </div>

      <div className="container">
        {/* Heading */}
        <div className={cx("heading-container")} data-aos="fade-right" data-aos-duration="500">
          <div className={cx("heading-container-logo")}>
            <Link to="/">
              <img alt="..." src={brand} className="navbar-brand-img" />
            </Link>
            <div className={cx("heading-container-logo-plo")}>
              <span>PLO</span>
            </div>
          </div>

          <div className={cx("heading-container-right")}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://darwinianetwork.medium.com/guide-to-participate-in-the-crab-plo-e9b145bed4c9"
              className={cx("heading-container-right-how-it-works-link")}
            >
              <span>How it works</span>
            </a>
            {currentAccount ? (
              <div className={cx("heading-container-current-account-wrap")}>
                <div className={cx("heading-container-current-account")}>
                  <span>{shortAddress(currentAccount.address)}</span>
                  <Identicon value={currentAccount.address} size={isMobile() ? 15 : 30} theme="polkadot" />
                </div>
                <button
                  className={cx("heading-container-change-account", "lift")}
                  onClick={() => setShowSelectAccountModal(true)}
                >
                  <span>Change</span>
                </button>
              </div>
            ) : (
              <button
                className={cx("heading-container-connnect-wallet-btn", "lift")}
                onClick={handleClickConnectWallet}
              >
                <span>Connect Wallet</span>
              </button>
            )}
          </div>
        </div>

        {/* Contribute, Crowloan, Referral link */}
        <div className={cx("contribute-crowloan-referral", "d-none")} data-aos="fade-up" data-aos-duration="500">
          <div className={cx("contribute")}>
            <h3 className={cx("contribute-title")}>Contribute</h3>

            <div className={cx("dot-amount-input-wrap")}>
              <p className={cx("contribute-lebal")}>Enter your contribution amount</p>
              <div className={cx("dot-amount-input-control")}>
                <input className={cx("contribute-input")} value={inputDot} onChange={handleChangeInputDot}></input>
                <div className={cx("dot-amount-input-suffix")}>
                  <span className={cx("dot-amount-input-dot-suffix")}>KSM</span>
                  <button
                    className={cx("dot-amount-input-max-btn")}
                    onClick={handleClickMaxInput}
                    disabled={!currentAccount}
                  >
                    <span>MAX</span>
                  </button>
                </div>
              </div>
              <div className={cx("input-dot-tip-wrap")}>
                <span
                  className={cx("min-contrbution", {
                    warning: (inputDot.length && 0 <= Number(inputDot) && Number(inputDot) < 5) || insufficientBalance,
                  })}
                >
                  {insufficientBalance ? "Insufficient balance" : "Min contribution: 0.1 KSM"}
                </span>
                <span className={cx("my-available-dot")}>
                  Available: {formatBalanceFromOrigToDOT(currentAccountBalannce.availableBalance)} KSM
                </span>
              </div>
            </div>

            <div className={cx("referral-code-input-wrap")}>
              <p className={cx("contribute-lebal")}>Enter your referral code (optional)</p>
              <div className={cx("referral-code-input-control")}>
                <input
                  className={cx("referral-code-input")}
                  value={myReferralCodeFromGql || inputReferralCode}
                  disabled={!!myReferralCodeFromGql}
                  onChange={handleChangeInputReferral}
                ></input>
              </div>
              <span
                className={cx("invalid-referral-code", {
                  show: inputReferralCode && !isValidAddressPolkadotAddress(inputReferralCode),
                })}
              >
                Invalid referral code
              </span>
            </div>

            <div className={cx("auction-success-rewards-wrap")}>
              <div className={cx("contribute-lebal-wrap")}>
                <p className={cx("contribute-lebal")}>Auction Success Rewards</p>
                <Tooltip
                  overlayClassName="tooltip-overlay"
                  overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                  color="white"
                  placement="rightTop"
                  trigger={["click", "hover"]}
                  title={
                    <p className={cx("tips")}>
                      The rewards are dynamic.
                      <br />
                      <br />
                      The rewards on basis of contribution share will be displayed in real-time.
                      <br />
                      <br />
                      CRAB and CKTON will be released linearly based on the contribution share after Crab Network wins
                      the slot auction.
                    </p>
                  }
                >
                  <img alt="..." src={infoIcon} className={cx("info-icon")} />
                </Tooltip>
              </div>
              <div className={cx("auction-success-rewards")}>
                <span>Base</span>
                <span className={cx("token-amount")}>{auctionSuccessReward.base.ring.toFixed(2)} CRAB</span>
                <span className={cx("token-amount")}>{auctionSuccessReward.base.kton.toFixed(2)} CKTON</span>

                <div className={cx("auction-success-rewards-content-wrap")}>
                  <span>Bonus</span>
                  <div className={cx("limited-time")}>
                    <span>Limited Time</span>
                  </div>
                </div>
                <span className={cx("token-amount")}>{auctionSuccessReward.bonus.ring.toFixed(2)} CRAB</span>
                <span className={cx("token-amount")}>{auctionSuccessReward.bonus.kton.toFixed(2)} CKTON</span>

                <span>Referral</span>
                <span className={cx("token-amount")}>{auctionSuccessReward.referral.ring.toFixed(2)} CRAB</span>
                <span className={cx("token-amount")}>{auctionSuccessReward.referral.kton.toFixed(2)} CKTON</span>

                <span>Total</span>
                <span className={cx("total", "token-amount")}>{auctionSuccessReward.total.ring.toFixed(2)} CRAB</span>
                <span className={cx("total", "token-amount")}>{auctionSuccessReward.total.kton.toFixed(2)} CKTON</span>
              </div>
            </div>

            <div className={cx("contribute-btn-container")}>
              {currentAccount ? (
                <button
                  className={cx("contribute-btn")}
                  onClick={handleClickContribute}
                  disabled={!currentAccount || Number(inputDot) < 0.1 || contributeBtnLoading || insufficientBalance}
                >
                  <Spin spinning={contributeBtnLoading} wrapperClassName={cx("contribute-btn-spinning")}>
                    <span>{contributeBtnLoading ? "" : "Contribute"}</span>
                  </Spin>
                </button>
              ) : (
                <button className={cx("my-contribute-connect-wallet-btn")} onClick={handleClickConnectWallet}>
                  <span>Connect Wallet</span>
                </button>
              )}
            </div>
          </div>

          <div className={cx("crowloan-referral")}>
            <div className={cx("crowloan")}>
              <h3 className={cx("crowloan-title")}>The Crowdloan</h3>

              <div className={cx("total-rewards-wrap")}>
                <span>Total rewards: </span>
                <div className={cx("total-ring-rewards")}>
                  <img alt="..." src={ringIcon} />
                  <span>200,000,000</span>
                </div>
                <div className={cx("total-kton-rewards")}>
                  <img alt="..." src={ktonIcon} />
                  <span>8,000</span>
                </div>
              </div>

              <div ref={echartsRef} className={cx("crowloan-echarts")} />

              <div className={cx("current-total-contribute")}>
                <span>Current total contributions</span>
                <div className={cx("total-contribute-dot")}>
                  {/* <img alt="..." src={dotIcon} /> */}
                  <span>{formatBalanceFromOrigToDOT(totalContributed)} KSM</span>
                </div>
              </div>
            </div>

            <div className={cx("my-referral-link")}>
              <div className={cx("my-referral-link-title-wrap")}>
                <h3 className={cx("my-referral-link-title")}>My Referral Link</h3>
                {currentAccount && (
                  <Tooltip
                    overlayClassName="tooltip-overlay"
                    overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                    color="white"
                    placement="rightBottom"
                    trigger={["click", "hover"]}
                    title={
                      <p className={cx("tips")}>
                        You can copy your referral link to invite people to participate and win more awards.
                      </p>
                    }
                  >
                    <img alt="..." src={infoIcon} className={cx("info-icon")} />
                  </Tooltip>
                )}
              </div>
              {currentAccount ? (
                <Typography.Link
                  rel="noopener noreferrer"
                  className={cx("my-referral-link-content", "link")}
                  code={false}
                  copyable={{
                    icon: <img alt="..." src={copyIcon} style={{ width: "16px" }} />,
                    text: `${window.location.origin}/plo_contribute?referral=${currentAccount.address}`,
                  }}
                  target="_blank"
                  href={`/plo_contribute?referral=${currentAccount.address}`}
                >
                  {`${window.location.origin}/plo_contribute?referral=${
                    isMobile() ? shortAddress(currentAccount.address) : currentAccount.address
                  }`}
                </Typography.Link>
              ) : (
                <span className={cx("my-referral-link-content")}>
                  Please connect wallet first, and you can copy your referral link to invite people to participate and
                  win more awards.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Total Contribute History */}
        <div className={cx("total-contribute-history")} data-aos="fade-up" data-aos-duration="500">
          <div className={cx("total-contribute-history-title-wrap")}>
            <span>👏 Current Total contributions: {formatBalanceFromOrigToDOT(totalContributed)} KSM 👏</span>
          </div>
          <div ref={echartsRef} className={cx("crowloan-echarts")} />
        </div>

        {/* My Contribute */}
        <div className={cx("my-contribute")} data-aos="fade-up" data-aos-duration="500">
          <div className={cx("my-contribute-title-wrap")}>
            <div className={cx("my-contribute-title")}>
              <h3>My Contribution</h3>
              <span>
                *The reward amount will change in real-time according to the progress of the crowdloan, and the final
                result shall prevail.
              </span>
            </div>
            <div></div>
            {currentAccount ? (
              <div className={cx("my-contribute-container-current-account-wrap")}>
                <div className={cx("heading-container-current-account")}>
                  <span>{shortAddress(currentAccount.address)}</span>
                  <Identicon value={currentAccount.address} size={isMobile() ? 15 : 30} theme="polkadot" />
                </div>
                <button
                  className={cx("heading-container-change-account", "lift")}
                  onClick={() => setShowSelectAccountModal(true)}
                >
                  <span>Change</span>
                </button>
              </div>
            ) : (
              <button className={cx("my-contribute-connect-wallet-btn", "lift")} onClick={handleClickConnectWallet}>
                <span>Connect Wallet</span>
              </button>
            )}
          </div>

          <div className={cx("contribute-info-card")}>
            <div className={cx("contribute-info-item")}>
              <span className={cx("contribute-info-item-title")}>Total KSM Contributed</span>
              <div className={cx("current-tag", "space")}>
                <span>Current</span>
              </div>
              <span className={cx("contribute-info-item-value")}>
                {formatBalanceFromOrigToDOT(myTotalContribute)}(
                {myTotalContribute.isZero() ? 0 : (myContributedShare * 100).toFixed(4)}%)
              </span>
              <button className={cx("claim-reward-btn", "lift", "space")} disabled={true}>
                <span>Claim</span>
              </button>
            </div>

            <div className={cx("my-contribute-line")} />

            <MetaverseNFT currentAccount={currentAccount} myTotalContribute={myTotalContribute} />

            <BTCReward currentAccount={currentAccount} />

            <div className={cx("contribute-info-item-wrap")}>
              <div className={cx("contribute-info-item")}>
                <div className={cx("contribute-info-item-title-wrap")}>
                  <span className={cx("contribute-info-item-title")}>CRAB Rewards</span>
                  <Tooltip
                    overlayClassName="tooltip-overlay"
                    overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                    color="white"
                    placement="rightTop"
                    trigger={["click", "hover"]}
                    title={
                      <p className={cx("tips")}>
                        CRAB rewards are dynamic.
                        <br />
                        <br />
                        200,000,000 CRAB will be released linearly based on the contribution share after Crab Network
                        wins the slot auction.
                      </p>
                    }
                  >
                    <img alt="..." src={infoIcon} className={cx("info-icon")} />
                  </Tooltip>
                </div>
                <div className={cx("current-tag")}>
                  <span>Current</span>
                </div>
                <span className={cx("contribute-info-item-value")}>{myRingReward}</span>
                <button className={cx("claim-reward-btn", "lift", "space")} disabled={true}>
                  <span>Claim</span>
                </button>
              </div>
              <div className={cx("contribute-info-item")}>
                <div className={cx("contribute-info-item-title-wrap")}>
                  <span className={cx("contribute-info-item-title")}>CKTON Rewards</span>
                  <Tooltip
                    overlayClassName="tooltip-overlay"
                    overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                    color="white"
                    placement="rightTop"
                    trigger={["click", "hover"]}
                    title={
                      <p className={cx("tips")}>
                        CKTON rewards are dynamic.
                        <br />
                        <br />
                        8,000 CKTON will be released linearly based on the contribution share after Crab Network wins
                        the slot auction.
                      </p>
                    }
                  >
                    <img alt="..." src={infoIcon} className={cx("info-icon")} />
                  </Tooltip>
                </div>
                <div className={cx("current-tag")}>
                  <span>Current</span>
                </div>
                <span className={cx("contribute-info-item-value")}>{myKtonReward}</span>
                <button className={cx("claim-reward-btn", "space")} disabled={true}>
                  <span>Claim</span>
                </button>
              </div>
            </div>
          </div>

          <div className={cx("my-contribute-history")}>
            <div className={cx("contribute-history-wrap")}>
              <p>Contribution history</p>
              {myContributeHistory.length ? (
                <div className={cx("contribute-history-control")}>
                  {myContributeHistory.map((node, index) => (
                    <div className={cx("contribute-history-control-item")} key={index}>
                      <span>
                        {new Date(node.timestamp).toDateString().split(" ")[1]}{" "}
                        {new Date(node.timestamp).toDateString().split(" ")[2]}
                      </span>
                      <span className={cx("dot-amount")}>{formatBalanceFromOrigToDOT(node.balance)} KSM</span>
                      <a
                        className={cx("hash-id")}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://kusama.subscan.io/extrinsic/${node.extrinsicId}`}
                      >
                        {node.id}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={cx("contribute-history-control", "no-data")}>No Data</div>
              )}
            </div>
            <div className={cx("referral-history-wrap")}>
              <p>Referral history</p>
              {referralsContributeHistory.length ? (
                <div className={cx("referral-history-control")}>
                  {referralsContributeHistory.map((data, index) => (
                    <div className={cx("referral-history-control-item")} key={`${index}}`}>
                      <span>
                        {new Date(data.timestamp).toDateString().split(" ")[1]}{" "}
                        {new Date(data.timestamp).toDateString().split(" ")[2]}
                      </span>
                      <span className={cx("dot-amount")}>{formatBalanceFromOrigToDOT(data.balance)} KSM</span>
                      <a
                        className={cx("hash-id")}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://kusama.subscan.io/extrinsic/${data.extrinsicId}`}
                      >
                        {data.number}-{data.index}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={cx("referral-history-control", "no-data")}>No Data</div>
              )}
            </div>
          </div>
        </div>

        {/* Contribute Pioneers */}
        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={cx("contribute-pioneers")}>
            <div className={cx("contribute-pioneers-title-wrap")}>
              <div className={cx("contribute-pioneers-title")}>
                <h3>Contribution Pioneers</h3>
                <Tooltip
                  overlayClassName="tooltip-overlay"
                  overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                  color="white"
                  placement="rightTop"
                  trigger={["click", "hover"]}
                  title={
                    <p className={cx("tips")}>
                      At the ending period starts of the first slot of the batch 5 auction, supporters who have
                      contributed more than 1,000 KSM and the top 5 people (exclude the Exchange address) ranking will
                      distribute 1 BTC in proportion to their contribution.
                    </p>
                  }
                >
                  <img alt="..." src={infoIcon} className={cx("info-icon")} />
                </Tooltip>
              </div>
              {currentAccount && myContributeRank >= 0 && (
                <div className={cx("contribute-pioneers-title-rank")}>
                  <Identicon
                    value={currentAccount.address}
                    className={cx("pioneers-item-account-icon")}
                    size={isMobile() ? 15 : 30}
                    theme="polkadot"
                  />
                  <span>My Rank: {myContributeRank + 1}</span>
                </div>
              )}
            </div>

            <div className={cx("pioneers-container", { "no-data": !accountsContributed.data })}>
              {accountsContributed.data  ? (
                accountsContributed.data.accounts.nodes.map((node, index) =>
                  index > 4 ? null : (
                    <div className={cx("pioneers-item")} key={index}>
                      <div className={cx("pioneers-item-num-icon")}>
                        <span>{index + 1}</span>
                      </div>
                      <Identicon
                        value={node.id}
                        className={cx("pioneers-item-account-icon")}
                        size={isMobile() ? 26 : 30}
                        theme="polkadot"
                      />
                      <span className={cx("pioneers-item-account-name")}>{shortAddress(node.id)}</span>
                      <span className={cx("pioneers-item-dot-amount")}>
                        {formatBalanceFromOrigToDOT(node.contributedTotal)} KSM
                      </span>
                    </div>
                  )
                )
              ) : (
                <span>No Data</span>
              )}
            </div>
          </div>
        </Fade>

        <ReferralLeaderboard globalTotalPower={globalTotalPower} />

        <GlobalContributionActivity
          allReferContributeData={allReferContributeData}
          globalTotalPower={globalTotalPower}
          top5contribute={top5contribute}
        />

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <p className={cx("all-right")}>Copyright@2022 Crab Network</p>
        </Fade>
      </div>

      <Modal
        className={cx("transaction-in-progress-modal")}
        visible={showTransactionInProgress}
        footer={null}
        title={null}
        closable={true}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
        onCancel={() => setShowTransactionInProgress(false)}
      >
        <div className={cx("transaction-in-progress")}>
          <Spin size="large" />
          <span>Transaction in progress ...</span>
        </div>
      </Modal>

      <Modal
        className={cx("select-account-modal")}
        visible={showSelectAccountModal}
        footer={null}
        title="Select an Account"
        closable={true}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
        onCancel={() => setShowSelectAccountModal(false)}
        width={580}
      >
        <div className={cx("accounts-container")}>
          {accounts.map((account, index) =>
            account ? (
              <button className={cx("accounts-item")} key={index} onClick={() => handleClickSelectAccount(account)}>
                <Identicon value={account.address} size={isMobile() ? 30 : 40} theme="polkadot" />
                <div className={cx("accounts-item-name-address")}>
                  <span className={cx("name")}>{account.meta.name}</span>
                  <span className={cx("address")}>{account.address}</span>
                </div>
              </button>
            ) : null
          )}
        </div>
      </Modal>

      <Modal
        className={cx("thanks-for-support-modal")}
        visible={showThanksForSupportModal}
        onCancel={() => setShowThanksForSupportModal(false)}
        title={null}
        footer={null}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
      >
        <div className={cx("thanks-for-support-modal-content")}>
          <h3 className={cx("thanks-for-support-modal-content-title")}>
            <span role="img" aria-label="thx">
              🎉
            </span>{" "}
            Thank you for supporting Crab Network!
          </h3>
          <p className={cx("thanks-for-support-modal-content-desc")}>
            You can track the latest progress of Crab Network PLO in the following ways:
          </p>
          <div className={cx("thanks-for-support-modal-content-contact")}>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/DarwiniaNetwork"
            >
              <img alt="..." src={twitterIcon} />
            </a>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://darwinianetwork.medium.com/"
            >
              <img alt="..." src={mediumIcon} />
            </a>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/DarwiniaNetwork"
            >
              <img alt="..." src={telegramIcon} />
            </a>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.com/channels/456092011347443723/795384466930663434"
            >
              <img alt="..." src={discordIcon} />
            </a>
          </div>
        </div>
      </Modal>

      <ConnectionFailedModal
        showConnectionFailedModal={showConnectionFailedModal}
        onCancel={() => setShowConnectionFailedModal(false)}
      />
    </div>
  );
};

export default PloContribute;
