import { Modal } from "antd";
import modalCloseIcon from "../img/modal-close.png";
import React from "react";
import classNames from "classnames/bind";
import styles from "../styles.module.scss";

import bifrostIcon from "../img/apps/bifrost.svg";
import parallelIcon from "../img/apps/parallel-heiko.svg";
import equilibriumIcon from "../img/apps/equilibrium.svg";
import huobiIcon from "../img/apps/huobi.svg";
import gateioIcon from "../img/apps/gate-io.svg";
import bigoneIcon from "../img/apps/bigone.svg";
import polkadotjsIcon from "../img/apps/polkadot-js.svg";
import mathWalletIcon from "../img/apps/math-wallet.svg";

const cx = classNames.bind(styles);

const apps = [
  { name: "Bifrost", url: "https://bifrost.app/vcrowdloan", icon: bifrostIcon },
  {
    name: "Parallel Heiko",
    url: "https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2003",
    icon: parallelIcon,
  },
  { name: "Equilibrium", url: "https://xdot.equilibrium.io/en/contribute?p=Darwinia", icon: equilibriumIcon },
  { name: "Huobi", url: "https://www.huobi.com/en-us/topic/dot-slot/", icon: huobiIcon },
  { name: "Gate.io", url: "https://www.gate.io/slot_auction", icon: gateioIcon },
  { name: "BigONE", url: "https://big.one/tw/activity/flow/dot ", icon: bigoneIcon },
  {
    name: "Polkadot.js",
    url: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan",
    icon: polkadotjsIcon,
  },
  { name: "Math Wallet", url: "https://cloud.mathwallet.org/#/auction ", icon: mathWalletIcon },
];

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
          {apps.map((app) => (
            <div key={app.name} className={cx("app")}>
              <img src={app.icon} alt={app.name} className={cx("icon")} />
              <a target="_blank" rel="noopener noreferrer" href={app.url}>
                {app.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(ConnectionFailedModal);
