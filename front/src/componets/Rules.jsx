import React, { useState } from 'react';
import Football from './Football';  // Import Football component
import HorseRacing from './HorseRacing';
import EGames from './EGames';
import BasketBall from './BasketBall';
import "./Rules.css";

const Rules = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);
  const [clickedSport, setClickedSport] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
    setClickedSport(sport);
  };

  const getButtonStyle = (sport) => {
    return sport === clickedSport
      ? { backgroundColor: 'rgb(37, 46, 82)', color: 'white' }
      : {};
  };

  return (
    <div className='main-container'>
      <button type="button" className="btn btn-primary" onClick={toggleModal}>
        Rules
      </button>

      {isOpen && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{
            display: 'block',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              height: '100%',
              width: '90%', // Adjusted width for better responsiveness
              maxWidth: 'none',
              margin: 'auto',
            }}
          >
            <div className="modal-content" style={{ height: '100%' }}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Rules
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ overflowY: 'auto' }}>
                <div className="rules-sidebar">
                  <button
                    className="rules-button"
                    onClick={() => handleSportClick('Football')}
                    style={getButtonStyle('Football')}
                  >
                    Football
                  </button>
                  <button
                    className="rules-button"
                    onClick={() => handleSportClick('Horse Racing')}
                    style={getButtonStyle('Horse Racing')}
                  >
                    Horse Racing
                  </button>
                  <button
                    className="rules-button"
                    onClick={() => handleSportClick('E Gaming')}
                    style={getButtonStyle('E Gaming')}
                  >
                    E Gaming
                  </button>
                  <button
                    className="rules-button"
                    onClick={() => handleSportClick('Basketball')}
                    style={getButtonStyle('Basketball')}
                  >
                    Basketball
                  </button>
                </div>
                <div className="rule-book">
                  {selectedSport === 'Football' && <Football />}
                  {selectedSport === 'Horse Racing' && <HorseRacing />}
                  {selectedSport === 'E Gaming' && <EGames />}
                  {selectedSport === 'Basketball' && <BasketBall />}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rules;