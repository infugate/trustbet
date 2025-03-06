// import React, { useState, useEffect } from "react";
// import "./TenisApi.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const GameList = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchSportsData() {
//       try {
//         const response = await axios.get("http://localhost:5000/api/sports-data-2");
//         setData(response.data.data || []); // Ensure the data is an array
//         console.log("Sports Data:", response.data.data);
//       } catch (error) {
//         console.error("Error fetching sports data:", error.message);
//       }
//     }
//     fetchSportsData();
//   }, []);

//   const handleClick = (homeTeam, awayTeam, r1, w1, o1, r2, w2, o2) => {
//     navigate(`/play2`, {
//       state: {
//         home_team: homeTeam,
//         away_team: awayTeam,
//         run1: r1 || "-",
//         wkt1: w1 || "-",
//         ovr1: o1 || "-",
//         run2: r2 || "-",
//         wkt2: w2 || "-",
//         ovr2: o2 || "-",
//       },
//     });
//     console.log("Second Inning Data:", { r2, w2, o2 });
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
//               const firstInning = game.score?.find(
//                 (inning) =>
//                   inning.inning.includes(game.teams[0]) &&
//                   inning.inning.includes("Inning 1")
//               );
//               const secondInning = game.score?.find(
//                 (inning) =>
//                   inning.inning.includes(game.teams[1]) &&
//                   inning.inning.includes("Inning 1")
//               );

//               return (
//                 <tr
//                   key={gameIndex}
//                   onClick={() =>
//                     handleClick(
//                       game.teams[0],
//                       game.teams[1],
//                       firstInning?.r,
//                       firstInning?.w,
//                       firstInning?.o,
//                       secondInning?.r,
//                       secondInning?.w,
//                       secondInning?.o
//                     )
//                   }
//                   className="clickable-row"
//                 >
//                   <td>{game.name || "N/A"}</td>
//                   <td style={{ textAlign: "center", verticalAlign: "middle" }}>
//                     {game.matchStarted && !game.matchEnded && (
//                       <span
//                         className="active-circle"
//                         style={{
//                           display: "inline-block",
//                           width: "15px",
//                           height: "15px",
//                           backgroundColor: "green",
//                           borderRadius: "50%",
//                         }}
//                       ></span>
//                     )}
//                   </td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td
//                     className="colspan1"
//                     style={{ textAlign: "center", verticalAlign: "middle" }}
//                   >
//                     {firstInning?.r || "-"}
//                   </td>
//                   <td
//                     className="colspan2"
//                     style={{ textAlign: "center", verticalAlign: "middle" }}
//                   >
//                     {firstInning?.w || "-"}
//                   </td>
//                   <td
//                     className="colspan1"
//                     style={{ textAlign: "center", verticalAlign: "middle" }}
//                   >
//                     {secondInning?.r || "-"}
//                   </td>
//                   <td
//                     className="colspan2"
//                     style={{ textAlign: "center", verticalAlign: "middle" }}
//                   >
//                     {secondInning?.w || "-"}
//                   </td>
//                   <td
//                     className="colspan1"
//                     style={{ textAlign: "center", verticalAlign: "middle" }}
//                   >
//                     {secondInning?.o || "-"}
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































import React, { useState, useEffect } from "react";
import "./TenisApi.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GameList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSportsData() {
      try {
        // const response = await axios.get("http://localhost:5000/api/sports-data-2");
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/sports-data-2`);
        setData(response.data.data || []); // Ensure the data is an array
        // console.log("Sports Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching sports data:", error.message);
      }
    }
    fetchSportsData();
  }, []);

  const handleClick = (homeTeam, awayTeam,gameid) => {
    navigate(`/play2`, {
      state: {
        home_team: homeTeam,
        away_team: awayTeam,
        id:gameid
      },
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
          {data.length > 0 ? (
            data.map((game, gameIndex) => {
              const firstInning = game.score?.find(
                (inning) =>
                  inning.inning.includes(game.teams[0]) &&
                  inning.inning.includes("Inning 1")
              );
              const secondInning = game.score?.find(
                (inning) =>
                  inning.inning.includes(game.teams[1]) &&
                  inning.inning.includes("Inning 1")
              );

              return (
                <tr
                  key={gameIndex}
                  onClick={() =>
                    handleClick(
                      game.teams[0],
                      game.teams[1],
                      game.id,
                    )
                  }
                  className="clickable-row"
                >
                  <td>{game.name || "N/A"}</td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {game.matchStarted && !game.matchEnded && (
                      <span
                        className="active-circle"
                        style={{
                          display: "inline-block",
                          width: "15px",
                          height: "15px",
                          backgroundColor: "green",
                          borderRadius: "50%",
                        }}
                      ></span>
                    )}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td
                    className="colspan1"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {firstInning?.r || "-"}
                  </td>
                  <td
                    className="colspan2"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {firstInning?.w || "-"}
                  </td>
                  <td
                    className="colspan1"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {secondInning?.r || "-"}
                  </td>
                  <td
                    className="colspan2"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {secondInning?.w || "-"}
                  </td>
                  <td
                    className="colspan1"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {secondInning?.o || "-"}
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
      </table>
    </div>
  );
};

export default GameList;
