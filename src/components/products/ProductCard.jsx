import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({id, image, title, price, old_price }) => {
  return (
    <Card className="mb-4">
      <Link to={`/single/${id}`}>
        <Card.Img variant="top" src={image} alt={title} />
      </Link>
      <Card.Body className="d-flex text-center justify-content-center flex-column align-items-center">
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>SKU: {sku}</Card.Text> */}
        <Card.Text className="text-center">
          <span className="text-primary  fw-bold">
            {" "}
            &#8377;
            {price}
          </span>
          {old_price && (
            <span className="text-muted text-decoration-line-through ms-2">
              {old_price}
            </span>
          )}
          <div className="text-muted small">Inclusive of all Taxes</div>
        </Card.Text>
        <Link to={`/single/${id}`}>
          <Button variant="outline-primary">View More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
