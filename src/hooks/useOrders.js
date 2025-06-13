import { useEffect, useState } from "react";
import getOrders from "../api/orders";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOrders()
      .then(setOrders)
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { orders, loading, error };
};

export default useOrders;
