import React from 'react'
import LiveVirtual from './LiveVirtual'

import { useNavigate } from "react-router-dom";
import "../All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2Jf15tiokgaZrxfYVNhtfQdtnQUPzVsjLg&s", pageUrl: "/page1" },
    
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