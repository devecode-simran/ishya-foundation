import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Gallery.css";

// Sample gallery sections
const gallerySections = {
  "All": [
    "team1.jpg", "team2.jpg", "team3.jpg",
    "event1.jpg", "event2.jpg", "event3.jpg",
    "community1.jpg", "community2.jpg", "community3.jpg",
    "fundraising1.jpg", "fundraising2.jpg", "fundraising3.jpg",
  ],
  "Our Team": ["team1.jpg", "team2.jpg", "team3.jpg"],
  "Events": ["event1.jpg", "event2.jpg", "event3.jpg"],
  "Community Work": ["community1.jpg", "community2.jpg", "community3.jpg"],
  "Fundraising Campaigns": ["fundraising1.jpg", "fundraising2.jpg", "fundraising3.jpg"],
};

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="gallery-hero">
        <h1>Capturing Moments of Change</h1>
        <p>See the impact we create through our work and events.</p>
      </div>

      {/* Category Filter */}
      <div className="category-tabs">
        {Object.keys(gallerySections).map((category) => (
          <button 
            key={category} 
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Gallery Grid */}
      <div className="masonry-gallery">
        {gallerySections[selectedCategory].map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(image)}>
            <img src={image} alt={selectedCategory} className="gallery-img" loading="lazy"/>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Expanded View" className="modal-img" />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default GalleryPage;
