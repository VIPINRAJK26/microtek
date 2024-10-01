import React from 'react';
import { Accordion, Form } from 'react-bootstrap';

const ProductFilter = () => {
  return (
    <div className="filter-container">
      <h5>Filters</h5>
      <Accordion defaultActiveKey="0">
        {/* Product Series */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Product Series</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="E² Series" />
            <Form.Check type="checkbox" label="iMAXX Series" />
            <Form.Check type="checkbox" label="MAX LiFe Series" />
            <Form.Check type="checkbox" label="MAX+ Series" />
            <Form.Check type="checkbox" label="Super MAX+ Series" />
          </Accordion.Body>
        </Accordion.Item>

        {/* KVA Rating */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>KVA Rating</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="1KVA" />
            <Form.Check type="checkbox" label="2KVA" />
            <Form.Check type="checkbox" label="3KVA" />
            {/* Add more options as necessary */}
          </Accordion.Body>
        </Accordion.Item>

        {/* Output Voltage */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Output Voltage</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="230V" />
            <Form.Check type="checkbox" label="415V" />
            {/* Add more options as necessary */}
          </Accordion.Body>
        </Accordion.Item>

        {/* Digital Display */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Digital Display</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="Yes" />
            <Form.Check type="checkbox" label="No" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Technology */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Technology</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="Inverter" />
            <Form.Check type="checkbox" label="Non-Inverter" />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Mobile Connectivity</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="Yes" />
            <Form.Check type="checkbox" label="No" />
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>
    </div>
  );
};

export default ProductFilter;