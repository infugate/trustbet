

import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./LiveVideoFeed.css";
import { IoChatbubbleOutline } from "react-icons/io5";
import LastReasultPopup from "./LastReasultPopup";
import axios from "axios";


const TIMER_DURATION = 20000; // Total timer duration in milliseconds (20 seconds)
const FREEZE_TIME = 10000; // Freeze time in milliseconds (10 seconds)


const LiveVideoFeed = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedBet, setSelectedBet] = useState({ label: "", odds: "" }); 
  const [stakeValue, setStakeValue] = useState(""); 
  const [profit, setProfit] = useState(0); 
  const [myBets, setMyBets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION / 1000); // Start time in seconds
  const [isPaused, setIsPaused] = useState(false); 
  const location = useLocation();
  const { game_id, home_team, away_team } = location.state|| {};



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
  }, [selectedBet.odds, stakeValue]);

  const formatDateTime = (date) => {
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };




  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isPaused) return; // Skip the interval logic if paused

    const timer = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev > 0) {
                return prev - 1; // Decrease the time by 1 second
            } else {
                clearInterval(timer); // Clear the interval when the countdown reaches 0
                setIsPaused(true); // Pause the countdown
                setTimeout(() => {
                    setIsPaused(false); // Resume the countdown after freeze time
                    setTimeLeft(TIMER_DURATION / 1000); // Reset the countdown
                }, FREEZE_TIME); // Use the freeze time constant
                return prev;
            }
        });
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval
}, [isPaused]);

  const seconds = timeLeft.toString().padStart(2, "0");
    const tens = seconds[0];
    const units = seconds[1];


  return (
    <div className="live-video-betting-section">
      <div className="live-video">
        <div className="video-header">
          <h3 className="title">Ball By Ball</h3>
          <h3 className="date_time">{formatDateTime(currentTime)}</h3>
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

        <div className="countdown">
        <div className="countdown">
            <div className="content">
                <div className="box">
                    <div className="value">
                        <span>{tens}</span>
                    </div>
                </div>
                <div className="box">
                    <div className="value">
                        <span>{units}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div>
          <div className="runs">
            <h3>Runs</h3>
          </div>

          <div className="runs-table">
            {[...Array(3)].map((_, idx) => (
              <table key={idx}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Back</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "0 Runs", odds: "2.17", stake: "25000" },
                    { label: "3 Runs", odds: "11", stake: "15000" },
                    { label: "Boundary", odds: "17", stake: "35000" },
                  ].map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      onClick={() =>{
                        if (isPaused) return;
                        setSelectedBet({ label: row.label, odds: row.odds }) // Set both label and odds
                      }}
                      
                      
                    >
                      <td>{row.label}</td>
                      <td className={isPaused ? "frozen" : ""}>
                        <div>{row.odds}</div>
                        <div>{row.stake}</div>
                      </td>
                      <td>
                        <div>Min: 50</div>
                        <div>Max: 25k</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
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
                onClick={() => {
                  if (isPaused) return;
                  setStakeValue(val)} // Set the stake value
                } 
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
              <button className="submit" onClick={()=>{
                if (isPaused) return;
                handleSubmit();
              }}>
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
             {[...Array(4)].map((_, ballIdx) => (
                <div key={ballIdx} className="ball" onClick={toggleModal} >
                  R
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
                onClick={() =>{
                  if (isPaused) return;
                  setStakeValue(val)} // Set the stake value
                } 
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
              <button className="submit" onClick={()=>{
                if (isPaused) return;
                handleSubmit();
              }}>
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