import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import styles from "./style.module.scss";

function Home() {

  return (
    <>
      <Navbar classList="navbar-light bg-white" container="container" button="primary" />

      {/*  WELCOME */}
      <section className="pt-4 pt-md-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 order-md-2">

              {/*  Image */}
              <img src="../../img/illustrations/illustration-1.png" className="img-fluid mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />

            </div>
            <div className="col-12 col-md-5 order-md-1" data-aos="fade-up">

              {/*  Heading */}
              <h1 className="display-4">
                Crab Network. <br />
                <span className="text-primary">Cross-chain bridge hub of Kusama.</span>
              </h1>

              {/*  Text */}
              <p className="lead text-muted mb-0">
               Crab is the canary network of Darwinia, and is the first blockchain in the Kusama ecosystem to natively support cross-chain as well as smart contract and NFT. Crab Network intends to participate in the Kusama Parachain Slot Auctions.
            </p>

            </div>
          </div> {/*  / .row */}
        </div> {/*  / .container */}
      </section>


      {/*  ABOUT */}
      <section className="pt-8 pt-md-12" id="about">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/*  Heading */}
              <h2 className="fw-bold">
                Crab Network <span className="text-primary">Features</span>
            </h2>

              {/*  Text */}
              <p className="fs-lg text-muted mb-9">
                The positioning of Crab is similar to Polkadot's Kusama Network. Expect Chaos is a reasonable expectation.
            </p>

            </div>
          </div> {/*  / .row */}
          <div className="row">
            <div className="col-12 col-lg-6">

              {/*  Item */}
              <div className="row align-items-center mb-8" >
                <div className="col-4 col-lg-5">

                  {/*  Image */}
                  <img src="../../img/illustrations/illustration-4.png" alt="..." className="img-fluid" />

                </div>
                <div className="col-8 col-lg-7">

                  {/*  Heading */}
                  <h3 className="fw-bold mb-2">
                    Cross-chain interoperability
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                    Crab provides an entrance to the Polkadot ecology for projects that have been deployed on public blockchains such as Ethereum and BSC.
                </p>

                </div>
              </div> {/*  / .row */}

              {/*  Item */}
              <div className="row align-items-center mb-8">
                <div className="col-4 col-lg-5">

                  {/*  Image */}
                  <img src="../../img/illustrations/illustration-8.png" alt="..." className="img-fluid" />

                </div>
                <div className="col-8 col-lg-7">

                  {/*  Heading */}
                  <h3 className="fw-bold mb-2">
                    Smart contract solution
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                  Crab's DVM is compatible with the Ethereum virtual machine, and supports DApps such as Defi and NFT, which can be easily migrated to Polkadot.
                </p>

                </div>
              </div> {/*  / .row */}


            </div>
            <div className="col-12 col-lg-6">
              {/*  Item */}
              <div className="row align-items-center mb-8" >
                <div className="col-4 col-lg-5">

                  {/*  Image */}
                  <img src="../../img/illustrations/illustration-7.png" alt="..." className="img-fluid" />

                </div>
                <div className="col-8 col-lg-7">

                  {/*  Heading */}
                  <h3 className="fw-bold mb-2">
                    Evolution Land
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                  Evolution Crab Land has been open, integrating NFT blind box GameFi mining and other new gameplay methods
                </p>

                </div>
              </div> {/*  / .row */}

              {/*  Item */}
              <div className="row align-items-center mb-8" >
                <div className="col-4 col-lg-5">

                  {/*  Image */}
                  <img src="../../img/illustrations/illustration-6.png" alt="..." className="img-fluid" />

                </div>
                <div className="col-8 col-lg-7">

                  {/*  Heading */}
                  <h3 className="fw-bold mb-2">
                    Faster and easier user experience
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                  Crab network can bring users a very high-quality experience, including very low transaction fees and ultra-fast transaction confirmation speed.
                </p>

                </div>
              </div> {/*  / .row */}

            </div>
          </div> {/*  / .row */}
        </div> {/*  / .container */}
      </section>


      <section>
        <div className="pt-4 pt-md-12">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-1">


                <img src="../../img/illustrations/illustration-2.png" className="img-fluid mw-md-100 mw-lg-100 mb-6 mb-md-0" alt="..." />

              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-2">


                <h1 className="display-3 text-center text-md-start">
                Economic Model<span className="text-primary"></span><br />
            </h1>


                <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                The Crab network is a network with long-term value. Some RINGs are allocated to Crab Network as backing assets to make it serve as a canary network having real economic incentives and massive gaming theory testing, not just working a testnet. <br/>
                The economic model parameters of the Crab network are the same as those of the Darwinia Mainnet, and use the same staking and inflation models.
            </p>


                <div className="text-center text-md-start">
                  <a href="overview.html" className="btn btn-primary shadow lift me-1">
                    Staking <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="pt-8 pt-md-12">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* Heading */}
              <h2 className="fw-bold">
                Tokenomics
              </h2>

              {/* Text */}
              <p className="fs-lg text-muted mb-9">
                There are two types of tokens in Crab Network. They represent different economic strategies of the Crab Network. They are designed to make Crab more reasonable and stable.
              </p>

            </div>
          </div> {/* / .row */}

          <div className="row justify-content-between">
            <div className="col-12 col-md">

              {/* Blockquote */}
              <blockquote className="blockquote mb-8 mb-md-0">

                {/* Logo */}
                <div className="img-fluid mb-5 mb-md-6 svg-shim">
                  {/* {{> logotype/airbnb}} */}
                  <img src="../../img/crab/cring.png" alt="CRING TOKEN" width="120px" />
                </div>

                {/* Text */}
                <p className="lead text-gray-700 mb-5 mb-md-7">
                  The native tokens for Crab Network is CRING, CRING can be used as gas for transactions. Gas include transaction fees, contract execution fees, network bandwidth charges, storage fees, and more.
              </p>

                {/* Footer */}
                <p className="fs-sm fw-bold mb-0">
                  <a href="#!" className="fw-bold text-decoration-none">Learn more <i className="fe fe-arrow-right ms-3"></i></a>
              </p>
                <p className="fs-sm text-muted mb-0">

              </p>

              </blockquote>

            </div>
            <div className="col-1"></div>
            <div className="col-1 border-start"></div>
            <div className="col-12 col-md">

              {/* Blockquote*/}
              <blockquote className="blockquote mb-0">

                {/* Logo*/}
                <div className="img-fluid mb-5 mb-md-6 svg-shim">
                  {/* {{> logotype/coinbase}} */}
                  <img src="../../img/crab/ckton.png" alt="CKTON TOKEN" width="120px" />
                </div>

                {/* Text*/}
                <p className="lead text-gray-700 mb-5 mb-md-7">
                To encourage users to make long term commitments, users can choose to lock CRING for 3 - 36 months in the process of Staking, and the system will offer a CKTON token as reward for users participating in Staking.
              </p>

                {/* Footer*/}
                <p className="fs-sm fw-bold mb-0">
                  <a href="#!" className="fw-bold text-decoration-none">Learn more <i className="fe fe-arrow-right ms-3"></i></a>
              </p>
                <p className="fs-sm text-muted mb-0">

              </p>

              </blockquote>

            </div>
          </div> {/* / .row*/}
        </div> {/* / .container*/}
      </section>


      {/*  CATEGORIES */}
      <section className="pt-8 pt-md-12">

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* Heading */}
              <h2 className="fw-bold">
                Kusama Parachain Slot Auction
              </h2>

              {/* Text */}
              <p className="fs-lg text-muted mb-9">
                Crab will participate in the Kusama Parachain Slot Auction. Obtaining slots will help the Crab Network to be better. We need more support to ensure the success of the auction, and you will get rewards.
              </p>

            </div>
          </div> {/* / .row */}

          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">

              {/*  Card */}
              <div className="card card-border border-primary shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div className={`card-body text-center ${styles.minH450}`}>

                  {/*  Icon */}
                  <div className="text-white mb-5">
                    {/* <i className="fe fe-users"></i> */}
                    <img src="../../img/crab/home-action-1.png" alt="..." width="130px"/>
                  </div>

                  {/*  Heading */}
                  <h4 className="fw-bold">
                  What is Parachain Slot Auctions
                </h4>

                  {/*  Text */}
                  <p className="text-gray-700 mb-5">
                  Kusama is a multi-chain network. All parachains are connected to Kusama through slots. Since the initial number of slots is small, it needs to be obtained through auctions.
                </p>

                  {/*  Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">
                      Learn more
                  </span>
                  </span>

                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4">

              {/*  Card */}
              <div className="card card-border border-primary shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div className={`card-body text-center ${styles.minH450}`}>

                  {/*  Icon */}
                  <div className="text-white mb-5">
                    <img src="../../img/crab/home-action-2.png" alt="..." width="130px"/>
                  </div>

                  {/*  Heading */}
                  <h4 className="fw-bold">
                  What is Crowdloan
                </h4>

                  {/*  Text */}
                  <p className="text-gray-700 mb-5">
                  In order to obtain a slot, Crab Network will launch Crowdloan to allow the community to participate together to increase the probability of success while users' KSMs will not leave away from their wallets.
                </p>

                  {/*  Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">
                    Learn more
                  </span>
                  </span>

                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4">

              {/*  Card */}
              <div className="card card-border border-primary shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div className={`card-body text-center ${styles.minH450}`}>

                  {/*  Icon */}
                  <div className="text-white mb-5">
                    <img src="../../img/crab/home-action-3.png" alt="..." width="130px"/>
                  </div>

                  {/*  Heading */}
                  <h4 className="fw-bold">
                  You will get generous rewards
                </h4>

                  {/*  Text */}
                  <p className="text-gray-700 mb-5">
                  Participating users will get generous rewards even if the auction fails.
                </p>

                  {/*  Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">
                    Learn more
                  </span>
                  </span>

                </div>
              </div>

            </div>

          </div> {/*  / .row */}
        </div>
      </section>
      <Footer classList="bg-dark"/>
    </>
  );
}

export default Home;
