import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import what from "./img/what.png";
import contribute from "./img/contribute.png";
import timeline from "./img/timeline.png";

const cx = classNames.bind(styles);

const Card = ({ icon, title, describe, link }) => {
  return (
    <div className={cx("card-main")}>
      <img alt="..." src={icon} className={cx("card-main-icon")} />
      <a className={cx("card-main-title")} href={link}>
        {title}
      </a>
      <p className={cx("card-main-desc")}>{describe}</p>
    </div>
  );
};

const Crowloan = () => {
  const cardData = [
    {
      icon: what,
      title: "What is Crowdloan？",
      describe: "Darwinia Network is bridging heterogeneous chains to build the Web3.0 Metaverse.",
      link: "#crowdloan-section",
    },
    {
      icon: contribute,
      title: "Contribute to Darwinia Crowdloan",
      describe:
        "Unlock 200,000,000 RING and 8,000 KTON bonus, also BTC and Metaverse limited edition commemorative NFT waiting for you.",
      link: "#contribute-section",
    },
    {
      icon: timeline,
      title: "Timeline",
      describe: "Track key events across the crowdloan lifespan.",
      link: "#timeline-section",
    },
  ];

  return (
    <Container>
      <div className={cx("main")}>
        {cardData.map((data, index) => (
          <Card key={index} icon={data.icon} title={data.title} describe={data.describe} link={data.link} />
        ))}
      </div>
    </Container>
  );
};

export default React.memo(Crowloan);
