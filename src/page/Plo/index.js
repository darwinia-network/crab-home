import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
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
    <>
      <Header />
      <Welcome />
      <Work />
      <Contribute />
      <FourCards />
      <Timeline />

      <Container fluid className={cx("wrapper")}>
        <img alt="..." src={crabBg} className="d-md-block d-none" />
        <FAQs />
        <Waitlist />
        <p className={cx("footer-allright")}>Copyright@2021 Crab Network</p>
      </Container>

      <Footer classList="bg-dark" />
    </>
  );
};

export default React.memo(PloPage);
