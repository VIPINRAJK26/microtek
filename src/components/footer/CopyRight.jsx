import React from "react";
import { Link } from "react-router-dom";
import "./Copyright.css";

const CopyrightSection = () => {
  return (
    <div className="copyright-section mt-4 container ">
      <div className="d-lg-flex copyright-main justify-content-between text-center pt-3 pb-2">
        <div>
          <p>&copy; 2024 warrior. All Rights Reserved.</p>
        </div>
        <div className="w-50 mx-auto">
          <p className="text-center ">
            Our Parent Company's Legal Name Is VILAKKUMADATHIL YASAR ARAFATH our
            trade Name Is Smart Enterprises, and warriorind Is A Subsidiary
          </p>
        </div>
        <div className="footer-links">
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <span className="divider">|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="divider">|</span>
          <Link to="/refund-policy">Refund Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
