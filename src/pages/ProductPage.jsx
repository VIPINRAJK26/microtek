import { useState, useEffect } from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Loader from "../components/common/Loader";

const Products = ({
  variantData,
  uniqueVariants,
  previewDetails,
  subcategory,
}) => {
  const { products, loading } = useProducts();
  const { category, variant } = useParams();
  const [baseProducts, setBaseProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(baseProducts);

  console.log(filteredProducts, "filtered products in product page");
  useEffect(() => {
    if (!products || products.length === 0) return;

    // Find the subcategory for the selected variant
    // const subCategory = products.find(
    //   (p) => p?.variant_slug === variant
    // )?.subcategory;

    if (category && subcategory) {
      const filtered = products.filter(
        (p) =>
          p?.category?.trim()?.toLowerCase() ===
            category.trim().toLowerCase() &&
          p?.subcategory?.trim()?.toLowerCase() ===
            subcategory.trim().toLowerCase() 
      );
      setBaseProducts(filtered);
      setFilteredProducts(filtered);
    } else {
      setBaseProducts(products);
      setFilteredProducts(products);
    }
  }, [category, products]);

  const handleDataChange = (filteredList) => {
    // console.log(filteredList, "filtered list");
    setFilteredProducts(filteredList);
  };

  if (loading) {
    return <Loader />;
  }

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
