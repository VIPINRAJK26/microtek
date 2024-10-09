import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  // Toggle the search input visibility
  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  // State for managing hovered category
  const [selectedCategory, setSelectedCategory] = useState(
    "Home Ups"
  );

  // State to track if the dropdown is being hovered
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Categories and their corresponding products
  const categories = {
    "Home Ups": [
      {
        name: "Online Ups",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FInverterHome-Ups-menu-1721899901612.png&w=128&q=75",
      },
      {
        name: "Offline Ups",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FInverterHome-Ups-menu-1721899901612.png&w=128&q=75",
      },
      {
        name: "HKVA UPS",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FInverterHome-Ups-menu-1721899901612.png&w=128&q=75",
      },
    ],
    "Solar Power": [
      {
        name: "Solar Ups",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
      {
        name: "Solar Panels",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
      {
        name: "Lithium Solar Inverter",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
      {
        name: "Mppts",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
    ],
    "Batteries ": [
      {
        name: "Tubular Batteries",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
      {
        name: "Solar Batteries",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
      {
        name: "Lithium Ion Battery",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
    ],
    "Ev Charger": [
      {
        name: "",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
    ],
    "Auto Stabilizer": [
      {
        name: "",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
    ],
    "Water Purifier": [
      {
        name: "",
        img: "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct_subcategory%2FJumboHome-ups-menu-1721342056999.png&w=128&q=75",
      },
    ],
  };

  const navStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid ps-md-5 pe-md-5 ps-0 pe-0">
          {/* Left Section: Logo */}
          <Link className="navbar-brand" to={"/"}>
            <img
              src="/Warrior logo Png-01.png"
              alt="Logo"
              loading="lazy"
              className="logo-img ms-auto"
            />
          </Link>

          {/* Right-aligned Hamburger Toggler on small screens */}
          <button
            className="navbar-toggler ms-auto"
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
              <li className="nav-item me-3 ">
                <Link className="nav-link nav-text" to={"/"}>
                  Home
                </Link>
              </li>

              {/* Products Dropdown */}
              <li
                className="nav-item dropdown me-3"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                <a
                  className="nav-link dropdown-toggle nav-text"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  {/* <Link
                    to={"/products"}
                    className="text-decoration-none text-black"
                  > */}
                  Products
                  {/* </Link> */}
                </a>

                {/* Dropdown content */}
                {isDropdownVisible && (
                  <div className="dropdown-menu p-4 mega-dropdown border-0">
                    <div className="row">
                      {/* Left: Category List */}
                      <div
                        className="col-md-3"
                        style={{ borderRight: "1px solid #ccc" }}
                      >
                        <ul className="list-unstyled">
                          {Object.keys(categories).map((category) => (
                            <li
                              key={category}
                              className={`category-item ${
                                selectedCategory === category ? "active" : ""
                              }`}
                              onMouseEnter={() => setSelectedCategory(category)}
                            >
                              <Link
                                to={`/preview/${category}`}
                                style={navStyle}
                              >
                                {category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Product Grid */}
                      <div className="col-md-9">
                        <div className="row">
                          {categories[selectedCategory].map((product) => (
                            <div className="col-md-4" key={product.name}>
                              <div
                                className="product-card"
                                style={{ cursor: "pointer" }}
                              >
                                <Link to={"/preview"}>
                                  <img
                                    src={product.img}
                                    alt={product.name}
                                    className="img-fluid"
                                  />
                                </Link>
                                <p>{product.name}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link nav-text">Customer Service</Link>
              </li>

              <li className="nav-item me-3">
                <Link to={"/store"} className="nav-link nav-text">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Search Icon and Customer Care */}
          <div className="d-flex align-items-center">
            <div className="me-3">
              <a className="me-2" onClick={handleSearchClick}>
                <i className="fas fa-search text-black ps-4 ps-md-0"></i>
              </a>

              {/* Conditionally render the search input with fade-in animation */}
              <div
                className={`search-container ${showSearchInput ? "show" : ""}`}
              >
                <input
                  type="text"
                  className="form-control search-input p-0"
                  placeholder="Search..."
                  autoFocus
                />
              </div>
            </div>

            {/* Customer Care Info */}
            <div className="customer-care me-2 d-md-block d-none">
              <span className="small">Customer Care</span> <br />
              <a
                href="tel:7283838383"
                className="care text-decoration-none p-0"
              >
                7283838383
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
