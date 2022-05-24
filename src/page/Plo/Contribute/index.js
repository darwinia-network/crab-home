import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import btc from "./img/btc.png";
import kton from "./img/kton.png";
import ring from "./img/ring.png";
import packageIcon from "./img/package.png";

const cx = classNames.bind(styles);

const Contribute = () => {
  return (
    <Container>
      <div className={cx("main")} id="contribute-section">
        <h3 className={cx("title")}>Contribute to Crab Crowdloan</h3>
        <h5 className={cx("sub-title")}>
          Contribute your KSM, unlock 200,000,000 CRAB and 8,000 CKTON bonus, also BTC and Metaverse NFT Package waiting
          for you.
        </h5>

        <div className={cx("content")}>
          <div className={cx("item")}>
            <img alt="..." src={btc} />
            <h5 className={cx("item-title")}>BTC Rewards</h5>
            <p className={cx("item-desc")}>
              1 BTC will be released among the top 5 contribution pioneers who contributed greater than 1,000 KSM
              immediately after the ending period starts of the first slot of the batch 5 auction regardless of whether
              Crab Network wins the slot auction or not.
            </p>
          </div>

          <div className={cx("item")}>
            <img alt="..." src={ring} />
            <h5 className={cx("item-title")}>200,000,000 CRAB</h5>
            <p className={cx("item-desc")}>
              CRAB is Crab Network native token, and 10% CRAB rewards will be immediately released after Crab Network
              wins the auction, and the other 90% CRAB rewards will be linearly released.
            </p>
          </div>

          <div className={cx("item")}>
            <img alt="..." src={kton} />
            <h5 className={cx("item-title")}>8,000 CKTON</h5>
            <p className={cx("item-desc")}>
              CKTON is the commitment token of Crab Network. 8,000 CKTON prize pool will be linearly rewarded after Crab
              Network wins the auction.
            </p>
          </div>

          <div className={cx("item")}>
            <img alt="..." src={packageIcon} />
            <h5 className={cx("item-title")}>Metaverse NFT Package</h5>
            <p className={cx("item-desc")}>
              The package will be awarded immediately after the batch 5 auction is terminated regardless of whether Crab
              Network wins the slot auction or not.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Contribute);
