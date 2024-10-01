import React from "react";
import { FaBatteryHalf, FaShieldAlt } from "react-icons/fa"; // Battery Icons
import "./Battery.css";

const BatterySection = () => {
  const batteryFeatures = [
    { icon: <FaBatteryHalf />, title: "Extra Long Life" },
    { icon: <FaShieldAlt />, title: "Quick Recharge" },
    { icon: <FaShieldAlt />, title: "Ceramic Indicator" },
    { icon: <FaBatteryHalf />, title: "99.9% Lead Used" },
    { icon: <FaBatteryHalf />, title: "Ultra Warranty" },
  ];

  return (
    <div className="battery-section rounded-bottom-5 container">
      <h2 className="section-title">Battery Features</h2>
      <div className="battery-grid">
        {batteryFeatures.map((feature, index) => (
          <div key={index} className="battery-item">
            <div className="battery-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatterySection;
