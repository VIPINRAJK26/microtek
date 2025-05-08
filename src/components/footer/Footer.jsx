import React from "react";
import CopyRight from "./CopyRight";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Footer = () => {
  const { category } = useParams();
  console.log(category, "category");

  const categorySlugMap = {
    "Home Ups": "home_ups",
    "Solar Power": "solar_power",
    Batteries: "batteries",
    "Ev Charger": "ev_charger",
    "Auto Stabilizer": "auto_stabilizer",
    "Li-Ion Batteries": "li_ion_batteries",
  };

  return (
    <footer className="footer  pt-5 ">
      <div className="container">
        <div className="row">
          {/* Products Section */}
          <div className="col-md-3">
            <h5 className="mb-3">Products</h5>
            <ul className="list-unstyled">
              {Object.entries(categorySlugMap).map(([category, slug]) => (
                <li key={slug}>
                  <Link
                    to={`/preview/${slug}`}
                    className="text-black text-decoration-none"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-3">
            <h5>Services</h5>
            <ul className="list-unstyled small pt-md-3">
              <Link to={"/contact"} className="text-decoration-none text-black">
                <li className="pb-md-2">Product Installation</li>
                <li className="pb-md-2">AMC Request</li>
                <li className="pb-md-2">General Service Request</li>
                <li className="pb-md-2">Complaint Registration</li>
                <li className="pb-md-2">Business Enquiry</li>
              </Link>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled small pt-md-3">
              <Link to={"/"} className="text-decoration-none text-black">
                <li className="pb-md-2">Home</li>
              </Link>
              <Link
                to={"/products/:category"}
                className="text-decoration-none text-black"
              >
                <li className="pb-md-2">Products</li>
              </Link>
              <Link to={"/store"} className="text-decoration-none text-black">
                <li className="pb-md-2">Store Locator</li>
              </Link>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div className="col-md-3 mb-1 small">
            <h5 className="pb-md-3">Address</h5>
            <p>
              <i className="fas fa-phone"></i> +91 9846151900
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@warriorind.com
            </p>
            <h5 className="pb-md-3 pt-md-3">Corporate Office</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> Warrior Power
              India,Manjeri,Malappuram,Kerala, 676517 <br />
            </p>
            <h5 className="pt-md-3">Follow Us</h5>
            <div className="d-flex gap-2 pt-md-3">
              <a href="https://www.facebook.com/warriorpowerindia/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com/warriorpowerind">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/102684799/admin/dashboard/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://in.pinterest.com/warriorpowerindia/">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="https://www.instagram.com/warriorpowerindia/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <CopyRight />
    </footer>
  );
};

export default Footer;
