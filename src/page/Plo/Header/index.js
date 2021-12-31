import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import logo from "./img/logo-crab-plo.png";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <Container>
      <div className={cx("main")}>
        <div className={cx("left")}>
          <Link to="/">
            <img alt="..." src={logo} className={cx("logo")} />
          </Link>
        </div>
        <div className={cx("right")}>
          <a className={cx("link")} href="#crowdloan-section">
            Crowdloan
          </a>
          <a className={cx("link")} href="#contribute-section">
            Support
          </a>
          <a className={cx("link")} href="#timeline-section">
            Timeline
          </a>
          <a className={cx("link")} href="#faqs-section">
            FAQs
          </a>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Header);
