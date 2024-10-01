import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageSlider from "../components/singleproduct/ImageSlider";
import ProductDetails from "../components/singleproduct/ProductDetails";
import ProductDescription from "../components/singleproduct/ProductDescription";



const ProductPage = () => {
  const mainImage =
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3-1720502713781.jpg&w=1920&q=75"; // Main product image
  const relatedImages = [
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3-1720502713781.jpg&w=1920&q=75",
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3--1--1720867748068.jpg&w=1920&q=75",
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3-1720502713781.jpg&w=1920&q=75",
  ]; // Related product images

  const productDetails = {
    sku: "899-TC1-4816",
    category: "Smart Turbo Charge",
    price: 4952,
    weight: "3.1kg",
    voltage: "Same as Input",
    dimensions: "14x25.8x9.1",
    features: [
      "Quick Cut Technology.",
      "Multi-Stage Charging with Micro Controller Based Monitoring & Control.",
      "Suitable for All Battery Brands & 30% Faster Charging.",
      "Stabilizes Battery Gravity & Extends Battery Life.",
      "Gives Extra Mileage & Less Water Topping.",
      "Wide Oper. AC Input Range 90V-300V & Highest Power Factor up to 0.99.",
      "User-Friendly LED Indicators, showing Battery Charging Status.",
    ],
  };

  const description = `
    Microtek E-Rickshaw Turbo Charger High-frequency PWM circuit Microcontroller based SMPS Battery Charger In-Built overvoltage protection Protection against reverse polarity Protection against input surge & inrush current.
  `;

//   const style={
//     backgroundColor:"grey",
//   }
  

  return (
    <Container  fluid className="mt-5">
      <Row>
        {/* Left: Images */}
        <Col xs={12} md={5}>
          <ImageSlider mainImage={mainImage} relatedImages={relatedImages} />
        </Col>

        {/* Right: Product Details */}
        <Col xs={12} md={7}>
          <ProductDetails
            sku={productDetails.sku}
            category={productDetails.category}
            price={productDetails.price}
            weight={productDetails.weight}
            voltage={productDetails.voltage}
            dimensions={productDetails.dimensions}
            features={productDetails.features}
          />
        </Col>
      </Row>

      {/* Product Description (Below) */}
      <Row>
        <Col>
          <ProductDescription description={description} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
