import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Home Ups");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isUserDropdownVisible, setIsUserDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = {
    "Home Ups": [
      { name: "Online Ups", img: "/1. ONLINE UPS.png" },
      { name: "Offline Ups", img: "/2. OFF LINE UPS.png" },
      { name: "HKVA UPS", img: "/3. HKVA UPS.png" },
      { name: "Li-ion Battery Inverter", img: "/3. HKVA UPS.png" },
    ],
    "Solar Power": [
      { name: "Solar Ups", img: "/4. SOLAR UPS.png" },
      { name: "Solar Panels", img: "/5. SOLAR PANEL.png" },
      { name: "Lithium Solar Inverter", img: "/5. LITHIUM SOLAR INVERTER.png" },
      { name: "Mppts", img: "/6. MPPT.png" },
    ],
    Batteries: [
      { name: "Tubular Batteries", img: "/7. TUBULAR BATTERY.png" },
      { name: "Solar Batteries", img: "/8. SOLAR BATTERY.png" },
      { name: "Lithium Ion Battery", img: "/9.LITHIUM ION BATTERY.png" },
    ],
    "Ev Charger": [],
    "Auto Stabilizer": [],
    "Li-Ion Batteries": [],
  };

  const categorySlugMap = {
    "Home Ups": "home_ups",
    "Solar Power": "solar_power",
    Batteries: "batteries",
    "Ev Charger": "ev_charger",
    "Auto Stabilizer": "auto_stabilizer",
    "Li-Ion Batteries": "li_ion_batteries",
  };

  const subcategorySlugMap = {
    "Online Ups": "online_ups",
    "Offline Ups": "offline_ups",
    "HKVA UPS": "hkva_ups",
    "Li-ion Battery Inverter": "li_ion_battery_inverter",
    "Solar Ups": "solar_ups",
    "Solar Panels": "solar_panels",
    "Lithium Solar Inverter": "lithium_solar_inverter",
    Mppts: "mppts",
    "Tubular Batteries": "tubular_batteries",
    "Solar Batteries": "solar_batteries",
    "Lithium Ion Battery": "lithium_ion_battery",
  };

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid ps-md-5 pe-md-5 ps-0 pe-0">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="/Warrior logo Png-01.png"
            alt="Logo"
            loading="lazy"
            className="logo-img ms-auto"
          />
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-3">
              <Link className="nav-link nav-text" to={"/"}>
                Home
              </Link>
            </li>

            <li
              className="nav-item dropdown me-3"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <span className="nav-link dropdown-toggle nav-text">
                Products
              </span>

              {isDropdownVisible && (
                <div className="dropdown-menu p-4 mega-dropdown border-0">
                  <div className="row">
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
                            {/* <Link
                              to={`/preview/${categorySlugMap[category]}`}
                              className="text-decoration-none text-black"
                            > */}
                              {category}
                            {/* </Link> */}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-md-9">
                      <div className="row">
                        {(categories[selectedCategory] || []).map(
                          (product, index) =>
                            product.name ? (
                              <div className="col-md-4" key={index}>
                                <Link
                                  to={`/preview/${
                                    categorySlugMap[selectedCategory]
                                  }/${subcategorySlugMap[product.name]}`}
                                  className="text-decoration-none"
                                >
                                  <div className="product-card text-center">
                                    <img
                                      src={product.img}
                                      alt={product.name}
                                      className="img-fluid"
                                    />
                                    <p>{product.name}</p>
                                  </div>
                                </Link>
                              </div>
                            ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="nav-item me-3">
              <Link to="/contact" className="nav-link nav-text">
                Support & Contact
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/store" className="nav-link nav-text">
                Store Locator
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="position-relative me-3 cursor-pointer"
          onMouseEnter={() => setIsUserDropdownVisible(true)}
          onMouseLeave={() => setIsUserDropdownVisible(false)}
          ref={dropdownRef}
        >
          <div className="nav-link nav-text cursor-pointer">
            <i className="fas fa-user p-1"></i>
          </div>
          {isUserDropdownVisible && (
            <div
              className="user-dropdown position-absolute end-0 mt-2 bg-white rounded shadow-sm p-2"
              style={{ width: "150px", zIndex: 1000 }}
            >
              {user ? (
                <button
                  className="dropdown-item text-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="dropdown-item"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="dropdown-item"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        <div className="position-relative me-3">
          <Link to="/cart" className="nav-link nav-text">
            <i className="fas fa-shopping-cart p-1"></i>
            <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </Link>
        </div>

        <div className="d-flex align-items-center">
          <div className="me-3">
            <span onClick={handleSearchClick} role="button">
              <i className="fas fa-search text-black ps-4 ps-md-0"></i>
            </span>
            {showSearchInput && (
              <div className="search-container show">
                <input
                  type="text"
                  className="form-control search-input p-0"
                  placeholder="Search..."
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>

        <div className="customer-care text-center d-md-block d-none">
          <span className="small">Customer Support</span> <br />
          <a href="tel:9846151900" className="care text-decoration-none p-0">
            +91 9846151900
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
