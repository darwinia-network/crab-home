import { Modal } from "antd";
import modalCloseIcon from "../img/modal-close.png";
import React from "react";
import classNames from "classnames/bind";
import styles from "../styles.module.scss";

import polkadotjsIcon from "../img/polkadot-js.svg";

const cx = classNames.bind(styles);

const ConnectionFailedModal = ({ showConnectionFailedModal = false, onCancel = () => {} }) => {
  return (
    <Modal
      className={cx("connection-failed-modal")}
      centered
      visible={showConnectionFailedModal}
      footer={null}
      title="Connection failed"
      closable={true}
      closeIcon={<img alt="..." src={modalCloseIcon} />}
      onCancel={onCancel}
      width={600}
    >
      <div>
        <div className={cx("connection-tips")}>
          <span className={cx("tip")}>
            {"No polkadot{.js} extension found, please install first. Tutorial refers "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://darwinianetwork.medium.com/guide-to-participate-in-the-darwinia-plo-e14b1718787f "
            >
              {"here"}
            </a>
            {"."}
          </span>
          <span className={cx("tip")}>{"Or contribute via other ways :"}</span>
        </div>
        <div className={cx("apps-container")}>
          <div className={cx("app")}>
            <img src={polkadotjsIcon} alt={"polkadotjs"} className={cx("icon")} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan"}
            >
              {"Polkadot.js"}
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(ConnectionFailedModal);
