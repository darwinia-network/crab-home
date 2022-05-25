import { web3FromAddress } from "@polkadot/extension-dapp";
import { message, Modal, Tooltip, Typography, Spin } from "antd";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useApi } from "../hooks";
import infoIcon from "../img/info-icon.png";
import modalCloseIcon from "../img/modal-close.png";
import styles from "../styles.module.scss";
import btcTop5 from "../top5.json";

const cx = classNames.bind(styles);
const { Paragraph, Title } = Typography;
const key = "REWARDED_ACCOUNTS";

function BTCReward({ currentAccount }) {
  const [visible, setVisible] = useState(0);
  const [checked, setChecked] = useState(false);
  const [address, setAddress] = useState("");
  const { api } = useApi();
  const [isReward, setIsReward] = useState(false);

  const target = currentAccount ? btcTop5.find(({ address }) => address === currentAccount.address) : null;
  const contributeAmount = target ? target.amount : 0;

  const claim = async () => {
    const mark = `BTC rewards for Crab Crowdloan: ${
      target.reward
    } BTC; Reward receiving address: ${address}; KSM contribution amount: ${target && target.amount}`;
    const injector = await web3FromAddress(currentAccount.address);

    api.setSigner(injector.signer);

    try {
      message.info("Please sign and send the transaction in Polkadot extension");

      const unsubscribe = await api.tx.system.remark(mark).signAndSend(currentAccount.address, async (result) => {
        if (!result || !result.status) {
          return;
        }

        message.info("Extrinsic processing");

        if (result.status.isFinalized || result.status.isInBlock) {
          unsubscribe();

          result.events
            .filter(({ event: { section } }) => section === "system")
            .forEach((res) => {
              const {
                event: { method },
              } = res;

              if (method === "ExtrinsicFailed") {
                message.error("Extrinsic failed");
              } else if (method === "ExtrinsicSuccess") {
                message.success("Extrinsic success");

                const data = localStorage.getItem(key);
                const list = JSON.parse(data || "[]");

                localStorage.setItem(key, JSON.stringify([...list, currentAccount.address]));

                setVisible(2);
              }
            });
        }

        if (result.isError) {
          message.error("Extrinsic Failed");
        }
      });
    } catch (err) {
      message.error("Extrinsic Failed");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!currentAccount) {
      return;
    }

    const data = localStorage.getItem(key);
    const list = JSON.parse(data || "[]");

    setIsReward(list.includes(currentAccount.address));
  });

  return (
    <>
      <div className={cx("contribute-info-item")}>
        <div className={cx("contribute-info-item-title-wrap")}>
          <span className={cx("contribute-info-item-title")}>BTC Rewards</span>
          <Tooltip
            overlayClassName="tooltip-overlay"
            overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
            color="white"
            placement="rightTop"
            trigger={["click", "hover"]}
            title={
              <p className={cx("tips")}>
                BTC rewards are dynamic.
                <br />
                <br />
                At the ending period starts of the first slot of the batch 5 auction, supporters who have contributed
                more than 1,000 KSM and the top 5 people (exclude the Exchange address) ranking will distribute 1 BTC in
                proportion to their contribution.
                <br />
                <br />1 BTC will be released immediately regardless of whether Crab Network wins the slot auction or
                not.
              </p>
            }
          >
            <img alt="..." src={infoIcon} className={cx("info-icon")} />
          </Tooltip>
        </div>
        <div className={cx("current-tag")}>
          <span>Current</span>
        </div>
        <span className={cx("contribute-info-item-value")}>{contributeAmount}</span>
        <button className={cx("claim-reward-btn", "lift")} disabled={!target || isReward} onClick={() => setVisible(1)}>
            <Spin wrapperClassName={cx("metaverse-nft-modal-ok-btn-spin")} spinning={!!visible}>
              <span className={cx("claim-reward-btn-text")}>Claim</span>
            </Spin>
        </button>
      </div>

      <Modal
        visible={visible === 1}
        title={
          <Title level={5} style={{ textAlign: "center" }}>
            Claim BTC
          </Title>
        }
        closeIcon={<img alt="..." src={modalCloseIcon} onClick={() => setVisible(0)} />}
        className={cx("btc-reward-modal")}
        footer={null}
      >
        <Form noValidate>
          <ul>
            <li>
              <Paragraph>The BTC is sent as a reward for your support of Crab Network Crowdloan.</Paragraph>
            </li>

            <li>
              <Paragraph>You need to fill in the correct BTC receiving address.</Paragraph>
            </li>

            <li>
              <Paragraph>The reward will be distributed within a month after the second auction starts.</Paragraph>
            </li>
            <li>
              <Paragraph>
                Please feel free to contact us through "hello@darwinia.network" if you have any question.
              </Paragraph>
            </li>
            <li style={{ listStyle: "none" }}>
              <Paragraph>
                Please fill in the BTC address starts with "3", this is the address format of Nested SegWit(P2SH). If
                you choose an unsupported network or incompatible assets, your funds may not be recovered.
              </Paragraph>
            </li>
          </ul>
          <Form.Group>
            <Form.Check
              required
              feedback="You must agree before submitting"
              type="checkbox"
              onChange={() => {
                setChecked(!checked);
              }}
              isInvalid={!checked}
              label="I accept and continue to claim"
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Control
              required
              isInvalid={!address}
              placeholder="Please enter your BTC receiving address"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">You must enter a BTC address</Form.Control.Feedback>
          </Form.Group>

          <Button
            onClick={async () => {
              if (!checked) {
                message.error("You must accept then continue!");
                return;
              }

              if (!address.startsWith("3")) {
                message.error("You must enter a BTC address!");
                return;
              }

              await claim();
            }}
            className="submit-btn"
          >
            I accept and claim
          </Button>
        </Form>
      </Modal>

      <Modal
        visible={visible === 2}
        title={
          <Title level={5} style={{ textAlign: "center" }}>
            Copy that!
          </Title>
        }
        closeIcon={<img alt="..." src={modalCloseIcon} onClick={() => setVisible(0)} />}
        className={cx("btc-reward-modal")}
        footer={null}
      >
        <ul>
          <li>
            <Paragraph>The reward will be distributed within a month after the second auction starts.</Paragraph>
          </li>

          <li>
            <Paragraph>
              Please feel free to contact us through "hello@darwinia.network" if you have any question.
            </Paragraph>
          </li>
        </ul>

        <Button
          onClick={() => {
            setVisible(0);
          }}
          className="submit-btn"
          style={{ width: "50%", marginLeft: "25%" }}
        >
          Ok
        </Button>
      </Modal>
    </>
  );
}

export default React.memo(BTCReward);
