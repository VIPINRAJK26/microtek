import CopyRight from "./CopyRight";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  // Map of category names to their corresponding slugs used in URLs
  const categorySlugMap = {
    "Home Inverter/Ups": "home_inverter_and_ups",
    "Solar Power": "solar_power",
    Batteries: "batteries",
    "Ev Charger": "ev_charger",
    "Auto Stabilizer": "auto_stabilizer",
    "Li-Ion Batteries": "li_ion_batteries",
  };

  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row">
          {/* Products Section */}
          <div className="col-md-3">
            <h5 className="mb-3">Products</h5>
            <ul className="list-unstyled">
              {Object.entries(categorySlugMap).map(([name, slug]) => (
                <li key={slug}>
                  <Link
                    to={`/preview/${slug}`}
                    className=" footer-products text-decoration-none"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-2 pt-md-5 pb-2 text-black">
              <a
                href="https://www.facebook.com/warriorpowerindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/warriorpowerindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://in.pinterest.com/warriorpowerindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fab fa-pinterest"></i>
              </a>

              <a
                href="https://x.com/warriorpowerind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/102684799/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UCBXwXd4tBux6AYYdeSfSAGw/community?pvf=CAI%253D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-3">
            <h5>Services</h5>
            <ul className="list-unstyled small pt-md-3">
              <Link to="/contact" className="text-decoration-none text-black">
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
              <Link to="/" className="text-decoration-none text-black">
                <li className="pb-md-2">Home</li>
              </Link>
              <Link
                to="/contact" // Default or general category
                className="text-decoration-none text-black"
              >
                <li className="pb-md-2">support & contact</li>
              </Link>
              <Link to="/store" className="text-decoration-none text-black">
                <li className="pb-md-2">Store Locator</li>
              </Link>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div className="col-md-3 mb-1 small">
            <h5 className="pb-md-3">Address</h5>
            <p>
              <i className="fas fa-phone "></i>
              <i className="fa-brands fa-whatsapp ps-2"></i> +91 9846151900
            </p>
            <p>
              <i className="fas fa-phone "></i>
              <i className="fa-brands fa-whatsapp ps-2"></i> +91 9846081800
            </p>
            <p>
              <i className="fas fa-phone "></i>
              <i className="fa-brands fa-whatsapp ps-2"></i> +91 9847341800
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@warriorind.com
            </p>
            <h5 className="pb-md-1 pt-md-1">Corporate Office</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> Warrior Power India,
              Manjeri, Malappuram, Kerala, 676517
            </p>
          </div>
        </div>
      </div>

      <CopyRight />
    </footer>
  );
};

export default Footer;
