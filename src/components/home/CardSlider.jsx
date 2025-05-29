import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import "./CardSlider.css";
import useProducts from "../../hooks/useProducts";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useProducts();

  const categories = [
    "Newly Launched",
    "Home UPS",
    "Inverter Batteries",
    "Commercial UPS",
  ];

  const groupedProducts = {
    "Newly Launched": products.filter((p) => p.new_arrival).slice(0, 4),
    "Home UPS": products.filter((p) => p.category === "home_ups").slice(0, 4),
    "Inverter Batteries": products
      .filter((p) => p.category === "batteries")
      .slice(0, 4),
    "Commercial UPS": products
      .filter((p) => p.category === "solar_power")
      .slice(0, 4),
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="card-slider p-2 p-md-5 pb-5">
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

      {/* Carousel Section */}
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
      >
        {categories.map((category, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {groupedProducts[category]?.map((card, i) => (
                <div key={i} className="col-lg-3 col-md-6 mb-4">
                  <Link to={`/single/${card.id}`} className="text-decoration-none">
                    <Card className="h-100 rounded-5 mt-3">
                      <Card.Img
                        className="rounded-top-5 p-4"
                        variant="top"
                        src={card.image}
                        alt={card.title}
                      />
                      <Card.Body>
                        <Card.Title className="text-center fw-medium text-capitalize">{card.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
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
