import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        {/* Left Section: Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="https://www.microtek.in/img/logo.svg"
            alt="Logo"
            className="logo-img ms-auto"
          />
        </a>

        {/* Right-aligned Hamburger Toggler on small screens */}
        <button
          className="navbar-toggler ms-auto" // Align to the right
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Section: Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Product 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Customer Care
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Media
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Store Locator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                E-Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Search Icon and Customer Care */}
        <div className="d-flex align-items-center ">
          <a href="#" className="me-3">
            <i className="fas fa-search text-black ps-3 ps-md-0"></i>
          </a>
          <div className="customer-care me-2 d-md-block d-none">
            <span className="small">Customer Care</span> <br />
            <a
              href="tel:7283838383"
              className="text-primary text-decoration-none p-0 fw-bold "
            >
              7283838383
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
