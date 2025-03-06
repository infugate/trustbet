import React, { useState, useEffect,useRef ,useMemo } from "react";
import "./T20.css";
import RightSideBar from "./RightSideBar";
import TournamentWinner from "./TournamentWinner";
import { Normal } from "./Normal";  
import { useProfile } from '../context/ProfileContext';
import axios from 'axios'
import { useLocation } from "react-router-dom";
const T20 = () => {
  const [selectedBet, setSelectedBet] = useState({ label: "", odds: "" });
  const [stakeValue, setStakeValue] = useState("");
  const [profit, setProfit] = useState(0);
  const [myBets, setMyBets] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
const { fetchNameWallet } = useProfile();
  // Visibility states for components
  const [showTournamentWinner, setShowTournamentWinner] = useState(false);
  const [showBookmaker, setShowBookmaker] = useState(true);
  const [showOverBookmaker, setShowOverBookmaker] = useState(true);
  const [showTied, setShowTied] = useState(true);
   const[shownormal,setshownormal]=useState(true);
  const [TournamentWinnerClicked, setTournamentWinnerClicked] = useState(false);
  const [BookmakerClicked, setBookmakerClicked] = useState(false);
  const [OverBookmakerClicked, setOverBookmakerClicked] = useState(false);
  const [TiedClicked, setTiedClicked] = useState(false);
  const [NormalClicked, setNormalClicked] = useState(false);
   const [userData, setUserData] = useState(null);
    const location = useLocation();
   const { home_team, away_team, id } = location.state || {};


    const updateWallet = async (amount) => {
     const userData = localStorage.getItem('user');
     const objectId = JSON.parse(userData);
     const userId = objectId.id;
    
     try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/wallet/update`, {
            userId, // Ensure `userId` is available in your frontend
            amount, // Pass the winning amount 
        }
        );

        if (response.data.success) {
            console.log("Wallet updated successfully!");
            fetchNameWallet(); // Refresh the wallet balance
        } else {
            console.error("Failed to update wallet:", response.data.message);
        }
        } catch (error) {
        console.error("Error updating wallet:", error);
      }
  };




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
        const calculatedProfit = (parseFloat(stakeValue) * parseFloat(selectedBet.odds))
       

        const newBet = {
            userId,
            label: selectedBet.label,
            odds: parseFloat(selectedBet.odds),
            stake: parseFloat(stakeValue),
            profit: calculatedProfit,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/bets`, newBet); // Send request to backend
            if (response.data.success) {
                setSelectedBet({ label: "", odds: "" });
                setStakeValue("");
                setProfit(0);

                alert(`Bet placed successfully! Your updated wallet balance`);
                // setUserBet(newBet.label)
                fetchBets();
                fetchNameWallet();
                // window.location.reload();
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



  const calculateProfit = (odds, stake) => {
    return (odds - 1) * stake;
  };

  useEffect(() => {
    if (selectedBet.odds && stakeValue) {
      setProfit(calculateProfit(parseFloat(selectedBet.odds), parseFloat(stakeValue)));
    }
  }, [selectedBet.odds, stakeValue]);

  useEffect(() => {
    if (TournamentWinnerClicked) {
      setBookmakerClicked(false);  // Set BookmakerClicked to false when TournamentWinnerClicked is true
      setOverBookmakerClicked(false);
      setTiedClicked(false);
      setNormalClicked(false)
    }
  }, [TournamentWinnerClicked]);

  useEffect(() => {
    if (BookmakerClicked) {
      setTournamentWinnerClicked(false);  // Set TournamentWinnerClicked to false when BookmakerClicked is true
      setOverBookmakerClicked(false);
      setTiedClicked(false);
      setNormalClicked(false)
    }
  }, [BookmakerClicked]);

  useEffect(() => {
    if (OverBookmakerClicked) {
      setTournamentWinnerClicked(false);  // Set TournamentWinnerClicked to false when BookmakerClicked is true
      setBookmakerClicked(false);
      setTiedClicked(false);
      setNormalClicked(false)
    }
  }, [OverBookmakerClicked]);

  useEffect(() => {
    if (TiedClicked) {
      setTournamentWinnerClicked(false);  // Set TournamentWinnerClicked to false when BookmakerClicked is true
      setBookmakerClicked(false);
      setOverBookmakerClicked(false);
      setNormalClicked(false)

    }
  }, [TiedClicked]);

  useEffect(() => {
    if (NormalClicked) {
      setTournamentWinnerClicked(false);  // Set TournamentWinnerClicked to false when BookmakerClicked is true
      setBookmakerClicked(false);
      setOverBookmakerClicked(false);
      
      setTiedClicked(false);
    }
  }, [NormalClicked]);




  const [leagues, setLeagues] = useState([]);

  const fetchLeagues = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leagues`);
      if (!response.ok) throw new Error("Failed to fetch leagues");
  
      const data = await response.json();
      // Filter only the league with name/id "L"
      const filteredLeague = data.filter((league) => league.L === id); // Change "L" to the actual ID/name
      // console.log(filteredLeague)
      setLeagues(filteredLeague);
    } catch (error) {
      console.error("Error fetching leagues:", error);
    }
  };
  
  useEffect(() => {
    fetchLeagues();
    const interval = setInterval(fetchLeagues, 1000);
    return () => clearInterval(interval);
  }, []);
  



  // For 1X2 fatch the odds value 

  const odds1Ref = useRef(null);
  const odds3Ref = useRef(null);
  // const odds2Ref = useRef(null);
  useEffect(() => {
    const fetchData = () => {
      if (leagues.length > 0) {
        const group1Odds = leagues[0]?.E.filter(e => e.G === 1).map(e => e.C) || [];
        odds1Ref.current = group1Odds.length > 0 ? group1Odds[0] : null;
        // odds2Ref.current = group1Odds.length > 1 ? group1Odds[1] : null; 
        odds3Ref.current = group1Odds.length > 2 ? group1Odds[2] : null; 
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 1000); // Fetch every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [leagues]);

  const columnsB =["Min: 100 Max: 50K","over",,"under",];
  var Bookmaker = useMemo(() => [
    [`${home_team}`, [odds1Ref.current || 0], [odds3Ref.current || 0]],
    [` ${away_team}`, [odds3Ref.current || 0], [odds1Ref.current || 0]],
  ], [odds1Ref.current,odds3Ref.current]); 

// end of 1x2 fatching data



//for 101 fatch the odds value teams wins
const oddsA101Ref = useRef(null);
const oddsB101Ref = useRef(null);

useEffect(() => {
  const fetchData = () => {
    if (leagues.length > 0) {
      const group1O1dds = leagues[0]?.E.filter(e => e.G === 101).map(e => e.C) || [];
      oddsA101Ref.current = group1O1dds.length > 0 ? group1O1dds[0] : null;
      
      oddsB101Ref.current = group1O1dds.length > 1 ? group1O1dds[1] : null; 
      // console.log("Odds 1:",oddsA101Ref.current);
    }
  };

  fetchData(); // Initial fetch

  const interval = setInterval(fetchData, 1000); // Fetch every second

  return () => clearInterval(interval); // Cleanup on unmount
}, [leagues]);

const columnsOB = ["Max: 1", "YES", "NO",];
var OverBookmaker = useMemo(() => [
  [`${home_team}`, [oddsA101Ref.current || 0], [oddsB101Ref.current || 0]],
  [`${away_team}`, [oddsB101Ref.current || 0], [oddsA101Ref.current || 0]],

], [oddsA101Ref.current,oddsB101Ref.current]); 

// fatchng tdata teams wins end



  const columnsT = ["Max: 1", "BACK", "LAY",];
  const data = [
    ["Team A", [5.2, 56.42], [5, 442.4]],
    // ["Team B", [3.3, 183.74], [3.35, 440.63], [3.4, 81.14], [3.55, 591.02], [3.6, 418.38], [3.65, 209.19]],
    
  ];

  // const columnsOB = ["Min: 100 Max: 1K","YES", "NO"];

  // const OverBookmaker = [
  //   ["SEC 1 to 6 over run", [360], [400]],
  //   ["pc 1 to 6 over run", [280], [310]]
  // ];

  const columnstied = ["Min: 100 Max: 1K","YES", "NO"];

  const tied = [
    ["Team A",[360], [400]],
    ["Team B",[280], [310]]
  ];

  const columnsNormal = ["Min: 100 Max: 50K", "YES", "NO"];

  const normal = [
    ["Perth Scorchers", [360, 50000], [400, 50000]],
    ["Sydney Sixers", [280, 50000], [310, 50000]],
    ["Brisbane Heat", [1200, 50000], [1500, 50000]],
    ["Hobart Hurricanes", [480, 50000], [530, 50000]],
    ["Adelaide Strikers", [1800, 50000], [2300, 50000]],
    ["Sydney Thunder", [480, 50000], [530, 50000]],
    ["Melbourne Renegades", [1000, 50000], [1200, 50000]],
    ["Melbourne Stars", [3000, 50000], ["-"]]
  ];











  return (
    <div className="T20_container">
      <div className="left_side">
        <div className="T20_header">
          <h1>{id}</h1>
          <h1>14/12/2024 13:45:00</h1>
        </div>

        {/* Conditionally render components */}
        {showTournamentWinner && (
          <TournamentWinner 
            title={"1 X 2"}
            columns={columnsT} 
            data={data} 
            setSelectedBet={setSelectedBet} 
            profit={profit} 
            betFor={selectedBet} 
            stake={stakeValue} 
            clicked={TournamentWinnerClicked} 
            setTournamentWinnerClicked={setTournamentWinnerClicked}  
          />
        )}

        {showBookmaker && (
          <TournamentWinner 
          title={"1 X 2"}
          columns={columnsB} 
          data={Bookmaker} 
          setSelectedBet={setSelectedBet} 
          profit={profit} 
          betFor={selectedBet} 
          stake={stakeValue} 
          clicked={BookmakerClicked} 
          setTournamentWinnerClicked={setBookmakerClicked}  
        />
        )}

      <div className="scrolling_text">
        <h3>Play World's Fastest Football Game GOAL, Started In Our Exchange!</h3>
      </div>

        {showOverBookmaker && (
          <TournamentWinner 
          title={"Teams Wins"}
          columns={columnsOB} 
          data={OverBookmaker} 
          setSelectedBet={setSelectedBet} 
          profit={profit} 
          betFor={selectedBet} 
          stake={stakeValue} 
          clicked={OverBookmakerClicked} 
          setTournamentWinnerClicked={setOverBookmakerClicked}  
        />
        )}

        {showTied && (
          <TournamentWinner 
          title={"Tied Match"}
          columns={columnsNormal} 
          data={tied} 
          setSelectedBet={setSelectedBet} 
          profit={profit} 
          betFor={selectedBet} 
          stake={stakeValue} 
          clicked={TiedClicked} 
          setTournamentWinnerClicked={setTiedClicked}  
        />
        )}
     {shownormal&&(
        <TournamentWinner 
          title={"normal"}
          columns={columnstied} 
          data={normal} 
          setSelectedBet={setSelectedBet} 
          profit={profit} 
          betFor={selectedBet} 
          stake={stakeValue} 
          clicked={NormalClicked} 
          setTournamentWinnerClicked={setNormalClicked}  
        />
     )}
          

        <div className="mobile-view">
          <RightSideBar
            selectedBet={selectedBet}
            stakeValue={stakeValue}
            setStakeValue={setStakeValue}
            profit={profit}
            isPaused={isPaused}
            setSelectedBet={setSelectedBet}
            setProfit={setProfit}
            handleSubmit={handleSubmit}
            myBets={myBets}
            stakeValues={[1000, 2000, 5000, 10000, 20000, 25000, 50000, 75000, 90000, 95000]}
          />
        </div>
      </div>

      <div className="right_side">
        <RightSideBar
          selectedBet={selectedBet}
          stakeValue={stakeValue}
          setStakeValue={setStakeValue}
          profit={profit}
          isPaused={isPaused}
          setSelectedBet={setSelectedBet}
          setProfit={setProfit}
          handleSubmit={handleSubmit}
          myBets={myBets}
          stakeValues={[1000, 2000, 5000, 10000, 20000, 25000, 50000, 75000, 90000, 95000]}
        />
      </div>
    </div>
  );
};

export default T20;
