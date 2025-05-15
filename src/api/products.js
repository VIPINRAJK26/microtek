import axiosInstance from "./axios";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("products/");
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error fetching products:", {
        status: error.response.status,
        message: error.response.data?.message || error.message,
      });

      if (error.response.status === 401) {
        console.warn("Authentication required");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }

    throw error;
  }
};
