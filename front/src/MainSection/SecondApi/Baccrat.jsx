// import React, { useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Baccrat.css'; // Import the CSS file
// const ScrollingNav = () => {
//   const navRef = useRef(null);
//   const navigate = useNavigate(); // Initialize navigate
//   const items = [
//     '',
//     'All Casino', 'Roulette', 'Teenpati', 'Poker',
//     'Baccarat', 'Dragon Tiger', '32 Card',
//     'Andar Bahar', 'Lucky-7', '3 Card Judgement', 'Casino War',
//   ];

//   const handleScrollLeft = () => {
//     navRef.current.scrollLeft -= 200;
//   };

//   const handleScrollRight = () => {
//     navRef.current.scrollLeft += 200;
//   };

//   const handleItemClick = (item) => {
//     // Convert to kebab-case
//     navigate(`/${item}`); // Navigate to the specific page
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       navRef.current.scrollLeft = 0;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div>
//     <div className="scrolling-nav-container">
//       <button onClick={handleScrollLeft} className="scroll-button left">&lt;</button>
//       <div className="scrolling-nav" ref={navRef}>
//         <ul className="scrolling-nav-list">
//           {items.map((item, index) => (
//             <li
//               key={index}
//               className="scrolling-nav-item"
//               onClick={() => handleItemClick(item)} // Add click handler
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={handleScrollRight} className="scroll-button right">&gt;</button>
//     </div>
    
//     </div>
//   );
// };

// export default ScrollingNav;


import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Baccrat.css'; // Import the CSS file

const ScrollingNav = () => {
  const navRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate
  const items = [
    '',
    'All Casino', 'Roulette', 'Teenpati', 'Poker',
    'Baccarat', 'Dragon Tiger', '32 Card',
    'Andar Bahar', 'Lucky-7', '3 Card Judgement', 'Casino War',
  ];

  const handleScrollLeft = () => {
    navRef.current.scrollLeft -= 200; // Adjust scrolling step
  };

  const handleScrollRight = () => {
    navRef.current.scrollLeft += 200; // Adjust scrolling step
  };

  const handleItemClick = (item) => {
    navigate(`/${item}`); // Navigate to the specific page
  };

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        navRef.current.scrollLeft = 0; // Reset scroll position on resize
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="scrolling-nav-container">
      <button onClick={handleScrollLeft} className="scroll-button left">&lt;</button>
      <div className="scrolling-nav" ref={navRef}>
        <ul className="scrolling-nav-list">
          {items.map((item, index) => (
            <li
              key={index}
              className="scrolling-nav-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleScrollRight} className="scroll-button right">&gt;</button>
    </div>
  );
};

export default ScrollingNav;

