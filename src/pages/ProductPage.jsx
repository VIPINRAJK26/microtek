import { useState, useEffect } from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import "./ProductPage.css";
import { useParams, useLocation } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const { category, variant } = useParams();
  const [baseProducts, setBaseProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(baseProducts);
  const location = useLocation();
  const { variantData, uniqueVariants, previewDetails, subcategory } =
    location.state || {};

  // console.log("Subcategory:------------------", subcategory);
  // console.log("All unique variants:", uniqueVariants);
  // console.log("Current variant data:", variantData);
  // console.log("Preview details--------------:", previewDetails);
  // console.log(products, "products");
  // console.log(
  //   "New product present?",
  //   products.find((p) => p?.slug === variant)?.title
  // );
  // console.log(category, variant, "cat,var");
  // console.log(baseProducts, "base-products filter");
  // console.log(filteredProducts, "filtered filter");

  useEffect(() => {
    if (!products || products.length === 0) return;

    // Find the subcategory for the selected variant
    // const subCategory = products.find(
    //   (p) => p?.variant_slug === variant
    // )?.subcategory;

    if (category && variant && subcategory) {
      const filtered = products.filter(
        (p) =>
          p?.category?.trim()?.toLowerCase() ===
            category.trim().toLowerCase() &&
          p?.subcategory?.trim()?.toLowerCase() ===
            subcategory.trim().toLowerCase() &&
          p?.variant_slug?.trim()?.toLowerCase() ===
            variant.trim().toLowerCase()
      );
      setBaseProducts(filtered);
      setFilteredProducts(filtered);
    } else {
      setBaseProducts(products);
      setFilteredProducts(products);
    }
  }, [category, variant, products]);

  const handleDataChange = (filteredList) => {
    // console.log(filteredList, "filtered list");
    setFilteredProducts(filteredList);
  };

  return (
    <div className="product-page pt-5 px-4">
      <Row>
        <Col md={3}>
          <ProductFilter
            onDataChange={handleDataChange}
            initialProducts={baseProducts}
            selectedVariant={variant}
            selectedCategory={category}
            variantData={variantData}
            uniqueVariants={uniqueVariants}
            previewDetails={previewDetails}
            products={products}
            subCategory={subcategory}
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
