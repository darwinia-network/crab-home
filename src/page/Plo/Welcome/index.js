import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import crab from "./img/crab.png";
import contribute from "./img/contribute.png";
import kusama from "./img/kusama.png";
import timeline from "./img/timeline.png";
import kusamaBg from "./img/kusama-bg.png";

const cx = classNames.bind(styles);

const intros = [
  {
    img: kusama,
    title: "What is Crowdloan？",
    text: "Understand Kusama Parachain Auction and Crab Crowdloan.",
  },
  {
    img: contribute,
    title: "Contribute to Crab Crowdloan",
    text:
      "Unlock 200,000,000 CRAB and 8,000 CKTON bonus, also BTC and Metaverse NFT Package waiting for you.",
  },
  {
    img: timeline,
    title: "Timeline",
    text: "Track key events across the crowdloan lifespan.",
  },
];

const Welcome = () => {
  return (
    <Container>
      <div className={cx("main")}>
        <img alt="..." src={crab} className={cx("bridge")} />

        <div>
          <h2 className={cx("title-h2")}>
            Support <span>Crab</span>, invest in the next generation of Web3.0
            Metaverse
          </h2>
          <p className={cx("desc")}>
            Crab Network is bridging heterogeneous chains to build the Web3.0
            Metaverse.
          </p>
          <div className={cx("link-wrap")}>
            <Link className={cx("join-our-crowdloan-link")} to="plo_contribute">
              <span>Join our crowdloan</span>
            </Link>
            <a
              className={cx("learn-more-link")}
              href="https://darwinianetwork.medium.com/guide-to-participate-in-the-crab-plo-e9b145bed4c9"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </div>

      <div className={cx("intro")}>
        {intros.map((item, index) => (
          <div key={index}>
            <img alt="..." src={item.img} />
            <div>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={cx("main-border")} id="crowdloan-section">
        <div className={cx("intro-kusama")}>
          <img alt="..." src={kusamaBg} />
          <div>
            <h5>What is Kusama Parachain Auction?</h5>
            <p>
              Kusama Network facilitates parachain auction, through which
              projects bid for limited slots to connect to the Kusama hub.
            </p>
          </div>

          <div>
            <h5>What is the Crowdloan?</h5>
            <p>
              Users can lock their KSM tokens in the crowdloan smart contract
              hosted on the Kusama Network to signal their support for projects
              such as Crab Network. Users' funds are safe, and they receive
              rewards from the project.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Welcome);
