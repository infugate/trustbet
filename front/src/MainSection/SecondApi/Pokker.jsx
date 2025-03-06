import React from 'react'
import Baccrat from './Baccrat'

import { useNavigate } from "react-router-dom";
import "./All.css";
const Pokker = () => {
   const navigate = useNavigate(); // Hook for navigation
  
    // Hardcoded array of image data
    const images = [
      { id: 1, title: "Image 1", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkp8aQl3W3O2l0NBdC__e12mBE7xek3N3bg&s", pageUrl: "/page1" },
      { id: 2, title: "Image 2", url: "https://cdn1.epicgames.com/spt-assets/9f98133e7f824b55a751d70f257647bd/polker-video-yn2s3.png?resize=1&w=480&h=270&quality=medium", pageUrl: "/page2" },
      { id: 3, title: "Image 3", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChAAaSO_HQi-qQmHr5PEDeDbIpZPH2vpo-Yp2ZAvdUkEcMYdyZRKt23-EYH50bJ35qxc&usqp=CAU", pageUrl: "/page3" },
      
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