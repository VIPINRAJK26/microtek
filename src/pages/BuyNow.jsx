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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";

const BuyNowPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    shipping_address: "",
    city: "",
    state: "",
    zip_code: "",
  });


  useEffect(() => {
    const selectedProduct = products?.find(
      (product) => product.id === Number(id)
    );
    setProduct(selectedProduct);
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      items: [
        {
          product_id: product.id,
          quantity: 1,
        },
      ],
    };

    try {
      const response = await fetch("/api/buy_now/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert("Error placing order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order.");
    }
  };



  // If the product hasn't loaded yet, render a loading message or spinner
  if (!product) {
    return (
      <Container className="py-5">
        <h3>Loading product details...</h3>
      </Container>
    );
  }

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
                  <Form.Control
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="customer_email"
                    value={formData.customer_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="customer_phone"
                    value={formData.customer_phone}
                    onChange={handleChange}
                    placeholder="9876543210"
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
                    name="shipping_address"
                    value={formData.shipping_address}
                    onChange={handleChange}
                    placeholder="123 Main St"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Kochi"
                    required
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="kerala"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control
                        type="number"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleChange}
                        placeholder="123456"
                        required
                      />
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
                <Image
                  src={product.image}
                  className="img-fluid w-50"
                  alt="Product"
                  fluid
                  rounded
                />
                <h5 className="mt-3">{product.title}</h5>
                <p className="text-muted">13.5kWh Energy Storage System</p>
              </Card.Body>
            </Card>

            {/* Order Summary */}
            <Card className="shadow-sm">
              <Card.Header className="fw-bold">Order Summary</Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>{product.title}</span>
                  <span>{product.price}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Total</span>
                  <span>{product.price}</span>
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
