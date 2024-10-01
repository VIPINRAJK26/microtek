import React from "react";
import {
  FaBolt,
  FaBatteryFull,
  FaShieldAlt,
  FaMicrochip,
  FaTemperatureLow,
} from "react-icons/fa"; // Icons
import "./Highlight.css"

const HighlightSpecifications = () => {
  const specifications = [
    { icon: <FaMicrochip />, title: "32-bit Processor" },
    { icon: <FaBolt />, title: "Smart Charging" },
    { icon: <FaShieldAlt />, title: "Overload Protection" },
    { icon: <FaBatteryFull />, title: "Long Backup" },
    { icon: <FaBolt />, title: "Fast Charging" },
    { icon: <FaTemperatureLow />, title: "Thermal Management" },
  ];

  return (
    <div className="battery-section container rounded-top-5 mt-5">
      <h2 className="section-title">Specifications</h2>
      <div className="spec-grid">
        {specifications.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-icon">{spec.icon}</div>
            <h3>{spec.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightSpecifications;
