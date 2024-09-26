import React from "react";
import "./Service.css"; // Optional custom styling for finer details

const Service = () => {
  return (
    <div className="service container rounded-5 my-5">
      <div className="row">
        {/* Left Section (Paperless Warranty) */}
        <div className="col-lg-4 col-md-12 p-0 ">
          <div className="service-left p-4  text-white h-100">
            <h4 className="mb-3">How to register for a paperless warranty?</h4>
            <p>RAHO ON FULL ON WITH PAPERLESS WARRANTY IN 3 SIMPLE STEPS.</p>
            <div className="steps">
              <div className="step mb-3">
                <span className="step-number bg-danger text-white rounded-circle me-2">
                  1
                </span>
                Click on Customer Care.
              </div>
              <div className="step mb-3">
                <span className="step-number bg-danger text-white rounded-circle me-2">
                  2
                </span>
                Select Product Registration.
              </div>
              <div className="step mb-3">
                <span className="step-number bg-danger text-white rounded-circle me-2">
                  3
                </span>
                Enter your registered mobile number and relevant details.
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section (Image and Taglines) */}
        <div className="service-middle col-lg-4 col-md-6 mb-0 d-flex  flex-column justify-content-between">
          <div className="bg-light text-center  mb-4 h-50 d-flex flex-column justify-content-center">
            <div className="image mt-md-0 mt-4">
              <img
                src="https://t4.ftcdn.net/jpg/03/24/96/81/360_F_324968111_sArrasbZoPu3xeKMedtQAWGk2ZqDeivM.jpg"
                alt="Customer Support"
                className="img-fluid "
                />
                {/* <h5>Delighting customers is our philosophy</h5> */}
            </div>
          </div>
          <div className="image2 bg-light h-50 d-flex flex-column justify-content-center">
            <img
              src="https://img.freepik.com/premium-photo/professional-call-center-woman-assisting-customers-with-crm_901408-9429.jpg"
              alt="Customer Support Agent"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Right Section (Customer Support Options) */}
        <div className="col-lg-4 col-md-6 mb-4 p-0">
          <div className="bg-white p-4 rounded h-100 d-flex flex-column">
            <h4>Unmatched Customer Support</h4>
            <p className="text-muted">
              Microtek prioritizes customer satisfaction to ensure the best pre
              and post sales experience. We would be happy to help you.
            </p>

            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-success rounded-5 border me-2">
                <i className="fas fa-comments"></i> Chat With Us
              </button>
              <button className="btn btn-info border rounded-5 me-2">
                <i className="fas fa-phone"></i> Call Us
              </button>
              <button className="btn btn-warning rounded-5 border">
                <i className="fas fa-file-alt"></i> Complaints
              </button>
            </div>
            <div className="mt-auto text-end">
              <a href="/services" className="text-primary text-decoration-none">
                View Services &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
