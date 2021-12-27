import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import bridge from "./img/bridge.jpeg";

const cx = classNames.bind(styles);

const Auction = () => {
  return (
    <Container>
      <div className={cx("main")} id="crowdloan-section">
        <div className={cx("content")}>
          <div className={cx("part")}>
            <h5 className={cx("title")}>What is Polkadot Parachain Auction?</h5>
            <p className={cx("desc")}>
              Polkadot Network facilitates parachain auction, through which projects bid for limited slots to connect to
              the Polkadot hub.
            </p>
          </div>

          <div className={cx("part")}>
            <h5 className={cx("title")}>What is the Crowdloan?</h5>
            <p className={cx("desc")}>
              Users can lock their DOT tokens in the crowdloan smart contract hosted on the Polkadot Network to signal
              their support for projects such as Darwinia Network. Users' funds are safe, and they receive rewards from
              the project.
            </p>
          </div>
        </div>
        <img alt="..." src={bridge} className={cx("icon")} />
      </div>
    </Container>
  );
};

export default React.memo(Auction);
