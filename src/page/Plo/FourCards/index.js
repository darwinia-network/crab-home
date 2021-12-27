import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import icon01 from "./img/icon-01.png";
import icon02 from "./img/icon-02.png";
import icon03 from "./img/icon-03.png";
import icon04 from "./img/icon-04.png";

const cx = classNames.bind(styles);

const FourCards = () => {
  return (
    <Container>
      <div className={cx("main")}>
        <div className={cx("card")}>
          <img alt="..." src={icon01} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Referral Program</h5>
            <p className={cx("card-content-desc")}>
              Contributions made through your referral link will reward you and your friend with an extra 5% each.
              <br />
              <br />
              Top 10 referrers will receive an additional 1-3% boost to raise your referral reward up to 8%.
            </p>
            <div className={cx("card-content-tabs")}>
              <div className={cx("tab")}>
                <span>Top 1: 8%+</span>
              </div>
              <div className={cx("tab")}>
                <span>Top 2-5: 7%+</span>
              </div>
              <div className={cx("tab")}>
                <span>Top 6-10: 6%+</span>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("card")}>
          <img alt="..." src={icon02} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Contribution Pioneers</h5>
            <p className={cx("card-content-desc")}>
              Before the second round auction starts, supporters contributing more than 10,000 DOT (third-party
              exchanges or PLO aggregators are not eligible) and ranking top 5 will share the 1 BTC reward
              proportionally. BTC reward will be released immediately.
            </p>
          </div>
        </div>

        <div className={cx("card")}>
          <img alt="..." src={icon03} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Metaverse NFT Package</h5>
            <p className={cx("card-content-desc")}>
              You can get a{" "}
              <a rel="noopener noreferrer" target="_blank" href="https://www.evolution.land/">
                Evolution Land
              </a>{" "}
              Metaverse NFT Package, including Land, Apostle, Drills and treasure boxes, when your contribution share
              greater or equal 10 DOT, and you will have a chance to get a limited edition commemorative NFT in the
              Package.
              <br />
              <br />
              The package will be awarded immediately after the second round auction is terminated regardless of whether
              Darwinia Network wins the slot auction or not.
            </p>
          </div>
        </div>

        <div className={cx("card")}>
          <img alt="..." src={icon04} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Early Bird</h5>
            <p className={cx("card-content-desc")}>
              You can start to contribute when Darwinia Crowdloan is active before the second-round auction starts. We
              include action time factors in our reward calculation algorithm. You can earn up to an extra 20% reward if
              you contribute earlier.
            </p>
            <a
              className={cx("card-content-btn")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://darwinianetwork.medium.com/support-darwinia-while-investing-in-the-next-generation-infrastructure-for-the-web3-0-metaverse-aaf3defb234a"
            >
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(FourCards);
