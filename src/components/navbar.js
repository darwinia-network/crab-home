import { Link } from 'react-router-dom';

function Navbar({ classList, container, button }) {
  return (
    <nav className={`navbar navbar-expand-lg ${classList}`}>
      <div className={container}>
        {/*  Brand */}
        <Link className="navbar-brand" to="/">
          <img src="../img/brand.svg" className="navbar-brand-img" alt="..." />
        </Link>

        {/*  Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*  Collapse */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/*  Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-x"></i>
          </button>

          {/*  Navigation */}
          <ul className="navbar-nav ms-auto">

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/economic"
              >
                Economic Model
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/plo"
              >
                PLO
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                rel="noreferrer"
                href="https://crab.network/docs/"
                target="_blank"
              >
                Documentation
              </a>
            </li>
          </ul>

          {/*  Button */}
          <a
            className={`navbar-btn btn btn-sm btn-${button} lift ms-auto`}
            href="https://apps.darwinia.network/"
            rel="noreferrer"
            target="_blank"
          >
            Apps
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
