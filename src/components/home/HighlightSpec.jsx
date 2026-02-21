import React, { useEffect } from "react";
import {
  FaBolt,
  FaBatteryFull,
  FaShieldAlt,
  FaMicrochip,
  FaTemperatureLow,
} from "react-icons/fa";
import "./Highlight.css";
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
    <section className="highlight-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">Specifications</h2>

        <div className="row g-4 justify-content-center">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className="col-md-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="highlight-card">
                <div className="icon-wrapper">{spec.icon}</div>
                <h6>{spec.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSpecifications;
