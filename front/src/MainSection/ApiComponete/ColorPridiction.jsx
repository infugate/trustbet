
import React, { useState, useEffect } from 'react';
import './ColorPridiction.css';

const Game = () => {
    const [balance, setBalance] = useState(1000);
    const [result, setResult] = useState('');
    const [chosenColor, setChosenColor] = useState('');
    const [customBet, setCustomBet] = useState('');
    const [betHistory, setBetHistory] = useState([]);
    const [timer, setTimer] = useState(30);
    const [canPlay, setCanPlay] = useState(false);

    const colors = [
        "red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan"
    ];

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            setCanPlay(true);

            // Automatically restart timer after 10 seconds if no bet is placed
            const autoRestart = setTimeout(() => resetTimer(),5000);
            return () => clearTimeout(autoRestart);
        }
    }, [timer]);

    const resetTimer = () => {
        setTimer(30);
        setCanPlay(false);
        setResult(''); // Clear the result for the next round
    };

    const handlePlayBet = () => {
        if (!canPlay) {
            alert("Please wait for the timer to finish.");
            return;
        }

        const bet = parseInt(customBet);

        if (!chosenColor) {
            alert("Please select a color before placing a bet.");
            return;
        }

        if (!bet || bet <= 0) {
            alert("Please enter a valid bet amount.");
            return;
        }

        if (bet > balance) {
            alert("Insufficient balance to place this bet.");
            return;
        }

        const winningColor = colors[Math.floor(Math.random() * colors.length)];
        setTimeout(() => {
            setResult(`Winning color is: ${winningColor}`);
            const isWin = winningColor === chosenColor;
            const newBalance = isWin ? balance + bet : balance - bet;
            setBalance(newBalance);

            const betResult = {
                chosenColor,
                betAmount: bet,
                winningColor,
                result: isWin ? 'Win' : 'Lose'
            };
            setBetHistory([...betHistory, betResult]);

            setChosenColor('');
            setCustomBet('');
            resetTimer(); // Restart the timer for the next round
        }, 3000);
    };

    const bodyStyle = {
        margin: 0,
        padding: 0,
        fontFamily: "'Poppins', sans-serif",
        background: '#121212',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
        boxSizing: 'border-box'
    };

    return (
        <div className="dcont">
            <div style={bodyStyle}>
                <div id="game-container">
                    <h1 id="game-title">Color Prediction Game</h1>
                    <div className="Timer">
                        {timer > 0 ? (
                            <h3>You Play After: {timer} seconds</h3>
                        ) : (
                            <h3>You can play now.</h3>
                        )}
                    </div>
                    <div id="color-palette">
                        {colors.map((color) => (
                            <div key={color} id={`color-wrapper-${color}`}>
                                <div
                                    id={`color-option-${color}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setChosenColor(color)}
                                ></div>
                                <p id={`color-name-${color}`}>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
                            </div>
                        ))}
                    </div>
                    <div id="bet-buttons">
                        {[10, 20, 50, 100, 150].map((bet) => (
                            <button
                                key={bet}
                                id={`bet-button-${bet}`}
                                onClick={() => setCustomBet(bet)}
                            >
                                Bet ₹{bet}
                            </button>
                        ))}
                    </div>
                    <div id="custom-bet">
                        <p>Selected Color: <strong>{chosenColor || "None"}</strong></p>
                        <div className="input-button-row">
                            <input
                                type="number"
                                placeholder="Enter custom bet"
                                value={customBet}
                                onChange={(e) => setCustomBet(e.target.value)}
                            />
                            <button
                                onClick={handlePlayBet}
                                disabled={!customBet || !chosenColor || !canPlay}
                            >
                                Submit Bet
                            </button>
                        </div>
                    </div>
                    <p id="result">{result}</p>
                    <p>Balance: ₹{balance}</p>
                </div>
            </div>

            <div className="ResultBet">
                <h2>Bet History</h2>
                <ul>
                    {betHistory.map((bet, index) => (
                        <li key={index}>
                            Bet----₹{bet.betAmount}----Color <strong>{bet.chosenColor}</strong>----Winning Color: {bet.winningColor}----<em> {bet.result}</em>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Game;
