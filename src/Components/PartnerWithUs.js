import React from 'react';
import '../Styles/PartnerWithUs.css';
import Call from "../Images/Call.png";
import Chat from "../Images/Chat.png";
import Address from "../Images/Address.png";

const PartnerWithUs = () => {
  const contactOptions = [
    {
      id: 1,
      logo: Call, 
      heading: "Call Support",
      description: "Need immediate assistance? Call our support team for quick help and guidance."
    },
    {
      id: 2,
      logo: Chat,
      heading: "Chat with Us",
      description: "Reach out to us for any inquiries or assistance. We're here to help!"
    },
    {
      id: 3,
      logo: Address,
      heading: "Address",
      description: "Ishya Foundation: 78, A-1 Ln, Block B, Friends Colony East, New Friends Colony, New Delhi, Delhi-110065"
    }
  ];

  return (
    <div className="partner-us-container">
      <h2 className="partner-us-heading">Partner With Us</h2>
      <p className="partner-us-description">
        We understand that no single person or idea can solve the challenges faced by the underprivileged students and 
        believe that working together can create a greater impact than what any individual may accomplish.
      </p>
      <div className="partner-us-tiles">
        {contactOptions.map((option) => (
          <div key={option.id} className="partner-us-tile">
            <img src={option.logo} alt={option.heading} className="partner-us-logo" loading="lazy"/>
            <h3 className="tile-heading">{option.heading}</h3>
            <p className="tile-description">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerWithUs;
