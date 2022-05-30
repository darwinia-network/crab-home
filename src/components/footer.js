function Footer({ classList, container, button }) {
  return (
    <footer className={`py-8 py-md-11 ${classList}`} data-aos="fade-up" data-aos-duration="500">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            {/* Brand*/}
            <img src="../img/brand.svg" alt="..." className="footer-brand img-fluid mb-2" width="90px" />

            {/* Text*/}
            <p className="text-gray-700 mb-2">A better way to build.</p>

            {/* Social*/}
            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className="list-inline-item list-social-item me-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:hello@crab.network"
                  className="text-decoratiResourceson-none"
                >
                  <img src="../img/icons/social/mail.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://t.me/DarwiniaNetwork"
                  className="text-decoration-none"
                >
                  <img src="../img/icons/social/twitter.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://medium.com/@DarwiniaNetwork"
                  className="text-decoration-none"
                >
                  <img src="../img/icons/social/medium.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/darwinia-network/darwinia/tree/master/runtime/crab"
                  className="text-decoration-none"
                >
                  <img src="../img/icons/social/github.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            {/* Heading*/}
            <h6 className="fw-bold text-uppercase text-gray-700">Resources</h6>

            {/* List*/}
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://darwinia.network/Darwinia_Genepaper_EN.pdf"
                  className="text-reset"
                >
                  Genepaper
                </a>
              </li>
              <li className="mb-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://darwinia.network/ChainRelay_Technical_Paper(Preview)_EN.pdf"
                  className="text-reset"
                >
                  Technical Paper
                </a>
              </li>
              <li className="mb-3">
                <a href="https://docs.crab.network/" className="text-reset">
                  Documentation
                </a>
              </li>
              <li className="mb-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/darwinia-network/darwinia/tree/master/runtime/crab"
                  className="text-reset"
                >
                  Github
                </a>
              </li>
              <li className="mb-3">
                <a rel="noreferrer" target="_blank" href="https://crab.subscan.io/" className="text-reset">
                  Explorer
                </a>
              </li>
              <li className="mb-3">
                <a rel="noreferrer" target="_blank" href="https://apps.darwinia.network/" className="text-reset">
                  Wallet
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            {/* Heading*/}
            <h6 className="fw-bold text-uppercase text-gray-700">Pages</h6>

            {/* List*/}
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a href="/economic" className="text-reset">
                  Economic
                </a>
              </li>
              {/* <li className="mb-3">
                <a href="/plo" className="text-reset">
                  PLO
                </a>
              </li> */}
            </ul>
          </div>
          <div className="col-12 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
            {/* Heading*/}
            <h6 className="fw-bold text-uppercase text-gray-700">Connect</h6>

            {/* List*/}
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a rel="noreferrer" target="_blank" href="https://medium.com/@DarwiniaNetwork" className="text-reset">
                  Medium
                </a>
              </li>
              <li className="mb-3">
                <a rel="noreferrer" target="_blank" href="https://t.me/DarwiniaNetwork" className="text-reset">
                  Twitter
                </a>
              </li>
              <li className="mb-3">
                <a rel="noreferrer" target="_blank" href="mailto:hello@crab.network" className="text-reset">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* / .row*/}
      </div>
      {/* / .container*/}
    </footer>
  );
}

export default Footer;
