import React from 'react'
import Baccrat from './Baccrat'

import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://cdn.adda52.com/assets/banner/casino-games.webp", pageUrl: "/page1" },
      { id: 2, title: "Image 2", url: "https://i1.wp.com/www.moonstats.com/news/wp-content/uploads/2022/11/win-nzd-in-online-casino.jpeg?strip=all", pageUrl: "/ocno1" },
      { id: 3, title: "Image 3", url: "https://metalpintura.com/wp-content/uploads/2024/09/The-Ultimate-Guide-to-the-Best-Online-Casino-Games-of-2024.jpeg", pageUrl: "/ocno3" },
      { id: 4, title: "Image 4", url: "https://media.beto.com/photos/large/2191_beto-guide-to-top-online-casino-games-in-year.webp?_1702026981", pageUrl: "/ocno4" },
      { id: 5, title: "Image 5", url: "https://tse-mm.bing.com/th?q=casino%20post", pageUrl: "/ocno5" },
      { id: 6, title: "Image 6", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqX970DDpYMYttjipPhpgDEOF0fbLyCgK8JA&s", pageUrl: "/ocno6" },
      { id: 7, title: "Image 7", url: "https://www.thesportsgeek.com/app/uploads/2020/11/The-Best-7-Games-for-First-Time-Casino-Gamblers-825x400.jpg", pageUrl: "/ocno7" },
      { id: 8, title: "Image 8", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbNSr-UIHv7DHbzMv27i3j8veHf0wlkCtRQ&s", pageUrl: "/ocno8" },
      { id: 9, title: "Image 9", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vI_ZJ1qh905jo45aqNm3aInvQPbbdmj32g&s", pageUrl: "/ocno9" },
      { id: 10, title: "Image 10", url: "https://cdn.pixabay.com/photo/2020/04/07/07/39/dice-5012425_1280.jpg", pageUrl: "/ocno10" },
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