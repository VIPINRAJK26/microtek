import React, { useState, useEffect } from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const { category, variant } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categoryProducts = products.filter(
    (p) => p.category?.toLowerCase().trim() === category?.toLowerCase().trim()
  );

  useEffect(() => {
    if (products) {
      let result = products;

      if (category && variant) {
        result = products.filter(
          (product) =>
            product.category?.toLowerCase().trim() ===
              category?.toLowerCase().trim() &&
            product.variant_slug?.toLowerCase().trim() ===
              variant?.toLowerCase().trim()
        );
      }

      setFilteredProducts(result || []);
    }
  }, [category, variant, products]);

  const handleDataChange = (filteredData) => {
    let result = filteredData;

    if (category && variant) {
      result = filteredData.filter(
        (product) =>
          product.category?.toLowerCase().trim() ===
            category?.toLowerCase().trim() &&
          product.variant_slug?.toLowerCase().trim() ===
            variant?.toLowerCase().trim()
      );
    }

    setFilteredProducts(result || []);
  };

  return (
    <Container fluid className="product-page px-0 mx-0">
      <Row className="main-content-row mx-0">
        {/* Filter Column - fixed width always visible */}
        <Col xs={12} md={3} className="filter-column px-0">
          <div className="sticky-filter-wrapper">
            <ProductFilter
              onDataChange={handleDataChange}
              initialProducts={categoryProducts}
            />
          </div>
        </Col>

        {/* Products Column - takes remaining space */}
        <Col xs={12} md={9} className="products-column px-3 px-md-4">
          <h2 className="my-3">
            Showing Results for:{" "}
            <span className="text-capitalize font-weight-bold">{variant}</span>
          </h2>

          {filteredProducts.length > 0 ? (
            <Row className="products-grid mx-0">
              {filteredProducts.map((product, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4 px-2"
                >
                  <ProductCard {...product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center py-5">
              <img
                src="/No_image.jpg"
                alt="No products found"
                className="img-fluid mb-4"
                style={{ maxWidth: "300px", opacity: 0.7 }}
              />
              <h4 className="text-muted">No products found</h4>
              <p className="text-muted">
                Try adjusting your filters or search criteria
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
