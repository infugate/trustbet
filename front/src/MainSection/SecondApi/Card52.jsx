import React from 'react'
import Baccrat from './Baccrat'
import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  // Hardcoded array of image data
  const images = [
    { id: 1, title: "Image 1", url: "https://www.livecasinoindia.com/wp-content/uploads/2022/09/32-Cards-Live-by-Ezugi.webp", pageUrl: "/crd1" },
    { id: 2, title: "Image 2", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0r-mrizsbwxY0HEiSrla8cT-nk86R5l2M0AHsynaPGL_Nmq07dSw3JHkwVI5VerrBFw&usqp=CAU", pageUrl: "/crd2" },
    
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