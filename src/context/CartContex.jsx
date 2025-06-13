import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import { getOrCreateSessionKey } from "../utils/session";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const sessionKey = getOrCreateSessionKey();
  const token = localStorage.getItem("access_token");

  const fetchCartQuantity = async () => {
    try {
      const res = token
        ? await axiosInstance.get("cart/")
        : await axiosInstance.get("cart/", {
            params: { session_key: sessionKey },
          });

      const items = res.data?.cart_items || [];
      setCartQuantity(items.length); 
    } catch (err) {
      console.error("Cart fetch error:", err);
    }
  };
  

  useEffect(() => {
    fetchCartQuantity();
  }, []);

  return (
    <CartContext.Provider value={{ cartQuantity, fetchCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
