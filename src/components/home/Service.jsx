import "./Service.css";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="service m-md-5 m-2  my-5">
      <div className="row">
        {/* Left Section (Paperless Warranty) */}

        <div className="col-lg-4 col-md-6 mb-0 d-flex align-items-center justify-content-center">
          <div
            className="position-relative text-center"
          >
            <img
              src="/wrrior_md (1) (1).jpg"
              alt=""
              className="img-fluid rounded-3"
            />
            <div
              className="position-absolute bottom-0 start-0 w-100 text-dark p-2"
              style={{
                background: "rgba(255, 255, 255, 1)",
                borderBottomLeftRadius: "0.60rem",
                borderBottomRightRadius: "0.50rem",
              }}
            >
              <h3 className="warrior-md mb-0">Yasar Arafath - MD</h3>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 p-sm-0 py-0 ">
          <div className="service-left p-4  text-white h-100">
            <div className="steps">
              <h4 className="pt-3 fw-bold">Vision Statement</h4>
              <p>
                Our Vision is to be the global leader in sustainable energy and
                water solutions, providing innovative inverters, UPS systems ,
                batteries ,solar systems , and water purifiers, We aim to
                empower communities with reliable , eco-friendly technologies ,
                promoting a healthier planet and ensuring energy and water
                independence for all.{" "}
              </p>
              <p className="service-text text-justify">
                "I am so proud of our dedicated and very responsive team in
                manufacturing and installing premium inverters, batteries, solar
                systems, and water purifiers. Our journey has been driven by a
                commitment to innovation, quality, and sustainability. We have
                consistently delivered reliable energy solutions tailored to
                meet the diverse needs of our residential, commercial, and
                industrial clients. Our success is a testament to our dedicated
                team and loyal customers. As we look to the future, we remain
                steadfast in our mission to lead the renewable energy sector,
                providing advanced technologies that promote environmental
                stewardship and energy independence."
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Customer Support Options) */}
        <div className="col-lg-4 col-md-6 mb-4 p-0">
          <div className="service-right bg-white p-4 h-100 d-flex flex-column justify-content-between">
            <div className=" bg-light ">
              <img
                src="/unmatched customer support 540  360px.jpg"
                alt="Customer Support Agent"
                className="img-fluid rounded-5"
              />
            </div>
            <div className="pt-3">
              <h4 className="fw-bold">Unmatched Customer Support</h4>
              <p className="text-muted">
                Warrior prioritizes customer satisfaction to ensure the best pre
                and post sales experience. 24 Hr customer support is available.
              </p>

              <div className="d-flex justify-content-between align-items-center">
                {/* WhatsApp Chat Button */}
                <a
                  href="https://wa.me/919847341800" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success rounded-5 border me-2"
                >
                  <i className="fas fa-comments"></i> Chat With Us
                </a>

                {/* Phone Call Button */}
                <a
                  href="tel:+919847341800" // Replace with your phone number
                  className="btn btn-info border rounded-5 me-2"
                >
                  <i className="fas fa-phone"></i> Call Us
                </a>
                <Link to={"/contact"}>
                  <button className="btn btn-warning rounded-5 border">
                    <i className="fas fa-file-alt"></i> Complaints
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
