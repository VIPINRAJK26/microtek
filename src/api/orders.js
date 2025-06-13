import axiosInstance from "./axios";

const getOrders = async () => {
    try {
        const response = await axiosInstance.get("user_orders/");
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error); 
    }
}

export default getOrders