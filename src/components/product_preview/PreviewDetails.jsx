import React from "react";
import "./PreviewDetails.css";
import { Link, useParams } from "react-router-dom";

const batteryData = [
  {
    name: "Nikola",
    slogan:
      "The power that lasts, keep your devices running longer and stronger.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-100820.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Max",
    slogan:
      "Uninterrupted energy for every moment, batteries for reliable performance.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-100820.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Power",
    slogan: "Charge up with confidence, exceptional durability and longevity.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-100820.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Extreme G",
    slogan: "Maximize your uptime with high-performance.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-100820.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
];

const upsData = [
  {
    name: "Spider",
    slogan:
      "The power that lasts, keep your devices running longer and stronger.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-118334.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Fighter",
    slogan:
      "Uninterrupted energy for every moment, batteries for reliable performance.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-118334.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Hurricane",
    slogan: "Charge up with confidence, exceptional durability and longevity.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-118334.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Radeon",
    slogan: "Maximize your uptime with high-performance.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-vector/blank-square-colorful-abstract-frame_53876-118334.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
];

const PreviewDetails = () => {
  const { category } = useParams();

  let productData = [];

  if (category === "Batteries") {
    productData = batteryData;
  } else if (category === "Home Ups") {
    productData = upsData;
  }

  return (
    <div className="preview container mx-0 px-0 mt-5">
      <div className="preview-main row">
        {productData.map((product, index) => (
          <div className="col-md-8 col-lg-6 p-1 mb-4" key={index}>
            <div className="preview-main-card rounded-0 card bg-info">
              <div className="preview-body ps-5 card-body">
                <h2 className="fw-bold card-title">{product.name}</h2>
                <p className="card-text fw-medium fs-5 w-75">
                  {product.slogan}
                </p>
                {/* Render features and buttons */}
                <ul className="list-unstyled">
                  {product.features1.map((features1, idx) => (
                    <li key={idx}>{features1}</li>
                  ))}
                </ul>
                <div className="text-start pt-5">
                  <Link to={"/single"}>
                    <button className="btn btn-primary rounded-5 me-3">
                      View All Variants
                    </button>
                  </Link>
                  <button className="btn btn-secondary rounded-5">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex text-center fw-bold small gap-3">
              {product.features2.map((features2, idx) => (
                <li className="list-unstyled" key={idx}>
                  {features2}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewDetails;
