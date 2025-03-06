// import React, { useState, useEffect } from "react";
// import img1 from '../assets/clubs_4.png';
// import img2 from '../assets/clubs_9.png';
// import img3 from '../assets/clubs_10.png';
// import img4 from '../assets/clubs_ace.png';
// import img5 from '../assets/clubs_jack.png';
// import img6 from '../assets/clubs_queen.png';
// import img7 from '../assets/clubs_queen.png';
// import img8 from '../assets/diamonds_1.png';
// import img9 from '../assets/diamonds_2.png';
// import img10 from '../assets/diamonds_6.png';
// import img11 from '../assets/diamonds_8.png';
// import img12 from '../assets/diamonds_9.png';
// import img13 from '../assets/diamonds_10.png';
// import img14 from '../assets/hearts_4.png';
// import img15 from '../assets/hearts_5.png';
// import img16 from '../assets/hearts_7.png';
// import img17 from '../assets/hearts_ace.png';
// import img18 from '../assets/hearts_king.png';
// import img19 from '../assets/clubs_4.png';
// import img20 from '../assets/spades_7.png';
// import img21 from '../assets/spades_8.png';
// import img22 from '../assets/spades_9.png';
// import img23 from '../assets/spades_10.png';
// import img24 from '../assets/spades_king.png';
// import img25 from '../assets/spades_queen.png';
// import img26 from '../assets/joker_red.png';

// const AndarBaharGame = () => {
//   const [deck, setDeck] = useState([]);
//   const [jokerCard, setJokerCard] = useState(null);
//   const [andarCards, setAndarCards] = useState([]);
//   const [baharCards, setBaharCards] = useState([]);
//   const [winner, setWinner] = useState(null);
//   const [countdown, setCountdown] = useState(10);
//   const [bettingOpen, setBettingOpen] = useState(false);
//   const [gameInProgress, setGameInProgress] = useState(false);
//   const [userBet, setUserBet] = useState(null);
//   const [resultMessage, setResultMessage] = useState(null);
//   const [highlightCard, setHighlightCard] = useState(null);  // Track the joker card highlight

//   // Create deck of cards
//   const createDeck = () => {
//     const deck = [
//       img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,
//       img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26
//     ];
//     return deck;
//   };

//   // Shuffle the deck
//   const shuffleDeck = (deck) => deck.sort(() => Math.random() - 0.5);

//   // Initialize the game
//   const initializeGame = () => {
//     const newDeck = shuffleDeck(createDeck()).slice(0, 30); // Select first 30 cards for the game
//     setDeck(newDeck);
//     setJokerCard(newDeck[0]);
//     setAndarCards([]);
//     setBaharCards([]);
//     setWinner(null);
//     setCountdown(10);
//     setBettingOpen(true);
//     setGameInProgress(false);
//     setUserBet(null);
//     setResultMessage(null);
//     setHighlightCard(null);  // Reset the highlighted card
//   };

//   // Distribute 13 cards to Andar and Bahar (without joker initially)
//   const distributeCards = () => {
//     setGameInProgress(true);
//     const remainingDeck = [...deck];
//     const joker = remainingDeck.shift();  // Remove joker card from deck
//     let andar = [];
//     let bahar = [];
//     let index = 0;

//     const interval = setInterval(() => {
//       if (remainingDeck.length === 0 || andar.length === 13 || bahar.length === 13) {
//         clearInterval(interval);

//         // Randomly determine the winner
//         const randomWinner = Math.random() < 0.5 ? "Andar" : "Bahar";  // Randomly select Andar or Bahar
//         setWinner(randomWinner);

//         if (userBet) {
//           if (userBet === randomWinner) {
//             setResultMessage("You win!");
//           } else if (userBet === "Tie" && andar.length === bahar.length) {
//             setResultMessage("You win (Tie)!");
//           } else {
//             setResultMessage("You lose!");
//           }
//         }

//         // Add joker card to the winning side
//         if (randomWinner === "Andar") {
//           andar.push(joker);
//           setHighlightCard("Andar");  // Highlight Andar side
//         } else {
//           bahar.push(joker);
//           setHighlightCard("Bahar");  // Highlight Bahar side
//         }

//         setAndarCards([...andar]);
//         setBaharCards([...bahar]);

//         setGameInProgress(false);
//         setTimeout(() => initializeGame(), 20000); // Restart game after 20 seconds
//         return;
//       }

//       // Distribute cards between Andar and Bahar alternately
//       if (index % 2 === 0) {
//         const card = remainingDeck.shift();
//         andar.push(card);
//         setAndarCards([...andar]);
//       } else {
//         const card = remainingDeck.shift();
//         bahar.push(card);
//         setBaharCards([...bahar]);
//       }

//       index++;
//     }, 1000); // 1 second per card
//   };

//   // Countdown timer
//   useEffect(() => {
//     if (countdown > 0) {
//       const timer = setInterval(() => {
//         setCountdown((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     } else {
//       setBettingOpen(false);
//       distributeCards();
//     }
//   }, [countdown]);

//   // Start the game on mount
//   useEffect(() => {
//     initializeGame();
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#222", color: "#fff" }}>
//       <h1>Andar Bahar</h1>
//       <p>Period: 2501151424</p>

//       {/* Countdown Timer */}
//       {bettingOpen ? (
//         <div>
//           <p>Countdown for betting: {countdown}s</p>
//           <div>
//             <button onClick={() => setUserBet("Andar")}>Bet on Andar</button>
//             <button onClick={() => setUserBet("Bahar")}>Bet on Bahar</button>
//             <button onClick={() => setUserBet("Tie")}>Bet on Tie</button>
//           </div>
//           {userBet && <p>Your Bet: {userBet}</p>}
//         </div>
//       ) : gameInProgress ? (
//         <p>Distributing cards...</p>
//       ) : (
//         <p>Waiting for next round...</p>
//       )}

//       {/* Display Joker Card */}
//       <div>
//         <h2>Center Card (Joker)</h2>
//         {jokerCard && (
//           <div
//             style={{
//               display: "inline-block",
//               border: highlightCard ? "5px solid yellow" : "none",
//               padding: "10px",
//               transition: "border 0.5s ease-in-out",
//             }}
//           >
//             <img src={jokerCard} alt="Joker Card" style={{ width: "100px" }} />
//           </div>
//         )}
//       </div>

//       {/* Display Andar and Bahar Cards */}
//       <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
//         <div
//           style={{
//             backgroundColor: highlightCard === "Andar" ? "#ffcc00" : "transparent",
//             padding: "0px",  // Reduced padding to reduce the highlighted height
//             transition: "background-color 0.5s ease",
//           }}
//         >
//           <h2>Andar</h2>
//           <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//             {andarCards.map((card, index) => (
//               <img
//                 key={index}
//                 src={card}
//                 alt={`Andar card ${index}`}
//                 style={{ width: "50px", transition: "transform 0.5s ease-in-out" }}
//               />
//             ))}
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: highlightCard === "Bahar" ? "#ffcc00" : "transparent",
//             padding: "0px",  // Reduced padding to reduce the highlighted height
//             transition: "background-color 0.5s ease",
//           }}
//         >
//           <h2>Bahar</h2>
//           <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//             {baharCards.map((card, index) => (
//               <img
//                 key={index}
//                 src={card}
//                 alt={`Bahar card ${index}`}
//                 style={{ width: "50px", transition: "transform 0.5s ease-in-out" }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Show Winner and Result Message */}
//       {winner && <h2>Winner: {winner}</h2>}
//       {resultMessage && <h3>{resultMessage}</h3>}
//     </div>
//   );
// };

// export default AndarBaharGame;









import React, { useState, useEffect } from "react";

import './andar.css';

const AndarBaharGame = () => {
  const [deck, setDeck] = useState([]);
  const [jokerCard, setJokerCard] = useState(null);
  const [andarCards, setAndarCards] = useState([]);
  const [baharCards, setBaharCards] = useState([]);
  const [winner, setWinner] = useState(null);
  const [countdown, setCountdown] = useState(10);
  const [bettingOpen, setBettingOpen] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [userBet, setUserBet] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);
  const [highlightCard, setHighlightCard] = useState(null);

  const createDeck = () => {
    return [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
    ];
  };

  const shuffleDeck = (deck) => deck.sort(() => Math.random() - 0.5);

  const initializeGame = () => {
    const newDeck = shuffleDeck(createDeck()).slice(0, 30);
    setDeck(newDeck);
    setJokerCard(newDeck[0]);
    setAndarCards([]);
    setBaharCards([]);
    setWinner(null);
    setCountdown(10);
    setBettingOpen(true);
    setGameInProgress(false);
    setUserBet(null);
    setResultMessage(null);
    setHighlightCard(null);
  };

  const distributeCards = () => {
    setGameInProgress(true);
    const remainingDeck = [...deck];
    const joker = remainingDeck.shift();
    let andar = [];
    let bahar = [];
    let index = 0;

    const interval = setInterval(() => {
      if (remainingDeck.length === 0 || andar.length === 13 || bahar.length === 13) {
        clearInterval(interval);
        const randomWinner = Math.random() < 0.5 ? "Andar" : "Bahar";
        setWinner(randomWinner);
        if (userBet) {
          setResultMessage(userBet === randomWinner ? "You win!" : "You lose!");
        }
        if (randomWinner === "Andar") {
          andar.push(joker);
          setHighlightCard("Andar");
        } else {
          bahar.push(joker);
          setHighlightCard("Bahar");
        }
        setAndarCards([...andar]);
        setBaharCards([...bahar]);
        setGameInProgress(false);
        setTimeout(() => initializeGame(), 20000);
        return;
      }

      if (index % 2 === 0) {
        andar.push(remainingDeck.shift());
        setAndarCards([...andar]);
      } else {
        bahar.push(remainingDeck.shift());
        setBaharCards([...bahar]);
      }

      index++;
    }, 1000);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setBettingOpen(false);
      distributeCards();
    }
  }, [countdown]);

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div>
      <div className="andar-containor-bhar">
        <h1>Andar Bahar</h1>
        <p>Period: 2501151424</p>

        {/* Countdown Timer */}
        {bettingOpen ? (
          <div>
            <p>Countdown for betting: {countdown}s</p>
            <div className="battingseystem">
              <button className="andrbtn" onClick={() => setUserBet("Andar")}>Bet on Andar</button>
              <button className="andrbtn" onClick={() => setUserBet("Bahar")}>Bet on Bahar</button>
              <button className="andrbtn" onClick={() => setUserBet("Tie")}>Bet on Tie</button>
            </div>
            {userBet && <p>Your Bet: {userBet}</p>}
          </div>
        ) : gameInProgress ? (
          <p>Distributing cards...</p>
        ) : (
          <p>Waiting for next round...</p>
        )}

        {/* Joker Card Display */}
        <div className="center-card">
          <h2>Center Card (Joker)</h2>
          {jokerCard && (
            <img
              src={jokerCard}
              alt="Joker Card"
              className={highlightCard ? "highlight" : ""}
            />
          )}
        </div>
      </div>
      {/* Andar Table */}
      <div className="andhar-table">
        <h2>Andar</h2>
        <table>
          <tbody>
            <tr>
              {Array.from({ length: 14 }, (_, index) => (
                <td key={index} className={andarCards[index] ? "" : "empty"}>
                  {andarCards[index] && (
                    <img
                      src={andarCards[index]}
                      alt={`Andar card ${index}`}
                      className={highlightCard === "Andar" ? "highlight" : ""}
                    />
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bahar Table */}
      <div className="bahar-table">
        <h2>Bahar</h2>
        <table className="table-bhar">
          <tbody>
            <tr>
              {Array.from({ length: 14 }, (_, index) => (
                <td key={index} className={baharCards[index] ? "" : "empty"}>
                  {baharCards[index] && (
                    <img
                      src={baharCards[index]}
                      alt={`Bahar card ${index}`}
                      className={highlightCard === "Bahar" ? "highlight" : ""}
                    />
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Show Winner and Result Message */}
      {winner && <h2>Winner: {winner}</h2>}
      {resultMessage && <h3>{resultMessage}</h3>}
    </div>
  );
};

export default AndarBaharGame;
