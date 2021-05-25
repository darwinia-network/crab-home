import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { ReactComponent as Blur1 } from "../../components/shapes/blurs/blur-1.svg";
import { ReactComponent as ImgClipboard } from "../../components/icons/duotone-icons/general/clipboard.svg";
import { ReactComponent as ImgFolderStar } from "../../components/icons/duotone-icons/files/folder-star.svg";

import ImgReward1 from "./img/2.png";
import ImgReward2 from "./img/3.png";
import ImgReward3 from "./img/1.png";

function Home() {
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
                Join the Crab Crowdloan to help Darwinia win Kusama Parachain Slot
                Auction and get rich returns.
              </p>

              {/*  Buttons */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdKQTdm-eNPpUwoZY5x57VvXBdHk24IBfVBiem1HSs-h7A3pw/viewform?usp=sf_link"
                className="btn btn-primary me-3 lift"
              >
                Join the Crab Crowdloan <i className="fe fe-arrow-right ms-3"></i>
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
                    <a target="_blank" rel="noreferrer" href="https://darwinianetwork.medium.com/darwinia-crabs-kusama-parachain-auction-strategy-3f37cbfdfe4" className="fw-bold text-decoration-none">
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
                Totally 240,000,000 CRING and 6,000,000 RING rewards will be distributed to users according to the number of KSM they supported. 30% of them will be unlocked, 70% will vest for 48 weeks.
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
                Lands, Apostles, and Chests NFT will be unlocked and used for Gamefi Mining in Evolution Land with two new continents open!
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
                The luckiest person will win one bitcoin embedded in the land NFT. Once you take part in the Lucky Draw and win the Legendary rewards in time, you will have the chance to win the jackpot!
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
                    // href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"
                    href="#!"
                    className="fs-sm fw-bold text-decoration-none text-muted"
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
                We will continue to update the questions here.
                {/* If you don’t find
                the question or answer you want, you can send an email to
                <a
                  className="ms-1 text-white"
                  href="mailto:ksm-crowdloan@crab.network"
                >
                  ksm-crowdloan@itering.com
                </a> */}
                {/* . */}
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
