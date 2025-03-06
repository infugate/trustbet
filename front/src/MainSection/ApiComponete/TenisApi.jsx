import React, { useState, useEffect } from "react";
import "./TenisApi.css";

const GameList = () => {
  const [data, setData] = useState([]); 

  const API_KEY = "00ab9edf2816c39de6acd27a23b6ce11";
  const BASE_URL = "https://api.the-odds-api.com/v4/sports/tennis/odds/";
  useEffect(() => {
    async function fetchSportsData() {
      try {
        const url = `${BASE_URL}?apiKey=${API_KEY}&regions=uk&markets=h2h&oddsFormat=decimal`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data); // Update the state with fetched data
        console.log("Sports Data:", data);
      } catch (error) {
        console.error("Error fetching sports data:", error.message);
      }
    }

    fetchSportsData(); // Call the function when the component mounts
  }, []); 

  const handleClick = (game) => {
    alert(`You clicked on: ${game.sport_title}`);
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
            data.map((game, index) => (
              <tr key={index} onClick={() => handleClick(game)} className="clickable-row">
                <td>{game.sport_title} {game.commence_time}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="colspan1">{5.2}</td>
                <td className="colspan2">{1.5}</td>
                <td className="colspan1">{5.2}</td>
                <td className="colspan2">{5.2}</td>
                <td className="colspan1">{5}</td>
                <td className="colspan2">{5.2}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="table-center">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
