import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize"; // To handle window resize

const OrderSuccess = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const { width, height } = useWindowSize(); // Get screen size for confetti

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-container min-vh-100 d-flex flex-column justify-content-center align-items-center p-3 position-relative overflow-hidden">
      {/* Confetti! (Runs for 5 seconds) */}
      <Confetti
        width={width}
        height={height}
        recycle={false} // Stop after 1 cycle
        numberOfPieces={300}
        gravity={0.2}
        colors={["#FF5252", "#4CAF50", "#2196F3", "#FFC107"]} // Custom colors
        style={{ position: "fixed", top: 0 }}
      />

      {/* Animated Success Image */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: isAnimating ? 1.1 : 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-4"
      >
        <img
          src="/success.png"
          alt="Order Success"
          width={200}
          className="img-fluid success-image"
        />
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-5"
      >
        <h1 className="fw-bold mb-3 text-success">
          Order Placed Successfully! 🎉
        </h1>
        <p className="text-muted">
          Your order is confirmed. We'll notify you when it ships.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="d-flex flex-wrap justify-content-center gap-3"
      >
        <Link to="/orders" className="btn btn-primary px-4 py-2 rounded-pill">
          View Order
        </Link>
        <Link to="/" className="btn btn-outline-primary px-4 py-2 rounded-pill">
          Continue Shopping
        </Link>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
