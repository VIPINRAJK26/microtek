import axiosInstance from "../api/axios";
import { getAnonCart, clearAnonCart } from "./cart";

export const mergeCart = async () => {
  const anonCart = getAnonCart();

  if (anonCart.length === 0) return;

  try {
    await axiosInstance.post("cart/merge/", {
      items: anonCart,
    });
    clearAnonCart();
  } catch (error) {
    console.error("Cart merge failed:", error);
  }
};
