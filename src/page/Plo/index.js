import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import Footer from "../../components/footer";

import Header from "./Header";
import Welcome from "./Welcome";
import Work from "./Work";
import Contribute from "./Contribute";
import FourCards from "./FourCards";
import Timeline from "./Timeline";
import FAQs from "./FAQs";
import Waitlist from "./Waitlist";
import { Container } from "react-bootstrap";
import crabBg from "./img/Desktop0015 2.png";

const cx = classNames.bind(styles);

const PloPage = () => {
  return (
    <div className={cx("main")}>
      <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
        <Header />
      </Fade>

      <Fade bottom fraction={0.2} duration={1500} distance={"50px"}>
        <Welcome />
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
        <Timeline />
      </Fade>

      <Container fluid className={cx("wrapper")}>
        <img alt="..." src={crabBg} className="d-md-block d-none" />
        <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
          <FAQs />
        </Fade>

        <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
          <Waitlist />
        </Fade>

        <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
          <p className={cx("footer-allright")}>Copyright@2021 Crab Network</p>
        </Fade>
      </Container>

      <Fade bottom fraction={0.2} duration={1000} distance={"50px"}>
        <Footer classList="bg-dark" />
      </Fade>
    </div>
  );
};

export default React.memo(PloPage);
