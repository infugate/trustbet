import React, { useState } from "react";
import "./TournamentWinner.css";

const OverBookMaker = ({ columns, data, setSelectedBet, profit, stake, clicked, setTournamentWinnerClicked }) => {
  const [tselectedBet, setTSelectedBet] = useState({ label: "", odds: "" });

  return (
    <div className="tournament_winner">
      <div className="T20_header">
        <h1>TOURNAMENT WINNER</h1>
      </div>
      <div className="tournament_winner_table">
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="profit-show">
                    <div>{row[0]}</div>
                    {clicked && tselectedBet.label === row[0] && profit.toFixed(2) !== "0.00" ? (
                      <div style={{ color: 'rgb(8, 113, 74)', fontSize: '13px', fontWeight: 400 }}>
                        {profit.toFixed(2)}
                      </div>
                    ) : (
                      <div>
                        <div style={{ color: 'rgb(201, 24, 79)', fontSize: '13px', fontWeight: 400 }}>
                          {stake && clicked ? -stake : null}
                        </div>
                      </div>
                    )}
                  </td>

                  {row.slice(1).map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      onClick={() => {
                        if (row[0] && cell[0]) {
                          // Update both parent and local states
                          setSelectedBet({ label: row[0], odds: cell[0].toString() });
                          setTSelectedBet({ label: row[0], odds: cell[0].toString() });
                          setTournamentWinnerClicked(true);  // Call setTournamentWinnerClicked with true
                        } else {
                          console.warn("Invalid data for selectedBet:", { row, cell });
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="value-1">{cell[0]}</div>
                      <div className="value-2">{cell[1]}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverBookMaker;
