import React, { useState, useEffect } from "react";
import "./CrickBet.css";
import "./CricketScore.css";
// import { IoChatbubbleOutline } from "react-icons/io5";
import LastReasultPopup from "./LastReasultPopup";
import { useLocation } from "react-router-dom";
import axios from "axios";

const LiveVideoFeed = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedBet, setSelectedBet] = useState({ label: "", odds: "", stake: " " }); 
  const [stakeValue, setStakeValue] = useState(""); // For the second input
  const [profit, setProfit] = useState(0); // For calculating and storing profit
  const [myBets, setMyBets] = useState([]); // State to store all placed bets
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { home_team, away_team, id } = location.state || {};
  const [data2, setData2] = useState([]);
  const [run1, setRun1] = useState(null);
  const [run2, setRun2] = useState(null);
  const [wkt1, setWkt1] = useState(null);
  const [wkt2, setWkt2] = useState(null);
  const [ovr1, setOvers1] = useState(null);
  const [ovr2, setOvers2] = useState(null);
  useEffect(() => {
    async function fetchSportsData1() {
      try {
        // const response = await axios.get("http://localhost:5000/api/sports-data-2");
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/sports-data-2`);
        setData2(response.data.data || []); // Ensure the data is an array
        console.log("Sports Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching sports data:", error.message);
      }
    }
    fetchSportsData1();
    // setInterval(fetchSportsData1, 10000);

    // // Initial fetch when the page loads
    // window.onload = fetchSportsData1;
  }, []);


  useEffect(() => {
    const matchingItems = data2.filter(item => item.id === id);
    if (matchingItems.length > 0) {
      const item = matchingItems[0]; 
      const scores = item.score || [];
      if (scores.length > 0) {
        setRun1(scores[0]?.r || 0);
        setWkt1(scores[0]?.w || 0);
        setOvers1(scores[0]?.o || 0);
      }

      if (scores.length > 1) {
        setRun2(scores[1]?.r || 0);
        setWkt2(scores[1]?.w || 0);
        setOvers2(scores[1]?.o || 0);
      }
    }
  }, [data2, id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const calculateProfit = (odds, stake) => {
    return (odds - 1) * stake;
  };
  useEffect(() => {
    if (selectedBet.odds && stakeValue) {
      setProfit(calculateProfit(parseFloat(selectedBet.odds), parseFloat(stakeValue)));
    }
  }, [selectedBet.odds, stakeValue]);



  // const fetchBets = async () => {
  //   try {
  //     // const response = await axios.get('http://localhost:5000/api/bets');
  //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bets`);
  //     if (response.data.success) {
  //       setMyBets(response.data.bets);
  //     } else {
  //       alert("Failed to fetch bets");
  //     }
  //   } catch (err) {
  //     console.error('Error fetching bets:', err);
  //     alert("There was an error fetching bets.");
  //   }
  // };
  // useEffect(() => {
  //   fetchBets(); // Call the fetch function
  // }, []);


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







  //   const toggleModal = () => {
  //     setIsOpen(!isOpen);
  //   };

  const closePopup = () => {
    setIsOpen(false);
  };
  let currover=Math.floor(ovr1) + (ovr1% 1) * 10 / 6;
  let currover2=Math.floor(ovr2) + (ovr2% 1) * 10 / 6;
  let CRR =(run1/currover).toFixed(2);
  let CRR2 =(run2/currover2).toFixed(2);
  let displayedCRR = CRR > 0 ? CRR : CRR2;
  return (
    <div className="live-video-betting-section">
      <div className="live-video">
        <div className="video-header">
          <h3 className="title">{home_team} vs {away_team}</h3>
          <h3 className="date_time">Round Id:{748154541541212}</h3>
        </div>
        <div className="scorecard">
          <div className="upper">
            <ul>
              <li>{home_team}</li>
              <li>{run1 > 0 ? `${run1}-${wkt1}(${ovr1})` : null}</li>
              <li></li>
              <li>{home_team} nedd {run1} runs in {Math.floor(ovr1)+(ovr1)} ball</li>
            </ul>
          </div>
          <div className="lower">
            <ul>
              <li>{away_team}</li>
              <li>{run2 > 0 ? `${run2}-${wkt2}(${ovr2})` : null}</li>
              <li>CRR {displayedCRR}</li>
              <li>1 2 7 8 9</li>
            </ul>
          </div>
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
          <div className="runs">
            <h3>Normal</h3>
          </div>

          <div className="runs-table">
            {[...Array(3)].map((_, idx) => (
              <table key={idx}>
                <thead>
                  <tr>
                    <th rowSpan={3}></th>
                    <th>Yes</th>
                    <th>No</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "5 Run in a over", odds: "115", odds2: "255", stake: "250" },
                    { label: `Fall of ${+1} wicket`, odds: "152", odds2: "515", stake: "150" },
                    { label: `${home_team}`, odds: "151", odds2: "156", stake: "350" },
                  ].map((row, rowIdx) => (
                    <tr
                      key={rowIdx}

                      style={{ cursor: "pointer" }}
                    >
                      <td onClick={() =>
                        setSelectedBet({
                          label: row.label,
                          odds: row.odds,
                        })
                      }
                        style={{ cursor: "pointer" }}>{row.label}</td>
                      <td onClick={() =>
                        setSelectedBet({
                          label: row.label,
                          odds: row.odds,
                        })
                      }
                        style={{ cursor: "pointer" }}>
                        {row.odds}
                      </td>
                      < td onClick={() =>
                        setSelectedBet({
                          label: row.label,
                          odds: row.odds2,
                        })
                      }
                        style={{ cursor: "pointer" }}>
                        {row.odds2}
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
                {myBets
                  .slice(-10) // Get the last 10 bets
                  .reverse() // Show the most recent bet at the topss
                  .map((bet, betIdx) => (
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