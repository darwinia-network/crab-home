import cs from "classnames";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import styles from "./style.module.scss";

import { ReactComponent as Curve3 } from "../../components/shapes/curves/curve-3.svg";

import ImgAvatarDefault from "./img/avatar-default.png";
import ImgTips from "./img/illustration-2.png";

import ImgRewardGoldBox from "./img/reward-goldbox.png";
import ImgRewardApostle from "./img/reward-apostle.png";
import ImgRewardLand from "./img/reward-land.png";

import ImgReward1 from "./img/reward-1.png";
import ImgReward2 from "./img/reward-2.png";
import ImgReward3 from "./img/reward-3.png";

import ImgTopLeft from "./img/top-left.png";
import ImgTopRight from "./img/top-right.png";


function Reward() {
  return (
    <>
      <Navbar
        classList="navbar-light bg-white"
        container="container"
        button="primary"
      />

      {/* WELCOME */}
      <section
        className={cs(
          "pt-8 pb-11 pt-md-9 pb-md-12 py-lg-14 bg-light bg-between",
          styles.welcomeBg
        )}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 col-md-10 col-lg-7 text-center"
              data-aos="fade-up"
            >
              {/* Image (mobile) */}
              <img
                src={ImgTopRight}
                alt="..."
                className="img-fluid mb-6 d-lg-none"
              />

              {/* Heading */}
              <h1 className="display-2 fw-bold">
                Crab Network <br />
                PLO Lottery.
              </h1>

              {/* Text */}
              <p className="fs-lg text-muted mb-6 mb-md-8">
                Thank you for your support for Crab Network, we do appreciate your help! Now, the success rewards are unlock!
              </p>

              {/* Button */}
              <a href="#lottery" className="btn btn-primary me-1 lift" data-scroll='{"offset": 0}'>
                Get started <i className="fe fe-arrow-right ms-3"></i>
              </a>
              <a href="#!" className="btn btn-primary-soft lift ms-3">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-200" id="lottery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card px-5">
                {/* Meta */}
                <div className="row align-items-center py-5 border-top border-bottom">
                  <div className="col-auto">
                    {/* Avatar */}
                    <div className="avatar avatar-lg">
                      <img
                        src={ImgAvatarDefault}
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col ms-n5">
                    {/* Name */}
                    <h6 className="text-uppercase mb-0">Ab Hadley</h6>

                    {/* Date */}
                    <time className="fs-sm text-muted" dateTime="2019-05-20">
                      14Kaz...F1dQhv
                    </time>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-primary btn-sm">
                      Connect Polkadot.js Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-8 bg-gray-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Heading */}
              <h1>
              Start Your <span className="text-primary">Lottery 🎁</span>
              </h1>

              {/* Text */}
              <p className="lead text-gray-700 mb-7 mb-md-9">
                One KSM you support to Crab Network will bring you 1 ticket which will bring you NFT rewards and chance to earn 1 BTC.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card mb-6 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img src={ImgReward1} alt="..." className="card-img-top" />

                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curve3 />
                    </div>
                  </div>
                </a>

                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Legendary</h3>

                  {/* Text */}
                  <p className="mb-0 text-muted">
                  1 Land, 1 Apostle and 1 Random Chest.
With this three, you could start your mining process and have the chance to win 1 BTC super jackpot.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card mb-6 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img src={ImgReward2} alt="..." className="card-img-top" />

                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curve3 />
                    </div>
                  </div>
                </a>

                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Epic</h3>

                  {/* Text */}
                  <p className="mb-0 text-muted">
                  1 Apostle and 1 Random Chest.
                  With this two, you could breed apostle or put drills on other’s land after Furnace system launched.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card mb-6 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img src={ImgReward3} alt="..." className="card-img-top" />

                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curve3 />
                    </div>
                  </div>
                </a>

                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Rare</h3>

                  {/* Text */}
                  <p className="mb-0 text-muted">1 Random Chest.
                    Drills are very efficient mining tools! Upgrade it will bring you much revenue! </p>
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="fw-bold">My tickets：10 left</span>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-sm">Draw Once</button>
              <button type="button" className="btn btn-primary btn-sm ms-3">Draw All</button>
            </div>
          </div>
          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      {/* ABOUT */}
      <section className="py-8 bg-gray-200">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Card */}
              <div
                className="card shadow-light-lg overflow-hidden text-center text-lg-start"
                data-aos="fade-up"
              >
                <div className="row">
                  <div className="col-md-4 position-relative">
                    {/* Image */}
                    <img
                      src={ImgTips}
                      className="h-75 position-absolute right-0 mt-6"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    {/* Body */}
                    <div className="card-body py-7 py-md-9">
                      {/* Heading */}
                      <h4 className="fw-bold">Tips</h4>

                      {/* Text */}
                      <p className="text-muted mb-0">
                        1. Please kindly use your tickets before the event ends, or you gonna lose the tickets. <br/>
                        2. You can change your receive address at anytime before the event ends, please make sure if your address correct. NFT address should be 0x form.<br/>
                        3. In random chests, 1 : 10 is the proportion of Gold Chest to Silver Chest.
                      </p>
                    </div>
                  </div>
                </div>
                {/* / .row */}
              </div>
            </div>
          </div>
          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      {/* APPLYING */}
      <section className="pt-6 pt-md-8 bg-gray-200">
        <div className="container pb-8 pb-md-11 border-bottom border-gray-300">
          <div className="row align-items-center mb-5">
            <div className="col">
              {/* Heading */}
              <h4 className="fw-bold mb-1">My Rewards</h4>

              {/* Text */}
              <p className="fs-sm text-muted mb-0">
                NFT address: 0x7351...F82E, BTC address: 15sNA...9UzE
              </p>
            </div>
            <div className="col-auto">
              {/* Badge */}
              <button type="button" className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalPayment">
                Edit
              </button>
              <button type="button" className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#rewardList">
                Edit
              </button>
            </div>
          </div>
          {/* / .row */}
          <div className="row">
            <div className="col-12">
              {/* Table */}
              <div className="table-responsive mb-7 mb-md-9">
                <table className="table table-align-middle">
                  <thead>
                    <tr>
                      <th>
                        <span className="h6 text-uppercase fw-bold">No.</span>
                      </th>
                      <th>
                        <span className="h6 text-uppercase fw-bold">Level</span>
                      </th>
                      <th>
                        <span className="h6 text-uppercase fw-bold">Time</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="mb-1">#0</p>
                        </a>
                      </td>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="fs-sm mb-0">Consumer</p>
                        </a>
                      </td>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="fs-sm mb-0">2021-6-14 11:23</p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="mb-1">#1</p>
                        </a>
                      </td>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="fs-sm mb-0">Consumer</p>
                        </a>
                      </td>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="fs-sm mb-0">2021-6-14 11:23</p>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* / .row */}
          <div className="row align-items-center mb-5">
            <div className="col">
              {/* Heading */}
              <h4 className="fw-bold mb-1">Rewards</h4>

              {/* Text */}
              <p className="fs-sm text-muted mb-0">
                This is Landkit's bread and butter – help us make it better.
              </p>
            </div>
            <div className="col-auto">
              {/* Badge */}
              <span className="badge rounded-pill bg-success-soft">
                <span className="h6 text-uppercase">4 openings</span>
              </span>
            </div>
          </div>
          {/* / .row */}
          <div className="row">
            <div className="col-12">
              {/* Table */}
              <div className="table-responsive mb-5">
                <table className="table table-align-middle">
                  <thead>
                    <tr>
                      <th>
                        <span className="h6 text-uppercase fw-bold">No.</span>
                      </th>
                      <th>
                        <span className="h6 text-uppercase fw-bold">
                          Address
                        </span>
                      </th>
                      <th>
                        <span className="h6 text-uppercase fw-bold">Level</span>
                      </th>
                      <th>
                        <span className="h6 text-uppercase fw-bold">Time</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="mb-1">#0</p>
                        </a>
                      </td>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="fs-sm mb-0">
                            0x2C99D15a01d7f300bD89Ecf33547761018190749
                          </p>
                        </a>
                      </td>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="fs-sm mb-0">Epic</p>
                        </a>
                      </td>
                      <td>
                        <a
                          href="career-single.html"
                          className="text-reset text-decoration-none"
                        >
                          <p className="fs-sm mb-0">2021-6-14 11:23</p>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Text */}
              <p className="fs-sm text-center text-muted mb-0">
                Don’t see the job you want? <a href="#!">Let us know</a>.
              </p>
            </div>
          </div>
          {/* / .row */}
        </div>
        {/* / .container */}
      </section>

      <div
        className="modal fade"
        id="modalPayment"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalPaymentTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Close */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {/* Heading */}
              <h2 className="fw-bold text-center mb-1" id="modalPaymentTitle">
                Receive Address
              </h2>

              {/* Text */}
              <p className="fs-lg text-center text-muted mb-6 mb-md-8">
                Please provide your address to receive rewards, you can change it before event ends.
              </p>

              {/* Form */}
              <form>
                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="modalPaymentName">
                    DVM Address to receive NFT rewards
                  </label>
                  <input
                    className="form-control"
                    id="modalPaymentName"
                    type="text"
                    placeholder="DVM Address"
                  />
                </div>

                {/* Name */}
                <div className="form-group">
                  <label className="form-label" for="modalPaymentNumbber">
                    BTC address to receive BTC rewards
                  </label>
                  <input
                    className="form-control"
                    id="modalPaymentNumbber"
                    placeholder="BTC Address"
                  />
                </div>

                {/* Submit */}
                <button className="btn w-100 btn-primary mt-3 lift">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div
        className="modal fade"
        id="rewardList"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalPaymentTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Close */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {/* Heading */}
              <h2 className="fw-bold text-center mb-1" id="modalPaymentTitle">
                🎉Congratulations ! 🎉
              </h2>

              {/* Text */}
              <p className="fs-lg text-center text-muted mb-6 mb-md-8">
                You get very good rewards and chance to earn 1 BTC!<br/>
                Nice rewards, you could breed your apostle!<br/>
                Drills are very efficient mining tools.<br/>
                What a pity...🙈
              </p>

              <div className="mb-5">
                <div>
                  <div className="d-flex align-items-center mb-5">
                    <div className={cs(styles.rewardListItem, 'd-flex align-items-center justify-content-center rounded')}>
                      <img src={ImgRewardGoldBox} alt="..." />
                    </div>
                    <span className="ps-5 flex-fill fw-bold">Gold Box</span>
                    <span className="fw-bold">x3</span>
                  </div>

                  <div className="d-flex align-items-center mb-5">
                    <div className={cs(styles.rewardListItem, 'd-flex align-items-center justify-content-center rounded')}>
                      <img src={ImgRewardApostle} alt="..." />
                    </div>
                    <span className="ps-5 flex-fill fw-bold">Apostle</span>
                    <span className="fw-bold">x8</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className={cs(styles.rewardListItem, 'd-flex align-items-center justify-content-center rounded')}>
                      <img src={ImgRewardLand} alt="..." />
                    </div>
                    <span className="ps-5 flex-fill fw-bold">Land</span>
                    <span className="fw-bold">x1</span>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button className="btn w-100 btn-primary mt-3 lift">
                Get it!
              </button>

            </div>
          </div>
        </div>
      </div>

      <Footer classList="bg-dark" />
    </>
  );
}

export default Reward;
