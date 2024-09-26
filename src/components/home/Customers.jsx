import React, { useEffect, useRef, useState } from "react";
import "./Customers.css"; // Import custom CSS for styling

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [dealerNetwork, setDealerNetwork] = useState(0);
  const [serviceEngineers, setServiceEngineers] = useState(0);
  const [servicePoints, setServicePoints] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust threshold to trigger halfway through

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Counter animation for Happy Customers and Dealer Network
  useEffect(() => {
    if (isVisible) {
      let customerCount = 0;
      let dealerCount = 0;
      let serviceEngineerCount = 0;
      let servicePointCount = 0;

      const customerInterval = setInterval(() => {
        if (customerCount < 12) {
          customerCount += 1; // Incrementing customers by 1 lakh
          setHappyCustomers(customerCount);
        } else {
          clearInterval(customerInterval);
        }
      }, 300); // Faster speed for smoother counting

      const dealerInterval = setInterval(() => {
        if (dealerCount < 10) {
          dealerCount += 1; // Incrementing dealers by 500
          setDealerNetwork(dealerCount);
        } else {
          clearInterval(dealerInterval);
        }
      }, 350);

      const serviceEngineerInterval = setInterval(() => {
        if (serviceEngineerCount < 1200) {
          serviceEngineerCount += 100; // Incrementing service engineers by 500
          setServiceEngineers(serviceEngineerCount);
        } else {
          clearInterval(serviceEngineerInterval);
        }
      }, 350);

      const servicePointInterval = setInterval(() => {
        if (servicePointCount < 500) {
          servicePointCount += 50; // Incrementing service points by 500
          setServicePoints(servicePointCount);
        } else {
          clearInterval(servicePointInterval);
        }
      }, 350);

      return () => {
        clearInterval(customerInterval);
        clearInterval(dealerInterval);
        clearInterval(serviceEngineerInterval);
        clearInterval(servicePointInterval);
      };
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="full-width-container mt-5">
      <div className="overlay">
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {happyCustomers.toLocaleString()} Cr+
          </h1>
          <h2 className="overlay-text2">Happy Customers</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {dealerNetwork.toLocaleString()} L+
          </h1>
          <h2 className="overlay-text2  ">Dealer Network</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {serviceEngineers.toLocaleString()} +
          </h1>
          <h2 className="overlay-text2  ">Service Engineer</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {servicePoints.toLocaleString()} +
          </h1>
          <h2 className="overlay-text2  ">Service Points</h2>
        </div>
      </div>
      
      <img
        className="background-image2"
        src="https://img.freepik.com/free-photo/cute-family-playing-summer-field_1157-37659.jpg?t=st=1727339822~exp=1727343422~hmac=2366186ebf725a816a3e45dc06b6dfe6485184c161340b472c9f31b7c7ce2ba2&w=1060" // Replace with actual image
        alt="Background"
      />
    </div>
  );
};

export default Customers;
