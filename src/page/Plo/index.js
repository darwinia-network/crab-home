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
                <span className="text-primary">Kusama Parachain Slot Auctions？</span>
              </h1>

              {/*  Text */}
              <p className="lead text-muted mb-6 mb-md-8">
                Join the Crowdloan to help Darwinia win Kusama Parachain Slot Auction and get rich returns.
              </p>

              {/*  Buttons */}
              <a href="#!" className="btn btn-primary me-3 lift">
                参加问卷调查 <i className="fe fe-arrow-right ms-3"></i>
              </a>
              <a href="#!" className="btn btn-primary-soft lift">
                Learn more
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
                  <IMG_FolderStar />
                </div>

                <div className="ms-5">

                  {/* Text */}
                  <p className="text-muted mb-0">
                    The parachain slots will be sold according to an unpermissioned candle auction. Learn more
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
      <section className="pt-8 pt-md-11" id="payItDown">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* Heading */}
              <h1>
                <span className="text-primary">What is a Crowdloan?</span>
              </h1>

              {/* Text */}
              <p className="lead text-gray-700 mb-7 mb-md-9">
                 Kusama allows parachains to raise KSMs for their parachains by means of decentralized Crowdloan.
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
                   The KSMs used for participation must be unbonded, that is, not locked for any reason (including staking, vesting, and governance). You need to unbond your KSMs before the Crowdloan.
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
                    All crowdloan contributions are handled by the Crowdloan module’s logic where a campaign is identified by index, not by address. Never transfer KSMs to an address in support of a campaign.
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
                    The reward for supporting Darwinia Crab will be higher than Staking, and there will be a chance to get 1 BTC.  You will get enough rewards even if we fail. Learn more
                  </p>
                </div>
              </div>
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
              <span className="text-primary">如何参与</span>
            </h1>

            {/* Text */}
            <p className="lead text-gray-700 mb-7 mb-md-9">
                Kusama allows parachains to raise KSMs for their parachains by means of decentralized Crowdloan.
            </p>
          </div>
        </div>

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
                    Start a 30-day trial
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
                    Start a 15-day trial
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
              <span className="text-primary">FAQ</span>
            </h1>

            {/* Text */}
            <p className="lead text-gray-700 mb-7 mb-md-9">
                Kusama allows parachains to raise KSMs for their parachains by means of decentralized Crowdloan.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">

            {/* Item */}
            <div className="d-flex">

              {/* Badge */}
              <div className="badge badge-lg badge-rounded-circle bg-success">
                <span>?</span>
              </div>

              <div className="ms-5">

                {/* Heading */}
                <h4 className="text-white">
                  Can I use Landkit for my clients?
                </h4>

                {/* Text */}
                <p className="text-muted mb-6 mb-md-8">
                  Absolutely. The Bootstrap Themes license allows you to build a website for personal use or for a client.
                </p>

              </div>

            </div>

            {/* Item */}
            <div className="d-flex">

              {/* Badge */}
              <div className="badge badge-lg badge-rounded-circle bg-success">
                <span>?</span>
              </div>

              <div className="ms-5">

                {/* Heading */}
                <h4 className="text-white">
                  Do I get free updates?
                </h4>

                {/* Text */}
                <p className="text-muted mb-6 mb-md-0">
                  Yes. We update all of our themes with each Bootstrap update, plus are constantly adding new components, pages, and features to our themes.
                </p>

              </div>

            </div>

          </div>
          <div className="col-12 col-md-6">

            {/* Item */}
            <div className="d-flex">

              {/* Badge */}
              <div className="badge badge-lg badge-rounded-circle bg-success">
                <span>?</span>
              </div>

              <div className="ms-5">

                {/* Heading */}
                <h4 className="text-white">
                  Is there a money back guarantee?
                </h4>

                {/* Text */}
                <p className="text-muted mb-6 mb-md-8">
                  Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a return and get your money back.
                </p>

              </div>

            </div>

            {/* Item */}
            <div className="d-flex">

              {/* Badge */}
              <div className="badge badge-lg badge-rounded-circle bg-success">
                <span>?</span>
              </div>

              <div className="ms-5">

                {/* Heading */}
                <h4 className="text-white">
                  Does it work with Rails? React? Laravel?
                </h4>

                {/* Text */}
                <p className="text-muted mb-6 mb-md-0">
                  Yes. Landkit has basic CSS/JS files you can include. If you want to enable deeper customization, you can integrate it into your assets pipeline or build processes.
                </p>

              </div>

            </div>

          </div>
        </div> {/* / .row */}
      </div> {/* / .container */}
    </section>


      <Footer classList="bg-dark" />
    </>
  );
}

export default Home;
