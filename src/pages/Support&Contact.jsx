import React, { useState } from "react";
import "./ContactSection.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { EnvelopeFill, TelephoneFill, GeoAltFill } from "react-bootstrap-icons";
import axiosInstance from "../api/axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    support_type: "", // ✅ match backend field name
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("contact_support/", formData);
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ support_type: "", name: "", email: "", message: "" });
    } catch (error) {
      const detail =
        error.response?.data?.support_type?.[0] ||
        error.response?.data?.message ||
        "Something went wrong.";
      setStatus({ success: false, message: detail });
    }
  };

  return (
    <div className="pb-5">
      {/* Top Section */}
      <div className="contact-header text-white text-center">
        <Container>
          <h2 className="fs-1 fw-bold pt-5">Customer Support</h2>
          <p className="w-75 mx-auto pt-3">
            Choose Your Support Type and Fill The Form Below
          </p>
          <Form.Select
            className="w-50 mx-auto rounded-5 mb-4"
            name="support_type" // ✅ match backend field name
            value={formData.support_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Support Type</option>
            <option value="installation">Product Installation</option>
            <option value="complaint">Complaint Registration</option>
            <option value="service">General Service Request</option>
            <option value="amc">AMC Request</option>
            <option value="business">Business Enquiry</option>
          </Form.Select>
        </Container>
      </div>

      {/* Contact Info Section */}
      <Container className="contact-info text-white">
        <Row className="text-center">
          <Col md={4} className="mb-3">
            <div className="info-box py-4 px-5 rounded">
              <GeoAltFill size={20} className="me-2" />
              India, Manjeri, Malappuram
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="info-box py-4 px-5 rounded">
              <TelephoneFill size={20} className="me-2" />
              +91 9846151900
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="info-box py-4 px-5 rounded">
              <EnvelopeFill size={20} className="me-2" />
              info@warriorind.com
            </div>
          </Col>
        </Row>
      </Container>

      {/* Form Section */}
      <Container className="form-section rounded-4 py-5">
        <Row>
          <Col md={6}>
            <Form className="ps-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-light text-black"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-light text-black"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-light text-black"
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Submit
              </Button>
              {status.message && (
                <Alert
                  variant={status.success ? "success" : "danger"}
                  className="mt-3"
                >
                  {status.message}
                </Alert>
              )}
            </Form>
          </Col>
          <Col md={6} className="text-white align-content-center">
            <h3 className="fw-bold fs-1 text-center">
              Contact <span className="text-danger">Us</span>
            </h3>
            <p className="w-75 mx-auto text-center">
              We strive to respond to all inquiries within 48 hours. Thank you
              for your patience and interest.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
