import { Link } from "react-router-dom";
import brand from "./img/crab-plo-brand.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" data-aos="fade-right" data-aos-duration="500">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img alt="..." src={brand} className="navbar-brand-img" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-x"></i>
          </button>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#crowdloan-section">
                Crowdloan
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#contribute-section">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline-section">
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faqs-section">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
