import modalCloseIcon from "../img/modal-close.png";
import twitterIcon from "../img/twitter.png";
import mediumIcon from "../img/medium.png";
import telegramIcon from "../img/telegram.png";
import discordIcon from "../img/discord.png";
import { Modal } from "antd";
import React from "react";
import classNames from "classnames/bind";
import styles from "../styles.module.scss";

const cx = classNames.bind(styles);

const ThanksModal = ({ showThanksForSupportModal = false, onCancel = () => {} }) => {
  return (
    <Modal
      className={cx("thanks-for-support-modal")}
      visible={showThanksForSupportModal}
      onCancel={onCancel}
      title={null}
      width={600}
      footer={null}
      closeIcon={<img alt="..." src={modalCloseIcon} />}
      centered
    >
      <div className={cx("thanks-for-support-modal-content")}>
        <span role="img" aria-label="thx" className={cx("icon")}>
          🎉
        </span>
        <h3 className={cx("thanks-for-support-modal-content-title")}>Thank you for supporting Crab Network!</h3>
        <p className={cx("thanks-for-support-modal-content-desc")}>
          You can track the latest progress of Crab Network PLO in the following ways:
        </p>
        <div className={cx("thanks-for-support-modal-content-contact")}>
          <a
            className={cx("thanks-for-support-modal-content-contact-item")}
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/DarwiniaNetwork"
          >
            <img alt="..." src={twitterIcon} />
          </a>
          <a
            className={cx("thanks-for-support-modal-content-contact-item")}
            rel="noopener noreferrer"
            target="_blank"
            href="https://darwinianetwork.medium.com/"
          >
            <img alt="..." src={mediumIcon} />
          </a>
          <a
            className={cx("thanks-for-support-modal-content-contact-item")}
            rel="noopener noreferrer"
            target="_blank"
            href="https://t.me/DarwiniaNetwork"
          >
            <img alt="..." src={telegramIcon} />
          </a>
          <a
            className={cx("thanks-for-support-modal-content-contact-item")}
            rel="noopener noreferrer"
            target="_blank"
            href="https://discord.com/channels/456092011347443723/795384466930663434"
          >
            <img alt="..." src={discordIcon} />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(ThanksModal);
