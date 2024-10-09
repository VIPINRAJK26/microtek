import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ImageSlider from "../components/singleproduct/ImageSlider";
import ProductDetails from "../components/singleproduct/ProductDetails";
import ProductDescription from "../components/singleproduct/ProductDescription";

const ProductPage = () => {
  const [activeKey, setActiveKey] = useState("description"); // State for active tab

  const mainImage =
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3-1720502713781.jpg&w=1920&q=75"; // Main product image
  const relatedImages = [
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3-1720502713781.jpg&w=1920&q=75",
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3--1--1720867748068.jpg&w=1920&q=75",
    "https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fproduct%2Fe-rickshaw-charger-tc-4816q-industrial-charger-3-1720502713781.jpg&w=1920&q=75",
  ];

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
    Warrior E-Rickshaw Turbo Charger High-frequency PWM circuit Microcontroller based SMPS Battery Charger In-Built overvoltage protection Protection against reverse polarity Protection against input surge & inrush current.
  `;

  const additionalInfo = `Additional product information will be displayed here.`;
  const technicalSpecs = `Technical specifications of the product will be displayed here.`;

  return (
    <Container fluid className="mt-5">
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

      {/* Tabs for Description, Additional Info, and Technical Specs */}
      <Row className="mt-3 mx-md-5 px-md-5">
        <Col>
          <Tab.Container
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            className="ps-5"
          >
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="description">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="technicalSpecs">
                  Technical Specifications
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="pt-3" style={{lineHeight:"25px"}}>
              <Tab.Pane eventKey="description">
                <p>{description}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="additionalInfo">
                <p>{additionalInfo}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="technicalSpecs">
                <p>{technicalSpecs}</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
