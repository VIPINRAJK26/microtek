import React from "react";
import "./PreviewDetails.css";
import { Link, useParams } from "react-router-dom";
import usePreviewDetails from "../../hooks/usePreviewDetails";

const PreviewDetails = () => {
  const { previewDetails, loading, error } = usePreviewDetails();
  const { category,variant } = useParams();

  console.log(previewDetails, "PreviewDetails");
  console.log(variant, "variant");
  console.log(category, "category from URL");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filter all items matching string category (slug)
  const selectedPreview = previewDetails?.filter(
    (item) => item.category === category
  );

  console.log(selectedPreview, "selectedPreview");

  return (
    <div className="preview container mx-0 px-0 mt-5">
      <div className="preview-main row">
        {selectedPreview && selectedPreview.length > 0 ? (
          selectedPreview.map((product, index) => (
            <div className="col-md-8 col-lg-6 col-12 p-1 mb-4" key={index}>
              <div
                className="preview-main-card rounded-0 card bg-info"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "550px",
                }}
              >
                <div className="preview-body ps-5 card-body">
                  <h2 className="fw-bold card-title text-white">
                    {product.variant_name}
                  </h2>

                  <h3 className="card-subtitle text-white">{product.slogan}</h3>

                  <div className="detail-section">
                    <ul
                      className="list-unstyled text-white fw-bold"
                      style={{ lineHeight: "30px" }}
                    >
                      {product.feature1.split(",").map((feature, idx) => (
                        <li key={idx}>{feature.trim()}</li>
                      ))}
                    </ul>

                    <div className="text-start pt-5">
                      <Link to={`/products/${category}/${product.slug}`}>
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

              <div className="d-flex text-center fw-bold small gap-1 mt-2 flex-wrap">
                {product.feature2.split(",").map((feature, idx) => (
                  <li className="list-unstyled" key={idx}>
                    {feature.trim()}
                  </li>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>Nothing to show</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewDetails;
