import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import icon01 from "./img/icon-01.png";
import icon02 from "./img/icon-02.png";
import icon03 from "./img/icon-03.png";

const cx = classNames.bind(styles);

const Item = ({ icon, title, describe }) => {
  return (
    <div className={cx("item")}>
      <img alt="..." className={cx("item-icon")} src={icon} />
      <h5 className={cx("item-title")}>{title}</h5>
      <p className={cx("item-desc")}>{describe}</p>
    </div>
  );
};

const Work = () => {
  const itemData = [
    {
      icon: icon01,
      title: "Preparation",
      describe:
        "The KSM used for participation must be unbonded, that is, not locked for any reason (including staking, vesting, and governance). You need to unbond your KSM before the crowdloan.",
    },
    {
      icon: icon02,
      title: "Contribution",
      describe:
        "Stake your KSM token through this webpage or partner exchange. Your needed KSM token should be stored either in a non-custodial (non-exchange) address or through a partner exchange.",
    },
    {
      icon: icon03,
      title: "Rewards",
      describe:
        "Enjoy the high return of CRAB and CKTON tokens, paid as a percentage of your contribution to the pool, and regularly distributed to your wallet, also BTC and Metaverse NFT Package waiting for you.",
    },
  ];

  return (
    <Container fluid className={cx("wrapper")}>
      <Container>
        <div className={cx("main")}>
          <h3 className={cx("title")}>How does a Parachain Crowdloan work?</h3>
          <div className={cx("item-container")}>
            {itemData.map((data, index) => (
              <Item
                key={index}
                icon={data.icon}
                title={data.title}
                describe={data.describe}
              />
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default React.memo(Work);
