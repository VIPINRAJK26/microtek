import React from "react";
import "./PreviewDetails.css";
import { Link } from "react-router-dom";

const PreviewDetails = ({ product }) => {
  return (
    <div className="preview-details container pb-5 pt-5">
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid rounded-4"
      />
      <div className="preview-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <div className="features d-flex gap-4 pb-3">
          {product.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <i className={feature.icon}></i> <br />{" "}
              <p className="text-center">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="preview-button d-flex pb-2">
          <Link to={"/products"}>
            <button className="btn btn-primary bg-transparent rounded-5">
              View All Models
            </button>
          </Link>
          <button className="btn  bg-transparent ">
            Download Brochure
          </button>
        </div>
      </div>

      <div className="highlights small d-sm-flex gap-3">
        <button className="btn rounded-0">
          <p className="pb-5">Highlights</p>
        </button>
        <div className="pt-2 d-sm-flex  gap-3">
          {product.highlights.map((highlight, index) => (
            <p key={index}>
              <strong>{highlight.label}:</strong> {highlight.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewDetails;
