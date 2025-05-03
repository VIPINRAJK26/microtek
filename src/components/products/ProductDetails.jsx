import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ProductDetails = ({
  title,
  sku,
  category,
  price,
  weight,
  voltage,
  dimensions,
  features,
}) => {
  const featureList = Array.isArray(features)
    ? features
    : typeof features === "string"
    ? features.split(",").map((f) => f.trim())
    : [];

console.log(featureList, "featureList");

  return (
    <Card className="p-0 p-md-3 border-0 shadow-none">
      <Card.Body>
        <Card.Title className="fs-1 fw-medium text-capitalize">
          {title}
        </Card.Title>

        <ListGroup variant="flush" className="mb-3">
          {sku && (
            <ListGroup.Item className="ps-0 border-0">
              <strong>SKU:</strong> {sku}
            </ListGroup.Item>
          )}
          {category && (
            <ListGroup.Item className="ps-0 border-0">
              <strong>Category:</strong> {category}
            </ListGroup.Item>
          )}
          {price && (
            <ListGroup.Item className="ps-0 border-0">
              <strong className="fs-3">₹{price}</strong>
            </ListGroup.Item>
          )}
        </ListGroup>

        <div className="d-flex text-center border rounded overflow-hidden mb-4 shadow-sm">
          {weight && (
            <div className="flex-fill border-end p-3">
              <strong>Weight:</strong>
              <div>{weight} kg</div>
            </div>
          )}
          {voltage && (
            <div className="flex-fill border-end p-3">
              <strong>Output Voltage:</strong>
              <div>{voltage} v</div>
            </div>
          )}
          {dimensions && (
            <div className="flex-fill p-3">
              <strong>Dimensions (LxWxH):</strong>
              <div>{dimensions}</div>
            </div>
          )}
        </div>

        {featureList.length > 0 && (
          <div>
            <h5 className="fw-semibold">Key Features:</h5>
            <ul>
              {featureList.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
