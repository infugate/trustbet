import React from 'react'
import Baccrat from './Baccrat'

import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdmpg_1ZTstXafONOjJvgh6NjgSh4XDFqgQ&s", pageUrl: "/page1" },
      { id: 2, title: "Image 2", url: "https://www.livecasinocomparer.com/wp-content/uploads/2021/05/Pragmatic-Play-Live-Dragon-Tiger.jpg", pageUrl: "/page2" },
      { id: 3, title: "Image 3", url: "https://i.ytimg.com/vi/QOSgHPjSqvE/maxresdefault.jpg", pageUrl: "/page3" },
      { id: 4, title: "Image 4", url: "https://media.royalpanda.com/images/games/dragon-tiger/dragon-tiger-tile.jpg", pageUrl: "/page4" },
      
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