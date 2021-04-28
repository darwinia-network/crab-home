import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { ReactComponent as Blur1 } from "../../components/shapes/blurs/blur-1.svg";
import { ReactComponent as IMG_Clipboard } from "../../components/icons/duotone-icons/general/clipboard.svg"
import { ReactComponent as IMG_FolderStar } from "../../components/icons/duotone-icons/files/folder-star.svg"

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
              What is a <br />
                <span className="text-primary">Kusama Parachain Slot Auctions ？</span>.
              </h1>

              {/*  Text */}
              <p className="lead text-muted mb-6 mb-md-8">
                Join the Crowdloan to help Darwinia win Kusama Parachain Slot Auction and get rich returns.
              </p>

              {/*  Buttons */}
              <a href="#!" className="btn btn-primary me-1 lift">
                参加问卷调查 <i className="fe fe-arrow-right ms-3"></i>
              </a>
              <a href="#!" className="btn btn-primary-soft lift">
                Learn more
              </a>
            </div>
          </div>{" "}
          {/*  / .row */}
        </div>{" "}
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
                What is a <br />
                <span className="text-primary">Kusama Parachain Slot Auctions</span>.
              </h2>

              {/* Text */}
              <p className="fs-lg text-muted mb-6">
                Kusama is a scalable, multi parachains network. If a parachain wants to connect to Kusama and share Kusama's cross-chain capabilities and network security, it must obtain a parachain slot.
              </p>

              {/* List */}
              <div className="d-flex">
                {/* Icon */}
                <div className="icon text-primary">
                  {/* {{> general/clipboard}} */}
                  <IMG_Clipboard />
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="mb-1">Magic Resume</h4>

                  {/* Text */}
                  <p className="text-muted mb-5">
                    Kusama 是一个可扩展的、多平行链的网络。平行链如果想连接到 Kusama，并希望共享 Kusama 的跨链能力和网络安全，那它必须获取一个平行链插槽。
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* Icon */}
                <div className="icon text-primary">
                  {/* {{> files/folder-star}} */}
                  <IMG_FolderStar />
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="mb-1">Employer Insights</h4>

                  {/* Text */}
                  <p className="text-muted mb-0">
                    平行链插槽是Polkadot上的稀缺资源，将通过无准入的蜡烛拍卖进行出售。
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>

      {/* PAY IT DOWN */}
      <section className="pt-8 pt-md-11" id="payItDown">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Badge */}
              <span className="badge rounded-pill bg-primary-soft mb-3">
                <span className="h6 text-uppercase">Pay it down</span>
              </span>

              {/* Heading */}
              <h1>
                Earn revenue while{" "}
                <span className="text-primary">enjoying a vacation.</span>
              </h1>

              {/* Text */}
              <p className="lead text-gray-700 mb-7 mb-md-9">
                Anytime you leave your home vacant, you're wasting potential
                earnings! Rent it out for an hour or a day at a time.
              </p>
            </div>
          </div>{" "}
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
                  <h3>Sign up</h3>

                  {/* Text */}
                  <p className="text-gray-700 mb-6">
                    It takes a few minutes to add your information and home's
                    photos.
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
                  <h3>List your homes</h3>

                  {/* Text */}
                  <p className="text-gray-700 mb-6">
                    Let us know where your homes are located and when they're
                    available.
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
                  <h3>Start welcoming guests</h3>

                  {/* Text */}
                  <p className="text-gray-700 mb-0">
                    Get ready for an influx of guests and easy passive income.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>

      {/* PRICING */}
      <section className="mt-12 mb-12">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {/* Card */}
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <div className="card-body">
                  {/* Badge */}
                  <span className="badge rounded-pill bg-primary-desat badge-float badge-float-outside">
                    $29/mo
                  </span>

                  {/* Heading */}
                  <h4 className="fw-bold">Shared instance</h4>

                  {/* Text */}
                  <p className="text-muted">
                    Affordable, scalable and performant. The perfect solution
                    for small apps.
                  </p>

                  {/* Link */}
                  <a href="#!" className="fs-sm fw-bold text-decoration-none">
                    Start a 30-day trial{" "}
                    <i className="fe fe-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Card */}
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <div className="card-body">
                  {/* Badge */}
                  <span className="badge rounded-pill bg-primary-desat badge-float badge-float-outside">
                    $49/mo
                  </span>

                  {/* Heading */}
                  <h4 className="fw-bold">Shared cluster</h4>

                  {/* Text */}
                  <p className="text-muted">
                    A mid-sized solution for businesses undergoing rapid user
                    growth.
                  </p>

                  {/* Link */}
                  <a href="#!" className="fs-sm fw-bold text-decoration-none">
                    Start a 15-day trial{" "}
                    <i className="fe fe-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {/* Card */}
              <div className="card shadow-light-lg lift lift-lg">
                <div className="card-body">
                  {/* Badge */}
                  <span className="badge rounded-pill bg-primary-desat badge-float badge-float-outside">
                    $79/mo
                  </span>

                  {/* Heading */}
                  <h4 className="fw-bold">Dedicated cluster</h4>

                  {/* Text */}
                  <p className="text-muted">
                    A farm of machines entirely dedicated to your company's
                    storage needs.
                  </p>

                  {/* Link */}
                  <a href="#!" className="fs-sm fw-bold text-decoration-none">
                    Sign up now <i className="fe fe-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>

      <Footer classList="bg-dark" />
    </>
  );
}

export default Home;
