import React, { useState } from "react";
import { Image, Row, Col } from "react-bootstrap";

const ImageSlider = ({ mainImage, relatedImages = [] }) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div>
      {/* Main Image Display */}
      <div className="mb-3 text-center">
        <Image
          src={selectedImage}
          fluid
          rounded
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>

      {/* Thumbnail Image List */}
      <Row className="g-2 justify-content-center">
        {[mainImage, ...relatedImages].map((img, index) => (
          <Col xs={3} sm={2} md={3} lg={2} key={index}>
            <Image
              src={img}
              thumbnail
              onClick={() => handleImageClick(img)}
              style={{
                cursor: "pointer",
                border:
                  img === selectedImage
                    ? "2px solid #0d6efd"
                    : "1px solid #dee2e6",
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ImageSlider;
