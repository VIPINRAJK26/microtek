import React from "react";
import { Link } from "react-router-dom";
import "./Copyright.css"

const CopyrightSection = () => {
  return (
    <div className="copyright-section mt-4  ">
      <div className="copyright-main container text-center pt-3 pb-2">
        <p>&copy; 2024 warrior. All Rights Reserved.</p>
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
