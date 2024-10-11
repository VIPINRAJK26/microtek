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
      "Designed for all types of UPS and inverters",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-photo/passport-red-case-toy-plane_23-2148169798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Max",
    slogan:
      "Uninterrupted energy for every moment, batteries for reliable performance.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
      "Designed for all types of UPS and inverters",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-photo/passport-red-case-toy-plane_23-2148169798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Power",
    slogan: "Charge up with confidence, exceptional durability and longevity.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
      "Designed for all types of UPS and inverters",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-photo/passport-red-case-toy-plane_23-2148169798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Extreme G",
    slogan: "Maximize your Up-time with the High-Performance.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
      "Designed for all types of UPS and inverters",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Tubular Type: Long Backup",
      "Warranty: Upto 42 Months",
    ],
    Image:
      "https://img.freepik.com/free-photo/passport-red-case-toy-plane_23-2148169798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
];

const upsData = [
  {
    name: "Spider",
    slogan: "Switch on to a brighter tomorrow with our inverter or UPS.",
    features1: ["IPS TECHNOLOGY", "32 BIT", "OVERLOAD PROTECTION"],
    features2: [
      "Technology: Pure Sinewave",
      "Range: 1500 VA",
      "Comfortable Battery: Flat, Tubular & SMF",
      "Warranty: 3 Years",
    ],
    Image:
      "https://img.freepik.com/free-photo/top-view-airplane-with-copy-space_23-2148608798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Fighter",
    slogan: "Switch on to a brighter tomorrow with our inverter or UPS.",
    features1: ["IPS TECHNOLOGY", "32 BIT", "OVERLOAD PROTECTION"],
    features2: [
      "Technology: Pure Sinewave",
      "Range: 1500 VA",
      "Comfortable Battery: Flat, Tubular & SMF",
      "Warranty: 3 Years",
    ],
    Image:
      "https://img.freepik.com/free-photo/top-view-airplane-with-copy-space_23-2148608798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Hurricane",
    slogan: "Restoring Power , Empowering Each Journey.",
    features1: ["IPS TECHNOLOGY", "32 BIT", "OVERLOAD PROTECTION"],
    features2: [
      "Technology: Pure Sinewave",
      "Range: 1500 VA",
      "Comfortable Battery: Flat, Tubular & SMF",
      "Warranty: 3 Years",
    ],
    Image:
      "https://img.freepik.com/free-photo/top-view-airplane-with-copy-space_23-2148608798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    name: "Radeon",
    slogan: "Uninterrupted Power, Unmatched Reliability.",
    features1: ["IPS TECHNOLOGY", "32 BIT", "OVERLOAD PROTECTION"],
    features2: [
      "Technology: Pure Sinewave",
      "Range: 1500 VA",
      "Comfortable Battery: Flat, Tubular & SMF",
      "Warranty: 3 Years",
    ],
    Image:
      "https://img.freepik.com/free-photo/top-view-airplane-with-copy-space_23-2148608798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
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
          <div className="col-md-8 col-lg-6 col-12 p-1 mb-4 " key={index}>
            <div
              className="preview-main-card rounded-0 card bg-info"
              style={{
                backgroundImage: `url(${product.Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "550px", 
              }}
            >
              <div className="preview-body ps-5 card-body">
                <h2 className="fw-bold card-title text-white">
                  {product.name}
                </h2>
                <p className="card-text fw-medium fs-5 w-75 text-white">
                  {product.slogan}
                </p>

                <div className="detail-section">
                  <ul className="list-unstyled text-white fw-bold" style={{lineHeight:"30px"}}>
                    {product.features1.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="text-start pt-5">
                    <Link to={`/products/${category}`}>
                      <button className="btn btn-primary rounded-5 me-3">
                        View All Variants
                      </button>
                    </Link>
                    <button className="btn btn-transparent rounded-5">
                      <i className="fa-solid fa-download me-2" />
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex text-center fw-bold small gap-1">
              {product.features2.map((feature, idx) => (
                <li className="list-unstyled" key={idx}>
                  {feature}
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
