import React,{useEffect} from "react";
import {
  FaBolt,
  FaBatteryFull,
  FaShieldAlt,
  FaMicrochip,
  FaTemperatureLow,
} from "react-icons/fa"; 
import "./HIghlight.css"
import AOS from "aos";
import "aos/dist/aos.css";
 

const HighlightSpecifications = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000,
       once: true,
     });
   }, []);
  const specifications = [
    { icon: <FaMicrochip />, title: "32-bit Processor" },
    { icon: <FaBolt />, title: "Smart Charging" },
    { icon: <FaShieldAlt />, title: "Overload Protection" },
    { icon: <FaBatteryFull />, title: "Long Backup" },
    { icon: <FaBolt />, title: "Fast Charging" },
    { icon: <FaTemperatureLow />, title: "Thermal Management" },
  ];

  return (
    <div className="highlight-section container rounded-top-5 pt-0 mt-5">
      <h2 className="section-title pt-5">Specifications</h2>
      <div className="spec-grid">
        {specifications.map((spec, index) => (
          <div key={index} className="spec-item" data-aos="zoom-in">
            <div className="spec-icon">{spec.icon}</div>
            <h3>{spec.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightSpecifications;
