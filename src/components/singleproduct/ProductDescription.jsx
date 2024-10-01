import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ProductDescription = ({ description }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h4>Description</h4>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDescription;
