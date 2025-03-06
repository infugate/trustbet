import React from 'react'
import Baccrat from './Baccrat'

import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://blog.marathonbet.com/wp-content/uploads/2022/12/Roulette-en.png", pageUrl: "/rol1" },
      { id: 2, title: "Image 2", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6XBV97cIAybzGclYrCBXmssuAnSum242tbEJCmA75XNTaRFDFPT743k35JuhEbsKnh8&usqp=CAU", pageUrl: "/rol2" },
      { id: 3, title: "Image 3", url: "https://cdn2.softswiss.net/bobcasino/i/s3/pragmaticexternal/LobbyRoulette.webp", pageUrl: "/rol3" },
      { id: 4, title: "Image 4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCY4wm0ATS6oSrAgt1z133Nb6-Mk56Y_Ys7nhwtWHGa4hLAvPfgNwpumMgv95c96oVjOI&usqp=CAU", pageUrl: "/rol4" },
      { id: 5, title: "Image 5", url: "https://roulette77.us/build/images/live-roulette/games/24-7-roulette-authentic-gaming.jpg", pageUrl: "/rol5" },
      
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