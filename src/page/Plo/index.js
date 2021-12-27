import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import Header from "./Header";
import Welcome from "./Welcome";
import Channels from "./Channels";
import Crowloan from "./Crowloan";
import Auction from "./Auction";
import Work from "./Work";
import Contribute from "./Contribute";
import FourCards from "./FourCards";
import Timeline from "./Timeline";
import FAQs from "./FAQs";
import Waitlist from "./Waitlist";

import magic03 from "./img/magic-03.png";
import magic04 from "./img/magic-04.png";
import magic05 from "./img/magic-05.png";

const cx = classNames.bind(styles);

const PloPage = () => {
  return (
    <div className={cx("main")}>
      <div className={cx("magic-01")} />
      <div className={cx("magic-02")} />
      <img className={cx("magic-03")} alt="..." src={magic03} />
      <img className={cx("magic-04")} alt="..." src={magic04} />
      <img className={cx("magic-05")} alt="..." src={magic05} />

      <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
        <Header />
      </Fade>

      <Fade bottom fraction={0.2} duration={1500} distance={"50px"}>
        <Welcome />
      </Fade>

      <Fade bottom fraction={0.2} duration={1600} distance={"50px"}>
        <Channels />
      </Fade>

      <Fade bottom fraction={0.2} duration={1600} distance={"50px"}>
        <Crowloan />
      </Fade>

      <Fade bottom fraction={0.2} duration={1600} distance={"50px"}>
        <Auction />
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <Work />
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <Contribute />
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <FourCards />
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <div className={cx("contribute-now")}>
          <Link className={cx("join-our-crowdloan-link")} to="plo_contribute">
            <span>Contribute now</span>
          </Link>
        </div>
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <Timeline />
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <FAQs />
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <Waitlist />
      </Fade>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <p className={cx("footer-allright")}>Copyright@2021 Darwinia Network</p>
      </Fade>
    </div>
  );
};

export default React.memo(PloPage);
