import React, { useEffect } from "react";
import { FaBatteryHalf, FaShieldAlt } from "react-icons/fa";
import "./Battery.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BatterySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const batteryFeatures = [
    { icon: <FaBatteryHalf />, title: "Extra Long Life" },
    { icon: <FaShieldAlt />, title: "Quick Recharge" },
    { icon: <FaShieldAlt />, title: "Ceramic Indicator" },
    { icon: <FaBatteryHalf />, title: "99.9% Lead Used" },
    { icon: <FaBatteryHalf />, title: "Ultra Warranty" },
  ];

  return (
    <section className="battery-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">Battery Features</h2>

        <div className="d-flex justify-content-center align-items-center row g-4 row-cols-2 row-cols-md-3 row-cols-lg-5">
          {batteryFeatures.map((feature, index) => (
            <div
              key={index}
              className="col-md-4 col-lg-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="battery-card">
                <div className="icon-wrapper">{feature.icon}</div>
                <h6>{feature.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatterySection;
