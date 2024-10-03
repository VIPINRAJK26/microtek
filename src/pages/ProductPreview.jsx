import React from "react";
import MainPreview from "../components/product_preview/MainPreview";
import PreviewDetails from "../components/product_preview/PreviewDetails";

const ProductPreview = () => {
  // Define the product data
  const product = {
    image: "https://images.mgid.com/img_66b9f3211d.png",
    name: "Elite",
    description:
      "Redefines Power Backup with its Harmonious Blend of Style & Functionality",
    features: [
      { icon: "fas fa-child", text: "Ultimate Safety for children" },
      { icon: "fas fa-wheelchair", text: "Strong Wheelbase for Easy Movement" },
      { icon: "fas fa-battery-full", text: "In-Built Battery Enclosure" },
    ],
    highlights: [
      { label: "Technology", value: "Pure Sinewave" },
      { label: "VA Range", value: "1500 VA" },
      { label: "Battery Support", value: "Flat, Tubular & SMF" },
      { label: "Warranty", value: "3 years" },
    ],
  };

  return (
    <div>
      <MainPreview />
      {/* Pass the product data as a prop to PreviewDetails */}
      <div className="d-flex justify-content-center">
        <PreviewDetails product={product} />
      </div>
    </div>
  );
};

export default ProductPreview;
