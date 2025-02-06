import React, { useState } from 'react';
import '../Styles/Partnerships.css';

const Partnerships = ({ logos }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleLogos = 5; // Number of logos visible at a time

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? 0 : prevIndex - 1
    ); // Move back by one logo
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 + visibleLogos > logos.length
        ? prevIndex
        : prevIndex + 1
    ); // Move forward by one logo
  };

  const displayedLogos = logos.slice(startIndex, startIndex + visibleLogos);

  return (
    <div className="partnerships">
      <h2>Partnerships</h2>
      <div className="slider-container">
        <button
          className="nav-button left"
          onClick={handlePrev}
          disabled={startIndex === 0}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
        </button>
        <div className="logos-container">
          {displayedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Partner ${startIndex + index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="nav-button right"
          onClick={handleNext}
          disabled={startIndex + visibleLogos >= logos.length}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Partnerships;
