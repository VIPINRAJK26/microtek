import axiosInstance from "../api/axios";

export const mergeCart = async () => {
  const sessionKey = localStorage.getItem("session_key");
  if (!sessionKey) return;

  try {
    await axiosInstance.post("/cart/merge/", { session_key: sessionKey });
    localStorage.removeItem("session_key");
    console.log("Cart merged and session_key removed");
  } catch (error) {
    console.error("Error merging cart:", error);
  }
};
