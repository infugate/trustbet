import React from 'react';

const Football = () => {
  return (
    <div>
      <h2 className="gamerules">Bookmaker Rules</h2>

      <section>
        <h2 className="gamerules">General</h2>
        <ul>
          <li>If the match will not take place within 48 hours of the original kick-off time, bets will be void.</li>
          <li>If the selection is in a multiple bet or accumulator, any refund must be requested before kick-off of the first leg of the multiple bet.</li>
          <li>Games with kick-off times altered well in advance to accommodate live TV or to ease fixture congestion will not be classed as postponed.</li>
          <li>If a match is forfeited or a team is given a walkover victory without the match having kicked off, all bets will be void. Any subsequently awarded scoreline will not count for settlement purposes.</li>
          <li>For confirmed postponed matches in multiple bets, the bet will stand on the remaining selections.</li>
        </ul>
      </section>

      <section>
        <h2 className="gamerules">Fancy</h2>
        <ul>
          <li>Tournament Total Goals and Team Total Goals scored in 90 minutes or in extra-time will count. Goals scored in penalty shootouts do not count.</li>
          <li>Only corners taken in 90 minutes count.</li>
          <li>Penalties taken in 90 minutes, extra-time, and penalty shootouts all count. Disallowed penalties do not count.</li>
        </ul>
      </section>

      <section>
        <h2 className="gamerules">Match</h2>
        <ul>
          <li>Match Odds: All bets apply to the full regular time including stoppage time. Extra-time and penalty shootouts are not included.</li>
          <li>For VAR cancellations, bets matched during review times will be voided.</li>
          <li>If a match starts but is not completed, all bets will be void unless the specific market outcome is already determined.</li>
          <li>Bets will be void if the match is abandoned before half-time.</li>
          <li>Own goals count for the credited team.</li>
          <li>Draw No Bet: In case of a draw, all bets will be void. If a game is abandoned, bets will be void.</li>
          <li>Both Teams to Score: Predict whether both teams will score at least one goal in the game. Own goals count. Abandoned games void bets unless outcomes are determined.</li>
          <li>Total Corners: Predict which team will take a specific corner in the game. If the corner is not taken, bets will be void.</li>
          <li>Goals Odd/Even: A 0-0 result counts as an even number of goals. Bets void in abandoned matches unless outcomes are determined.</li>
          <li>1X2 Corners: Predict which team will get more corners. Awarded but untaken corners do not count.</li>
          <li>Under/Over Cards: Predict the number of cards shown in the match. Two yellow cards leading to a red card count as 2 yellows and 1 red.</li>
          <li>HT/FT: Bets will be void if the match is abandoned. Extra-time and penalty shootouts do not count.</li>
          <li>First Half Under/Over: Predict goals scored in the first half. Extra-time/penalty shootouts are not included.</li>
          <li>Penalty Taken?: Will a penalty be awarded and taken during this match? Only applies to regular time plus stoppage.</li>
          <li>Correct Score: Predict the full-time score, excluding extra-time and penalty shootouts.</li>
          <li>Corners Number: Predict the total number of corners taken during the match.</li>
          <li>Handicap Betting: Predict the winner of the match with the stated handicap applied.</li>
        </ul>
      </section>

      <section>
        <h2 className="gamerules">Company Policy</h2>
        <ul>
          <li>Company reserves the right to suspend/void bets found to be illegitimate, such as through VPN use or multiple entries.</li>
        </ul>
      </section>

      <section>
        <h2 className="gamerules">Live Streaming</h2>
        <ul>
          <li>Live scores, elapsed time, and other data provided may be delayed or inaccurate. Customers relying on this data do so at their own risk.</li>
        </ul>
      </section>
    </div>
  );
};

export default Football;