import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import usePreviewDetails from "../hooks/usePreviewDetails";

const LiBatInverter = ({ data, category, subcategory }) => {
  const { previewDetails, loading, error } = usePreviewDetails();
  const [show, setShow] = useState(false);
  const [brochureUrl, setBrochureUrl] = useState("");
  const [loadingBrochure, setLoadingBrochure] = useState(false);
  const [errorBrochure, setErrorBrochure] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (fullUrl) => {
    setBrochureUrl(fullUrl);
    setShow(true);
    setErrorBrochure(null);
    setLoadingBrochure(false);
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

  console.log(subcategory, "subcategory from URL");
  console.log(category, "category from URL");
  console.log(groupedByVariant, "groupedByVariant");
  console.log(filteredByCategory, "filteredByCategory");
  // console.log(uniqueVariants, "uniqueVariants");
  console.log(brochureUrl, "brochureUrl");

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
    <div>
      <div className="container-md-fluid pb-md-4 py-5">
        <div className="row align-items-center justify-content-center">
          <div className="">
            <div className="card border-0">
              {selectedPreview && selectedPreview.length > 0 ? (
                selectedPreview.map((product, index) => (
                  <div className="row g-0" key={product.id}>
                    <div className="">
                      <img
                        src={product.image}
                        alt="Luxe UPS"
                        className="img-fluid luxe-image"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="position-absolute col-12 text-white col-lg-5 d-flex flex-column justify-content-between p-4">
                      <h3 className="fw-bold">{product.variant_name}</h3>
                      <p className="mb-1">{product.slogan}</p>

                      <div className="detail-section">
                        <ul
                          className="list-unstyled text-white fw-bold"
                          style={{ lineHeight: "28px" }}
                        >
                          {product.feature1?.split("#").map((feature, idx) => (
                            <li key={idx}>{feature.trim()}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="d-flex gap-3 mt-3">
                        <Link
                          to={`/products/${category}/${product.slug}`}
                          state={{
                            variantData: groupedByVariant[product.slug],
                            previewDetails: previewDetails,
                            subcategory: subcategory,
                          }}
                        >
                          <button className="btn btn-danger rounded-5">
                            View All Variants
                          </button>
                        </Link>

                        <button
                          className="btn btn-md-outline-light text-white rounded-5"
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
                    <div className=" d-flex gap-2 ps-3 py-2 border-top  highlights">
                      <p className="badge bg-primary p-2 rounded-0  my-auto ">
                        Highlights
                      </p>
                      <div className="d-flex justify-content-center text-center fw-bold small gap-2 mt-2 flex-wrap">
                        {product.feature2
                          .split("#")
                          .map((feature, idx, arr) => (
                            <span
                              key={idx}
                              className="d-flex align-items-center"
                            >
                              {feature.replace(/\r?\n|\r/g, "").trim()}
                              {idx !== arr.length - 1 && (
                                <span className="mx-2">|</span>
                              )}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <img
                    src="/coming_soon.jpg"
                    className="img-fluid w-25 mx-auto pb-5"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LiBatInverter;
