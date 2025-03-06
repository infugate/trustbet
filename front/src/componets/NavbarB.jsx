import React, { useState } from "react";
import "./NavbarB.css";
import {useNavigate } from "react-router-dom";
// import MainCom from './MainSection/MainCom';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate=useNavigate();
  const handleItemClick = (item) => {
    setActiveItem(navigate(`${item}`));
  };

  return (
    <div className="navbar">
      <div className="navbar-items">
        {[
          "HOME",
          "LOTTERY",
          "CRICKET",
          "TENNIS",
          "FOOTBALL",
          "TABLE TENNIS",
          "BACCARAT",
          "32-CARDS",
          "TEENPATTI",
          "POKKER",
          "LUCKY 7",
        ].map((item, index) => (
          <div className="nav-item" key={index}>
            <a
              href=""
              className={`nav-link ${activeItem === item ? "active-item" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </a>
          </div>
        ))}
      </div>
    {/* <div>
    <MainCom/>
    </div> */}
    </div>
  );
};

export default Navbar;