import axiosInstance from "../api/axios";

export const fetchCart = async () => {
  try {
    const response = await axiosInstance.get("cart/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    return null;
  }
};
