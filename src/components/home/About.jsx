import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <section>
      <div className=" p-3 p-md-5 d-flex flex-column flex-md-row justify-content-center about py-md-5 py-3">
        <div
          className="about-left col-12 col-md-4 rounded-4"
          data-aos="zoom-in"
        >
          <h3 className="px-4 py-3 fs-4 fw-bold">About Warrior</h3>
          <p className="px-4">
            With 15 years of experience, Warrior Inverter excels in
            manufacturing and installing high-quality inverters, batteries,
            solar systems, and water purifiers. Our dedication to innovation and
            excellence ensures top-tier products that meet the diverse needs of
            residential, commercial, and industrial clients. <br /> <br />
            Our energy solutions are designed for efficiency and durability,
            promoting sustainability and reducing energy costs. Additionally,
            our advanced water purifiers provide clean, safe drinking water,
            enhancing overall quality of life. <br /> <br />
            We prioritize customer satisfaction through comprehensive support
            and maintenance services. Warrior Inverter is committed to leading
            in green technology, driving environmental stewardship and energy
            independence.
          </p>

          <a href="#" className="view-more">
            View More
          </a>
        </div>

        <div
          className="about-right col-12 col-md-8 mt-4 mt-md-0 ms-md-3"
          data-aos="zoom-in"
        >
          <img
            src="https://avaada.com/wp-content/uploads/types-ofsolar-panels-min-1-scaled-1.jpg"
            alt=""
            className="img-fluid rounded-4"
          />
          <p className=" text-white text-center">
            Powering a Sustainable Future. With pioneering inverters, UPS
            systems, batteries, solar solutions, and water purifiers, Warrior
            leads in innovation and reliability. Trust Warrior for eco-friendly
            technologies that ensure energy independence and clean water,
            enhancing lives and protecting the planet
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
