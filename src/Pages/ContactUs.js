import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FAQComponent from "../Components/Faq";
import PageHeader from "../Components/PageHeader";
import "../Styles/ContactUs.css";
import Map from "../Images/BasemapImage.png";
import IshyaEntrance from "../Images/IshyaEntrance.png";
import Quotes from "../Components/Quotes";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/contact", formData);
      setResponseMessage(response.data.message);
      setFormData({ first_name: "", last_name: "", email: "", phone_number: "", message: "" });
    } catch (error) {
      setResponseMessage("Error submitting the form. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <PageHeader pageName="Contact Us" breadcrumb="Home/Contact Us" />

      <div className="contact-us-head">
        <h1>We'd Love to Hear From You</h1>
      </div>

      <div className="contact-container">
        <div className="location-section">
          <img src={Map} alt="Map Location" className="location-image" />
        </div>

        <div className="address-section">
          <h3 className="address-heading">Address</h3>
          <div className="address-details">
            <p>Ishya Foundation: 78, A-1 Ln, Block B, Friends Colony East, New Delhi, Delhi-110065</p>
            <h3 className="sub-heading">Whatsapp:</h3>
            <p>+91 8527690615</p>
            <h3 className="sub-heading">Email:</h3>
            <p>contact_us@ishya.co.in</p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="form-content">
          <h3 className="form-subheading">Get in Touch</h3>
          <h2 className="form-heading">Send Us a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" name="first_name" type="text" placeholder="First Name" required value={formData.first_name} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" name="last_name" type="text" placeholder="Last Name" required value={formData.last_name} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input id="phone_number" name="phone_number" type="tel" placeholder="+91" required value={formData.phone_number} onChange={handleChange} />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Type your message here..." required value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="send-button">Send Message</button>
          </form>

          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>

        <div className="form-image-section">
          <img src={IshyaEntrance} alt="Form Decoration" className="form-image" />
        </div>
      </div>

      <Quotes quote="Help others without any reason and give without the expectation of receiving anything in return. - Roy T. Bennett" />
      <FAQComponent />
      <Footer />
    </div>
  );
};

export default ContactUs;
