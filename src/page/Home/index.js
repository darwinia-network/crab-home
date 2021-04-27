import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Home() {

  return (
    <>
      <Navbar classList="navbar-light bg-white" container="container" button="primary" />

      {/*  WELCOME */}
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 order-md-2">

              {/*  Image */}
              <img src="../../img/illustrations/illustration-1.png" className="img-fluid mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />

            </div>
            <div className="col-12 col-md-7 order-md-1" data-aos="fade-up">

              {/*  Heading */}
              <h1 className="display-4">
                Crab Network. <br />
                <span className="text-primary">Cross-chain bridge hub of Kusama.</span>
              </h1>

              {/*  Text */}
              <p className="lead text-muted mb-0">
               Darwinia Crab 网络是达尔文网络先行网，是Kusama生态第一条同时原生支持跨链、智能合约和NFT的区块链。Crab网络即将参与波卡Kusama平行链插槽拍卖。
            </p>

            </div>
          </div> {/*  / .row */}
        </div> {/*  / .container */}
      </section>


      {/*  ABOUT */}
      <section className="pt-8 pt-md-10" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">

              {/*  Button */}
              <a href="#about" className="btn btn-white btn-rounded-circle shadow mt-n12 mt-md-n14" data-scroll>
                <i className="fe fe-arrow-down"></i>
              </a>

            </div>
          </div> {/*  / .row */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/*  Heading */}
              <h2 className="fw-bold">
                Crab 网络 <span className="text-primary">的特点</span>.
            </h2>

              {/*  Text */}
              <p className="fs-lg text-muted mb-9">
                Crab 网络对于达尔文的定位类似于 Kusama 网络之于 Polkadot，Expect Chaos 是一个合理预期
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
                    跨链互操作性
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                    依托达尔文网络的跨链桥接技术创新，为已经在以太坊，BSC 等公链部署的项目提供进入波卡生态的入口。
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
                    提供智能合约解决方案
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                  Crab 网络 DVM 兼容以太坊虚拟机，支持 Defi，NFT 等 DApps 轻松迁移至波卡
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
                    进化星球 Crab 大陆 GameFi 玩法
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                  达尔文生态进化星球游戏新大陆已经开放部署于 Crab 网络，集成 NFT 盲盒 GameFi 挖矿等全新玩法
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
                    升级用户交易体验
                </h3>

                  {/*  Text */}
                  <p className="text-gray-700 mb-0">
                  低 Gas 费 + 支持 NFT 跨链转账，低 Gas 费 + 支持 NFT 跨链转账低 Gas 费 + 支持 NFT 跨链转账
                </p>

                </div>
              </div> {/*  / .row */}

            </div>
          </div> {/*  / .row */}
        </div> {/*  / .container */}
      </section>


      <section>
        <div className="pt-4 pt-md-11">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-1">


                <img src="../../img/illustrations/illustration-2.png" className="img-fluid mw-md-100 mw-lg-100 mb-6 mb-md-0" alt="..." />

              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-2">


                <h1 className="display-3 text-center text-md-start">
                经济模型<span className="text-primary"></span><br />
            </h1>


                <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                Crab 网络是具有长期价值的网络。 它具有 RING 令牌的支持，这使它能够为测试和完善跨链理论等提供真正的经济激励，同时保留成为测试网的好处。
Crab 网络的经济模型参数与 Darwinia Mainnet 相同，并且使用相同的 Staking 和通胀模型。Crab 网络的代币为 CRING 和 CKTON，CRING 的初始供应量为2000M，CKTON 的初始供应量为 0。
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
      <section className="pt-8 pt-md-10">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* Heading */}
              <h2 className="fw-bold">
                Tokenomics
              </h2>

              {/* Text */}
              <p className="fs-lg text-muted mb-9">
                Crab 网络有两种代币，他们代表着Crab 网络不同的经济策略，是为了让 Crab 更合理和稳定
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
                  CRING
                </div>

                {/* Text */}
                <p className="lead text-gray-700 mb-5 mb-md-7">
                  达尔文 Crab 网络的原生令牌为 CRING，CRING 可用作交易的 gas 费用。gas 费包括交易费、合约执行费、网络带宽费、存储费等。持有 CRING 可使用户参与 Crab 网络的 Staking 和 链上治理。
              </p>

                {/* Footer */}
                <p className="fs-sm fw-bold mb-0">
                  了解更多
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
                  CKTON
                </div>

                {/* Text*/}
                <p className="lead text-gray-700 mb-5 mb-md-7">
                KTON是RING（Darwinia Network本地令牌）的衍生承诺令牌，它鼓励长期参与。的衍生承诺令牌，它鼓励长期参与。的衍生承诺令牌，它鼓励长期参与。的衍生承诺令牌，它鼓励长期参与。
              </p>

                {/* Footer*/}
                <p className="fs-sm fw-bold mb-0">
                  了解更多
              </p>
                <p className="fs-sm text-muted mb-0">

              </p>

              </blockquote>

            </div>
          </div> {/* / .row*/}
        </div> {/* / .container*/}
      </section>


      {/*  CATEGORIES */}
      <section className="pt-8 pt-md-10">

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* Heading */}
              <h2 className="fw-bold">
                Kusama 平行链拍卖
              </h2>

              {/* Text */}
              <p className="fs-lg text-muted mb-9">
                Crab 将会参与 Kusama平行链插槽拍卖，获取插槽有助于 Crab 网络更好的发展，我们需要更多的支持以保证竞拍的成功率，而你将获得奖励
              </p>

            </div>
          </div> {/* / .row */}

          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">

              {/*  Card */}
              <div className="card card-border border-primary shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div className="card-body text-center">

                  {/*  Icon */}
                  <div className="icon-circle bg-primary text-white mb-5">
                    <i className="fe fe-users"></i>
                  </div>

                  {/*  Heading */}
                  <h4 className="fw-bold">
                  什么是平行链拍卖
                </h4>

                  {/*  Text */}
                  <p className="text-gray-700 mb-5">
                  Kusama 是一个多链网络，所有平行链通过插槽接入Kusama，因为初期插槽数量较少，所以需要通过拍卖来获得。
                </p>

                  {/*  Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">
                      了解更多
                  </span>
                  </span>

                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4">

              {/*  Card */}
              <div className="card card-border border-success shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div className="card-body text-center">

                  {/*  Icon */}
                  <div className="icon-circle bg-success text-white mb-5">
                    <i className="fe fe-clock"></i>
                  </div>

                  {/*  Heading */}
                  <h4 className="fw-bold">
                  什么是众贷
                </h4>

                  {/*  Text */}
                  <p className="text-gray-700 mb-5">
                  为了获得插槽，Crab网络将发起众贷，让社区参与一起来提高成功的可能性（参与用户的KSM不会离开自己的钱包）
                </p>

                  {/*  Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">
                    了解更多
                  </span>
                  </span>

                </div>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4">

              {/*  Card */}
              <div className="card card-border border-warning shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div className="card-body text-center">

                  {/*  Icon */}
                  <div className="icon-circle bg-warning text-white mb-5">
                    <i className="fe fe-users"></i>
                  </div>

                  {/*  Heading */}
                  <h4 className="fw-bold">
                  你将获得丰厚回报
                </h4>

                  {/*  Text */}
                  <p className="text-gray-700 mb-5">
                  为了回报做出贡献的社区用户，Darwinia 将提供丰厚的奖励，哪怕竞拍失败。了解详细信息
                </p>

                  {/*  Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">
                    了解更多
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
