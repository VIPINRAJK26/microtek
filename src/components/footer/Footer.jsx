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
              <li className="pb-md-2">Power Backup Solutions</li>
              <li className="pb-md-2">Critical Power Backup Solution</li>
              <li className="pb-md-2">Voltage Stabilizers</li>
              <li className="pb-md-2">Solar Solutions</li>
              <li className="pb-md-2">E-Rickshaw Chargers</li>
              <li>Electricals</li>
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
              <li className="pb-md-2">Media</li>
              <li className="pb-md-2">Careers</li>
              <li className="pb-md-2">E-Catalogues</li>
              <li className="pb-md-2">Blog</li>
              <li className="pb-md-2">Contact Us</li>
              <li>User Manual</li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div className="col-md-3 mb-1 small">
            <h5 className="pb-md-3">Connect with us</h5>
            <p>
              <i className="fas fa-phone"></i> +91-9711666444
            </p>
            <p>
              <i className="fas fa-envelope"></i> ho@microtek.in
            </p>
            <h5 className="pb-md-3 pt-md-3">Corporate Office</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> H-57, Udyog Nagar,
              Rohtak Road, Delhi-110041 <br /> 011-71225500
            </p>
            <h5 className="pt-md-3">Follow Us</h5>
            <div className="d-flex gap-2 pt-md-3">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <CopyRight/>
    </footer>
  );
};

export default Footer;
