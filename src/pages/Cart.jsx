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
import { getOrCreateSessionKey } from "../utils/session";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const [token, setToken] = useState(localStorage.getItem("access_token")); 
  const sessionKey = getOrCreateSessionKey();

  

  console.log(cart, "cart");

  useEffect(() => {
    const checkToken = () => {
      setToken(localStorage.getItem("access_token"));
    };
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [token]);

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
    }
  }, [location.state]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = token
        ? await axiosInstance.get("cart/")
        : await axiosInstance.get("cart/", {
            params: { session_key: sessionKey },
          });

      setCart(res.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };
  

  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) return removeItem(itemId);
    try {
      if (token) {
        await axiosInstance.patch(`/cart_item/${itemId}/`, { quantity });
      } else {
        await axiosInstance.patch(`/cart_item/${itemId}/`, {
          quantity,
          session_key: sessionKey,
        });
        console.log("🚀 Sending session key to backend:", sessionKey);
      }
      fetchCart();
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("Failed to update quantity");
    }
  };

  const removeItem = async (itemId) => {
    try {
      if (token) {
        await axiosInstance.delete(`/cart_item/${itemId}/`);
      } else {
        await axiosInstance.delete(`/cart_item/${itemId}/`, {
          data: { session_key: sessionKey },
        });
        console.log("🚀 Sending session key to backend:", sessionKey);
      }
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Failed to remove item");
    }
  };

  const clearCart = async () => {
    try {
      if (token) {
        await axiosInstance.post("/cart/clear/");
      } else {
        await axiosInstance.post("/cart/clear/", {
          session_key: sessionKey,
        });
        console.log("🚀 Sending session key to backend:", sessionKey);
      }
      fetchCart();
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Something went wrong");
    }
  };

  if (loading) return <p className="text-center py-5">Loading cart...</p>;

  const isEmpty = !cart || !cart.cart_items || cart.cart_items.length === 0;
  cart.cart_items.forEach((item, index) => {
    console.log(`Item ${index + 1} image:`, item.product?.image);
  });
  
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
              {cart.cart_items.map((item) => (
                <Row
                  key={item.id}
                  className="align-items-center mb-3 border-bottom pb-2"
                >
                  <Col xs={3} md={2}>
                    <div
                      className=" d-flex justify-content-center align-items-center rounded"
                      style={{ height: "80px", overflow: "hidden" }}
                    >
                      <img
                        src={`http://localhost:8000${item.product.image}`} // or the correct path to your image field
                        alt={item.product.category}
                        fluid
                        style={{ maxHeight: "80px", objectFit: "contain" }}
                      />
                    </div>
                  </Col>

                  <Col xs={9} md={5}>
                    <h6 className="mb-1">{item.product.name}</h6>
                    <p className="text-muted small mb-0">
                      ₹{item.product.price}
                    </p>
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
                  {cart?.cart_items?.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                  ) || 0}
                  )
                </Col>
                <Col className="text-end">₹{cart?.total_price || 0}</Col>
              </Row>

              <Row className="fw-bold">
                <Col>Total</Col>
                <Col className="text-end text-primary">₹{cart.total_price}</Col>
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
