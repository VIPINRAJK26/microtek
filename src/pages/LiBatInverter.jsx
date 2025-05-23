import MainPreview from "../components/product_preview/MainPreview";
import useProducts from "../hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const LiBatInverter = () => {
  const { products } = useProducts();
  const { category, variant } = useParams();
  const [baseProducts, setBaseProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const firstProduct = filteredProducts[0];
 

  console.log(filteredProducts, "filteredProducts");

  useEffect(() => {
    if (category && variant) {
      const filtered = products.filter(
        (p) =>
          p.category?.toLowerCase() === category.toLowerCase() &&
          p.variant_slug?.toLowerCase() === variant.toLowerCase()
      );
      setBaseProducts(filtered);
      setFilteredProducts(filtered);
    } else {
      setBaseProducts(products);
      setFilteredProducts(products);
    }
  }, [category, variant, products]);

  return (
    <div>
      <div>
        <MainPreview />
      </div>

      <div className="container-fluid bg-light p-3 p-md-5">
        <div className="row align-items-center justify-content-center">
          <div className="">
            <div className="card border-0 shadow-lg">
              <div className="row g-0">
                <div className="">
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20240929/pngtree-yellow-background-gradient-vector-image_16289907.jpg"
                    alt="Luxe UPS"
                    className="img-fluid rounded-start luxe-image"
                    style={{ width: "100%", height: "50vh" }}
                  />
                </div>
                <div className="position-absolute col-12 col-lg-5 d-flex flex-column justify-content-center p-4">
                  <h3 className="fw-bold">Luxe</h3>
                  <p className="mb-1">Most Intelligent & Smart LCD</p>
                  <p className="mb-3">Home UPS with in-built Microcomputer</p>

                  <div className="d-flex justify-content-between my-3">
                    <div className="text-center">
                      <i className="bi bi-battery-charging fs-2"></i>
                      <p className="mb-0 small">Battery Charging Time</p>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-clock-history fs-2"></i>
                      <p className="mb-0 small">Backup Time</p>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-speedometer2 fs-2"></i>
                      <p className="mb-0 small">Running Load Status</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mt-3">
                    {filteredProducts[0] && (
                      <Link to={`/single/${filteredProducts[0].id}`}>
                        <button className="btn btn-outline-primary">
                          View All Models
                        </button>
                      </Link>
                    )}

                    <button className="btn btn-outline-secondary">
                      Download Brochure
                    </button>
                  </div>
                </div>
                <div className="ps-3 border-top pt-3 highlights">
                  <span className="badge bg-primary">Highlights</span>
                  <p className="mb-1 small mt-2">
                    <strong>Technology:</strong> Pure
                    Sinewave&nbsp;&nbsp;|&nbsp;&nbsp;
                    <strong>VA Range:</strong> 800 VA - 1650
                    VA&nbsp;&nbsp;|&nbsp;&nbsp;
                    <strong>Battery Support:</strong> Flat, Tubular &
                    SMF&nbsp;&nbsp;|&nbsp;&nbsp;
                    <strong>Warranty:</strong> 3 Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LiBatInverter;
