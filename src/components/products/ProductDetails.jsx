import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

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
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Correctly defined as an array
  const token = localStorage.getItem("access_token"); // Get token from localStorage

  const featureList = Array.isArray(features)
    ? features
    : typeof features === "string"
    ? features.split(",").map((f) => f.trim())
    : [];

  // Check if the token is expired or invalid (for actions like adding to cart)
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log("Token expiration time:", decodedToken.exp);
    }
  }, [token]);

  // Check cart on page load
  const fetchCart = async () => {
    console.log("Fetching cart...");
    setLoading(true);
    try {
      let url = "cart/";

      if (token) {
        const res = await axiosInstance.get(url);
        console.log("Response:", res);
        setCartItems(Array.isArray(res.data.items) ? res.data.items : []);
        console.log("Cart items:", res.data.items);
      } else {
        const sessionKey = sessionStorage.getItem("session_key");
        const res = await axiosInstance.get(url, {
          params: { session_key: sessionKey },
        });
        console.log("Response:", res);
        setCartItems(Array.isArray(res.data.items) ? res.data.items : []);
        console.log("Cart items:", res.data.items);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]); // Fetch cart when the token changes or when the page loads

  const handleAddToCart = async () => {
    console.log("Adding product to cart...");
    setLoading(true);

    // Ensure cartItems is an array before calling .some()
    if (!Array.isArray(cartItems)) {
      setCartItems([]);
    }

    // Check if the product is already in the cart
    const alreadyInCart = cartItems.some(
      (item) => item.product && item.product.id === id
    );

    if (alreadyInCart) {
      console.log("Product is already in cart.");
      toast.info("Product is already in cart!");
      setLoading(false);
      return;
    }

    try {
      console.log("Adding product to cart...");
      const token = localStorage.getItem("access_token");

      if (token) {
        // Add to authenticated user's cart
        await axiosInstance.post("cart_item/", {
          product_id: id,
          quantity: 1,
        });
      } else {
        // Add to anonymous cart (based on session)
        await axiosInstance.post("cart_item/", {
          product_id: id,
          quantity: 1,
          session_key: sessionStorage.getItem("session_key"), // use session key for anonymous user
        });
      }

      console.log("Product added to cart.");
      toast.success("Added to cart!");
      navigate("/cart");
    } catch (error) {
      console.error("Add to cart error:", error);
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
          {sku && (
            <ListGroup.Item className="ps-0 border-0">
              <strong>SKU:</strong> {sku}
            </ListGroup.Item>
          )}
          {category && (
            <ListGroup.Item className="ps-0 border-0">
              <strong>Category:</strong> {category}
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
              <strong>Output Voltage:</strong>
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
          variant="primary"
          className="btn btn-secondary rounded-3"
          onClick={handleAddToCart}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </Card>
  );
};

export default ProductDetails;
