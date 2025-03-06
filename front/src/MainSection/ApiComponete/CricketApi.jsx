import React, { useState, useEffect } from "react";
import "./TenisApi.css";
import { useNavigate } from "react-router-dom";



  const GameList = () => {
    const [leagues, setLeagues] = useState([]);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulating data fetching delay
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  
    const fetchLeagues = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leagues`);
          if (!response.ok) throw new Error('Failed to fetch leagues');
          const data = await response.json();
          setLeagues(data);
          // setLoading(false);
      } catch (error) {
          console.error('Error fetching leagues:', error);
          // setLoading(false);
      }
  };

  useEffect(() => {
      fetchLeagues();
      const interval = setInterval(fetchLeagues, 1000);
      return () => clearInterval(interval);
  }, []);
    const handleClick = (homeTeam, awayTeam, gameid) => {
      navigate(`/t20`, {
        state: {
          home_team: homeTeam,
          away_team: awayTeam,
          id: gameid
        }
      });
      console.log(gameid);
    };
  
    return (
      <div className="game-list">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Game</th>
              <th className="table-center"></th>
              <th className="table-center"></th>
              <th className="table-center"></th>
              <th className="table-center"></th>
              <th className="table-center"></th>
              <th className="table-center" colSpan={2}>1</th>
              <th className="table-center" colSpan={2}>+</th>
              <th className="table-center" colSpan={2}>2</th>
            </tr>
          </thead>
          <tbody>
          {loading ? (
        <tr>
          <td colSpan="12" className="table-center">
            <div className="loader"></div>
          </td>
        </tr>
      ):leagues.length > 0 ? (
              leagues.map((league, gameIndex) => {
                const team1 = league.O1 || "Team 1";
                const team2 = league.O2 || "Team 2";
                
                // Filter for groupId = 1 odds
                const group1Odds = league.E.filter(e => e.G === 1);
  
                return (
                  <tr
                    key={gameIndex}
                    onClick={() => handleClick(team1, team2, league.L)}
                    className="clickable-row"
                  >
                    <td>{league.L || "N/A"}</td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <span
                    className="active-circle"
                     style={{
                     display: "inline-block",
                     width: "11px",
                     height: "11px",
                     backgroundColor: "green",
                     borderRadius: "50%",
                    }}
                    ></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  style={{ textAlign: "center", verticalAlign: "middle",fontWeight: "bold"}}><span>BM</span></td>
          
                    <td className="colspan1" style={{ textAlign: "center", verticalAlign: "middle",pointerEvents: group1Odds.length > 0 ? "auto" : "none", ...(group1Odds.length > 0? {}: {
                             backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                             backgroundColor: 'black',
                             backgroundSize: 'contain',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                            filter: 'invert(1)'
                          })
                        }}
                       >
                      {group1Odds.length > 0 ? group1Odds[0].C: "-"}
                    </td>
                    <td className="colspan2" style={{ textAlign: "center", verticalAlign: "middle",pointerEvents: group1Odds.length > 0 ? "auto" : "none", ...(group1Odds.length > 0? {}: {
                             backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                             backgroundColor: 'black',
                             backgroundSize: 'contain',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                             filter: 'invert(1)'
                          })
                        }}>
                      {group1Odds.length > 0 ? group1Odds[0].C : "-"}
                    </td>
                    <td className="colspan1" style={{ textAlign: "center", verticalAlign: "middle",pointerEvents: group1Odds.length > 1 ? "auto" : "none", ...(group1Odds.length > 1? {}: {
                             backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                             backgroundColor: 'black',
                             backgroundSize: 'contain',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                            filter: 'invert(1)'
                          })
                        }}>
                      {group1Odds.length > 1 ? group1Odds[1].C : "-"}
                    </td>
                    <td className="colspan2" style={{ textAlign: "center", verticalAlign: "middle",pointerEvents: group1Odds.length > 1 ? "auto" : "none", ...(group1Odds.length > 1? {}: {
                             backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                             backgroundColor: 'black',
                             backgroundSize: 'contain',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                            filter: 'invert(1)'
                          })
                        }}>
                      {group1Odds.length > 1 ? group1Odds[1].C : "-"}
                    </td>
                    <td className="colspan1" style={{ textAlign: "center", verticalAlign: "middle",pointerEvents: group1Odds.length > 2 ? "auto" : "none", ...(group1Odds.length > 2? {}: {
                             backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                             backgroundColor: 'black',
                             backgroundSize: 'contain',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                            filter: 'invert(1)'
                          })
                        }}>
                      {group1Odds.length > 2 ? group1Odds[2].C : "-"}
                    </td>
                    <td className="colspan2" style={{ textAlign: "center", verticalAlign: "middle",pointerEvents: group1Odds.length > 2 ? "auto" : "none", ...(group1Odds.length > 2? {}: {
                             backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                             backgroundColor: 'black',
                             backgroundSize: 'contain',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                            filter: 'invert(1)'
                          })
                        }}>
                      {group1Odds.length > 2 ? group1Odds[2].C : "-"}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="12" className="table-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>

      <style>
        {`
          .loader {
            border: 4px solid rgb(231, 53, 186);
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            margin: auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .table-center {
            text-align: center;
            padding: 20px;
          }
        `}
      </style>
    
        </table>
      </div>
    );
  };
  

export default GameList;





//socket.io



// import React, { useState, useEffect } from "react";
// import "./TenisApi.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import io from 'socket.io-client';

// const socket = io(process.env.REACT_APP_BACKEND_URL);
// const GameList = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     // Fetch the initial sports data via REST API
//     async function fetchSportsData() {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/sports-data`);
//         setData(response.data);
//         // console.log("Fetched initial sports data:", response.data);
//       } catch (error) {
//         console.error("Error fetching initial sports data:", error.message);
//       }
//     }

//     fetchSportsData();

//     // Listen for real-time updates from the backend
//     socket.on("sportsDataUpdate", (updatedData) => {
//       console.log("Received updated sports data:", updatedData);
//       setData(updatedData); // Update the state with the latest data
//     });

//     // Cleanup the socket connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const handleClick = (index, gameId, homeTeam, awayTeam) => {
//     navigate(`/play${index}`, {
//       state: {
//         game_id: gameId,
//         home_team: homeTeam,
//         away_team: awayTeam
//       }
//     });
//   };

//   return (
//     <div className="game-list">
//       <table className="responsive-table">
//         <thead>
//           <tr>
//             <th>Game</th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center" colSpan={2}>1</th>
//             <th className="table-center" colSpan={2}>+</th>
//             <th className="table-center" colSpan={2}>2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((game, gameIndex) => {
//               // Extract odds from the first 4 bookmakers for each outcome (Home, Draw, Away)
//               const odds1 = game.bookmakers.slice(0, 2)
//                 .flatMap(bookmaker =>
//                   bookmaker.markets
//                     .filter(market => market.key === "h2h") // Filtering for head-to-head markets
//                     .flatMap(market =>
//                       market.outcomes.filter(outcome => outcome.name === game.home_team) // Matching outcome to home team
//                     )
//                 )
//                 .map(outcome => outcome.price); // Store as an array (no .join)


//               const oddsPlus = game.bookmakers.slice(0, 2)
//                 .flatMap(bookmaker =>
//                   bookmaker.markets
//                     .filter(market => market.key === "h2h")
//                     .flatMap(market =>
//                       market.outcomes.filter(outcome => outcome.name === "Draw") // Matching outcome to draw
//                     )
//                 )
//                 .map(outcome => outcome.price);


//               const odds2 = game.bookmakers.slice(0, 2)
//                 .flatMap(bookmaker =>
//                   bookmaker.markets
//                     .filter(market => market.key === "h2h")
//                     .flatMap(market =>
//                       market.outcomes.filter(outcome => outcome.name === game.away_team) // Matching outcome to away team
//                     )
//                 )
//                 .map(outcome => outcome.price);

//               return (
//                 <tr
//                   key={gameIndex}
//                   onClick={() => handleClick(gameIndex, game.id, game.home_team, game.away_team)}
//                   className="clickable-row"
//                 >
//                   <td>
//                     {game.sport_title} `{game.home_team} Vs {game.away_team}`{" "}
//                     {new Date(game.commence_time).toLocaleString()}
//                   </td>
//                   <td style={{ textAlign: "center", verticalAlign: "middle" }}>

//                     <span
//                       className="active-circle"
//                       style={{
//                         display: "inline-block",
//                         width: "11px",
//                         height: "11px",
//                         backgroundColor: "green",
//                         borderRadius: "50%",
//                       }}
//                     ></span></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   {/* <td className="colspan1">{odds1[0] || "-"}</td> */}
//                   <td
//                     className="colspan1"
//                     style={odds2.length > 1 ? {} : {
//                       backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
//                       backgroundColor: 'black',
//                       backgroundSize: 'contain',
//                       backgroundPosition: 'center',
//                       backgroundRepeat: 'no-repeat',
//                       filter: 'invert(1)' // This will invert the colors and turn the image white
//                     }}
//                   >
//                     {odds1.length > 1 ? odds1[0] : "-"}
//                   </td>
//                   {/* <td className="colspan2">{odds1[1] || "-"}</td> */}
//                   <td
//                     className="colspan2"
//                     style={odds2.length > 1 ? {} : {
//                       backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                
//                       backgroundSize: 'contain',
//                       backgroundPosition: 'center',
//                       backgroundRepeat: 'no-repeat',
//                       filter: 'invert(1)' // This will invert the colors and turn the image white
//                     }}
//                   >
//                     {odds1.length > 1 ? odds1[1] : "-"}
//                   </td>
//                   {/* <td className="colspan1">{oddsPlus[0] || "-"}</td> */}
//                   <td
//                     className="colspan1"
//                     style={odds2.length > 1 ? {} : {
//                       backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
//                       backgroundColor: 'black',
//                       backgroundSize: 'contain',
//                       backgroundPosition: 'center',
//                       backgroundRepeat: 'no-repeat',
//                       filter: 'invert(1)' // This will invert the colors and turn the image white
//                     }}
//                   >
//                     {oddsPlus.length > 1 ? oddsPlus[0] : "-"}
//                   </td>
//                   {/* <td className="colspan2">{oddsPlus[1] || "-"}</td> */}
//                   <td
//                     className="colspan2"
//                     style={odds2.length > 1 ? {} : {
//                       backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
//                       backgroundColor: 'black',
//                       backgroundSize: 'contain',
//                       backgroundPosition: 'center',
//                       backgroundRepeat: 'no-repeat',
//                       filter: 'invert(1)' // This will invert the colors and turn the image white
//                     }}
//                   >
//                     {oddsPlus.length > 1 ? oddsPlus[1] : "-"}
//                   </td>

//                   {/* <td className="colspan1">{odds2[0] || "-"}</td> */}
//                   <td
//                     className="colspan1"
//                     style={odds2.length > 1 ? {} : {
//                       backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
//                       backgroundColor: 'black',
//                       backgroundSize: 'contain',
//                       backgroundPosition: 'center',
//                       backgroundRepeat: 'no-repeat',
//                       filter: 'invert(1)' // This will invert the colors and turn the image white
//                     }}
//                   >
//                     {odds2.length > 1 ? odds2[0] : "-"}
//                   </td>

//                   {/* <td className="colspan2">{odds2[1] || "-"}</td> */}
//                   <td
//                     className="colspan2"
                    // style={odds2.length > 1 ? {} : {
                    //   backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                    //   backgroundColor: 'black',
                    //   backgroundSize: 'contain',
                    //   backgroundPosition: 'center',
                    //   backgroundRepeat: 'no-repeat',
                    //   filter: 'invert(1)' // This will invert the colors and turn the image white
                    // }}
//                   >
//                     {odds2.length > 1 ? odds2[1] : "-"}
//                   </td>

//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan="12" className="table-center">
//                 No Data Available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GameList;
