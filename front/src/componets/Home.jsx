import React, { useState, useEffect } from 'react';
import "./Home.css";
import { BiSolidCricketBall } from "react-icons/bi";
import { IoMdFootball } from "react-icons/io";
import { MdSportsTennis } from "react-icons/md";
import { useNavigate} from 'react-router-dom';

const NavButton = ({ icon, label, maxLabelLength, onClick }) => {
  const truncatedLabel = label.length > maxLabelLength ? `${label.substring(0, maxLabelLength)}... `: label;

  return (
    <div className='home-nav1-button' onClick={() => onClick(label)}>
      {icon && React.cloneElement(icon, { className: "flicker", style: { fontSize: "20px", marginRight: "8px", color: "white" } })}
      <span className="flicker">{truncatedLabel}</span>
    </div>
  );
};

const Home = () => {
  // Hook to track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate=useNavigate();
  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set maxLabelLength based on screen width
  const maxLabelLength = screenWidth <= 768 ? 25 : 16;

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    // console.log(`Button clicked: ${buttonName}`);
    navigate(`/${buttonName}`);
  };

  return (
    <div className='home-container'>
        <nav className='home-nav1'>
            <NavButton icon={<MdSportsTennis />} label="Color Pridiction" maxLabelLength={maxLabelLength} onClick={handleButtonClick} />
            <NavButton icon={<MdSportsTennis />} label="Avaitor" maxLabelLength={maxLabelLength} onClick={handleButtonClick} />
            <NavButton icon={<IoMdFootball />} label="Bayern Munich v RB Leipzig" maxLabelLength={maxLabelLength} onClick={handleButtonClick} />
            <NavButton icon={<IoMdFootball />} label="Verona v AC Milan" maxLabelLength={maxLabelLength} onClick={handleButtonClick} />
            <NavButton icon={<BiSolidCricketBall />} label="New Zealand Women v Australia Women" maxLabelLength={maxLabelLength} onClick={handleButtonClick} />
        </nav>

        <nav className='home-nav2-container'>
            {[
                "POLITICS", "CRICKET", "FOOTBALL", "TENNIS", "KABADDI", "ESOCCER", "HORSE RACING", "GREYHOUND RACING", "TABLE TENNIS", "BASKETBALL", "BOXING", "MIXED MARTIAL ARTS", "AMERICAN FOOTBALL", "VOLLEYBALL", "BADMINTON", "SNOOKER", "ICE HOCKEY", "E GAMES", "FUTSAL", "HANDBALL", "MOTOR SPORTS"
            ].map((buttonName) => (
                <button className="home-nav2" key={buttonName} onClick={() => handleButtonClick(buttonName)}>
                    {buttonName}
                </button>
            ))}
        </nav>

        <div className='home-main'>
          
        </div>
    </div>
  );
};

export default Home;