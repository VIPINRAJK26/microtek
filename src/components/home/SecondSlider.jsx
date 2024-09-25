import React, { useState } from "react";
import { Carousel, Nav } from "react-bootstrap";
import "./SecondSlider.css"

const SecondSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  const categories = [
    { id: 0, title: "Newly Launched", content: "Luxe Wifi" },
    { id: 1, title: "Home UPS", content: "Solar Batteries" },
    { id: 2, title: "Inverter Batteries", content: "SMF Batteries" },
    { id: 3, title: "Commercial UPS", content: "Inverter Batteries" },
  ];

  return (
    <div>
      {/* Nav for clickable headings */}
      <Nav
        variant="tabs"
        defaultActiveKey={0}
        onSelect={(selectedKey) => handleSelect(Number(selectedKey))}
      >
        {categories.map((category) => (
          <Nav.Item key={category.id}>
            <Nav.Link eventKey={category.id}>{category.title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Carousel for cards */}
      <Carousel
        activeIndex={selectedIndex}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={null}
      >
        {categories.map((category) => (
          <Carousel.Item key={category.id}>
            <div className="d-flex justify-content-center">
              <div
                className="card p-3"
                style={{ width: "18rem", margin: "10px" }}
              >
                <h5>{category.content}</h5>
                <p>Some description related to {category.content}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SecondSlider;
