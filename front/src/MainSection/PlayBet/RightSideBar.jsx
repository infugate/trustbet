import React from "react";
import "./RightSideBar.css";

const BetSection = ({selectedBet,stakeValue,setStakeValue, profit, isPaused, setSelectedBet, setProfit, handleSubmit, myBets, stakeValues = [25, 50, 100, 200, 500, 1000],}) => {
 

 
  return (
    <div className="bet-section">
      {/* Place Bet Section */}
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
          <h3>{profit.toFixed(2) || "0.00"}</h3>
        </div>

        <div className="place-bet-stake-buttons">
          {stakeValues.map((val) => (
            <button
              key={val}
              onClick={() => {
                if (isPaused) return; // Prevent updating stake if game is paused
                setStakeValue(val);
              }}
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
                setProfit(0);
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

      {/* My Bet Section */}
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
              .reverse() // Show the most recent bet at the top
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
  );
};

export default BetSection;
