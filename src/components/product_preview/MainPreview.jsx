import React from "react";
import useMainPreview from "../../hooks/useMainPreview";
import { useParams } from "react-router-dom";

const MainPreview = () => {
  const { mainPreview, loading, error } = useMainPreview();
  const { category } = useParams();
  const categoryToShow = category;
  console.log(categoryToShow, "main category");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const selectedPreview = mainPreview?.find(
    (item) => item.category === categoryToShow
  );

  console.log(selectedPreview,"main selectedPreview");
  return (
    <div className="header-section mb-5 ">
      {
        selectedPreview ? (
          <img
            src={selectedPreview.image}
            alt="no image"
            className="img-fluid"
            style={{ width: "100%", height: "50vh" }}
          />
        ) :
        (
          <img
            src="https://t4.ftcdn.net/jpg/03/24/96/81/360_F_324968111_sArrasbZoPu3xeKMedtQAWGk2ZqDeivM.jpg"
            alt="no image"
            className="img-fluid"
            style={{ width: "100%", height: "100vh" }}
          />
        )
      }
      
    </div>
  );
};

export default MainPreview;
