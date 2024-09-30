import React from "react";
import CopyRight from "./CopyRight";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer  pt-5 ">
      <div className="container">
        <div className="row">
          {/* Products Section */}
          <div className="col-md-3 mb-3">
            <h5>Products</h5>
            <ul className="list-unstyled small pt-md-3">
              <li className="pb-md-2">Inverter/Home UPS</li>
              <li className="pb-md-2">Solar Power</li>
              <li className="pb-md-2">Power Backup Batteries</li>
              <li className="pb-md-2">Solar Batteries</li>
              <li className="pb-md-2">Tubular Batteries</li>
              <li className="pb-md-2">Lithium ion Battery</li>
              <li className="pb-md-2">EV Charger</li>
              <li className="pb-md-2">Auto Stabilizer</li>
              <li>Water Purifier</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-3">
            <h5>Services</h5>
            <ul className="list-unstyled small pt-md-3">
              <li className="pb-md-2">Product Registration</li>
              <li className="pb-md-2">AMC Registration</li>
              <li className="pb-md-2">Installation Request</li>
              <li className="pb-md-2">Complaint Registration</li>
              <li className="pb-md-2">Store Locator</li>
              <li>Service Centre Locator</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled small pt-md-3">
              <li className="pb-md-2">About Us</li>
              <li className="pb-md-2">Careers</li>
              <li className="pb-md-2">Careers</li>
              <li className="pb-md-2">Contact Us</li>
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
              <i className="fas fa-map-marker-alt"></i>{" "}
              Warrior Power India,Manjeri,Malappuram,Kerala, 676517 <br />
            </p>
            <h5 className="pt-md-3">Follow Us</h5>
            <div className="d-flex gap-2 pt-md-3">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>


      <CopyRight />
    </footer>
  );
};

export default Footer;
