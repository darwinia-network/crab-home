import cs from "classnames";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import styles from "./style.module.scss";

import { ReactComponent as Curve3 } from "../../components/shapes/curves/curve-3.svg";

import ImgAvatar1 from "./img/avatar-1.jpg";
import ImgPhoto1 from "./img/photo-15.jpg";
import ImgTips from "./img/illustration-2.png";

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
                src="assets/img/illustrations/illustration-8.png"
                alt="..."
                className="img-fluid mb-6 d-lg-none"
              />

              {/* Heading */}
              <h1 className="display-2 fw-bold">
                Designed secure. <br />
                Built for anything.
              </h1>

              {/* Text */}
              <p className="fs-lg text-muted mb-6 mb-md-8">
                Forward thinking businesses use our cloud backup service to
                ensure data reliability and safety.
              </p>

              {/* Button */}
              <a href="#!" className="btn btn-primary me-1 lift">
                Get started <i className="fe fe-arrow-right ms-3"></i>
              </a>
              <a href="#!" className="btn btn-primary-soft lift">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-200">
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
                      src={ImgAvatar1}
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </div>
                <div className="col ms-n5">
                  {/* Name */}
                  <h6 className="text-uppercase mb-0">Ab Hadley</h6>

                  {/* Date */}
                  <time className="fs-sm text-muted" datetime="2019-05-20">
                    Published on May 20, 2019
                  </time>
                </div>
                <div className="col-auto">
                  <button type="button" class="btn btn-primary btn-sm">
                    Connect
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
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card mb-6 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img
                    src={ImgPhoto1}
                    alt="..."
                    className="card-img-top"
                  />

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
                  <h3>Cafe Coworking Has Become the Norm.</h3>

                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam.
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
                  <img
                    src={ImgPhoto1}
                    alt="..."
                    className="card-img-top"
                  />

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
                  <h3>Weekly Roundtable Meetings Saved Us.</h3>

                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam.
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
                  <img
                    src={ImgPhoto1}
                    alt="..."
                    className="card-img-top"
                  />

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
                  <h3>Nature Can Save Your Creative Side.</h3>

                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet
                  </p>
                </a>
              </div>
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
                      <h4 className="fw-bold">Building a community.</h4>

                      {/* Text */}
                      <p className="text-muted mb-0">
                        Landkit is focused on helping foster a community. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Proin
                        quis diam tempus tortor egestas blandit. Aliquam erat
                        volutpat. Phasellus rhoncus pretium molestie. Nulla
                        facilisi. Etiam sollicitudin lectus ac nisi tincidunt
                        porttitor. Phasellus eros metus, gravida eu mi ac,
                        gravida convallis ipsum.
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
    <section class="pt-6 pt-md-8 bg-gray-200">
      <div class="container pb-8 pb-md-11 border-bottom border-gray-300">

        <div class="row align-items-center mb-5">
          <div class="col">

            {/* Heading */}
            <h4 class="fw-bold mb-1">
              My Rewards
            </h4>

            {/* Text */}
            <p class="fs-sm text-muted mb-0">
              NFT address: 0x7351...F82E, BTC address: 15sNA...9UzE
            </p>

          </div>
          <div class="col-auto">

            {/* Badge */}
            <button type="button" class="btn btn-primary-soft btn-sm">
              Edit
            </button>

          </div>
        </div> {/* / .row */}
        <div class="row">
          <div class="col-12">

            {/* Table */}
            <div class="table-responsive mb-7 mb-md-9">
              <table class="table table-align-middle">
                <thead>
                  <tr>
                    <th>
                      <span class="h6 text-uppercase fw-bold">
                        No.
                      </span>
                    </th>
                    <th>
                      <span class="h6 text-uppercase fw-bold">
                        Level
                      </span>
                    </th>
                    <th>
                      <span class="h6 text-uppercase fw-bold">
                        Time
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Senior UX Designer
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Responsible for design systems and brand management.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Consumer
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Los Angeles
                        </p>
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Motion Designer
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Responsible for creating life in our apps.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Product
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          San Francisco, CA
                        </p>
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Design Researcher
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Help us make the best decisions with qualitative experiments.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Consulting
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          London
                        </p>
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Production Designer
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Create, collect, and distribute beautiful assets.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Consulting
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Paris
                        </p>
                      </a>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div> {/* / .row */}
        <div class="row align-items-center mb-5">
          <div class="col">

            {/* Heading */}
            <h4 class="fw-bold mb-1">
              Engineering
            </h4>

            {/* Text */}
            <p class="fs-sm text-muted mb-0">
              This is Landkit's bread and butter – help us make it better.
            </p>

          </div>
          <div class="col-auto">

            {/* Badge */}
            <span class="badge rounded-pill bg-success-soft">
              <span class="h6 text-uppercase">4 openings</span>
            </span>

          </div>
        </div> {/* / .row */}
        <div class="row">
          <div class="col-12">

            {/* Table */}
            <div class="table-responsive mb-5">
              <table class="table table-align-middle">
                <thead>
                  <tr>
                    <th>
                      <span class="h6 text-uppercase fw-bold">
                        Role
                      </span>
                    </th>
                    <th>
                      <span class="h6 text-uppercase fw-bold">
                        Team
                      </span>
                    </th>
                    <th>
                      <span class="h6 text-uppercase fw-bold">
                        Location
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Ruby Engineer
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Responsible for pipeline and build system.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Consumer
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Los Angeles
                        </p>
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Javascript Prototyper
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Helping us build quick experiments for testing.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Product
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          San Francisco, CA
                        </p>
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Reliability Engineer
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Managing operations and testing for improved stability.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Consulting
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          London
                        </p>
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="mb-1">
                          Junior PHP Engineer
                        </p>
                        <p class="fs-sm text-muted mb-0">
                          Help us with any odds and ends that need tackling.
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Consulting
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" class="text-reset text-decoration-none">
                        <p class="fs-sm mb-0">
                          Paris
                        </p>
                      </a>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Text */}
            <p class="fs-sm text-center text-muted mb-0">
              Don’t see the job you want? <a href="#!">Let us know</a>.
            </p>

          </div>
        </div> {/* / .row */}
      </div> {/* / .container */}
    </section>




      <Footer classList="bg-dark" />
    </>
  );
}

export default Reward;
