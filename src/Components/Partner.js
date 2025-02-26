import React from "react";
import "../Styles/Partner.css"; // Import the CSS file

const Partner = ({ heading, imageSrc, subheading, description }) => {
  return (
    <div className="partner-container">
      {/* Heading */}
      <h1 className="partner-heading">{heading}</h1>

      {/* Image */}
      <img src={imageSrc} alt={heading} className="partner-image" loading="lazy"/>

      {/* Subheading */}
      <h2 className="partner-subheading">{subheading}</h2>

      {/* Description */}
      <p className="partner-description">{description}</p>
    </div>
  );
};

export default Partner;
