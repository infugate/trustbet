import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Virtual.css';

const LiveVirtual = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div>
      <nav>
        <ul className="navbar52">
          <li
            className={activeItem === '/AllCasino' ? 'active' : ''}
            onClick={() => handleClick('/AllCasino')}
          >
            <Link to="/AllCasino">All Casino</Link>
          </li>
          <li
            className={activeItem === '/TeenPatti2' ? 'active' : ''}
            onClick={() => handleClick('/TeenPatti2')}
          >
            <Link to="/TeenPatti2">TeenPatti</Link>
          </li>
          <li
            className={activeItem === '/Dragon Tiger' ? 'active' : ''}
            onClick={() => handleClick('/DragonTiger')}
          >
            <Link to="/DragonTiger2">Dragon Tiger</Link>
          </li>
          <li
            className={activeItem === '/Luck 7' ? 'active' : ''}
            onClick={() => handleClick('/Luck72')}
          >
            <Link to="/Luck72">Luck 7</Link>
          </li>
          <li
            className={activeItem === '/BoolyBood' ? 'active' : ''}
            onClick={() => handleClick('/BoolyBood')}
          >
            <Link to="/BoolyBood">BoolyBood</Link>
          </li>
          <li
            className={activeItem === '/Others' ? 'active' : ''}
            onClick={() => handleClick('/Others')}
          >
            <Link to="/Others">Others</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LiveVirtual;
