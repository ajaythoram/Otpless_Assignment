import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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

    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

    const matchingUser = storedUserDetails.find(
      (user) => user.username === formData.username && user.password === formData.password
    );

    if (matchingUser) {
      navigate('/authentication', { state: { userData: matchingUser } });
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <span>Username</span>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
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
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
