import React, { useState, useEffect } from "react";
import "./CrickBet.css";
import { IoChatbubbleOutline } from "react-icons/io5";
import LastReasultPopup from "./LastReasultPopup";
import './PlayCasino.css'
import axios from "axios";

const LiveVideoFeed = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedBet, setSelectedBet] = useState({ label: "", odds: "" }); // State for label and odds
  const [stakeValue, setStakeValue] = useState(""); // For the second input
  const [profit, setProfit] = useState(0); // For calculating and storing profit
  const [myBets, setMyBets] = useState([]); // State to store all placed bets
  const [isOpen, setIsOpen] = useState(false);
  const arr=["A","B","A","A","B"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Function to calculate profit
  const calculateProfit = (odds, stake) => {
    return (odds - 1) * stake;
  };

  // Update profit whenever the odds or stake changes
  useEffect(() => {
    if (selectedBet.odds && stakeValue) {
      setProfit(calculateProfit(parseFloat(selectedBet.odds), parseFloat(stakeValue)));
    }
  }, [selectedBet.odds, stakeValue]); // Recalculate profit whenever odds or stake changes

//   const formatDateTime = (date) => {
//     return date.toLocaleString("en-US", {
//       year: "numeric",
//       month: "numeric",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//   };

  // Handle submitting the bet
  // const handleSubmit = async () => {
  //   if (selectedBet.label && selectedBet.odds && stakeValue) {
  //     const newBet = {
  //       label: selectedBet.label,
  //       odds: selectedBet.odds,
  //       stake: stakeValue,
  //       profit: profit.toFixed(2),
  //     };
  //     try {
  //       // const response = await axios.post('http://localhost:5000/api/bets', newBet);
  //       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/bets`,newBet);
  //       if (response.data.success) {
  //         setMyBets((prevBets) => [...prevBets, response.data.bet]);
  //         setSelectedBet({ label: "", odds: "" });
  //         setStakeValue("");
  //         setProfit(0);
  //         alert("Bet placed successfully!");
  //         window.location.reload();
  //       }
  //     } catch (err) {
  //       console.error('Error placing bet:', err);
  //       alert("There was an error placing your bet. Please try again.");
  //     }
  //   } else {
  //     alert("Please fill in all the details (label, odds, stake).");
  //   }
  // };




  const [userData, setUserData] = useState(null);
  const handleSubmit = async () => {
    if (selectedBet.label && selectedBet.odds && stakeValue > 0) {
      const userData = localStorage.getItem('user');
      if (!userData) {
        alert("User is not logged in. Please log in to place a bet.");
        return;
      }
      const objectId = JSON.parse(userData);
      const userId = objectId.id;
      
      // Make sure profit is a number
      const calculatedProfit = (parseFloat(stakeValue) * parseFloat(selectedBet.odds) - parseFloat(stakeValue)).toFixed(2);
  
      const newBet = {
        userId,
        label: selectedBet.label,
        odds: parseFloat(selectedBet.odds),
        stake: parseFloat(stakeValue),
        profit: calculatedProfit,
      };
  
      try {
        // const response = await axios.post('http://localhost:5000/api/bets', newBet); // Send request to backend
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/bets`,newBet);
        if (response.data.success) {
          setSelectedBet({ label: "", odds: "" });
          setStakeValue("");
          setProfit(0);
  
          alert(`Bet placed successfully! Your updated wallet balance`);
          window.location.reload();
        } else {
          alert(response.data.message || "Failed to place bet.");
        }
      } catch (err) {
        console.error("Error placing bet:", err);
        alert("There was an error placing your bet. Please try again.");
      }
    } else {
      alert("Please fill in all the details (label, odds, stake). Stake must be greater than 0.");
    }
  };

  //fatch all user bets 
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserData(JSON.parse(user));
    } else {
      alert("User is not logged in. Please log in to view your bets.");
    }
  }, []);

  // Fetch user's bets from the backend based on userId
  const fetchBets = async () => {
    if (userData) {
      try {
        const userId = userData.id; 
        console.log(userId);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bets/${userId}`); 
        if (response.data.success) {
          setMyBets(response.data.bets); 
        } else {
          alert("Failed to fetch bets");
        }
      } catch (err) {
        console.error('Error fetching bets:', err);
        alert("There was an error fetching bets.");
      }
    }
  };
  useEffect(() => {
    if (userData) {
      fetchBets();
    }
  }, [userData]);






  const closePopup = () => {
    setIsOpen(false);
  };


  const handleCellClick = (label, odds) => {
        setSelectedBet({ label, odds });
      };

  return (
    <div className="live-video-betting-section">
      <div className="live-video">
        <div className="video-header">
          <h3 className="title">20-20 TennPatti</h3>
          <h3 className="date_time">Round id:24541251255</h3>
        </div>
        
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Oi5XfWebpp0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          {/* <div className="runs">
            <h3>20-20 TennPatti</h3>
          </div> */}

          <div className="table-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th colSpan="5">Player A</th>
            </tr>
            <tr>
              <th>Player A</th>
              <th>3 Baccarat A</th>
              <th>Total A</th>
              <th>Pair Plus A</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="tbd" onClick={() => handleCellClick("Player A", "1.98")}>1.98</td>
            <td className="tbd" onClick={() => handleCellClick("3 Baccarat A", "1.98")}>1.98</td>
            <td className="tbd" onClick={() => handleCellClick("Total A", "2")}>2</td>
            <td className="tbd" onClick={() => handleCellClick("Pair Plus A", "A")}>A</td>
            </tr>
            <tr>
            <td className="tbd" onClick={() => handleCellClick("Player A ♠♣", "1.98")}>
                      <span>♠</span> <span>♣</span>
                    </td>
                    <td className="tbd" onClick={() => handleCellClick("3 Baccarat A", "1.98")}>1.98</td>
                    <td className="tbd" onClick={() => handleCellClick("Total A ♥♦", "1.98")}>
                      <span>♥</span> <span>♦</span>
                    </td>
                    <td className="tbd" onClick={() => handleCellClick("Pair Plus A", "1.98")}>1.98</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th colSpan="5">Player B</th>
            </tr>
            <tr>
              <th>Player B</th>
              <th>3 Baccarat B</th>
              <th>Total B</th>
              <th>Pair Plus B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="tbd" onClick={() => handleCellClick("Player B", "1.98")}>1.98</td>
                    <td className="tbd" onClick={() => handleCellClick("3 Baccarat B", "1.98")}>1.98</td>
                    <td className="tbd" onClick={() => handleCellClick("Total B", "2")}>2</td>
                    <td className="tbd" onClick={() => handleCellClick("Pair Plus B", "B")}>B</td>

            </tr>
            <tr>
            <td className="tbd" onClick={() => handleCellClick("Player B ♠♣", "1.98")}>
                      <span>♠</span> <span>♣</span>
                    </td>
                    <td className="tbd" onClick={() => handleCellClick("3 Baccarat B", "1.98")}>1.98</td>
                    <td className="tbd" onClick={() => handleCellClick("Total B ♥♦", "1.98")}>
                      <span>♥</span> <span>♦</span>
                    </td>
                    <td className="tbd" onClick={() => handleCellClick("Pair Plus B", "1.98")}>1.98</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>

        <div className="right-sidebar-for-mobile">
        <div className="place-bet">
          <div className="place-bet-header">
            <h3>Place Bet</h3>
          </div>

          <div className="place-bet-header2">
            <h3>(Bet for)</h3>
            <h3>Odds</h3>
            <h3>Stake</h3>
            <h3>Profit</h3>
          </div>

          <div className="place-bet-data">
            <h3>{selectedBet.label || "Select a Bet"}</h3>
            <input
              type="number"
              value={selectedBet.odds}
              readOnly
              placeholder="Odds"
            />
            <input
              type="text"
              value={stakeValue}
              onChange={(e) => setStakeValue(e.target.value)}
              placeholder="Stake"
            />
            <h3>{profit.toFixed(2) || "0.00"}</h3> {/* Displaying the calculated profit */}
          </div>

          <div className="place-bet-stake-buttons">
            {[25, 50, 100, 200, 500, 1000].map((val) => (
              <button
                key={val}
                onClick={() => setStakeValue(val)} // Set the stake value
              >
                {val}
              </button>
            ))}
          </div>

          <div className="place-bet-buttons">
            <button className="edit">Edit</button>
            <div>
              <button
                className="reset"
                onClick={() => {
                  setSelectedBet({ label: "", odds: "" });
                  setStakeValue("");
                  setProfit(0); // Reset profit on reset
                }}
              >
                Reset
              </button>
              <button className="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="my-bet">
          <div className="my-bet-text">
            <h3>My Bet</h3>
          </div>

          <div className="my-bet-data">
            <table className="bet-table">
              <thead>
                <tr>
                  <th>Matched Bet</th>
                  <th>Odds</th>
                  <th>Stake</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                {myBets.map((bet, betIdx) => (
                  <tr key={betIdx}>
                    <td>{bet.label}</td>
                    <td>{bet.odds}</td>
                    <td>{bet.stake}</td>
                    <td>{bet.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

        <div className="instruction">
          <div className="content">
            <div className="messege-icon">
              <IoChatbubbleOutline />
            </div>
            <div className="message-text">
              <h3>
                Results are based on stream only. Scoreboard may be different or
                updated later.
              </h3>
            </div>
          </div>
        </div>

        <div className="last-reasult">
          <div className="last-reasult-header">
            <h3>Last Result</h3>
            <h3>View All</h3>
          </div>
          
          <div className="ball-div">
           <div>
             {arr.map((el, ballIdx) => (
                <div key={ballIdx} className="ball" >
                  {el}
                </div>
              ))}
            </div>

            

          </div>
        </div>
      </div>
      

      <div className="right-sidebar">
        <div className="place-bet">
          <div className="place-bet-header">
            <h3>Place Bet</h3>
          </div>

          <div className="place-bet-header2">
            <h3>(Bet for)</h3>
            <h3>Odds</h3>
            <h3>Stake</h3>
            <h3>Profit</h3>
          </div>

          <div className="place-bet-data">
            <h3>{selectedBet.label || "Select a Bet"}</h3>
            <input
              type="number"
              value={selectedBet.odds}
              readOnly
              placeholder="Odds"
            />
            <input
              type="text"
              value={stakeValue}
              onChange={(e) => setStakeValue(e.target.value)}
              placeholder="Stake"
            />
            <h3>{profit.toFixed(2) || "0.00"}</h3> {/* Displaying the calculated profit */}
          </div>

          <div className="place-bet-stake-buttons">
            {[25, 50, 100, 200, 500, 1000].map((val) => (
              <button
                key={val}
                onClick={() => setStakeValue(val)} // Set the stake value
              >
                {val}
              </button>
            ))}
          </div>

          <div className="place-bet-buttons">
            <button className="edit">Edit</button>
            <div>
              <button
                className="reset"
                onClick={() => {
                  setSelectedBet({ label: "", odds: "" });
                  setStakeValue("");
                  setProfit(0); // Reset profit on reset
                }}
              >
                Reset
              </button>
              <button className="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="my-bet">
          <div className="my-bet-text">
            <h3>My Bet</h3>
          </div>

          <div className="my-bet-data">
            <table className="bet-table">
              <thead>
                <tr>
                  <th>Matched Bet</th>
                  <th>Odds</th>
                  <th>Stake</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                {myBets.map((bet, betIdx) => (
                  <tr key={betIdx}>
                    <td>{bet.label}</td>
                    <td>{bet.odds}</td>
                    <td>{bet.stake}</td>
                    <td>{bet.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isOpen && (
              <LastReasultPopup closePopup={closePopup} />  
              )}
    </div>
  );
};

export default LiveVideoFeed;