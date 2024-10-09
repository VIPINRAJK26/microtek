import React from "react";
import MainPreview from "../components/product_preview/MainPreview";
import PreviewDetails from "../components/product_preview/PreviewDetails";

const ProductPreview = () => {

  return (
    <div>
      <MainPreview />
      <div className="d-flex justify-content-center align-items-center">
        <PreviewDetails  />
      </div>
    </div>
  );
};

export default ProductPreview;
