import React from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import "./ProductPage.css"

const Products = () => {
  const products = [
    {
      image:
        "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2FUPS-LUXE-SW-1720744407295-1721177647946.jpg&w=384&q=75",
      title: "Inverter 1",
      sku: "SKU123",
      price: "$100",
      oldPrice: "$120",
    },
    {
      image:
        "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2FUPS-LUXE-SW-1720744407295-1721177647946.jpg&w=384&q=75",
      title: "Inverter 2",
      sku: "SKU124",
      price: "$200",
      oldPrice: "$220",
    },
    {
      image:
        "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2FUPS-LUXE-SW-1720744407295-1721177647946.jpg&w=384&q=75",
      title: "Inverter 3",
      sku: "SKU125",
      price: "$300",
      oldPrice: "$320",
    },
    {
      image:
        "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2FUPS-LUXE-SW-1720744407295-1721177647946.jpg&w=384&q=75",
      title: "Inverter 4",
      sku: "SKU126",
      price: "$400",
      oldPrice: "$420",
    },
    {
      image:
        "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2FUPS-LUXE-SW-1720744407295-1721177647946.jpg&w=384&q=75",
      title: "Inverter 5",
      sku: "SKU127",
      price: "$500",
      oldPrice: "$520",
    },
  ];

  return (
    <div className="product-page pt-5">
      <Row>
        <Col md={3}>
          <ProductFilter />
        </Col>
        <Col md={9}>
          <Row>
            {products.map((product, index) => (
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