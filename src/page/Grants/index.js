import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import styles from "./style.module.scss";

import png35 from "./img/image 35.png";
import png37 from "./img/image 37.png";
import png38 from "./img/image 38.png";
import png39 from "./img/image 39.png";
import png40 from "./img/image 40.png";
import png41 from "./img/image 41.png";
import png42 from "./img/image 42.png";
import png43 from "./img/image 43.png";
import png44 from "./img/image 44.png";
import png46 from "./img/image 46.png";
import png47 from "./img/image 47.png";
import png48 from "./img/image 48.png";
import png49 from "./img/image 49.png";
import png50 from "./img/image 50.png";
import png51 from "./img/image 51.png";

const applies = [
  {
    img: png37,
    title: "Multi-Chain",
    des:
      "You’re bullish on the future of multi-chain strategy and want to execute a multi- or dual-chain deployment.",
  },
  {
    img: png38,
    title: "Scalability",
    des:
      "You need a lower-cost execution environment but don’t want (or need) to invest time and money into refactoring your Solidity code.",
  },
  {
    img: png39,
    title: "Experimentation",
    des:
      "You want to build and test your application in a growing ecosystem with a strong community and a growing user base.",
  },
  {
    img: png40,
    title: "Enthusiasm",
    des:
      "You’re excited about the potential of Crab and Kusama, and want to help build the ecosystem.",
  },
  {
    img: png41,
    title: "Win-Win",
    des:
      "By joining the Crab Grants Program, you will have a greater ability to contribute to Crab’s growth, and your team will have access to great benefits that will boost your project's growth and development.",
  },
];

const appliesAnswers = [
  {
    title: "Fill Out the Application Form",
    des:
      "Share all the necessary information with us. The more information we have, the better we can evaluate your application.",
  },
  {
    title: "Review and Feedback Call",
    des:
      "After reviewing your application, we will send you a link to schedule a call with the Crab team to discuss your project and answer any questions you might have.",
  },
  {
    title: "Decision",
    des:
      "We will contact you to tell you if your application is approved or rejected.",
  },
  {
    title: "Onboarding",
    des:
      "We will welcome you to the Crab Grants Program and review the legal and funding aspects.",
  },
  {
    title: "Follow-up",
    des:
      "We will have recurring calls with you and your team to follow up and give the support needed.",
  },
];

function Grants() {
  return (
    <section className="bg-gray-200">
      <Navbar
        classList="navbar-light bg-white"
        container="container"
        button="primary"
      />

      <section className="pt-4 pt-md-11 welcome" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={png35}
                className="img-fluid mw-md-100 mw-lg-100 mb-6 mb-md-0"
                alt="..."
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="col-12 col-md-7 col-lg-6 order-md-1"
              data-aos="fade-up"
            >
              <h1
                className="display-3 text-center text-md-start"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Grants Program
              </h1>

              <p
                className="lead text-center text-md-start text-muted mb-6 mb-lg-8"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "21px",
                }}
              >
                Projects that add value to the Crab ecosystem are eligible for
                funding opportunities.
              </p>

              <div className="text-center text-md-start">
                <a
                  href="https://forms.gle/MwiBAWbmcj5GLssm8"
                  className="btn btn-primary-soft lift mx-auto mx-md-0"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    padding: "0px",
                    width: "215px",
                    height: "41px",
                    background: "#ec3783",
                    color: "#fff",
                  }}
                >
                  Start your Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-8"
        style={{
          background:
            "linear-gradient(315.52deg, rgba(255,0,80, .1) 0.88%, rgba(112,0,255, .1) 71.7%, rgba(0,39,255,.1) 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h2 className="fw-bold">Purpose and Mission</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-6 d-lg-flex mb-4">
              <div data-aos="fade-up">
                <div className="row">
                  <div className="col-3 col-md-4 position-relative">
                    <img
                      src={png46}
                      className={`position-absolute mt-9 mt-md-11 right-0 ${styles.mainBorder}`}
                      alt="..."
                      style={{
                        width: 80,
                        height: 80,
                        background:
                          "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(to right, #5745de, #ec3783) border-box",
                        borderRadius: "40px",
                      }}
                    />
                  </div>
                  <div className="col-9 col-md-8 offset-3 offset-md-0">
                    <div className="py-7 py-md-9">
                      <h4 className="fw-bold">Purpose</h4>

                      <p className="text-muted mb-0">
                        To fund the development of projects and applications
                        that contribute to the Crab ecosystem and promote
                        overall network growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-lg-flex mb-4">
              <div className="" data-aos="fade-up">
                <div className="row">
                  <div className="col-3 col-md-4">
                    <img
                      src={png47}
                      className={`position-absolute right-0 mt-11 ${styles.mainBorder}`}
                      alt="..."
                      style={{
                        width: 80,
                        height: 80,
                        background:
                          "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(to right, #5745de, #ec3783) border-box",
                        borderRadius: "40px",
                      }}
                    />
                  </div>
                  <div className="col-9 col-md-8 offset-3 offset-md-0">
                    <div className="py-7 py-md-9">
                      <h4 className="fw-bold">Mission</h4>

                      <p className="text-muted mb-0">
                        We encourage passionate teams to build innovative,
                        interconnected projects on Crab and reward use cases
                        with application scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="row">
          <div
            className={`col-10 col-md-6 offset-1 offset-md-3 ${styles.mainBorder}`}
            style={{ borderRadius: 40 }}
          >
            <div className="text-start" data-aos="fade-up">
              <div className="row">
                <div className="col-12 col-md-4 position-relative">
                  <img
                    src={png48}
                    className="h-75 position-absolute left-0 mt-6"
                    alt="..."
                  />
                </div>
                <div className="col-12 col-md-6 offset-0 offset-md-2">
                  <div className="card-body py-7 py-md-9">
                    <h4 className="fw-bold">Grants Amount</h4>

                    <p className="text-muted mb-0">
                      1.Grant's maximum amount of incentives is USD6,000
                      (USDT/DAI/RING/CRAB) per project.
                      <br />
                      2.USD 2,000(USDT/DAI/RING/CRAB) or less will be approved
                      the fastest.
                      <br />
                      3. Applications from USD2,000 to USD6,000
                      (USDT/DAI/RING/CRAB) will take longer to review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-2 pt-md-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-8 text-center">Eligible Projects and Ideas</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mb-6">
                <div className="row gx-0">
                  <div className={`col-12 col-md-4 ${styles.mainBorder}`}>
                    <img
                      src={png43}
                      alt="..."
                      className="mw-100"
                      style={{ borderRadius: 38 }}
                    />
                  </div>
                  <div className="col-12 col-md-7 offset-md-1">
                    <a className="card-body" href="#!">
                      <h3>Tooling and Infrastructure</h3>

                      <p className="mb-0 text-muted">
                        Projects that support the development tools and
                        infrastructure needed by other teams. These projects
                        must fill existing tooling gaps from the developer tools
                        portfolio in Crab. Such as wallets, oracles, and API
                        services.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="row gx-0">
                  <div
                    className={`col-12 col-md-4 order-md-1 offset-md-1 ${styles.mainBorder}`}
                  >
                    <img
                      src={png44}
                      alt="..."
                      className="mw-100"
                      style={{ borderRadius: 38 }}
                    />
                  </div>

                  <div className="col-12 col-md-7">
                    <a className="card-body" href="#!">
                      <h3>Ecosystem Projects</h3>

                      <p className="mb-0 text-muted">
                        Projects that support the ecosystem through a wide range
                        of use cases, such as Defi, NFT, Dao, identity,
                        Metaverse games, insurance, and more. This category aims
                        to promote the Crab ecosystem development by providing
                        useful services and utility on the network.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 py-md-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4 mb-md-7 text-center">
              <h1>Resource for Grants Program</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-8 d-flex">
              <div
                className={`card shadow-light-lg lift lift-lg ${styles.mainBorder} overflow-hidden`}
              >
                <a className="card-img-top" href="#!">
                  <img src={png49} alt="..." className="img-fluid" />
                </a>

                <a className="card-body text-center" href="#!">
                  <h3>Developer Tools</h3>

                  <p className="mb-0 text-muted">
                    Resources and documentation for your team.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-8 d-flex">
              <div
                className={`card shadow-light-lg lift lift-lg ${styles.mainBorder} overflow-hidden`}
              >
                <a className="card-img-top" href="#!">
                  <img src={png50} alt="..." className="img-fluid" />
                </a>

                <a className="card-body text-center" href="#!">
                  <h3>End-to-End Support</h3>

                  <p className="mb-0 text-muted">
                    Guidance of technical hurdles and strategic development.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-8 d-flex">
              <div
                className={`card shadow-light-lg lift lift-lg ${styles.mainBorder} overflow-hidden`}
              >
                <a className="card-img-top" href="#!">
                  <img src={png51} alt="..." className="img-fluid" />
                </a>

                <a className="card-body my-auto text-center" href="#!">
                  <h3 className="mt-auto">Business Development</h3>

                  <p className="mb-0 text-muted">
                    Recommend well-known venture capital institutions and
                    industry leaders to promote projects to the next phase.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 py-md-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4 mt-4 mt-md-7 mb-md-7 text-center">
              <h1>Why You Should Apply</h1>
            </div>
          </div>
          <div className="row">
            {applies.map(({ img, title, des }) => (
              <div className={`col-12 col-md-6 col-lg-4`}>
                <div
                  className={`card card-border shadow-lg mb-6 mb-md-8 lift lift-lg overflow-hidden ${styles.mainBorder}`}
                  style={{ borderRadius: 10, height: 400 }}
                >
                  <div className={`card-body text-center `}>
                    <div className="icon-circle text-white mb-10">
                      <img src={img} alt="..." className="mw-100" />
                    </div>

                    <h4 className="fw-bold">{title}</h4>

                    <p className="text-gray-700 mb-5">{des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-8"
        style={{
          background:
            "linear-gradient(315.52deg, rgba(255,0,80, .1) 0.88%, rgba(112,0,255, .1) 71.7%, rgba(0,39,255,.1) 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-7">
              <div className="mb-8 mb-md-0">
                <img
                  src={png42}
                  alt="..."
                  className="screenshot img-fluid mw-md-110 float-end me-md-6 mb-6"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <h2 className="text-center">How to Apply</h2>
              {appliesAnswers.map(({ title, des }, index) => (
                <div className="d-flex" key={index}>
                  <div className="badge badge-lg badge-rounded-circle bg-primary-soft mt-1">
                    <span>{index + 1}</span>
                  </div>

                  <div className="ms-5">
                    <h3>{title}</h3>

                    <p className="text-gray-700 mb-6">{des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer classList="bg-dark" />
    </section>
  );
}

export default React.memo(Grants);
