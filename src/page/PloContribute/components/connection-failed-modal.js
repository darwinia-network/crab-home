import { Modal } from "antd";
import modalCloseIcon from "../img/modal-close.png";
import React from "react";
import classNames from "classnames/bind";
import styles from "../styles.module.scss";

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
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(ConnectionFailedModal);
