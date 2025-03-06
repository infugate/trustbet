import React from 'react'
import Baccrat from './Baccrat'

import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD41-tWtj1fgjgdgwGcHaXzMqspjMSh7BRutQ9bWpquqXZBPhld8DKzB92qjIetRt4kjg&usqp=CAU", pageUrl: "/page1" },
      { id: 2, title: "Image 2", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPHQTh1vT99qfVSnoMq8oaEKO-hTY6t0xKg&s", pageUrl: "/page2" },
      { id: 3, title: "Image 3", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXfDsQvECQ1RcZU0dP2UW0pxiG7rXb44EUA&s", pageUrl: "/page3" },
      { id: 4, title: "Image 4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1e4XoYCthuc8HcMNXfvD5kHrSFyWRS-Jg0A&s", pageUrl: "/page4" },
      
    ];
  
    const handleClick = (url) => {
      navigate(url); // Redirect to the specific page
    };
  return (
    <div>
        <div className="nav">
               <Baccrat/>
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