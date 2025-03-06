
import RulesPopup from "./Rules";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const togglePopup = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/balance`);
        setBalance(res.data.balance);
      } catch (err) {
        console.error('Error fetching balance:', err);
      }
    };

    fetchBalance();
  }, []);

  return(
    <nav id="navbar">
      <div id="navbar-container">
        <h1 id="logo">
           Bunnybet9
        </h1>
        <ul id="nav-menu">
          <li>
            <button id="search-button" className="nav-button">
              <i className="fas fa-search"></i>
            </button>
          </li>
          <li>
            <button id="rules-button" className="nav-button" onClick={togglePopup}>
              Rules
            </button>
          </li>
          <li>
            <button id="balance-button" className="nav-button">
              {balance}
            </button>
          </li>
          <li>
            <button id="exp-button" className="nav-button">
              Exp: 0
            </button>
          </li>
          <li>
            <button
              id="demo-button"
              className="nav-button"
              onClick={toggleDropdown}
            >
              Demo <i className={`fas fa-caret-down ${isDropdownVisible ? "rotate" : ""}`}></i>
            </button>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <button className="dropdown-item"> <a href="/account">Account Statements</a></button>
                <button className="dropdown-item"> <a href="/currbet">Current Bet</a></button>
                <button className="dropdown-item"> <a href="/cas">Casino Result</a></button>
                <button className="dropdown-item">Set Button Values</button>
                <button className="dropdown-item">
                  <a href="/login">SignOut</a>
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div id="scrolling-line">
        Big Bash League 2024-25 is Live! Scratch to Unlock Incredible Rewards!
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <RulesPopup/>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
