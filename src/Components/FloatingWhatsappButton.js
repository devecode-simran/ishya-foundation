import React, { useState } from 'react';
import '../Styles//FloatingWhatsappButton.css'; // Import your CSS file

const FloatingWhatsAppButton = ({ phoneNumber, message }) => {
    const [isVisible, setIsVisible] = useState(true); // State for visibility (you can remove this if you want it always visible)

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="floating-whatsapp-button" onClick={handleWhatsAppClick}>
            <i className="fab fa-whatsapp"></i> {/* Use a WhatsApp icon (Font Awesome is recommended) */}
            <span>How Can I Help You?</span>
        </div>
    );
};

export default FloatingWhatsAppButton;