import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { isMobile } from "../../utils";

import icon01 from "./img/icon-01.png";
import mobileIcon from "./img/mobile-icon.png";
import closeIcon from "./img/close-icon.png";

const cx = classNames.bind(styles);

const MobileModal = () => {
  const [visible, setVisible] = useState(false);

  const handleClickClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    isMobile() && setVisible(true);
  }, []);

  return (
    <Modal
      visible={visible}
      footer={null}
      closeIcon={<img alt="..." src={closeIcon} style={{ width: "40px" }} />}
      onCancel={handleClickClose}
    >
      <div className={cx("mobile-main")}>
        <img alt="..." src={mobileIcon} className={cx("banner-logo")} />
        <div className={cx("banner-content")} style={{
          maxWidth: '100%',
        }}>
          <h5
            className={cx("title")}
            style={{
              color: "#1e3676",
              whiteSpace: 'normal'
            }}
          >
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            Crab Network will Connect with the Kusama Network as the 22nd Parachain Slot.
          </h5>
          <p
            className={cx("desc")}
            style={{
              color: "#555",
            }}
          >
            Thanks to all contributors for your support! Crab parachain successfully connected to Kusama relaychain, and the Crab parachain collators are working smoothly.
          </p>
        </div>
        <Link className={cx("join-our-crowdloan-link")} to="plo">
          <span>Crowdloan details</span>
        </Link>
      </div>
    </Modal>
  );
};

const PloBanner = () => {
  return (
    <>
      <MobileModal className={cx("mobile-modal")} />

      <Container className={cx("main")} fluid>
        <Container className={cx("main")}>
          <img alt="..." src={icon01} className={cx("banner-logo")} />
          <div className={cx("banner-content")}>
            <h5 className={cx("title")}>
              <span role="img" aria-label="fire">
                🔥
              </span>{" "}
              Crab Network has won the 22nd Kusama parachain slot!
            </h5>
            <p className={cx("desc")}>
            Thanks to all contributors for your support! Crab parachain successfully connected to Kusama relaychain, and the Crab parachain collators are working smoothly.
            </p>
          </div>
          <Link className={cx("banner-link")} to="plo">
            <span>Crowdloan details</span>
          </Link>
        </Container>
      </Container>
    </>
  );
};

export default React.memo(PloBanner);
