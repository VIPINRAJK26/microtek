import React from 'react'
import "./About.css"

const About =()=> {
  return (
    <div className="container d-flex justify-content-center  about py-5">
      <div className="about-left col-md-4 rounded-4 col-12 ">
        <h3 className=" px-4 py-3 fw-semi-bold">About Microtek</h3>
        <p className="px-4">
          Microtek is India's #1 home UPS brand with a big range of
          technologically advanced products in Power backup, Solar and
          Electrical solutions. With 4 manufacturing units across India and
          presence in over 29 countries the brand has built trust by serving
          more than 12 crore happy customers. Our 2000+ employees dedicatedly
          work towards providing customer delight to the entire nation
        </p>
        <a href="" className="view-more">
          view more
        </a>
      </div>
      <div className="about-right col-md-8 col-12">
        <img
          src="https://solup.com/wp-content/uploads/2023/09/sunset-sky-powers-wind-solar-energy-generated-by-ai-1080x675.jpg"
          alt=""
          className='rounded-4'
          
        />
      </div>
    </div>
  );
}

export default About