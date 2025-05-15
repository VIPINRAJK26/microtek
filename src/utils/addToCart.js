import axiosInstance from "../api/axios";
import { getAnonCart, setAnonCart } from "./cart";

export const addToCart = async (productId, quantity = 1, isAuthenticated) => {
  if (isAuthenticated) {
    try {
      await axiosInstance.post("cart/add/", {
        product_id: productId,
        quantity: quantity,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  } else {
    // Anonymous cart logic
    let anonCart = getAnonCart();
    const existing = anonCart.find((item) => item.productId === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      anonCart.push({ productId, quantity });
    }

    setAnonCart(anonCart);
  }
};
