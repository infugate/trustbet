



//for multiuser changes 

import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Validate form fields
  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;
    const isUsernameValid = username.trim().length > 0;

    setIsFormValid(isEmailValid && isPasswordValid && isUsernameValid);
  }, [username, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('User registered successfully!');
        setError('');
        navigate('/login'); // Redirect to login page
      } else {
        setError(data.message || 'Failed to register user');
        setSuccess('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className='xyz'>
      <div className="logo">
        <h1>Trustbet247</h1>
      </div>
      <div className="login-container2">
        <nav className="navbar">
          <div className="login-icon">
            <i className="fa fa-user-circle"></i>
          </div>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="input-icon"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-icon"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Enter your password (min 6 characters)"
              className="input-icon"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <div className="button-group">
            <button
              type="submit"
              className="btn-icon"
              disabled={!isFormValid} // Disable button if form is invalid
            >
              SignUp
              <span className="btn-icon-right">
                <i className="fa fa-sign-in"></i>
              </span>
            </button>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <div className="sign-in-link">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
        <div className="footer-d">
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy and
            Terms of Service apply.
          </p>
        </div>
      </div>
      <section className="footer footer-login">
        <div className="footer-top">
          <div className="footer-links"></div>
          <div className="support-detail">
            <h2>24X7 Support</h2>
          </div>
          <div className="social-icons-box"></div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
