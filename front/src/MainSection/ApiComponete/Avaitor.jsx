// import React, { useEffect, useState } from "react";
// // import "./GameBoard.css";
// import io from "socket.io-client";

// // Initialize the socket connection
// const socket = io("http://localhost:4000"); // Replace with your server's URL if different

// const GameBoard = () => {
//     const [multiplier, setMultiplier] = useState(1.0); // Start multiplier from 1.0
//     const [isFlying, setIsFlying] = useState(false); // Track if the plane is flying
//     const [previousMultiplier, setPreviousMultiplier] = useState(0); // Track the previous multiplier
//     const [planePosition, setPlanePosition] = useState(0); // Track plane's vertical position
//     const [targetMultiplier, setTargetMultiplier] = useState(0); // Random target multiplier
//     const [betAmount, setBetAmount] = useState(null); // Bet amount state
//     const [hasBet, setHasBet] = useState(false); // Track if a bet has been placed

//     useEffect(() => {
//         let multiplierInterval;

//         // Generate a random target multiplier between 1 and 5
//         if (isFlying && targetMultiplier === 0) {
//             setTargetMultiplier(Math.random() * 4 + 1); // Random between 1 and 5
//         }

//         if (isFlying) {
//             // Increment the multiplier while flying, but stop once it reaches the target
//             multiplierInterval = setInterval(() => {
//                 setMultiplier((prevMultiplier) => {
//                     // Randomly increase the multiplier by a value between 0.05 and 0.15
//                     const randomIncrease = (Math.random() * 0.1) + 0.05;
//                     const newMultiplier = prevMultiplier + randomIncrease;

//                     // Stop once we reach or exceed the target multiplier
//                     if (newMultiplier >= targetMultiplier) {
//                         clearInterval(multiplierInterval);
//                         setIsFlying(false);
//                     }
//                     return newMultiplier;
//                 });

//                 setPlanePosition((prevPosition) => prevPosition - 5); // Move plane upwards
//             }, 100); // Increment every 100ms
//         }

//         return () => {
//             clearInterval(multiplierInterval);
//         };
//     }, [isFlying, multiplier, targetMultiplier]);

//     const placeBet = (amount) => {
//         // Place the bet immediately when the button is clicked
//         if (!hasBet && amount && !isNaN(amount) && amount > 0) {
//             setBetAmount(amount);
//             setHasBet(true); // Mark that the bet has been placed
//             socket.emit("placeBet", { user: "User1", amount });
//             alert(`Bet placed: ${amount}`);
//             setIsFlying(true); // Start the plane's flight once the bet is placed
//         } else if (hasBet) {
//             alert("You have already placed a bet. Wait for the plane to finish.");
//         }
//     };

//     const checkout = () => {
//         // Handle checkout logic
//         alert(`You've checked out with a multiplier of ${multiplier.toFixed(2)}x`);
//         setIsFlying(false); // Stop the plane flight
//         setPreviousMultiplier(multiplier); // Save the multiplier as the previous one
//     };

//     const resetGame = () => {
//         setMultiplier(1.0); // Reset the multiplier to 1.0 when restarting
//         setIsFlying(false); // Stop the plane's flight
//         setPlanePosition(0); // Reset the plane position to start from the bottom
//         setTargetMultiplier(0); // Reset target multiplier
//         setBetAmount(null); // Clear bet amount
//         setHasBet(false); // Reset the bet state
//     };

//     return (
//         <div className="game-board">
//             <div className="plane-wrapper">
//                 <img
//                     src="https://aviatorgames.ru/wp-content/themes/mercury/img/logo-main.webp" // Replace with your image URL
//                     alt="Plane"
//                     className={`plane ${isFlying ? "flying" : ""}`}
//                     style={{
//                         transform: `translateY(${planePosition}px)`, // Move the plane upwards
//                     }}
//                 />
//             </div>
//             <div className="info">
//                 <div className="multiplier">Current: {multiplier.toFixed(2)}x</div>
//                 <div className="previous-multiplier">
//                     Previous: {previousMultiplier.toFixed(2)}x
//                 </div>
//             </div>

//             {/* Quick Bet Buttons */}
//             {!hasBet && (
//                 <div className="quick-bet-buttons">
//                     <button onClick={() => placeBet(10)} disabled={isFlying}>10</button>
//                     <button onClick={() => placeBet(20)} disabled={isFlying}>20</button>
//                     <button onClick={() => placeBet(30)} disabled={isFlying}>30</button>
//                     <button onClick={() => placeBet(50)} disabled={isFlying}>50</button>
//                     <button onClick={() => placeBet(100)} disabled={isFlying}>100</button>
//                 </div>
//             )}

//             {/* Checkout Button */}
//             {isFlying && (
//                 <div className="buttons">
//                     <button onClick={checkout}>Checkout</button>
//                 </div>
//             )}

//             {/* Play Again Button (Only show when the game is not flying) */}
//             {!isFlying && (
//                 <div className="buttons">
//                     <button onClick={resetGame}>Play Again</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GameBoard;
