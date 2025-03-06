import React from "react";


const EGames = () => {
  return (
    <div className="rules-container">
      <section className="match-rule">
        <h2 className="gamerules">1. Match Start and Completion</h2>
        <ul>
          <li>In the event of a match starting but not being completed, then all bets will be void.</li>
        </ul>
      </section>

      <section className="illegitimate-bets">
        <h2 className="gamerules">2. Illegitimate Bets</h2>
        <ul>
          <li>Company reserves the right to suspend/void any ID/bets if the same is found to be illegitimate. For example, in case of VPN/robot-use/multiple entry from the same or different IP and others.</li>
          <li>Note: Only winning bets will be voided.</li>
        </ul>
      </section>

      <section className="live-streaming-rule">
        <h2 className="gamerules">3. Live Streaming and Animation</h2>
        <ul>
          <li>
            Although the current score, time elapsed, video, and other data provided on this site is sourced from "live" feeds provided by third parties, you should be aware that this data may be subject to a time delay and/or be inaccurate.
          </li>
          <li>
            Please also be aware that other customers may have access to data that is faster and/or more accurate than the data shown on the site.
          </li>
          <li>
            If you rely on this data to place bets, you do so entirely at your own risk. We provide this data AS IS with no warranty as to the accuracy, completeness, or timeliness of such data and accept no responsibility for any loss (direct or indirect) suffered by you as a result of your reliance on it.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EGames;