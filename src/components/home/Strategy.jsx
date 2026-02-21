import { useEffect } from "react";
import { FaCogs, FaTools, FaIndustry, FaCheckCircle } from "react-icons/fa";
import "./Strategy.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Strategy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="strategy-section py-5">
      <div className="px-5">
        <h2 className="section-title text-center mb-5">Our Strategy</h2>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <div className="d-flex justify-content-center align-items-center flex-column strategy-card">
              <FaCogs className="strategy-icon" />
              <h5>Engineering & Design</h5>
              <p>
                With all consideration of engineering parameter aspects with
                respect tot the power and power backup system , we will design
                inverters and UPS systems. Batteries for all Power back systems
                and solar power generation units are designed with the
                considerations of all technical guidance and regulations
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="d-flex justify-content-center align-items-center flex-column strategy-card">
              <FaCheckCircle className="strategy-icon" />
              <h5>Analysis & Calibration</h5>
              <p>
                All the equipment and the systems are tested along with all the
                technical views and checkpoints to ensure perfection before
                initiating the manufacturing process.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="d-flex justify-content-center align-items-center flex-column strategy-card">
              <FaIndustry className="strategy-icon" />
              <h5>Manufacturing</h5>
              <p>
                We committed to manufacturing the products and the systems
                without any error in accordance with engineering & design
                approval, to ensure that we established such systems and
                infrastructure.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="d-flex justify-content-center align-items-center flex-column strategy-card">
              <FaTools className="strategy-icon" />
              <h5>Installation</h5>
              <p>
                All the Products and systems are delivered within the committed
                time and installed by the service engineers or designated
                technical personnel & relevant instructions to system operations
                will be provided to the Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
