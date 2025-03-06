import React from 'react'
import LiveVirtual from './LiveVirtual'

import { useNavigate } from "react-router-dom";
import "../All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
     
      { id: 1, title: "Image 6", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqX970DDpYMYttjipPhpgDEOF0fbLyCgK8JA&s", pageUrl: "/page6" },
      { id: 2, title: "Image 7", url: "https://www.thesportsgeek.com/app/uploads/2020/11/The-Best-7-Games-for-First-Time-Casino-Gamblers-825x400.jpg", pageUrl: "/page7" },
     
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