import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import bifrostIcon from "./img/bifrost.svg";
import bigOneIcon from "./img/big-one.svg";
import parallelIcon from "./img/parallel.svg";
import mathIcon from "./img/math-wallet.svg";
import darwiniaIcon from "./img/darwinia.svg";
import plokdotIcon from "./img/polkdot.svg";
import huoBiIcon from "./img/huobi.svg";
import fearlessIcon from "./img/fearless.svg";
import equilibriumIcon from "./img/equilibrium.svg";
import gateIcon from "./img/gate-io.svg";

const cx = classNames.bind(styles);

const Icons = ({ icon, name, url, unique = false }) => {
  return (
    <a
      className={unique ? cx("icons-container-unique") : cx("icons-container")}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={name} className={cx("icon")} />
      <span>{name}</span>
    </a>
  );
};

const channelsData = [
  [
    {
      icon: bifrostIcon,
      name: "Bifrost",
      url: "https://bifrost.app/vcrowdloan",
    },
    {
      icon: bigOneIcon,
      name: "BigOne",
      url: "https://big.one/tw/activity/flow/dot",
    },
  ],
  [
    {
      icon: parallelIcon,
      name: "Parallel Heiko",
      url: "https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2003",
    },
    {
      icon: mathIcon,
      name: "Math Wallet",
      url: "https://cloud.mathwallet.org/#/auction",
    },
  ],
  [
    {
      icon: darwiniaIcon,
      name: "Darwinia PLO Tool",
      url: "https://darwinia.network/plo_contribute",
    },
  ],
  [
    {
      icon: plokdotIcon,
      name: "polkadot{.js}",
      url: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan",
    },
  ],
  [
    {
      icon: huoBiIcon,
      name: "Huobi",
      url: "https://www.huobi.com/en-us/topic/dot-slot/",
    },
    {
      icon: fearlessIcon,
      name: "Fearless Wallet",
      url: "https://fearlesswallet.io/",
    },
  ],
  [
    {
      icon: equilibriumIcon,
      name: "Equilibrium",
      url: "https://xdot.equilibrium.io/en/contribute?p=Darwinia",
    },
    {
      icon: gateIcon,
      name: "Gate.io",
      url: "https://www.gate.io/slot_auction",
    },
  ],
];

const Channels = () => {
  return (
    <Container>
      <div className={cx("main")}>
        <div className={cx("card-main")}>
          <div className={cx("card-main-title")}>Contribute via channels below</div>
          <div className={cx("card-main-icons")}>
            {channelsData.map((item) => {
              const unique = item.length === 1;
              return (
                <div className={unique ? cx("channels-unique") : cx("channels")} key={item[0].name}>
                  {item.map((data) => (
                    <Icons icon={data.icon} name={data.name} url={data.url} unique={unique} key={data.name} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Channels);
