import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { ReactComponent as Blur1 } from "../../components/shapes/blurs/blur-1.svg";
import { ReactComponent as ImgClipboard } from "../../components/icons/duotone-icons/general/clipboard.svg";
import { ReactComponent as ImgFolderStar } from "../../components/icons/duotone-icons/files/folder-star.svg";

import ImgReward1 from "./img/2.png";
import ImgReward2 from "./img/3.png";
import ImgReward3 from "./img/1.png";
import PolkadotConnect from "../../components/PolkadotConnect";

import { web3FromAddress } from "@polkadot/extension-dapp";

import { Modal, Toast } from "bootstrap";
import { formatKSMBalance, inputToKSMBN } from "./utils";

const TX_FEE = inputToKSMBN(0.001);
const MIN_CONTRIBUTE = inputToKSMBN(0.1);

function Home() {
  const api = useRef(null);
  const thanksModal = useRef(null);
  const alertToast = useRef(null);

  // for thank you supporting modal
  const [contributedValue, setContributedValue] = useState("");
  const [contributedBlockHash, setContributedBlockHash] = useState("");

  const [alertMsg, setAlertMsg] = useState(""); // the message of toast alert
  const [ksmInputValue, setKsmInputValue] = useState(
    formatKSMBalance(MIN_CONTRIBUTE, false)
  ); // ksm account input and range
  const [disableContributeBtn, setDisableContributeBtn] = useState(false); // disbale click while in process
  const [accountInfoSelected, setAccountInfoSelected] = useState(null);

  // thx modal && unsub accounts
  useEffect(() => {
    alertToast.current = new Toast("#alertToast");
    thanksModal.current = new Modal("#thanksModal");
  }, []);

  const showToastMsg = (msg) => {
    setAlertMsg(msg);
    alertToast.current && alertToast.current.show();
  };

  const handleChangeOfPolkadotApi = useCallback((papi) => {
    if (!api.current && papi) {
      api.current = papi;
    }
  }, []);

  const handleSelectedOfAccountInfo = useCallback((accountInfo) => {
    if (accountInfo) {
      setAccountInfoSelected(accountInfo);
      setKsmInputValue(formatKSMBalance(MIN_CONTRIBUTE, false));
    }
  }, []);

  const handleErrorOfPolkadotConnect = useCallback((errMsg) => {
    showToastMsg(errMsg);
  }, []);

  const handleChangeOfKsmAmountInput = (e) => {
    setKsmInputValue(e.target.value);
  };

  const handleClickContribute = async () => {
    const inputKsmBN = inputToKSMBN(ksmInputValue);

    if (inputKsmBN.lt(MIN_CONTRIBUTE)) {
      showToastMsg(`Minimum ${formatKSMBalance(MIN_CONTRIBUTE.toString())}`);
      return;
    }

    setDisableContributeBtn(true);

    if (api.current && accountInfoSelected) {
      if (
        inputKsmBN.add(TX_FEE).gt(accountInfoSelected.availableBalance.toBn())
      ) {
        showToastMsg("Insufficient balance.");
        setDisableContributeBtn(false);
        return;
      }

      const paraId = 2006;
      const extrinsic = api.current.tx.crowdloan.contribute(
        paraId,
        inputKsmBN,
        null
      );
      const injector = await web3FromAddress(accountInfoSelected.address);

      // sign and send
      try {
        const unsub = await extrinsic.signAndSend(
          accountInfoSelected.address,
          { signer: injector.signer },
          ({ events = [], status }) => {
            events.forEach(({ phase, event: { data, method, section } }) => {
              console.log(`${phase}: ${section}.${method}:: ${data}`);

              if (method === "Contributed" && section === "crowdloan") {
                setContributedValue(formatKSMBalance(data[2]));
              }

              if (method === "ExtrinsicSuccess" && section === "system") {
                if (status.isInBlock) {
                  setContributedBlockHash(status.asInBlock);
                  thanksModal.current && thanksModal.current.show();
                  setDisableContributeBtn(false);
                } else if (status.isFinalized) {
                  unsub && unsub();
                }
              }

              if (method === "ExtrinsicFailed" && section === "system") {
                setDisableContributeBtn(false);
              }
            });
          }
        );
      } catch (err) {
        console.error("sign and send contribute:", err);
        setDisableContributeBtn(false);
      }
    }
  };

  return (
    <>
      <Navbar
        classList="navbar-light bg-white"
        container="container"
        button="primary"
      />

      {/*  WELCOME */}
      <section className="position-relative py-8 py-md-11 mb-9">
        {/*  Shape */}
        <div className="shape shape-fluid-x shape-blur-1 svg-shim text-gray-200">
          <Blur1 />
        </div>
        {/*  Contetn */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-md-2">
              {/*  Image */}
              <div className="img-skewed img-skewed-start mb-8 mb-md-0">
                <img
                  src="/img/screenshots/desktop/dashkit.jpg"
                  alt="..."
                  className="screenshot img-fluid mw-md-130"
                  data-aos="img-skewed-item-start"
                  data-aos-delay="100"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-1" data-aos="fade-up">
              {/*  Heading */}
              <h1 className="display-3">
                What is <br />
                <span className="text-primary">
                  Kusama Parachain Slot Auction ?
                </span>
              </h1>

              {/*  Text */}
              <p className="lead text-muted mb-6 mb-md-8">
                Join the Crab Crowdloan to help{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                  href="https://darwinia.network"
                >
                  Darwinia
                </a>{" "}
                win Kusama Parachain Slot Auction and get rich returns.
              </p>

              {/*  Buttons */}
              <a
                href="#crowdloan"
                data-scroll='{"offset": 0}'
                className="btn btn-primary me-3 lift"
              >
                Join the Crab Crowdloan{" "}
                <i className="fe fe-arrow-right ms-3"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://darwinianetwork.medium.com/darwinia-crabs-kusama-parachain-auction-strategy-3f37cbfdfe4"
                className="btn btn-primary-soft lift"
              >
                PLO Strategy
              </a>
            </div>
          </div>
          {/*  / .row */}
        </div>
        {/*  / .container */}
      </section>

      {/* KSM PLO Registration */}
      <section
        id="crowdloan"
        className="d-flex justify-content-center align-items-center mb-9"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Heading */}
              <h1>
                Support <span className="text-primary">Parachain Auction.</span>
                {/* What is a <span className="text-primary">Crowdloan?</span> */}
              </h1>

              {/* Text */}
              <p className="lead text-gray-700 mb-7 mb-md-9">
                Kusama allows parachains to raise KSMs for their parachains by
                means of decentralized Crowdloan. &nbsp;&nbsp;
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.crab.network/crab-crowdloan"
                  className="fw-bold text-decoration-none"
                >
                  Learn more <i className="fe fe-arrow-right ms-3"></i>
                </a>
              </p>
            </div>
          </div>

          <div className="d-flex flex-column py-10 px-4 px-lg-15 rounded-4 bg-gray-200">
            <PolkadotConnect
              className="mb-1"
              onApiChange={handleChangeOfPolkadotApi}
              onAccountInfoSelected={handleSelectedOfAccountInfo}
              onError={handleErrorOfPolkadotConnect}
            />

            <hr className="bg-gray-300 mb-6" />

            {/* Unlocked KSM */}
            <div className="d-inline-flex justify-content-between mb-6">
              <span>
                Unlocked KSM:{" "}
                {accountInfoSelected
                  ? formatKSMBalance(accountInfoSelected.availableBalance)
                  : null}
              </span>
              <a
                href="https://docs.crab.network/crab-crowdloan-howto-unstaking"
                target="_blank"
                rel="noreferrer noopener"
              >
                Unstake more KSM
              </a>
            </div>

            {/* Input contribute amount */}
            <div className="mb-6">
              <form>
                <div className="input-group">
                  <input
                    type="number"
                    id="contributeAmount"
                    aria-describedby="amountHelp"
                    className={`form-control ${
                      accountInfoSelected ? "" : "bg-gray-300"
                    }`}
                    value={ksmInputValue}
                    onChange={handleChangeOfKsmAmountInput}
                    disabled={accountInfoSelected === null}
                  ></input>
                  <span className="input-group-text">KSM</span>
                </div>
                <div
                  id="amountHelp"
                  className={`form-text ${
                    inputToKSMBN(ksmInputValue).lt(MIN_CONTRIBUTE)
                      ? "text-danger"
                      : ""
                  }`}
                >
                  Minimum allowed: {formatKSMBalance(MIN_CONTRIBUTE.toString())}
                </div>
                <input
                  type="range"
                  className="form-range"
                  min={formatKSMBalance(MIN_CONTRIBUTE.toString(), false)}
                  max={
                    accountInfoSelected &&
                    accountInfoSelected.availableBalance
                      .toBn()
                      .sub(TX_FEE)
                      .gte(MIN_CONTRIBUTE)
                      ? formatKSMBalance(
                          accountInfoSelected.availableBalance
                            .toBn()
                            .sub(TX_FEE),
                          false
                        ).match(/^\d+(?:\.\d{0,2})?/) // Precision related to the "step"
                      : formatKSMBalance(MIN_CONTRIBUTE, false)
                  }
                  step="0.01"
                  value={ksmInputValue}
                  // defaultValue={formatKSMBalance(MIN_CONTRIBUTE, false)}
                  onChange={handleChangeOfKsmAmountInput}
                  disabled={accountInfoSelected === null}
                ></input>
              </form>
            </div>

            {/* Contribute */}
            <div className="mb-0">
              <button
                className="btn btn-primary d-block w-100"
                id="contributeButton"
                onClick={handleClickContribute}
                disabled={accountInfoSelected === null || disableContributeBtn}
              >
                <span
                  className={`spinner-border spinner-border-sm me-2 ${
                    disableContributeBtn ? "" : "d-none"
                  }`}
                  role="status"
                  aria-hidden="true"
                ></span>
                <span>Contribute</span>
              </button>
            </div>
          </div>
        </div>

        {/* Thank for support modal */}
        <div
          className="modal fade"
          id="thanksModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body d-flex flex-column justify-content-start align-items-center mb-0 pb-0">
                <h2 className="mb-1">Thank you for</h2>
                <h2>supporting Crab Network</h2>
                <h3 className="mt-4 mb-6">{contributedValue} Contributed</h3>
                <p>
                  Check your contribution transaction{" "}
                  <a
                    href={`https://kusama.subscan.io/block/${contributedBlockHash}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    here
                  </a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  data-bs-dismiss="modal"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Alert */}
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "5" }}>
          <div
            id="alertToast"
            className="toast hide align-items-center text-white bg-danger"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">{alertMsg}</div>
              <button
                type="button"
                className="btn-close me-2 m-auto bg-white"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-8 py-md-11 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              {/* iPhone + Macbook */}
              <div className="w-md-150 w-lg-130 mb-6 mb-md-0">
                <div className="device-combo device-combo-iphonex-macbook">
                  {/* iPhone */}
                  <div className="device device-iphonex">
                    <img
                      src="/img/screenshots/mobile/jobs.jpg"
                      className="device-screen"
                      alt="..."
                    />
                    <img
                      src="/img/devices/iphonex.svg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>

                  {/* Macbook */}
                  <div className="device device-macbook">
                    <img
                      src="/img/screenshots/desktop/jobs.jpg"
                      className="device-screen"
                      alt="..."
                    />
                    <img
                      src="/img/devices/macbook.svg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1">
              {/* Heading */}
              <h2>
                What is a<br />
                <span className="text-primary">Kusama Parachain Slot</span>.
              </h2>

              {/* Text */}
              <p className="fs-lg text-muted mb-6">
                Kusama is a scalable, multi parachains network. If a parachain
                wants to connect to Kusama and share Kusama's cross-chain
                capabilities and network security, it must obtain a parachain
                slot.
              </p>

              {/* List */}
              <div className="d-flex">
                {/* Icon */}
                <div className="icon text-primary">
                  {/* {{> general/clipboard}} */}
                  <ImgClipboard />
                </div>

                <div className="ms-5">
                  {/* Text */}
                  <p className="text-muted mb-5">
                    Parachain slot is a scarce resource on Kusama.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* Icon */}
                <div className="icon text-primary">
                  {/* {{> files/folder-star}} */}
                  <ImgFolderStar />
                </div>

                <div className="ms-5">
                  {/* Text */}
                  <p className="text-muted mb-0">
                    The parachain slots will be leased according to an
                    unpermissioned candle auction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      {/* PAY IT DOWN */}
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Heading */}
              <h1>
                What is a <span className="text-primary">Crowdloan?</span>
              </h1>

              {/* Text */}
              <p className="lead text-gray-700 mb-7 mb-md-9">
                Kusama allows parachains to raise KSMs for their parachains by
                means of decentralized Crowdloan.
              </p>
            </div>
          </div>
          {/* / .row */}
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-7">
              {/* Screenshot */}
              <div className="mb-8 mb-md-0">
                {/* Image */}
                <img
                  src="/img/screenshots/desktop/rental.jpg"
                  alt="..."
                  className="screenshot img-fluid mw-md-110 float-end me-md-6 mb-6 mb-md-0"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              {/* List */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-lg badge-rounded-circle bg-primary-soft mt-1">
                  <span>1</span>
                </div>

                {/* Body */}
                <div className="ms-5">
                  {/* Heading */}
                  <h3>Preparation</h3>

                  {/* Text */}
                  <p className="text-gray-700 mb-6">
                    The KSMs used for participation must be unbonded, that is,
                    not locked for any reason (including staking, vesting, and
                    governance). You need to unbond your KSMs before the
                    Crowdloan.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-lg badge-rounded-circle bg-primary-soft mt-1">
                  <span>2</span>
                </div>

                {/* Body */}
                <div className="ms-5">
                  {/* Heading */}
                  <h3>Safety</h3>

                  {/* Text */}
                  <p className="text-gray-700 mb-6">
                    All crowdloan contributions are handled by the Crowdloan
                    module’s logic where a campaign is identified by index, not
                    by address. Never transfer KSMs to an address in support of
                    a campaign.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-lg badge-rounded-circle bg-primary-soft mt-1">
                  <span>3</span>
                </div>

                {/* Body */}
                <div className="ms-5">
                  {/* Heading */}
                  <h3>Rewards</h3>

                  {/* Text */}
                  <p className="text-gray-700 mb-0">
                    The reward for supporting Darwinia Crab will be higher than
                    Staking, and there will be a chance to get 1 BTC. You will
                    get enough rewards even if we fail.&nbsp;&nbsp;
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://darwinianetwork.medium.com/darwinia-crabs-kusama-parachain-auction-strategy-3f37cbfdfe4"
                      className="fw-bold text-decoration-none"
                    >
                      Learn more <i className="fe fe-arrow-right ms-3"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      {/* FEATURES */}
      <section className="py-8 py-md-11 border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Heading */}
              <h1>
                Crab Network <span className="text-primary">PLO Rewards</span>
              </h1>

              {/* Text */}
              <p className="fs-lg text-gray-700 mb-7 mb-md-9">
                Crab Network provides tokens and NFT rewards.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4" data-aos="fade-up">
              {/* Icon */}
              <div className="icon text-primary mb-3">
                <img src={ImgReward1} alt="..." />
              </div>

              {/* Heading */}
              <h3>CRING + RING Rewards</h3>

              {/* Text */}
              <p className="text-muted mb-6 mb-md-0">
                Totally 240,000,000 CRING and 6,000,000 RING rewards will be
                distributed to users according to the number of KSM they
                supported. 30% of them will be unlocked, 70% will vest for 48
                weeks.
              </p>
            </div>
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {/* Icon */}
              <div className="icon text-primary mb-3">
                <img src={ImgReward2} alt="..." />
              </div>

              {/* Heading */}
              <h3>NFT Rewards</h3>

              {/* Text */}
              <p className="text-muted mb-6 mb-md-0">
                Lands, Apostles, and Chests NFT will be unlocked and used for
                Gamefi Mining in Evolution Land with two new continents open!
              </p>
            </div>
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Icon */}
              <div className="icon text-primary mb-3">
                <img src={ImgReward3} alt="..." />
              </div>

              {/* Heading */}
              <h3>Super Mystery BTC Prize</h3>

              {/* Text */}
              <p className="text-muted mb-0">
                The luckiest person will win one bitcoin embedded in the land
                NFT. Once you take part in the Lucky Draw and win the Legendary
                rewards in time, you will have the chance to win the jackpot!
              </p>
            </div>
          </div>

          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      {/* PRICING */}
      <section className="mt-12 mb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Heading */}
              <h1>
                How to <span className="text-primary">participate?</span>
              </h1>

              {/* Text */}
              <p className="lead text-gray-700 mb-7 mb-md-9">
                How to operate your wallet to support us.
              </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {/* Card */}
              <div className="card shadow-light-lg lift lift-lg h-100">
                <div className="card-body">
                  {/* Badge */}
                  <span className="badge rounded-pill bg-primary badge-float badge-float-outside">
                    1
                  </span>

                  {/* Heading */}
                  <h4 className="fw-bold">Unbond your KSMs</h4>

                  {/* Text */}
                  <p className="text-muted">
                    Unbond your KSMs at least 7 days before the Crowdloan.
                  </p>

                  {/* Link */}
                  <a
                    href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/accounts"
                    className="fs-sm fw-bold text-decoration-none"
                  >
                    Unbond <i className="fe fe-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Card */}
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg h-100">
                <div className="card-body">
                  {/* Badge */}
                  <span className="badge rounded-pill bg-primary badge-float badge-float-outside">
                    2
                  </span>

                  {/* Heading */}
                  <h4 className="fw-bold">Participate</h4>

                  {/* Text */}
                  <p className="text-muted">
                    When the Crowdloan starts, join the crowdloan.
                  </p>

                  {/* Link */}
                  <a
                    href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"
                    className="fs-sm fw-bold text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join <i className="fe fe-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      {/* FAQ */}
      <section className="bg-dark mt-12 pb-12">
        <div className="container pt-8 pt-md-11">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Heading */}
              <h1>
                <span className="text-white">FAQ</span>
              </h1>

              {/* Text */}
              <p className="lead text-gray-700 mb-7 mb-md-9">
                We will continue to update the questions here. If you don’t find
                the question or answer you want, you can send an email to
                <a className="ms-1 text-white" href="mailto:hello@crab.network">
                  hello@crab.network
                </a>
                .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              {/* Item */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-lg badge-rounded-circle bg-primary">
                  <span>?</span>
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="text-white">
                    When will the Parachain Slot auction open?
                  </h4>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-8">
                    Waiting for kusama official confirmation.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-lg badge-rounded-circle bg-primary">
                  <span>?</span>
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="text-white">
                    Can my KSMs participate in Crowdloan on the exchange?
                  </h4>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    Yes. Landkit has basic CSS/JS files you can include. If you
                    want to enable deeper customization, you can integrate it
                    into your assets pipeline or build processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Item */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-lg badge-rounded-circle bg-primary">
                  <span>?</span>
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="text-white">
                    When will the KSMs that I participated in the Crowdloan be
                    unlocked?
                  </h4>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-8">
                    When will the ksm that I participated in the event be
                    unlocked
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-lg badge-rounded-circle bg-primary">
                  <span>?</span>
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="text-white">Is my KSMs safe?</h4>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    Yes. Your KSMs will not leave your wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      <Footer classList="bg-dark" />
    </>
  );
}

export default Home;
