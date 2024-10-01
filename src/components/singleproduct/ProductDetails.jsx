import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductDetails.css"



const ProductDetails = ({
  sku,
  category,
  price,
  weight,
  voltage,
  dimensions,
  features,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          {/* Product Name, SKU, and Category */}
          <h2>E-Rickshaw Charger - TC 4816Q</h2>
          <p>
            <strong>SKU:</strong> {sku}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>

          {/* Price */}
          <h3>₹{price}</h3>

          {/* Product Specifications */}
          <Row className="mt-4 no-gutters ">
            {" "}
            {/* Add no-gutters class to eliminate gutters */}
            <Col md={3} className="p-0">
              <div className="info-box bg-white ">
                <p>
                  <strong>Weight:</strong> <br /> {weight}
                </p>
              </div>
            </Col>
            <Col md={3} className="p-0">
              <div className="info-box bg-white ">
                <p>
                  <strong>Output Voltage:</strong> <br /> {voltage}
                </p>
              </div>
            </Col>
            <Col md={3} className="p-0">
              <div className="info-box bg-white">
                <p>
                  <strong>Dimensions (LxWxH):</strong> <br /> {dimensions}
                </p>
              </div>
            </Col>
          </Row>

          {/* Features */}
          <h4>Salient Features:</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
