import React from 'react'
import Baccrat from './Baccrat'

import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://gamblingbaba.com/wp-content/uploads/2023/12/Things-Teen-Patti-and-Three-Card-Brag-Have-in-Common-450x338.jpg", pageUrl: "/tnp1" },
      { id: 2, title: "Image 2", url: "https://i1.wp.com/www.moonstats.com/news/wp-content/uploads/2022/11/win-nzd-in-online-casino.jpeg?strip=all", pageUrl: "/tnp2" },
      { id: 3, title: "Image 3", url: "https://metalpintura.com/wp-content/uploads/2024/09/The-Ultimate-Guide-to-the-Best-Online-Casino-Games-of-2024.jpeg", pageUrl: "/tnp3" },
      { id: 4, title: "Image 4", url: "https://media.beto.com/photos/large/2191_beto-guide-to-top-online-casino-games-in-year.webp?_1702026981", pageUrl: "/tnp4" },
      { id: 5, title: "Image 5", url: "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/04/Teen-Patti-real-cash-game-online-.jpg?fit=1380%2C776&ssl=1", pageUrl: "/tnp5" },
      { id: 6, title: "Image 3", url: "https://i.pinimg.com/736x/fb/78/fd/fb78fda8878928f43d5848da70e08e55.jpg", pageUrl: "/tnp3" },
      { id: 7, title: "Image 4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYng82xn6UMY46Z2mk-ZQ3nKpTT8uJdG0emcC4tr9XzfzCxrmtZ5TrFvDO88PtosCoRg&usqp=CAU", pageUrl: "/tnp4" },
      { id: 8, title: "Image 5", url: "https://image.winudf.com/v2/image1/Y29tLmdhbWVzLmxhbmQudGVlbnBhdHRpX3NjcmVlbl8yXzE2MDY0MDcyNjVfMDQ1/screen-2.jpg?fakeurl=1&type=.jpg", pageUrl: "/tnp5" },
      { id: 9, title: "Image 10", url: "https://cdn.pixabay.com/photo/2020/04/07/07/39/dice-5012425_1280.jpg", pageUrl: "/tnp10" },
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