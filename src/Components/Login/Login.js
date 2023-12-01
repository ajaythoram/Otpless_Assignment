import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInPage = () => {
  const [otplessUser, setOtplessUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://otpless.com/auth.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.otpless = (otplessUserData) => {
      setOtplessUser(otplessUserData);
      navigate('/dashboard');
    };
  }, []);

  return (
    <div>
      <div id="otpless-login-page">
        {/* Your OTPless login page JSX */}
      </div>
    </div>
  );
};

export default LogInPage;
