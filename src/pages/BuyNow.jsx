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
import { useNavigate, useLocation } from "react-router-dom";


const BuyNowPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("access_token");
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    shipping_address: "",
    city: "",
    state: "",
    zip_code: "",
  });

  // console.log(token, "token");
  // console.log("print")

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

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [token, navigate, location]);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Validate form manually
    for (const key in formData) {
      if (!formData[key]) {
        alert("Please fill out all fields before placing an order.");
        return;
      }
    }

    if (!product) {
      alert("Product not found");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const amountInRupees = parseFloat(product.price) * quantity;
    
    try {
      const razorpayRes = await axiosInstance.post("/create-razorpay-order/", {
        amount: amountInRupees,
      });

      const { id: razorpayOrderId, amount, currency } = razorpayRes.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "warrior",
        description: product.title,
        image: "/Warrior logo Png-01.png",
        order_id: razorpayOrderId,
        handler: async function (response) {
          const orderData = {
            ...formData,
            total_amount: product.price,
            items: [{ product_id: product.id, quantity: quantity }],
            payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
          };

          try {
            const res = await axiosInstance.post(
              "/buy_now/place-order/",
              orderData
            );

            const cartResponse = await axiosInstance.get("/cart/");
            // console.log("Cart items:", cartResponse.data.cart_items); 

            const cartItemToDelete = cartResponse.data.cart_items.find(
              (item) => item?.product?.id === Number(id) // Safely access nested fields
            );

            if (cartItemToDelete?.id) {
              // Only delete if ID exists
              await axiosInstance.delete(`/cart_item/${cartItemToDelete.id}/`);
            } else {
              // console.log("Item not in cart or missing ID");
            }

            if (res.data.id) {
              // Ensure this is `true`
              // console.log("Redirecting...");
              navigate("/success");
            } else {
            }
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
          color: "#cc0000",
        },
        modal: {
          ondismiss: () => alert("Payment cancelled"),
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
                    type="tel"
                    name="customer_phone"
                    value={formData.customer_phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    pattern="^\d{10}$"
                    maxLength={10}
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
                        type="tel"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleChange}
                        placeholder="123456"
                        pattern="^\d{6}$"
                        maxLength={6}
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
                  <span>₹{product.price}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Quantity</span>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Total</span>
                  <span>₹{(product.price * quantity).toFixed(2)}</span>
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
