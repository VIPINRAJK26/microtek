import useMainPreview from "../../hooks/useMainPreview";
import { useParams } from "react-router-dom";

const MainPreview = () => {
  const { mainPreview, loading, error } = useMainPreview();
  const { category } = useParams();
  const categoryToShow = category;
  console.log(categoryToShow, "main category");
  console.log(category,"category from url")

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const selectedPreview = mainPreview?.find(
    (item) => item.category === categoryToShow
  );

  console.log(selectedPreview,"main selectedPreview");
  return (
    <div className="header-section  ">
      {selectedPreview ? (
        <img
          src={selectedPreview.image}
          alt="no image"
          className="img-fluid"
          style={{ width: "100%", height: "50vh" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/No_image.jpg";
          }}
        />
      ) : (
        <img
          src="/Main_preview.jpeg"
          alt="no image"
          className="img-fluid"
          style={{ width: "100%", height: "50vh" }}
        />
      )}
    </div>
  );
};

export default MainPreview;
