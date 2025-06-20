import "./PreviewDetails.css";
import { Link, useParams } from "react-router-dom";
import usePreviewDetails from "../../hooks/usePreviewDetails";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axiosInstance from "../../api/axios";
import LiBatInverter from "../../pages/LiBatInverter";

const PreviewDetails = () => {
  const { previewDetails, loading, error } = usePreviewDetails();
  const { category, subcategory } = useParams();
  const [show, setShow] = useState(false);
  const [brochureUrl, setBrochureUrl] = useState("");
  const [loadingBrochure, setLoadingBrochure] = useState(false);
  const [errorBrochure, setErrorBrochure] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = async (fullUrl) => {
    try {
      setLoadingBrochure(true);
      setErrorBrochure(null);

      // Directly use the URL without a HEAD check
      setBrochureUrl(fullUrl);
      setShow(true);
    } catch (error) {
      console.error(error);
      setErrorBrochure("Brochure not available.");
    } finally {
      setLoadingBrochure(false);
    }
  };

  const groupedByVariant = previewDetails.reduce((acc, product) => {
    const key = product.slug;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(product);
    return acc;
  }, {});

  const filteredByCategory = previewDetails.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  const uniqueVariants = [...new Set(filteredByCategory.map((p) => p.slug))];

  // console.log(subcategory, "subcategory from URL");
  // console.log(category, "category from URL");
  // console.log(groupedByVariant, "groupedByVariant");
  // console.log(filteredByCategory, "filteredByCategory");
  // console.log(uniqueVariants, "uniqueVariants");
  // console.log(brochureUrl, "brochureUrl");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filter all items matching string category (slug)
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

  // if (
  //   category === "Lithium Inverter/Ups" &&
  //   lithiumSubcategories.includes(subcategory)
  // ) {
  //   return <LiBatInverter data={selectedPreview} />;
  // }


  return (
    <div className=" container-fluid  px-0 mt-md-4 px-md-5  ">
      <div className=" row">
        {category === "lithium_inverter_and_ups" &&
        lithiumSubcategories.includes(subcategory) ? (
          <LiBatInverter
            data={selectedPreview}
            category={category}
            subcategory={subcategory}
          />
        ) : selectedPreview && selectedPreview.length > 0 ? (
          selectedPreview.map((product, index) => (
            <div
              className="col-12 col-sm-12 col-md-8 col-lg-6 p-1 mb-md-3"
              key={index}
            >
              <div
                className="preview-main-card card  rounded-0 d-flex flex-column justify-content-between"
                style={{
                  backgroundImage: `url(${product.image})`,
                  // backgroundSize: "cover",
                  // backgroundPosition: "center",
                }}
              >
                <div className="preview-body d-flex flex-column justify-content-between card-body p-md-3">
                  <h5 className="card-subtitle text-white w-50">
                    {product.slogan}
                  </h5>

                  <div className="detail-section ps-md-2">
                    <ul
                      className="list-unstyled text-white fs-5 fw-bold"
                      style={{ lineHeight: "28px" }}
                    >
                      {product.feature1.split("#").map((feature, idx) => (
                        <li key={idx} className="mb-2 feature1">
                          {feature.trim()}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="pt-md-4 d-flex flex-md-wrap preview-buttons  gap-2">
                      <Link
                        to={`/products/${category}/${product.slug}`}
                        state={{
                          variantData: groupedByVariant[product.slug],
                          uniqueVariants: uniqueVariants,
                          previewDetails: previewDetails,
                          subcategory: subcategory,
                        }}
                      >
                        <button className="btn btn-danger rounded-5">
                          View All Variants
                        </button>
                      </Link>

                      <button
                        className="btn btn-outline-md-light btn-outline-dark text-md-white text-dark rounded-5"
                        onClick={() => handleShow(product.brochure)}
                        disabled={loadingBrochure}
                      >
                        <i className="fa-solid fa-download me-2" />
                        Download Brochure
                      </button>

                      <Modal
                        show={show}
                        onHide={handleClose}
                        size="xl"
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Brochure Preview</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {loadingBrochure && (
                            <p>Loading brochure preview...</p>
                          )}
                          {errorBrochure && (
                            <p className="text-danger">{errorBrochure}</p>
                          )}
                          {!loadingBrochure && !errorBrochure && (
                            <iframe
                              src={brochureUrl}
                              title="Brochure PDF"
                              width="100%"
                              height="600px"
                              style={{ border: "none" }}
                            />
                          )}
                        </Modal.Body>
                        <Modal.Footer>
                          <a
                            href={brochureUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success rounded-5"
                            download
                          >
                            <i className="fa-solid fa-file-arrow-down me-2" />
                            Download PDF
                          </a>
                          <button
                            className="btn btn-secondary rounded-5"
                            onClick={handleClose}
                          >
                            Close
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center text-center fw-bold small gap-2 mt-2 flex-wrap">
                {product.feature2.split("#").map((feature, idx, arr) => (
                  <span key={idx} className="d-flex align-items-center">
                    {feature.replace(/\r?\n|\r/g, "").trim()}
                    {idx !== arr.length - 1 && <span className="mx-2">|</span>}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <img src="/coming_soon.jpg" className="img-fluid w-25 mx-auto pb-5"  alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewDetails;
