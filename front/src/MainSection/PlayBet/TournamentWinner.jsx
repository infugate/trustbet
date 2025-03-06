import React, { useState } from "react";
import "./TournamentWinner.css";

const TournamentWinner = ({ title, columns, data, setSelectedBet, profit, stake, clicked, setTournamentWinnerClicked }) => {
  const [tselectedBet, setTSelectedBet] = useState({ label: "", odds: "" });


  // Determine styling based on the length of the data
  const tableStyle =
  data.length > 1 && Array.isArray(data[1]) && data[1].length === 3
    ? "three-items"
    : data.length > 3
    ? "more-than-three-items"
    : "default-style";


  return (
    <div className="tournament_winner">
      <div className="T20_header">
        <h1>{title}</h1>
      </div>
      <div className="tournament_winner_table">
        <div className="table-container">
          <table className={`custom-table ${tableStyle}`}>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data
                .filter(row => row[0] && row[0] !== "") 
                .map((row, rowIndex) => (
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
                        className={`${tableStyle}`}
                        onClick={() => {
                          if (row[0] && cell[0]) {
                            setSelectedBet({ label: row[0], odds: cell[0].toString() });
                            setTSelectedBet({ label: row[0], odds: cell[0].toString() });
                            setTournamentWinnerClicked(true);
                          } else {
                            console.warn("Invalid data for selectedBet:", { row, cell });
                          }
                        }}
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

export default TournamentWinner;
