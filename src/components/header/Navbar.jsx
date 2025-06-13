import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useCartContext } from "../../context/CartContex";
import { useOrderContext } from "../../context/OrderContext";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Home Ups");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isUserDropdownVisible, setIsUserDropdownVisible] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cartQuantity } = useCartContext();
  const { undeliveredCount } = useOrderContext();
  const location = useLocation();

  const dropdownRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const hideDropdownTimeout = useRef(null);



  console.log(undeliveredCount, "undeliveredCount");
  // const { cartCount } = useCart();

  const showDropdown = () => {
    clearTimeout(hideDropdownTimeout.current);
    setIsUserDropdownVisible(true);
  };

  const hideDropdown = () => {
    hideDropdownTimeout.current = setTimeout(() => {
      setIsUserDropdownVisible(false);
    }, 2000);
  };

  useEffect(() => {
    const close = () => setShowMobileMenu(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // remove this if you're now only using hover logic
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsUserDropdownVisible(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const categories = {
    "Home Inverter/Ups": [
      { name: "Online Inverter/Ups", img: "/1. ONLINE UPS.png" },
      { name: "Offline Inverter/Ups", img: "/2. OFF LINE UPS.png" },
      { name: "HKVA UPS", img: "/3. HKVA UPS.png" },
      { name: "AVR UPS", img: "/avr.png" },
    ],
    "Lithium Inverter/Ups": [
      { name: "Online Inverter/Ups", img: "/Lion 1.png" },
      { name: "Offline Inverter/Ups", img: "/Lion 2.png" },
      { name: "HKVA UPS", img: "/lion hkva.png" },
      { name: "AVR UPS", img: "/lion hkva.png" },
    ],

    "Solar Power": [
      { name: "Solar Ups", img: "/4. SOLAR UPS.png" },
      { name: "Solar Panel", img: "/5. SOLAR PANEL.png" },
      { name: "Lithium Solar Inverter", img: "/5. LITHIUM SOLAR INVERTER.png" },
      { name: "Mppts", img: "/6. MPPT.png" },
    ],
    Batteries: [
      { name: "Tubular Batteries", img: "/7. TUBULAR BATTERY.png" },
      { name: "Solar Batteries", img: "/8. SOLAR BATTERY.png" },
      // { name: "Lithium Ion Battery", img: "/9.LITHIUM ION BATTERY.png" },
    ],
    "Li-Ion Batteries": [
      { name: "Lithium Batteries", img: "/lithium-battery.png" },
    ],
    "Ev Charger": [],
    "Auto Stabilizer": [],
    // "Li-Ion Battery Inverter": [],
  };

  const categorySlugMap = {
    "Home Inverter/Ups": "home_inverter_and_ups",
    "Lithium Inverter/Ups": "lithium_inverter_and_ups",
    "Solar Power": "solar_power",
    Batteries: "batteries",
    "Li-Ion Batteries": "li_ion_batteries",
    "Ev Charger": "ev_charger",
    "Auto Stabilizer": "auto_stabilizer",
  };

  const subcategorySlugMap = {
    "Online Inverter/Ups": "online_inverter_and_ups",
    "Offline Inverter/Ups": "offline_inverter_and_ups",
    "HKVA UPS": "hkva_ups",
    "AVR UPS": "avr_ups",
    // "Li-ion Battery Inverter": "li_ion_battery_inverter",
    "Solar Ups": "solar_ups",
    "Solar Panel": "solar_panel",
    "Lithium Solar Inverter": "lithium_solar_inverter",
    Mppts: "mppts",
    "Tubular Batteries": "tubular_batteries",
    "Solar Batteries": "solar_batteries",
    "Lithium Batteries": "lithium_batteries",
  };

  // const handleSearchClick = () => {
  //   setShowSearchInput(!showSearchInput);
  // };

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
              <Link className="nav-link fs-6 nav-text" to={"/"}>
                Home
              </Link>
            </li>

            <li
              className="nav-item dropdown me-3"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <span className="nav-link fs-6 dropdown-toggle nav-text">
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
                            onMouseEnter={() => {
                              if (category !== "Lithium Inverter/Up") {
                                setSelectedCategory(category);
                              }
                            }}
                            onClick={() => {
                              if (category === "Lithium Inverter/Up") {
                                const encodedCategory =
                                  encodeURIComponent(category);
                                navigate(`/preview/${encodedCategory}`);
                              }
                            }}
                          >
                            {category}
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
              <Link to="/contact" className="nav-link fs-6 nav-text">
                Support & Contact
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/store" className="nav-link fs-6 nav-text">
                Store Locator
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="position-relative d-inline-block"
          onMouseEnter={() => setShowProfileMenu(true)}
          onMouseLeave={() => setShowProfileMenu(false)}
        >
          {/* Trigger Icon */}
          <i className="fas fa-user p-3"></i>

          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="position-absolute end-0 mt-2 bg-white border rounded shadow py-3 px-2 z-50"
                style={{ width: "140px" }}
              >
                {user ? (
                  <div className="">
                    <div>
                      <button className="user-button btn w-100 position-relative">
                        <Link
                          to="/orders"
                          className="text-decoration-none text-dark d-inline-block position-relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {undeliveredCount > 0 && (
                            <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              {undeliveredCount}
                            </span>
                          )}
                          My Orders
                        </Link>
                      </button>

                      <button
                        className="user-button btn text-danger w-100 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          localStorage.clear();
                          window.location.href = "/";
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      state={{ from: location }}
                      className=" cursor-pointer btn user-button w-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className=" cursor-pointer btn user-button w-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="position-relative me-3">
          <Link to="/cart" className="nav-link nav-text">
            <i className="fas fa-shopping-cart p-1"></i>
            <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartQuantity}
            </span>
          </Link>
        </div>

        {/* <div className="d-flex align-items-center">
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
        </div> */}

        <div className="customer-care text-center d-md-block d-none">
          <span className="small">Customer Support</span> <br />
          <a href="tel:9846151900" className="care text-decoration-none p-0">
            +91 9847341800
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
