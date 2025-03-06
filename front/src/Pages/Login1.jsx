

//for multiuser changes

import React, { useState } from 'react';
import './Login1.css';
import { useNavigate } from 'react-router-dom';

function Login1({ setLogin,setIsVisible }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/bets`,newBet);
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user data to state or local storage for multiuser purposes
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('wallet', JSON.stringify(data.wallet));
        localStorage.setItem('history', JSON.stringify(data.history));
        setMessage(`Welcome, ${data.user.username}!`);
        e.preventDefault();
        setLogin(true)
        setIsVisible(false)
        navigate('/');
        window.location.reload();
          
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error connecting to server. Please try again later.');
    }
  };

  const handleDemoLogin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/demo-login`, {
        method: 'GET',
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        navigate('/dashboard'); // Redirect to dashboard or another page
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error connecting to server. Please try again later.');
    }
  };

  return (
    <div className='xyz'>
      <div className="logo">
        <h1>Trustbet247</h1>
      </div>
      <div className="login-container1">
        <nav className="navbar">
          <div className="login-icon">
            <i className="fa fa-user-circle"></i>
          </div>
        </nav>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="input-icon"
            />
            <span className="icon">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input-icon"
            />
            <span className="icon">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <div className="button-group">
            <button type="submit" className="btn-icon">
              Login
              <span className="btn-icon-right">
                <i className="fa fa-sign-in"></i>
              </span>
            </button>
            <button type="button" className="btn-icon" onClick={handleDemoLogin}>
              Login with Demo ID
              <span className="btn-icon-right">
                <i className="fa fa-sign-in"></i>
              </span>
            </button>
          </div>
        </form>
        {message && <div className="login-message">{message}</div>}

        <div className="sign-in-link">
          <p>Don't have an account? <a href="/">SignUp Here</a></p>
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

export default Login1;
