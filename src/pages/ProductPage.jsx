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
      "https://media.istockphoto.com/id/1197345162/photo/dead-car-rusty-battery-recycling.jpg?s=612x612&w=0&k=20&c=3cA_4qKuT6gn4krZMUStBVcZDIw_HksC8eqzf-9jNbQ=",
    title: "Battery 1",
    sku: "SKU123",
    price: "$100",
    oldPrice: "$120",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1197345162/photo/dead-car-rusty-battery-recycling.jpg?s=612x612&w=0&k=20&c=3cA_4qKuT6gn4krZMUStBVcZDIw_HksC8eqzf-9jNbQ=",
    title: "Battery 2",
    sku: "SKU124",
    price: "$200",
    oldPrice: "$220",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1197345162/photo/dead-car-rusty-battery-recycling.jpg?s=612x612&w=0&k=20&c=3cA_4qKuT6gn4krZMUStBVcZDIw_HksC8eqzf-9jNbQ=",
    title: "Battery 3",
    sku: "SKU125",
    price: "$300",
    oldPrice: "$320",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1197345162/photo/dead-car-rusty-battery-recycling.jpg?s=612x612&w=0&k=20&c=3cA_4qKuT6gn4krZMUStBVcZDIw_HksC8eqzf-9jNbQ=",
    title: "Battery 4",
    sku: "SKU126",
    price: "$400",
    oldPrice: "$420",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/1197345162/photo/dead-car-rusty-battery-recycling.jpg?s=612x612&w=0&k=20&c=3cA_4qKuT6gn4krZMUStBVcZDIw_HksC8eqzf-9jNbQ=",
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
      "https://4.imimg.com/data4/NL/LM/MY-11247646/ups-uninterruptible-power-supply.jpg",
    title: "UPS 1",
    sku: "SKU123",
    price: "$100",
    oldPrice: "$120",
  },
  {
    id: 2,
    image:
      "https://4.imimg.com/data4/NL/LM/MY-11247646/ups-uninterruptible-power-supply.jpg",
    title: "UPS 2",
    sku: "SKU124",
    price: "$200",
    oldPrice: "$220",
  },
  {
    id: 3,
    image:
      "https://4.imimg.com/data4/NL/LM/MY-11247646/ups-uninterruptible-power-supply.jpg",
    title: "UPS 3",
    sku: "SKU125",
    price: "$300",
    oldPrice: "$320",
  },
  {
    id: 4,
    image:
      "https://4.imimg.com/data4/NL/LM/MY-11247646/ups-uninterruptible-power-supply.jpg",
    title: "UPS 4",
    sku: "SKU126",
    price: "$400",
    oldPrice: "$420",
  },
  {
    id: 5,
    image:
      "https://4.imimg.com/data4/NL/LM/MY-11247646/ups-uninterruptible-power-supply.jpg",
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