import React from "react"; 
import '../Styles/Quotes.css';
import QDL from '../Images/QuoteDesignLeft.png';
import QDR from '../Images/QuoteDesignRight.png';

// The Quote component now accepts the text and renders static images.
const Quotes = ({ quote }) => {
  // Split the quote by newlines
  const quoteLines = quote.split("\n");

  return (
    <div className="quotes-container">
      <img
        src={QDL} // Static top-left image
        alt="Top Left Decoration"
        className="quote-image top-left"
      />
      <div className="quote-text">
        {quoteLines.map((line, index) => (
          <p key={index}>{line}</p> // Render each line in a separate <p> element
        ))}
      </div>
      <img
        src={QDR} // Static bottom-right image
        alt="Bottom Right Decoration"
        className="quote-image bottom-right"
      />
    </div>
  );
};

export default Quotes;
