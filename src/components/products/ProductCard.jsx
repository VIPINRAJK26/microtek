import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ image, title, sku, price, oldPrice }) => {
  return (
    <Card className="mb-4">
      <Link to="/single">
        <Card.Img
          variant="top"
          src="https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2FUPS-LUXE-SW-1720744407295-1721177647946.jpg&w=384&q=75"
          alt={title}
        />
      </Link>
      <Card.Body>
        <Card.Title>Inverter</Card.Title>
        <Card.Text>SKU: {sku}</Card.Text>
        <Card.Text>
          <span className="text-primary fw-bold">{price}</span>
          {oldPrice && (
            <span className="text-muted text-decoration-line-through ms-2">
              {oldPrice}
            </span>
          )}
          <div className="text-muted small">Inclusive of all Taxes</div>
        </Card.Text>
        <Button variant="outline-primary">View More</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
