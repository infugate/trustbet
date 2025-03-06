import React from "react";

const BasketBall = () => {
  return (
    <div className="rules-container">
      <section className="match-odds">
        <h2 className="gamerules">1. Match Odds</h2>
        <ul>
          <li>Predict which team will be the winner. There must be 5 minutes or less of scheduled game time left for bets to have action.</li>
        </ul>
      </section>

      <section className="quarter-winner">
        <h2 className="gamerules">2. Quarter Winner</h2>
        <ul>
          <li>The quarter must be completed for bets to have action, unless settlement of bets is already determined.</li>
        </ul>
      </section>

      <section className="half-winner">
        <h2 className="gamerules">3. 1st Half Winner / 2nd Half Winner</h2>
        <ul>
          <li>The first half must be completed for first half bets to stand. If a game is postponed or cancelled after the start, for game and second half bets, there must be 5 minutes or less remaining for bets to have action, unless settlement of bets is already determined. (Including Overtime if played.)</li>
        </ul>
      </section>

      <section className="highest-scoring-half">
        <h2 className="gamerules">4. Highest Scoring Half</h2>
        <ul>
          <li>Predict in which half most points will be scored. OT is not included in 2nd Half.</li>
        </ul>
      </section>

      <section className="illegitimate-bets">
        <h2 className="gamerules">5. Illegitimate Bets</h2>
        <ul>
          <li>Company reserves the right to suspend/void any ID/bets if the same is found to be illegitimate. For example, in case of VPN/robot-use/multiple entry from the same or different IP and others.</li>
          <li>Note: Only winning bets will be voided.</li>
        </ul>
      </section>

      <section className="live-streaming-rule">
        <h2 className="gamerules">6. Live Streaming and Animation</h2>
        <ul>
          <li>Although the current score, time elapsed, video, and other data provided on this site is sourced from "live" feeds provided by third parties, you should be aware that this data may be subject to a time delay and/or be inaccurate.</li>
          <li>Please also be aware that other customers may have access to data that is faster and/or more accurate than the data shown on the site.</li>
          <li>If you rely on this data to place bets, you do so entirely at your own risk. We provide this data AS IS with no warranty as to the accuracy, completeness, or timeliness of such data and accept no responsibility for any loss (direct or indirect) suffered by you as a result of your reliance on it.</li>
        </ul>
      </section>
    </div>
  );
};

export default BasketBall;