import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [undeliveredCount, setUndeliveredCount] = useState(0);
  const token = localStorage.getItem("access_token");

  const fetchUndeliveredOrders = async () => {
    if (!token) return;
    try {
      const res = await fetch(
        "http://localhost:8000/api/user_orders/undelivered_count/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setUndeliveredCount(data.count || 0); // ✅ Use the count returned from backend
    } catch (err) {
      console.error("Undelivered orders fetch error:", err);
    }
  };
  

  //   const fetchUndeliveredOrders = async () => {
  //     if (!token) return;
  //     try {
  //       const res = await axiosInstance.get("/buy_now/undelivered_count/");
  //       setUndeliveredCount(res.data.count || 0);
  //     } catch (err) {
  //       console.error("Undelivered orders fetch error:", err);
  //     }
  //   };

  useEffect(() => {
    fetchUndeliveredOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ undeliveredCount, fetchUndeliveredOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
