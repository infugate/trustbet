import React from 'react'
import Baccrat from './Baccrat'

import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://i0.wp.com/europeangaming.eu/portal/wp-content/uploads/2022/11/ultimate_andar_bahar.png?resize=1000%2C600&ssl=1", pageUrl: "/andr" },
      { id: 2, title: "Image 2", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzK4FFW70fdzrwLZOHawpoRV1-pihtqIkWBg&s", pageUrl: "/andr" },
      { id: 3, title: "Image 3", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPaNLNM7_Z2xH9-T5s-2dNYsvKuFuM5sd4g&s", pageUrl: "/andr" },
      { id: 4, title: "Image 4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZETsCQWc0H7sb-ML2zAa5r3XR_YwLCXq_LrIZzvoZXatSzTL5ca2a5i6hurHVxNSedd0&usqp=CAU", pageUrl: "/andr" },
      
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