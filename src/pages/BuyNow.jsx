import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";

const BuyNowPage = () => {
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Buy Now</h2>
      <Form onSubmit={handlePlaceOrder}>
        <Row>
          {/* Left Column - Customer & Address */}
          <Col md={6}>
            <Card className="mb-4 shadow-sm">
              <Card.Header className="fw-bold">Customer Details</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="John Doe" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="123-456-7890"
                    required
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Header className="fw-bold">Shipping Address</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123 Main St"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control type="text" placeholder="12345" required />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Product Image + Order Summary */}
          <Col md={6}>
            {/* Product Image */}
            <Card className="mb-4 shadow-sm">
              <Card.Body className="text-center">
                <Image src="/battery.jpg " className="img-fluid w-50" alt="Product" fluid rounded />
                <h5 className="mt-3">PowerWall 2000</h5>
                <p className="text-muted">13.5kWh Energy Storage System</p>
              </Card.Body>
            </Card>

            {/* Order Summary */}
            <Card className="shadow-sm">
              <Card.Header className="fw-bold">Order Summary</Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>PowerWall 2000</span>
                  <span>$1299.99</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Total</span>
                  <span>$1299.99</span>
                </div>
                <Button type="submit" variant="success" className="w-100">
                  Place Order
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default BuyNowPage;
