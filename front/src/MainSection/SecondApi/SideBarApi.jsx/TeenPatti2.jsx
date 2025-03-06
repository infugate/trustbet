import React from 'react'
import LiveVirtual from './LiveVirtual'

import { useNavigate } from "react-router-dom";
import "../All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [

      { id: 1, title: "Image 3", url: "https://i.pinimg.com/736x/fb/78/fd/fb78fda8878928f43d5848da70e08e55.jpg", pageUrl: "/page3" },
      { id: 2, title: "Image 4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYng82xn6UMY46Z2mk-ZQ3nKpTT8uJdG0emcC4tr9XzfzCxrmtZ5TrFvDO88PtosCoRg&usqp=CAU", pageUrl: "/page4" },
      { id: 3, title: "Image 5", url: "https://image.winudf.com/v2/image1/Y29tLmdhbWVzLmxhbmQudGVlbnBhdHRpX3NjcmVlbl8yXzE2MDY0MDcyNjVfMDQ1/screen-2.jpg?fakeurl=1&type=.jpg", pageUrl: "/page5" },
      
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