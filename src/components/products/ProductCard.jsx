import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ image, title, sku, price, oldPrice }) => {
  return (
    <Card className="mb-4">
      <Link to="/single">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
        />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
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
        <Link to={"/single"}>
          <Button variant="outline-primary">View More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
