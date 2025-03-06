import React from 'react'
import LiveVirtual from './LiveVirtual'

import { useNavigate } from "react-router-dom";
import "../All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://5.imimg.com/data5/SELLER/Default/2022/1/TO/CU/HX/53668334/amar-akhbar-anthony-250x250.jpg", pageUrl: "/page1" },
      { id: 2, title: "Image 2", url: "https://www.livebet.com/images/casino/live-casino/bombay/bollywood-stars.webp", pageUrl: "/page1" },
    ];
  
    const handleClick = (url) => {
      navigate(url); // Redirect to the specific page
    };
  return (
    <div>
        <div className="nav">
               <LiveVirtual/>
        </div>
        <div className="grid-container">
      {images.map((item) => (
        <div
          className="card"
          key={item.id}
          onClick={() => handleClick(item.pageUrl)} // Redirect on card click
        >
          <img src={item.url} alt={item.title} className="card-image" />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Pokker