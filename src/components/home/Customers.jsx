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

      const customerInterval = setInterval(() => {
        if (customerCount < 2) {
          customerCount += 1; 
          setHappyCustomers(customerCount);
        } else {
          clearInterval(customerInterval);
        }
      }, 300); 

      const dealerInterval = setInterval(() => {
        if (dealerCount < 4) {
          dealerCount += 1; 
          setDealerNetwork(dealerCount);
        } else {
          clearInterval(dealerInterval);
        }
      }, 350);

      const servicePointInterval = setInterval(() => {
        if (servicePointCount < 2384) {
          servicePointCount += 298;
          setServicePoints(servicePointCount);
        } else {
          clearInterval(servicePointInterval);
        }
      }, 350);

      return () => {
        clearInterval(customerInterval);
        clearInterval(dealerInterval);
        clearInterval(servicePointInterval);
      };
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="full-width-container mt-5">
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
          <h2 className="overlay-text2  ">Dealer Network</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {servicePoints.toLocaleString()} +
          </h1>
          <h2 className="overlay-text2  ">Service Points</h2>
        </div>
      </div>

      <div className="chairman-message">
        <p>
          "I am so proud of our dedicated and very responsive team in
          manufacturing and installing premium inverters, batteries, solar
          systems, and water purifiers. Our journey has been driven by a
          commitment to innovation, quality, and sustainability. We have
          consistently delivered reliable energy solutions tailored to meet the
          diverse needs of our residential, commercial, and industrial clients.
          Our success is a testament to our dedicated team and loyal customers.
          As we look to the future, we remain steadfast in our mission to lead
          the renewable energy sector, providing advanced technologies that
          promote environmental stewardship and energy independence."
        </p>
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
