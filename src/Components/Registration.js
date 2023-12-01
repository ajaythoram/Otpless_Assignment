import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("userDetails")) || [];

    const isUserExists = existingUsers.some((user) => user.username === formData.username);
    if (isUserExists) {
      alert("Username already exists. Please choose a different username.");
      return;
    }

    const isPhoneNumberExists = existingUsers.some((user) => user.phoneNumber === formData.phoneNumber);
    if (isPhoneNumberExists) {
      alert("Phone number is already registered. Please use a different phone number.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUserDetails = [...existingUsers, formData];
    localStorage.setItem("userDetails", JSON.stringify(newUserDetails));

    setFormData({
      name: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div id="signup-dv">
          <div>
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <span>Username</span>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <span>Email</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <span>Phone Number</span>
            <input
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <span>Password</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <span>Confirm Password</span>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </div>
      </form>

      <div id="login_btn">
        <p>If already registered:</p>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

export default Registration;
