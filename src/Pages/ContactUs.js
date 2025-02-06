import React from 'react';  
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FAQComponent from '../Components/Faq';
import PageHeader from '../Components/PageHeader';
import '../Styles/ContactUs.css';
import Map from '../Images/BasemapImage.png';
import IshyaEntrance from '../Images/IshyaEntrance.png';
import Quotes from '../Components/Quotes';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <PageHeader pageName="Contact Us" breadcrumb="Home/Contact Us" />
      {/* Contact Section */}
      <div className='contact-us-head'><h1>We'd Love to Hear From You</h1></div>
      
      <div className="contact-container">
        
        {/* Map Section */}
        <div className="location-section">
          <img
            src={Map} // Replace with the actual map image path
            alt="Map Location"
            className="location-image"
          />
        </div>
        
        {/* Address Section */}
        <div className="address-section">
          <h2 className="address-heading">Address</h2>
          <div className="address-details">
            <div className="address-item">
              <p>Ishya Foundation: 78, A-1 Ln, Block B, Friends Colony East, New Friends Colony, New Delhi, Delhi-110065
                 Ishya Learning Centre: 2B, First Floor, Thakur Bhawan, Near Kartik Kunj, Chhalera Village, sector - 44, Noida -201301, Ishya Learning Centre</p>
            </div>
            <div className="address-item">
              <h3 className="sub-heading">Whatsapp:</h3>
              <p>+91 8527690615</p>
            </div>
            <div className="address-item">
              <h3 className="sub-heading">Email:</h3>
              <p>contact_us@ishya.co.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <div className="form-content">
          <h3 className="form-subheading">Get in Touch</h3>
          <h2 className="form-heading">Send Us a message</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type="text" placeholder="First Name" required />
              </div>
              <div className="input-group">
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" type="text" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your Email" required />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="+91" required />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" className="send-button">Send Message</button>
            <p>To donate please call us, you also can message us, we’re always looking for new people to volunteer and help us in helping everyone that needs around the world. Feel free to contact us!</p>
          </form>
        </div>

        {/* Tall Rectangle Image */}
        <div className="form-image-section">
          <img
            src={IshyaEntrance} // Replace with the actual image path
            alt="Form Decoration"
            className="form-image"
          />
        </div>
      </div>
      <Quotes 
      quote="Help others without any reason and give without the expectation of receiving anything in return. 
      - Roy T. Bennett"
      />
<FAQComponent/>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactUs;
