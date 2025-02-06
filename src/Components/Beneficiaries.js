import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Styles/Beneficiaries.css"; // Import the CSS file
import Beneficiary1 from "../Images/Beneficiary1.png"
import IshyaEntrance from '../Images/IshyaEntrance.png';
import SendStudents from '../Images/ProjectDetails/ShikshaImpact.png';


const beneficiariesData = [
  {
    id: 1,
    image: Beneficiary1, // Replace with actual image
    heading: "What our beneficiaries say",
    description: "इश्या फाउंडेशन के समर्थन से मुझे पता चला कि सार्वजनिक स्कूलों में EWS सीटें आरक्षित हैं। मैंने अब आय प्रमाण पत्र प्राप्त कर लिया है और इस वर्ष अपने बच्चे का प्रवेश कराने में सक्षम हूँ। - इरफान         With the support of Ishya Foundation, I learned that EWS seats are reserved in public schools. I have now obtained the income certificate and am able to secure admission for my child this year. - Irfaan",
    buttonText: "Help Women Upskill"
  },
  {
    id: 2,
    image: SendStudents,
    heading: "Send Students To School",
    description: "To help underprivileged children develop their capabilities, we opened the Ishya learning center in Chalera, Sector 44, Noida, on November 1st, ‘23. Launched with a vision to provide education for holistic development of children aged between 3 years and 14 years, this center adopted three initiatives: Balvatika, NFE (non-formal education), and Remedial.",
    buttonText: "Send Students to School"
  },
  {
    id: 3,
    image: IshyaEntrance,
    heading: "Ishya Learning Center",
    description: "Ishya Learning Center provides early childhood education to children aged 3 to 6, focusing on those who have never attended school, dropped out, or cannot afford coaching. It aims to bring learning opportunities back into their lives, fostering growth and knowledge.",
    buttonText: "Ishya Learning Center"
  },
  
];

const Beneficiaries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beneficiariesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? beneficiariesData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="beneficiaries-container">
      {/* Left Button */}
      <button className="nav-button left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      {/* Slide Content */}
      <div className="beneficiary-slide">
        <img src={beneficiariesData[currentIndex].image} alt="Beneficiary" className="beneficiary-image" />
        <div className="beneficiary-content">
          <h2>{beneficiariesData[currentIndex].heading}</h2>
          <p>{beneficiariesData[currentIndex].description}</p>
          <button className="beneficiary-button">{beneficiariesData[currentIndex].buttonText}</button>
        </div>
      </div>

      {/* Right Button */}
      <button className="nav-button right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="dots-container">
        {beneficiariesData.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Beneficiaries;
