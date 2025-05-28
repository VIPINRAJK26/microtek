import React, { useEffect, useRef, useState } from "react";
import "./Customers.css";

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [dealerNetwork, setDealerNetwork] = useState(0);
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
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let customerCount = 0;
      let dealerCount = 0;
      let servicePointCount = 0;

      // Make all animations complete at the same time
      const duration = 1000; // 1 second total duration
      const customerSteps = 2;
      const dealerSteps = 4;
      const serviceSteps = 8; // 2384 / 298 = 8 steps

      const customerInterval = setInterval(() => {
        if (customerCount < customerSteps) {
          customerCount += 1;
          setHappyCustomers(customerCount);
        } else {
          clearInterval(customerInterval);
        }
      }, duration / customerSteps);

      const dealerInterval = setInterval(() => {
        if (dealerCount < dealerSteps) {
          dealerCount += 1;
          setDealerNetwork(dealerCount);
        } else {
          clearInterval(dealerInterval);
        }
      }, duration / dealerSteps);

      const servicePointInterval = setInterval(() => {
        if (servicePointCount < 2384) {
          servicePointCount += 298;
          setServicePoints(servicePointCount);
        } else {
          clearInterval(servicePointInterval);
        }
      }, duration / serviceSteps);

      return () => {
        clearInterval(customerInterval);
        clearInterval(dealerInterval);
        clearInterval(servicePointInterval);
      };
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="full-width-container customers">
      <img
        className="background-image2"
        src="https://img.freepik.com/free-photo/cute-family-playing-summer-field_1157-37659.jpg?t=st=1727339822~exp=1727343422~hmac=2366186ebf725a816a3e45dc06b6dfe6485184c161340b472c9f31b7c7ce2ba2&w=1060"
        alt="Background"
      />
      <div className="overlay">
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {happyCustomers.toLocaleString()} L+
          </h1>
          <h2 className="overlay-text2">Happy Customers</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {dealerNetwork.toLocaleString()} L+
          </h1>
          <h2 className="overlay-text2">Dealer Network</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {servicePoints.toLocaleString()}+
          </h1>
          <h2 className="overlay-text2">Service Points</h2>
        </div>
      </div>
    </div>
  );
};

export default Customers;
