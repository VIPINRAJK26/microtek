import React from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import "./ProductPage.css"
import { useParams } from "react-router-dom";


const batteryData = [
  {
    id: 1,
    image:
      "https://www.okaya.in/storage/images/product/ob-28_656b1247d58ab.jpg",
    title: "Battery 1",
    sku: "SKU123",
    price: "$100",
    oldPrice: "$120",
  },
  {
    id: 2,
    image:
      "https://www.okaya.in/storage/images/product/ob-28_656b1247d58ab.jpg",
    title: "Battery 2",
    sku: "SKU124",
    price: "$200",
    oldPrice: "$220",
  },
  {
    id: 3,
    image:
      "https://www.okaya.in/storage/images/product/ob-28_656b1247d58ab.jpg",
    title: "Battery 3",
    sku: "SKU125",
    price: "$300",
    oldPrice: "$320",
  },
  {
    id: 4,
    image:
      "https://www.okaya.in/storage/images/product/ob-28_656b1247d58ab.jpg",
    title: "Battery 4",
    sku: "SKU126",
    price: "$400",
    oldPrice: "$420",
  },
  {
    id: 5,
    image:
      "https://www.okaya.in/storage/images/product/ob-28_656b1247d58ab.jpg",
    title: "Battery 5",
    sku: "SKU127",
    price: "$500",
    oldPrice: "$520",
  },
];
const upsData = [
  {
    id: 1,
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "UPS 1",
    sku: "SKU123",
    price: "$100",
    oldPrice: "$120",
  },
  {
    id: 2,
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "UPS 2",
    sku: "SKU124",
    price: "$200",
    oldPrice: "$220",
  },
  {
    id: 3,
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "UPS 3",
    sku: "SKU125",
    price: "$300",
    oldPrice: "$320",
  },
  {
    id: 4,
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "UPS 4",
    sku: "SKU126",
    price: "$400",
    oldPrice: "$420",
  },
  {
    id: 5,
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "UPS 5",
    sku: "SKU127",
    price: "$500",
    oldPrice: "$520",
  },
];

const Products = () => {
  
  const { category } = useParams();

  let productData = [];

  if (category === "Batteries") {
    productData = batteryData;
  } else if (category === "Home Ups") {
    productData = upsData;
  }

  return (
    <div className="product-page pt-5">
      <Row>
        <Col md={3}>
          <ProductFilter />
        </Col>
        <Col md={9}>
          <Row>
            {productData.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};



export default Products;