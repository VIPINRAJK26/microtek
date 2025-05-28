// src/hooks/useCart.js
import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { toast } from "react-toastify";
import { getOrCreateSessionKey } from "../utils/session";

const useCart = (token) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const sessionKey = getOrCreateSessionKey();

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
      const payload = token
        ? { quantity }
        : { quantity, session_key: sessionKey };

      await axiosInstance.patch(`/cart_item/${itemId}/`, payload);
      fetchCart();
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("Failed to update quantity");
    }
  };

  const removeItem = async (itemId) => {
    try {
      const config = token ? {} : { data: { session_key: sessionKey } };

      await axiosInstance.delete(`/cart_item/${itemId}/`, config);
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Failed to remove item");
    }
  };

  const clearCart = async () => {
    try {
      const payload = token ? {} : { session_key: sessionKey };
      await axiosInstance.post("/cart/clear/", payload);
      fetchCart();
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  return {
    cart,
    loading,
    fetchCart,
    updateQuantity,
    removeItem,
    clearCart,
  };
};

export default useCart;
