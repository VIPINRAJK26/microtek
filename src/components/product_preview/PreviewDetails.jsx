import "./PreviewDetails.css";
import { Link, useParams } from "react-router-dom";
import usePreviewDetails from "../../hooks/usePreviewDetails";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axiosInstance from "../../api/axios";
import LiBatInverter from "../../pages/LiBatInverter";
import Loader from "../common/Loader";
import Products from "../../pages/ProductPage";

const PreviewDetails = ({
  variantData,
  uniqueVariants,
  previewDetails,
  subcategory,
}) => {
  // const { previewDetails, loading, error } = usePreviewDetails();
  const { category } = useParams();
  const [show, setShow] = useState(false);
  const [brochureUrl, setBrochureUrl] = useState("");
  const [loadingBrochure, setLoadingBrochure] = useState(false);
  const [errorBrochure, setErrorBrochure] = useState(null);

  console.log(variantData, "variant data in preview details");

  const handleClose = () => setShow(false);

  const handleShow = async (fullUrl) => {
    try {
      setLoadingBrochure(true);
      setErrorBrochure(null);

      setBrochureUrl(fullUrl);
      setShow(true);
    } catch (error) {
      console.error(error);
      setErrorBrochure("Brochure not available.");
    } finally {
      setLoadingBrochure(false);
    }
  };

  const selectedPreview = previewDetails?.filter(
    (item) =>
      item.category === category &&
      (!subcategory || item.subcategory === subcategory)
  );

  const lithiumSubcategories = [
    "online_inverter_and_ups",
    "offline_inverter_and_ups",
    "hkva_ups",
  ];

  return (
    <div className="container-fluid px-0 mt-md-4 px-md-5">
      <div className="row g-0">
        {/* Check if any valid products first */}
        {variantData && variantData.length > 0 ? (
          <Products
            category={category}
            subcategory={subcategory}
            uniqueVariants={uniqueVariants}
            variantData={variantData}
            previewDetails={previewDetails}
          />
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center w-100 py-5">
            <img
              src="/coming_soon.jpg"
              alt="No products available"
              className="img-fluid mb-3"
              style={{ maxWidth: "300px", opacity: 0.8 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewDetails;
