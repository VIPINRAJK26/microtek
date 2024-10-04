import React,{useEffect} from "react";
import { FaCogs, FaTools, FaIndustry, FaCheckCircle } from "react-icons/fa"; 
import "./Strategy.css"
import AOS from "aos";
import "aos/dist/aos.css"


const Strategy = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true,
    })
  },[]);
  return (
    <div className="strategy-section py-4">
      <h2 className="section-title py-5">Our Strategy</h2>
      <div className="strategy-grid container pb-3">
        <div className="strategy-item" data-aos="zoom-in">
          <FaCogs className="strategy-icon" />
          <h3>Engineering & Design</h3>
          <p>
            With all consideration of engineering parameter aspects with respect
            tot the power and power backup system , we will design inverters and
            UPS systems. Batteries for all Power back systems and solar power
            generation units are designed with the considerations of all
            technical guidance and regulations
          </p>
          <strong>
            All the water purification systems are designed with consideration
            of drinking and other water analytical reports and its compliance
          </strong>
        </div>
        <div className="strategy-item" data-aos="zoom-in">
          <FaCheckCircle className="strategy-icon" />
          <h3>Analysis and Calibration</h3>
          <p>
            All the equipment and the systems are tested along with all the
            technical views and checkpoints to ensure perfection before
            initiating the manufacturing process.
          </p>
        </div>
        <div className="strategy-item" data-aos="zoom-in">
          <FaIndustry className="strategy-icon" />
          <h3>Product Manufacturing</h3>
          <p>
            We committed to manufacturing the products and the systems without
            any error in accordance with engineering & design approval, to
            ensure that we established such systems and infrastructure.
          </p>
        </div>
        <div className="strategy-item" data-aos="zoom-in">
          <FaTools className="strategy-icon" />
          <h3>Vision Statement</h3>
          <p>
            Our vision is to be the global leader in sustainable energy and
            water solutions, providing innovative inverters, UPS systems,
            batteries , solar systems , and water purifiers, We aim to empower
            communities with reliable , eco-friendly technologies ,promoting a
            healthier planet and ensuring energy and water independence for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
