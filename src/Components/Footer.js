import React from "react";
import "../Styles/Footer.css";
import Logo from '../Images/IshyaLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo and Text */}
        <div className="footer-column">
          <div className="footer-logo">
            <Link to="/"><img src={Logo} alt="Logo" style={{ width: '100px' }} /></Link>
            </div>
          <p className="footer-text">Ishya Foundation empowers underprivileged children and women in Delhi through education. We believe education unlocks a brighter future, and that’s why we provide high-quality learning experiences, life skills training, and leadership development programs. Join us in building a future where every child and woman thrives.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#gallery">Photo Gallery</a></li>
          </ul>
        </div>

        {/* Column 3: Get in Touch */}
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <ul className="footer-links">
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#donate" className="donate-now">Donate Now</a></li>
          </ul>
        </div>

        {/* Column 4: Address */}
        <div className="footer-column">
          <h4>Address</h4>
          <p className="footer-address">
          Ishya Foundation :<br/> 
          78 A/1, Block B, Friends Colony East, <br/>
          New Delhi - 110065<br/> 
          <br/> 
          Ishya Learning Centre :<br/> 
          2B, First Floor, Thakur Bhawan,<br/> 
          Near Kartik Kunj, Chhalera Village, sector - 44,<br/> 
          Noida -201301
          </p>
        </div>

        {/* Column 5: Newsletter */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <p className="footer-note">
            We don't spam you. Your email is safe with us.
          </p>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook" className="icon">FB</a>
            <a href="#twitter" className="icon">TW</a>
            <a href="#instagram" className="icon">IG</a>
            <a href="#linkedin" className="icon">LI</a>
            <a href="#youtube" className="icon">YT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
