import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { getOrCreateSessionKey } from "../../utils/session";

const ProductDetails = ({
  id,
  title,
  sku,
  category,
  price,
  weight,
  voltage,
  dimensions,
  features,
  model_number
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const sessionKey = getOrCreateSessionKey();

  const token = localStorage.getItem("access_token");

  const featureList = Array.isArray(features)
    ? features
    : typeof features === "string"
    ? features.split("#").map((f) => f.trim())
    : [];

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log("Token expiration time:", decodedToken.exp);
    }
  }, [token]);

  // console.log("Session key used in ProductDetails.jsx:", sessionKey);
  // console.log(token, "token in ProductDetails.jsx");
  const fetchCart = async () => {
    setLoading(true);
    try {
      const config = token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : { params: { session_key: sessionKey } };

      const res = await axiosInstance.get("/cart/", config);
      setCartItems(
        Array.isArray(res.data.cart_items) ? res.data.cart_items : []
      );
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]); // refetch on login/logout

  const handleAddToCart = async () => {
    setLoading(true);

    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : {};

    // console.log("Auth Token:", token);
    // console.log("Axios Config:", config);

    if (!cartItems || !id) return;

    const alreadyInCart = cartItems.some((item) => item?.product?.id === id);


    if (alreadyInCart) {
      alert("Product is already in cart!");

      toast.info("Product is already in cart!", {
        autoClose: 3000,
        toastId: "already-in-cart-toast",
      });
      setTimeout(() => setLoading(false), 100);
      return;
    }

    

    // console.log("Not in cart, continue");

    try {
      const payload = {
        product_id: id,
        quantity: 1,
        ...(!token && { session_key: sessionKey }),
      };

      // console.log("Payload to be sent:", payload);

      await axiosInstance.post("/cart_item/", payload, config);

      // toast.success("Added to cart!");
      fetchCart();
      navigate("/cart", { state: { message: "Product added to cart!" } });
    } catch (error) {
      console.error("Add to cart error:", error);
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
      }
      toast.error(
        error.response?.data?.message || "Failed to add product to cart."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-0 p-md-3 border-0 shadow-none">
      <Card.Body>
        <Card.Title className="fs-1 fw-medium text-capitalize">
          {title}
        </Card.Title>

        <ListGroup variant="flush" className="mb-3">
          {/* {sku && (
            <ListGroup.Item className="ps-0 border-0">
              <strong>SKU:</strong> {sku}
            </ListGroup.Item>
          )} */}
          {category && (
            <ListGroup.Item className="ps-0 border-0">
              <strong>Category:</strong>{" "}
              {category
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </ListGroup.Item>
          )}

          {model_number && (
            <ListGroup.Item className="ps-0 border-0">
              <strong>Model Number:</strong> {model_number}
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
              <strong>Input/Output Voltage:</strong>
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

      <div className="d-flex ps-4 gap-3 pb-4">
        {/* Buy Now Button */}
        <Link to={`/buy/${id}`}>
          <button className="btn btn-primary rounded-3">Buy Now</button>
        </Link>

        {/* Add to Cart Button */}
        <button
          className="btn btn-secondary rounded-3"
          onClick={handleAddToCart}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
        <a
          href="https://wa.me/919847341800?text=Welcome%20to%20Warrior%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-success rounded-3">Enquire Now</button>
        </a>
      </div>
    </Card>
  );
};

export default ProductDetails;
