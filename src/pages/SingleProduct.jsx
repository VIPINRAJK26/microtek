import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ImageSlider from "../components/products/ImageSlider";
import useProducts from "../hooks/useProducts";
import ProductDetails from "../components/products/ProductDetails";

const SingleProduct = () => {
  const { id } = useParams(); // This is sku or id passed in URL
  const { products } = useProducts();
  const [activeKey, setActiveKey] = useState("description");

  console.log(products, "products");
  console.log(id, "id");

  const product = products.find((product) => product.id === Number(id));
 // Match on SKU or use id
  
  console.log(product, "product");

  if (!product) {
    return <div className="pt-5 text-center">Product not found.</div>;
  }

  const {
    image: mainImage,
    relatedImages,
    description,
    additional_info,
    technical_spec,
    ...productDetails
  } = product;

  console.log(product , "product");

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} md={5}>
          <ImageSlider
            mainImage={product.image}
            relatedImages={[product.image2, product.image3].filter(Boolean)}
          />
        </Col>

        <Col xs={12} md={7}>
          <ProductDetails {...productDetails} />
        </Col>
      </Row>

      <Row className="mt-3 mx-md-5 px-md-5">
        <Col>
          <Tab.Container
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
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

            <Tab.Content className="pt-3" style={{ lineHeight: "25px" }}>
              <Tab.Pane eventKey="description">
                <p>{description}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="additionalInfo">
                <p>{additional_info}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="technicalSpecs">
                <ul>
                  {technical_spec?.split(",").map((spec, index) => (
                    <li key={index}>{spec.trim()}</li>
                  ))}
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
