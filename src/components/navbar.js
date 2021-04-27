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
              <a
                className="nav-link dropdown-toggle"
                id="navbarLandings"
                data-bs-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Landings
              </a>
              <div
                className="dropdown-menu dropdown-menu-xl p-0"
                aria-labelledby="navbarLandings"
              >
                <div className="row gx-0">
                  <div className="col-12 col-lg-6">
                    <div className="dropdown-img-start">
                      {/*  Heading */}
                      <h4 className="fw-bold text-white mb-0">
                        Want to see an overview?
                      </h4>

                      {/*  Text */}
                      <p className="fs-sm text-white">
                        See all the pages at once.
                      </p>

                      {/*  Button */}
                      <a
                        href="{{webRoot}}/overview.html"
                        className="btn btn-sm btn-white shadow-dark fonFt-size-sm"
                      >
                        View all pages
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="dropdown-body">
                      <div className="row gx-0">
                        <div className="col-6">
                          {/*  Heading */}
                          <h6 className="dropdown-header">Services</h6>

                          {/*  List */}
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/coworking.html"
                          >
                            Coworking
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/rental.html"
                          >
                            Rental
                          </a>
                          <a
                            className="dropdown-item mb-5"
                            href="{{webRoot}}/job.html"
                          >
                            Job Listing
                          </a>

                          {/*  Heading */}
                          <h6 className="dropdown-header">Apps</h6>

                          {/*  List */}
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/desktop-app.html"
                          >
                            Desktop
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/mobile-app.html"
                          >
                            Mobile
                          </a>
                        </div>
                        <div className="col-6">
                          {/*  Heading */}
                          <h6 className="dropdown-header">Web</h6>

                          {/*  List */}
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/index.html"
                          >
                            Basic
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/startup.html"
                          >
                            Startup
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/enterprise.html"
                          >
                            Enterprise
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/service.html"
                          >
                            Service
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/cloud.html"
                          >
                            Cloud Hosting
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/agency.html"
                          >
                            Agency
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/framework.html"
                          >
                            Framework{" "}
                            <span className="h6 text-uppercase text-primary">
                              (new)
                            </span>
                          </a>
                        </div>
                      </div>{" "}
                      {/*  / .row */}
                    </div>
                  </div>
                </div>{" "}
                {/*  / .row */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/home"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Economic
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarPages"
                data-bs-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg"
                aria-labelledby="navbarPages"
              >
                <div className="row gx-0">
                  <div className="col-6">
                    <div className="row gx-0">
                      <div className="col-12 col-lg-6">
                        {/*  Heading */}
                        <h6 className="dropdown-header">Career</h6>

                        {/*  List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/careers.html"
                        >
                          Listing
                        </a>
                        <a
                          className="dropdown-item mb-5"
                          href="{{webRoot}}/career-single.html"
                        >
                          Opening
                        </a>

                        {/*  Heading */}
                        <h6 className="dropdown-header">Company</h6>

                        {/*  List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/about.html"
                        >
                          About
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/pricing.html"
                        >
                          Pricing
                        </a>
                        <a
                          className="dropdown-item mb-5 mb-lg-0"
                          href="{{webRoot}}/terms-of-service.html"
                        >
                          Terms
                        </a>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/*  Heading */}
                        <h6 className="dropdown-header">Help center</h6>

                        {/*  List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/help-center.html"
                        >
                          Overview
                        </a>
                        <a
                          className="dropdown-item mb-5"
                          href="{{webRoot}}/help-center-article.html"
                        >
                          Article
                        </a>

                        {/*  Heading */}
                        <h6 className="dropdown-header">Contact</h6>

                        {/*  List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/contact.html"
                        >
                          Basic
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/contact-alt.html"
                        >
                          Cover
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row gx-0">
                      <div className="col-12 col-lg-6">
                        {/*  Heading */}
                        <h6 className="dropdown-header">Blog</h6>

                        {/*  List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/blog.html"
                        >
                          Rich View
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/blog-post.html"
                        >
                          Article
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/blog-showcase.html"
                        >
                          Showcase
                        </a>
                        <a
                          className="dropdown-item mb-5 mb-lg-0"
                          href="{{webRoot}}/blog-search.html"
                        >
                          Search
                        </a>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/*  Heading */}
                        <h6 className="dropdown-header">Portfolio</h6>

                        {/*  List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-masonry.html"
                        >
                          Masonry
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-grid-rows.html"
                        >
                          Grid Rows
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-parallax.html"
                        >
                          Parallax
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-case-study.html"
                        >
                          Case Study
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-sidebar.html"
                        >
                          Sidebar
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-sidebar-fluid.html"
                        >
                          Sidebar: Fluid
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-grid.html"
                        >
                          Basic Grid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/*  / .row */}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarAccount"
                data-bs-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarAccount">
                <li className="dropdown-item dropend">
                  <a
                    className="dropdown-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Settings
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/account-general.html"
                    >
                      General
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/account-security.html"
                    >
                      Security
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/account-notifications.html"
                    >
                      Notifications
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/billing-plans-and-payment.html"
                    >
                      Plans & Payment
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/billing-users.html"
                    >
                      Users
                    </a>
                  </div>
                </li>
                <li className="dropdown-item dropend">
                  <a
                    className="dropdown-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Sign In
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/signin-cover.html"
                    >
                      Side Cover
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/signin-illustration.html"
                    >
                      Illustration
                    </a>
                    <a className="dropdown-item" href="{{webRoot}}/signin.html">
                      Basic
                    </a>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      href="#modalSigninHorizontal"
                    >
                      Modal Horizontal
                    </a>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      href="#modalSigninVertical"
                    >
                      Modal Vertical
                    </a>
                  </div>
                </li>
                <li className="dropdown-item dropend">
                  <a
                    className="dropdown-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Sign Up
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/signup-cover.html"
                    >
                      Side Cover
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/signup-illustration.html"
                    >
                      Illustration
                    </a>
                    <a className="dropdown-item" href="{{webRoot}}/signup.html">
                      Basic
                    </a>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      href="#modalSignupHorizontal"
                    >
                      Modal Horizontal
                    </a>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      href="#modalSignupVertical"
                    >
                      Modal Vertical
                    </a>
                  </div>
                </li>
                <li className="dropdown-item dropend">
                  <a
                    className="dropdown-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Password Reset
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/password-reset-cover.html"
                    >
                      Side Cover
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/password-reset-illustration.html"
                    >
                      Illustration
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/password-reset.html"
                    >
                      Basic
                    </a>
                  </div>
                </li>
                <li className="dropdown-item dropend">
                  <a
                    className="dropdown-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Error
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/error-cover.html"
                    >
                      Side Cover
                    </a>
                    <a
                      className="dropdown-item"
                      href="{{webRoot}}/error-illustration.html"
                    >
                      Illustration
                    </a>
                    <a className="dropdown-item" href="{{webRoot}}/error.html">
                      Basic
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDocumentation"
                data-bs-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Documentation
              </a>
              <div
                className="dropdown-menu dropdown-menu-md"
                aria-labelledby="navbarDocumentation"
              >
                <div className="list-group list-group-flush">
                  <a
                    className="list-group-item"
                    href="{{webRoot}}/docs/index.html"
                  >
                    {/*  Icon */}
                    <div className="icon icon-sm text-primary">
                      {/* {{> general/clipboard}} */}
                    </div>

                    {/*  Content */}
                    <div className="ms-4">
                      {/*  Heading */}
                      <h6 className="fw-bold text-uppercase text-primary mb-0">
                        Documentation
                      </h6>

                      {/*  Text */}
                      <p className="fs-sm text-gray-700 mb-0">
                        Customizing and building
                      </p>
                    </div>
                  </a>
                  <a
                    className="list-group-item"
                    href="{{webRoot}}/docs/alerts.html"
                  >
                    {/*  Icon */}
                    <div className="icon icon-sm text-primary">
                      {/* {{> layout/layout-4-blocks}} */}
                    </div>

                    {/*  Content */}
                    <div className="ms-4">
                      {/*  Heading */}
                      <h6 className="fw-bold text-uppercase text-primary mb-0">
                        Components
                      </h6>

                      {/*  Text */}
                      <p className="fs-sm text-gray-700 mb-0">
                        Full list of components
                      </p>
                    </div>
                  </a>
                  <a
                    className="list-group-item"
                    href="{{webRoot}}/docs/changelog.html"
                  >
                    {/*  Icon */}
                    <div className="icon icon-sm text-primary">
                      {/* {{> files/file}} */}
                    </div>

                    {/*  Content */}
                    <div className="ms-4">
                      {/*  Heading */}
                      <h6 className="fw-bold text-uppercase text-primary mb-0">
                        Changelog
                      </h6>

                      {/*  Text */}
                      <p className="fs-sm text-gray-700 mb-0">
                        Keep track of changes
                      </p>
                    </div>

                    {/*  Badge */}
                    <span className="badge rounded-pill bg-primary-soft ms-auto">
                      2.0.0-beta1
                    </span>
                  </a>
                </div>
              </div>
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
