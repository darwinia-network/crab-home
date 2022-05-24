import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import icon01 from "./img/icon1.png";
import icon02 from "./img/icon2.png";
import icon03 from "./img/icon3.png";
import icon04 from "./img/icon4.png";

const cx = classNames.bind(styles);

const FourCards = () => {
  return (
    <Container data-aos="fade-up" data-aos-duration="500">
      <div className={cx("main")}>
        <div className={cx("card")}>
          <img alt="..." src={icon01} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Referral Program</h5>
            <p className={cx("card-content-desc")}>
              Contributions made through your referral link will reward your and your friend with an extra 5% each.
              <br />
              <br />
              Top 10 referrers will receive an additional 1-3% boost to raise your referral reward up to 8%.
            </p>
            <div className={cx("card-content-tabs")}>
              <div className={cx("tab")}>
                <span>Top 1: +8%</span>
              </div>
              <div className={cx("tab")}>
                <span>Top 2-5: +7%</span>
              </div>
              <div className={cx("tab")}>
                <span>Top 6-10: +6%</span>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("card")}>
          <img alt="..." src={icon02} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Contribution Pioneers</h5>
            <p className={cx("card-content-desc")}>
              Before the ending period starts of the first slot of the batch 5 auction, supporters contributing more
              than 1,000 KSM (third-party exchanges or PLO aggregators are not eligible) and ranking top 5 will share
              the 1 BTC reward proportionally. BTC reward will be released immediately.
            </p>
          </div>
        </div>

        <div className={cx("card")}>
          <img alt="..." src={icon03} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Metaverse NFT Package</h5>
            <p className={cx("card-content-desc")}>
              You can get an{" "}
              <a rel="noopener noreferrer" target="_blank" href="https://www.evolution.land/">
                Evolution Land{" "}
              </a>
              Metaverse NFT Package, including Land, Apostle, Drills, and treasure boxes, when your contribution share
              is greater or equal to 1 KSM.
              <br />
              <br />
              The package will be awarded immediately after the batch 5 auction is terminated regardless of whether Crab
              Network wins the slot auction or not.
            </p>
          </div>
        </div>

        <div className={cx("card")}>
          <img alt="..." src={icon04} className={cx("card-icon")} />
          <div className={cx("card-content")}>
            <h5 className={cx("card-content-title")}>Early Bird</h5>
            <p className={cx("card-content-desc")}>
              You can start to contribute when Crab Crowdloan is active. We include action time factors in our reward
              calculation algorithm. You can earn up to an extra 20% reward if you contribute earlier.
            </p>
            <a
              className={cx("card-content-btn", "lift")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://darwinianetwork.medium.com/support-crab-while-investing-in-the-next-generation-infrastructure-for-the-web3-0-metaverse-d194ff902f6d"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FourCards;
