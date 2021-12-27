import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Collapse } from "antd";

const cx = classNames.bind(styles);

const FAQs = () => {
  return (
    <Container>
      <div className={cx("main")} id="faqs-section">
        <h3 className={cx("title")}>FAQs</h3>
        <p className={cx("title-desc")}>
          We will continue to update the questions here.
          <br />
          If you don’t find the question or answer you want, you can send an email to{" "}
          <a target="_blank" rel="noopener noreferrer" href="mailto:hello@darwinia.network">
            hello@darwinia.network
          </a>
          .
        </p>

        <Collapse expandIconPosition="right" accordion bordered ghost className={cx("faqs-collapse")}>
          <Collapse.Panel header="When will the Polkadot parachain auction start?" key="1">
            <p className={cx("content-text")}>
              <a rel="noopener noreferrer" target="_blank" href="https://polkadot.polkassembly.io/referendum/39">
                Referendum #39
              </a>{" "}
              consisting of 2 batch calls has been triggered to begin auctions on November 11th, 2021. The Polkadot's
              first-round parachain auction will start from 11th Nov to 16th, and the second-round parachain auction
              will start from 23rd Dec to 30th. For detailed information please refer to{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://polkadot.network/blog/polkadot-is-ready-for-parachains/"
              >
                Polkadot's blog
              </a>
              .
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="Can I contribute to the Darwinia crowdloan before the auction starts?" key="2">
            <p className={cx("content-text")}>
              Definitely, the crowdloan module will be enabled before the parachain auction starts. In the meantime, we
              use a reward multiplier: the rate of return reaches the maximum when the auction is first started, and
              continues to decline as the auction.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="How can I contribute my DOT?" key="3">
            <p className={cx("content-text")}>
              Once the crowdloan module is enabled on the Polkadot, we will release the crowdloan entrance. You can
              contribute your DOT on this page or go to the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot.api.onfinality.io%2Fpublic-ws#/parachains/crowdloan"
              >{`Polkadot{.js}`}</a>{" "}
              app to finish contributing your DOT. In the meantime, cooperating exchanges will be good destinations to
              contribute your DOT too.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="Is my DOTs safe?" key="4">
            <p className={cx("content-text")}>
              Yes. Your DOTs will not leave your wallet and it will be locked in the crowdloan module of Polkadot
              network.
            </p>
          </Collapse.Panel>
        </Collapse>
      </div>
    </Container>
  );
};

export default React.memo(FAQs);
