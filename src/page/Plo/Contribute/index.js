import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import icon from "./img/icon.jpg";

const cx = classNames.bind(styles);

const Contribute = () => {
  return (
    <Container>
      <div className={cx("main")} id="contribute-section">
        <h3 className={cx("title")}>Contribute to Darwinia Crowdloan</h3>
        <h5 className={cx("sub-title")}>
          Contribute your DOT, unlock 200,000,000 RING and 8,000 KTON bonus, also BTC and Metaverse limited edition
          commemorative NFT waiting for you.
        </h5>

        <div className={cx("content")}>
          <div className={cx("item-wrap")}>
            <div className={cx("item")}>
              <h5 className={cx("item-title")}>BTC Rewards</h5>
              <p className={cx("item-desc")}>
                1 BTC will be released among top 5 contribution pioneers immediately after the second round auction
                starts regardless of whether Darwinia Network wins the slot auction or not.
              </p>
            </div>
            <div className={cx("item")}>
              <h5 className={cx("item-title")}>8,000 KTON</h5>
              <p className={cx("item-desc")}>
                <a href="/?lng=en#powering-the-darwinia-network">KTON</a> is the commitment token of Darwinia Network.
                8,000 KTON prize pool will be linearly rewarded after Darwinia wins the auction.
              </p>
            </div>
          </div>

          <img alt="..." className={cx("icon")} src={icon} />

          <div className={cx("item-wrap")}>
            <div className={cx("item")}>
              <h5 className={cx("item-title")}>200,000,000 RING</h5>
              <p className={cx("item-desc")}>
                <a href="/?lng=en#powering-the-darwinia-network">RING</a> is Darwinia Network native token, and 10% RING
                rewards will be immediately released after Darwinia wins the auction, and the other 90% RING rewards
                will be linearly released.
              </p>
            </div>
            <div className={cx("item")}>
              <h5 className={cx("item-title")}>Metaverse NFT Package</h5>
              <p className={cx("item-desc")}>
                The package will be awarded immediately after the second round auction is terminated regardless of
                whether Darwinia Network wins the slot auction or not.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Contribute);
