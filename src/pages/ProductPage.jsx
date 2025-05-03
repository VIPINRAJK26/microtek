import React from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import "./ProductPage.css"
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";



const Products = () => {
  
  const { products} = useProducts();
  const { category,variant } = useParams();


  const selectedProducts = products?.filter(
    (product) =>
      product.category?.toLowerCase().trim() ===
        category?.toLowerCase().trim() &&
      product.variant_slug?.toLowerCase().trim() ===
        variant?.toLowerCase().trim()
  );


  console.log(products, "products");

  console.log(category, "category from URL");

  console.log(variant, "variant");

  console.log("product.category:", products[0]);

  console.log("selectedProducts:", selectedProducts);

  return (
    <div className="product-page pt-5">
      <Row>
        <Col md={3}>
          <ProductFilter />
        </Col>
        <Col md={9}>
          <Row>
            {selectedProducts?.length > 0 ? (
              selectedProducts.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard {...product} />
                </Col>
              ))
            ) : (
              <p>No products found for this variant.</p>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};



export default Products;