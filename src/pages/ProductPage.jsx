import React, { useState, useEffect } from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import { useMemo } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const { category, variant } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const variantProducts = useMemo(() => {
    return products.filter(
      (p) => p.variant?.toLowerCase().trim() === variant?.toLowerCase().trim()
    );
  }, [products, variant]);

  console.log(products, "products filter");
  console.log(category, "category filter");
  console.log(variant, "variant filter");

  console.log(variantProducts, "variantProducts");
  // Initialize with all products or category/variant filtered products
  useEffect(() => {
    if (category && variant) {
      setFilteredProducts(variantProducts);
    } else {
      setFilteredProducts(products || []);
    }
  }, [category, variant, products, variantProducts]);


  // Function to handle filter changes and update filtered products
  const handleDataChange = (filteredData) => {
    // If we have category/variant in URL, apply those filters first
    if (category && variant) {
      const baseFiltered = filteredData.filter(
        (product) =>
          product.category?.toLowerCase().trim() ===
            category?.toLowerCase().trim() &&
          product.variant_slug?.toLowerCase().trim() ===
            variant?.toLowerCase().trim()
      );
      setFilteredProducts(baseFiltered);
    } else {
      setFilteredProducts(filteredData);
    }
  };

  return (
    <div className="product-page pt-5 px-4">
      <Row>
        <Col md={3}>
          <ProductFilter
            onDataChange={handleDataChange}
            initialProducts={variantProducts}
          />
        </Col>
        <Col md={9}>
          <Row>
            {filteredProducts?.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard {...product} />
                </Col>
              ))
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center w-100 py-5">
                <p>No products found.</p>
                <img
                  src="/No_image.jpg"
                  alt="no products found"
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
