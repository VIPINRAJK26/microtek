import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import axiosInstance from "../api/axios";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axiosInstance.get("cart/");
      console.log("Cart data:", res.data);
      setCart(res.data.cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
    }
  }, [location.state]);


  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) return removeItem(itemId);
    try {
      await axiosInstance.patch(`/cart-items/${itemId}/`, { quantity });
      fetchCart();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axiosInstance.delete(`/cart-items/${itemId}/`);
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    try {
      await axiosInstance.post("/cart/clear/");
      fetchCart();
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Something went wrong");
    }
  };



  

  if (loading) return <p className="text-center py-5">Loading cart...</p>;

  const isEmpty = !cart || cart.items.length === 0;

  return (
    <Container className="py-5">
      <ToastContainer position="top-center" autoClose={3000} />

      <Card className="p-4 shadow-sm">
        <Card.Body>
          <h4 className="mb-4">
            <FaShoppingCart className="me-2" />
            Your Cart
            {!isEmpty && (
              <Button
                variant="outline-secondary"
                size="sm"
                className="float-end"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            )}
          </h4>

          {isEmpty ? (
            <div className="text-center py-5">
              <Image
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                fluid
                style={{ maxWidth: "300px" }}
                className="mb-4"
              />
              <h3 className="mb-3">Your cart is empty</h3>
              <p className="text-muted mb-4">
                Looks like you haven't added anything to your cart yet
              </p>
              <Button variant="primary">Browse Products</Button>
            </div>
          ) : (
            <>
              {cart.items.map((item) => (
                <Row
                  key={item.id}
                  className="align-items-center mb-3 border-bottom pb-2"
                >
                  <Col xs={3} md={2}>
                    <div
                      className="bg-light d-flex justify-content-center align-items-center rounded"
                      style={{ height: "70px" }}
                    >
                      <i
                        className="bi bi-battery"
                        style={{ fontSize: "2rem", color: "#28a745" }}
                      ></i>
                    </div>
                  </Col>
                  <Col xs={9} md={5}>
                    <h6 className="mb-1">{item.product.name}</h6>
                    <p className="text-muted small mb-0">
                      ${item.product.price}
                    </p>
                    <strong>${item.total_price}</strong>
                  </Col>
                  <Col xs={12} md={3} className="my-2 my-md-0">
                    <InputGroup className="w-75">
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <FormControl
                        value={item.quantity}
                        readOnly
                        className="text-center"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col xs={12} md={2} className="text-md-end">
                    <Button
                      variant="link"
                      className="text-danger p-0"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrashAlt className="me-1" />
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}

              <hr />

              <Row className="mb-2">
                <Col>
                  Items (
                  {cart.items.reduce((acc, item) => acc + item.quantity, 0)})
                </Col>
                <Col className="text-end">${cart.total_price}</Col>
              </Row>
              <Row className="fw-bold">
                <Col>Total</Col>
                <Col className="text-end text-primary">${cart.total_price}</Col>
              </Row>

              <div className="mt-4">
                <Button variant="warning" className="w-100 text-white fw-bold">
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;
