import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ImageSlider = ({ mainImage, relatedImages }) => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  const inlineStyle = {
    display: "block",
    margin: "0 auto",
    textAlign: "center",
  };

  const mainImageStyle = {
    maxHeight: "400px",
    width: "100%",
    objectFit: "contain",
  };

  const relatedImageStyle = {
    maxHeight: "100px",
    objectFit: "contain",
    cursor: "pointer",
  };

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <Container>
      <Row>
        {/* Main Image */}
        <Col xs={12} sm={10} md={8} lg={6} style={inlineStyle}>
          <Image
            src={currentImage}
            style={mainImageStyle}
            className="single-image rounded-3 "
            alt="Main Product"
            fluid
          />
        </Col>
      </Row>
      <Row className="mt-2 d-flex justify-content-center">
        {/* Related Images */}
        {relatedImages.map((image, index) => (
          <Col xs={4} sm={3} md={2} lg={2} key={index} className="mb-2">
            <Image
              src={image}
              alt={`Related ${index}`}
              style={relatedImageStyle}
              thumbnail
              fluid
              onClick={() => handleImageChange(image)} // Change the main image on click
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageSlider;
