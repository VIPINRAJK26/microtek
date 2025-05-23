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
import axiosInstance from "../api/axios";

const BuyNowPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);
  const token = localStorage.getItem("access_token");
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    shipping_address: "",
    city: "",
    state: "",
    zip_code: "",
  });

  console.log(token, "token");
  console.log("print")

  useEffect(() => {
    const selectedProduct = products?.find(
      (product) => product.id === Number(id)
    );
    setProduct(selectedProduct);
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!product) {
      alert("Product not found");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const amountInPaise = product.price * 100;

    try {
      // Step 1: Create Razorpay Order from backend
      const razorpayRes = await axiosInstance.post("/create-razorpay-order/", {
        amount: amountInPaise,
      });

      const { id: razorpayOrderId, amount, currency } = razorpayRes.data;

      // Step 2: Configure Razorpay Checkout options
      const options = {
        key: "rzp_live_Z6jI1bIiHzukH6",
        amount: amount,
        currency: currency,
        name: "Your Company",
        description: product.title,
        image: "/logo.png",
        order_id: razorpayOrderId,
        handler: async function (response) {
          // Ideally verify payment here with backend
          const orderData = {
            ...formData,
            total_amount: product.price,
            items: [
              {
                product_id: product.id,
                quantity: 1,
              },
            ],
            payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
          };

          try {
            const placeOrderRes = await axiosInstance.post(
              "/buy_now/place-order/",
              orderData
            );
            alert("Payment & Order Successful!");
          } catch (error) {
            console.error("Order save error:", error.response || error.message);
            alert("Payment success, but order save failed!");
          }
        },
        prefill: {
          name: formData.customer_name,
          email: formData.customer_email,
          contact: formData.customer_phone,
        },
        notes: {
          address: formData.shipping_address,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            alert("Payment cancelled");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(
        "Error initiating Razorpay:",
        error.response || error.message
      );
      alert("Failed to initiate payment.");
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
                <Button
                  type="submit"
                  variant="success"
                  onClick={handlePlaceOrder}
                  className="w-100"
                >
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
