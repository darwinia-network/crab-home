import { Collapse } from "antd";
import classNames from "classnames/bind";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const FAQs = () => {
  return (
    <Container>
      <div className={cx("main")} id="faqs-section">
        <h3 className={cx("title")}>FAQs</h3>
        <p className={cx("title-desc")}>
          We will continue to update the questions here.
          <br />
          If you don’t find the question or answer you want, you can send an
          email to{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:hello@darwinia.network"
          >
            hello@darwinia.network
          </a>
          .
        </p>

        <Collapse
          expandIconPosition="right"
          accordion
          bordered
          ghost
          className={cx("faqs-collapse")}
        >
          <Collapse.Panel
            header={
              <div style={{ color: "#1e3676" }}>
                When will the batch 5 Kusama parachain auction start?
              </div>
            }
            key="1"
          >
            <p className={cx("content-text")}>
              The batch 5 Kusama parachain auction will start on block
              #10,887,000, and Crab Network will participate in this batch 5
              Kusama slot auction.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div style={{ color: "#1e3676" }}>
                Can I contribute to the Crab crowdloan before the auction
                starts?
              </div>
            }
            key="2"
          >
            <p className={cx("content-text")}>
              Definitely, the crowdloan module will be enabled before the
              parachain auction starts. In the meantime, we use a reward
              multiplier: the rate of return reaches the maximum when the
              auction is first started, and continues to decline as the auction.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div style={{ color: "#1e3676" }}>
                How can i contribute my KSM?
              </div>
            }
            key="3"
          >
            <p className={cx("content-text")}>
              We will release the crowdloan entrance soon. You can contribute
              your KSM on this page or go to the{" "}
              <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpub.elara.patract.io%2Fkusama#/parachains/crowdloadn">
                polkadot {"{.js}"}
              </a>{" "}
              app to finish contributing your KSM. In the meantime, cooperating
              exchanges will be good destinations to contribute your KSM too.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={<div style={{ color: "#1e3676" }}>Is my KSM safe?</div>}
            key="4"
          >
            <p className={cx("content-text")}>
              Yes. Your KSM will not leave your wallet and it will be locked in
              the crowdloan module of the Kusama network.
            </p>
          </Collapse.Panel>
        </Collapse>
      </div>
    </Container>
  );
};

export default React.memo(FAQs);
