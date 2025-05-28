import React from "react";
import "./PreviewDetails.css";
import { Link, useParams } from "react-router-dom";
import usePreviewDetails from "../../hooks/usePreviewDetails";

const PreviewDetails = () => {
  const { previewDetails, loading, error } = usePreviewDetails();
  const { category, subcategory } = useParams();

  const groupedByVariant = previewDetails.reduce((acc, product) => {
    const key = product.variant_name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(product);
    return acc;
  }, {});

  console.log(subcategory, "subcategory from URL");
  console.log(category, "category from URL");
  console.log(groupedByVariant, "groupedByVariant");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filter all items matching string category (slug)
  const selectedPreview = previewDetails?.filter(
    (item) =>
      item.category === category &&
      (!subcategory || item.subcategory === subcategory)
  );

  console.log(selectedPreview, "selectedPreview");
  console.log(previewDetails, "previewDetails");

  return (
    <div className="preview container-fluid mx-0 px-0 mt-5 px-md-5 px-3 ">
      <div className="preview-main row">
        {selectedPreview && selectedPreview.length > 0 ? (
          selectedPreview.map((product, index) => (
            <div
              className="col-12 col-sm-12 col-md-8 col-lg-6 p-2 mb-4"
              key={index}
            >
              <div
                className="preview-main-card card bg-info rounded-0 d-flex flex-column justify-content-between"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="preview-body d-flex flex-column justify-content-between card-body mt-5 p-3">
                  <div>
                    <h5 className="card-subtitle pt-3 text-white w-50">
                      {product.slogan}
                    </h5>
                  </div>

                  <div className="detail-section">
                    <ul
                      className="list-unstyled text-white fw-bold"
                      style={{ lineHeight: "28px" }}
                    >
                      {product.feature1.split(",").map((feature, idx) => (
                        <li key={idx}>{feature.trim()}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="pt-4 d-flex flex-wrap gap-2">
                      <Link
                        to={`/products/${category}/${product.variant_name}`}
                      >
                        <button className="btn btn-danger rounded-5">
                          View All Variants
                        </button>
                      </Link>
                      <button className="btn btn-outline-light rounded-5">
                        <i className="fa-solid fa-download me-2" />
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center text-center fw-bold small gap-2 mt-2 flex-wrap">
                {product.feature2.split("|").map((feature, idx, arr) => (
                  <span key={idx} className="d-flex align-items-center">
                    {feature.replace(/\r?\n|\r/g, "").trim()}
                    {idx !== arr.length - 1 && <span className="mx-2">|</span>}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>Nothing to show</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewDetails;
