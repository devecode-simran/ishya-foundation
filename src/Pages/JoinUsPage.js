import React, { useState } from "react";
import axios from "axios"; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/JoinUsPage.css";

const categories = ["Volunteer", "Teacher", "Donor", "Partner"];

// Updated form fields without donation amount
const formFields = {
  Volunteer: { fields: [ { name: "full_name", label: "Full Name", type: "text" }, { name: "email", label: "Email", type: "email" }, { name: "phone_number", label: "Phone Number", type: "tel" }, { name: "volunteer_reason", label: "Why do you want to volunteer?", type: "textarea" } ], submitText: "Become a Volunteer" },
  Teacher: { fields: [ { name: "full_name", label: "Full Name", type: "text" }, { name: "email", label: "Email", type: "email" }, { name: "phone_number", label: "Phone Number", type: "tel" }, { name: "teaching_experience", label: "Teaching Experience (in years)", type: "number" }, { name: "subjects", label: "Subjects you can teach", type: "text" } ], submitText: "Apply as a Teacher" },
  Donor: { fields: [ { name: "full_name", label: "Full Name", type: "text" }, { name: "email", label: "Email", type: "email" }, { name: "donation_purpose", label: "Purpose of Donation", type: "select", options: ["Donate for School", "Donate for Higher Education", "Donate for Women", "Donate for Healthcare"] } ], submitText: "Donate Now" },
  Partner: { fields: [ { name: "organization_name", label: "Organization Name", type: "text" }, { name: "contact_person", label: "Contact Person", type: "text" }, { name: "email", label: "Email", type: "email" }, { name: "partnership_details", label: "How can you partner with us?", type: "textarea" } ], submitText: "Join as a Partner" }
};

// Razorpay links for different donation purposes
const donationLinks = {
  "Donate for School": "https://rzp.io/rzp/donateforschool",
  "Donate for Higher Education": "https://rzp.io/rzp/donateforhigheredu",
  "Donate for Women": "https://rzp.io/rzp/donateforwomen",
  "Donate for Healthcare": "https://rzp.io/rzp/donateforhealthcare"
};

const JoinUsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Volunteer");
  const [formData, setFormData] = useState({
    category: "Volunteer",
    full_name: "",
    email: "",
    phone_number: "",
    volunteer_reason: "",
    teaching_experience: "",
    subjects: "",
    donation_purpose: "",
    organization_name: "",
    contact_person: "",
    partnership_details: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission for Donors (Send Data + Redirect)
  const handleDonateNow = async () => {
    try {
      await axios.post("http://localhost:3001/join", formData);
      
      // Get the correct Razorpay link based on the selected purpose
      const donationLink = donationLinks[formData.donation_purpose];

      if (donationLink) {
        window.location.href = donationLink; // Redirect to Razorpay
      } else {
        alert("Please select a valid donation purpose.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="joinus-container">
        <div className="background-overlay"></div>
        <div className="joinus-content">
          <span className="joinus-title">Join Us & Make a Difference</span>

          {/* Category Selection */}
          <div className="category-tabs-join">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setFormData({ category: category }); // Reset form when switching categories
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Form Section */}
          <div className="joinus-form">
            <h2 className="form-title">Join as a {selectedCategory}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              {formFields[selectedCategory].fields.map((field, index) => (
                <div key={index} className="form-group">
                  <label>{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea 
                      name={field.name} 
                      rows="4" 
                      required 
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    ></textarea>
                  ) : field.type === "select" ? (
                    <select 
                      name={field.name} 
                      required 
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input 
                      type={field.type} 
                      name={field.name} 
                      required 
                      value={formData[field.name] || ""}
                      onChange={handleChange} 
                    />
                  )}
                </div>
              ))}

              {/* Donate Now Button */}
              {selectedCategory === "Donor" ? (
                <button type="button" className="submit-button" onClick={handleDonateNow}>
                  Donate Now
                </button>
              ) : (
                <button type="submit" className="submit-button">
                  {formFields[selectedCategory].submitText}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinUsPage;
