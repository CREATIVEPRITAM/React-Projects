import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg menu-holder">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src="logo.png"></img>
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
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active navbar-text"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active navbar-text"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link navbar-text"
                  aria-current="page"
                  to="/work"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link navbar-text"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link navbar-text"
                  aria-current="page"
                  to="/testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link navbar-text"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
