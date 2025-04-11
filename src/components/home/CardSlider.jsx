import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import "./CardSlider.css";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Newly Launched",
    "Home UPS",
    "Inverter Batteries",
    "Commercial UPS",
  ];

  const cardsData = {
    "Newly Launched": [
      {
        title: "Luxe Wifi",
        image: "https://mma.prnewswire.com/media/2285901/Huasun_Energy.jpg",
      },
      {
        title: "Solar Batteries",
        image: "https://mma.prnewswire.com/media/2285901/Huasun_Energy.jpg",
      },
      {
        title: " Batteries",
        image: "https://mma.prnewswire.com/media/2285901/Huasun_Energy.jpg",
      },
      {
        title: "Inverter Batteries",
        image: "https://mma.prnewswire.com/media/2285901/Huasun_Energy.jpg",
      },
    ],
    "Home UPS": [
      { title: "UPS Model 1", image: "ups1.jpg" },
      { title: "UPS Model 2", image: "ups2.jpg" },
      { title: "UPS Model 3", image: "ups3.jpg" },
      { title: "UPS Model 4", image: "ups4.jpg" },
    ],
    "Inverter Batteries": [
      { title: "Battery Model 1", image: "battery1.jpg" },
      { title: "Battery Model 2", image: "battery2.jpg" },
      { title: "Battery Model 3", image: "battery3.jpg" },
      { title: "Battery Model 4", image: "battery4.jpg" },
    ],
    "Commercial UPS": [
      { title: "Commercial UPS 1", image: "commercial1.jpg" },
      { title: "Commercial UPS 2", image: "commercial2.jpg" },
      { title: "Commercial UPS 3", image: "commercial3.jpg" },
      { title: "Commercial UPS 4", image: "commercial4.jpg" },
    ],
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="card-slider p-2 p-md-5 pb-5">
      {/* Headings */}
      <h2 className="text-center fw-bold pt-5 pb-3">
        Reinventing the Spirit of Innovation
      </h2>
      <ul className="nav nav-pills justify-content-center my-3">
        {categories.map((category, index) => (
          <li key={index} className="nav-item">
            <button
              className={`nav-link ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleSelect(index)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Card Carousel */}
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
      >
        {categories.map((category, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {cardsData[category].map((card, i) => (
                <div key={i} className="col-lg-3 col-md-6 mb-4">
                  <Card className="h-100 rounded-5 mt-3">
                    <Card.Img
                      className="rounded-top-5"
                      variant="top"
                      src={card.image}
                      alt={card.title}
                    />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
