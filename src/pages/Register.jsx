import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "", // Changed from 'name' to 'username'
    email: "",
    password: "",
    password2: "", // Changed from 'confirmPassword' to 'password2'
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      // Changed to 8 characters to match backend
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password2 !== formData.password)
      newErrors.password2 = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          "/register/",
          formData
        );
        console.log("Registration successful", response.data);
        setSuccess(true);
      } catch (error) {
        if (error.response) {
          // Handle backend validation errors
          setErrors(error.response.data);
        } else {
          console.error("Registration error:", error);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <h2 className="mb-5 text-center">Create an Account</h2>

        {success ? (
          <div className="alert alert-success">
            Registration successful! Please <Link to="/login">login</Link>.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="shadow p-5 rounded-4"
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.password2 ? "is-invalid" : ""
                }`}
                id="password2"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
              />
              {errors.password2 && (
                <div className="invalid-feedback">{errors.password2}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <div className="d-flex justify-content-center gap-1 pt-4">
              <p>Already have an account?</p>
              <p>
                <a href="/login">Login</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
