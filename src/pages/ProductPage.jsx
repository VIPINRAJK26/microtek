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

  console.log(variant, "variant");

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
    <Container fluid className="product-page">
      <Row className="main-content-row">
        {/* Filter Column - fixed width always visible */}
        <Col xs={12} md={3} className="filter-column">
          <div className="sticky-filter-wrapper">
            <ProductFilter
              onDataChange={handleDataChange}
              initialProducts={products}
            />
          </div>
        </Col>

        {/* Products Column - takes remaining space */}
        <Col xs={12} md={9} className="products-column">
          <h2>
            Showing Results for : <span className="text-capitalize font-weight-bold">{variant}</span>
          </h2>
          {filteredProducts.length > 0 ? (
            <Row className="products-grid">
              {filteredProducts.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard {...product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="empty-products-container">
              <div className="empty-state-message">
                <h4>No products found</h4>
                <p>Try adjusting your filters or search criteria</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
