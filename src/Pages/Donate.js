import React, { useState } from 'react'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Quotes from '../Components/Quotes';
import '../Styles/Donate.css';
import { FaCaretDown } from 'react-icons/fa'; // Importing the down arrow icon
import DonateImage from '../Images/Donate.png';
import DonateQuote from '../Images/DonateQuote.png';
import PageHeader from '../Components/PageHeader';


const Donate = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div>
      <Navbar />
      <PageHeader pageName="Donate Now" breadcrumb="Home/Donate" />
      <div className="donate-container">
        {/* "Every penny matters" text */}
        <div className="donate-header">
          <h1>
            EVERY <span className="green-text">PENNY</span> MATTERS
          </h1>
        </div>
        
        {/* Sub-heading and Main Heading */}
        <div className="donate-subheading">
          <h2>SUPPORT US</h2>
          <h3>JOIN HANDS WITH US TO CREATE A BETTER FUTURE FOR OUR SOCIETY</h3>
        </div>

        {/* Information Box */}
        <div className="donate-info-box">
          <p>
          Economic constraints control the lives of everyone within our society, especially the underprivileged communities.
            Education is the key to overcoming such challenges. India, being a developing country, still has a long way to go in terms of literacy but is progressing gradually.
            In many areas, education is not accessible due to many challenges, but since the introduction of the internet, education can reach a larger population now, than ever before.
            With access to the internet, the youth now needs the right guidance and support to enhance their skills and find employment to create a successful future.
            We want to use our resources to help progress the educational goal of our country rapidly and we cannot do it alone.
            Ishya is an organization that collectively and wholeheartedly perceives this situation and feels that herein lies an opportunity, and a responsibility for all who can afford a fulfilled, dignified, and healthy lifestyle to help and aid those who don’t share the same privileges.
            Our foundation aims to change this economic disparity at its roots. Our programs are designed to help more and more young adults pursue their skills and attain their goals.
            If you always wanted to help underprivileged communities and did not know where to begin, this is your chance to do your part!
            Help us continue our journey and help more children pursue their dreams. We want your support, so donate to make a difference and do your part in helping us aid the development.
          </p>
          
          <p>
            – For becoming a member of Ishya, and helping us with our monthly affairs, you can pay ₹5000 per month, which would enable sponsoring our different services in the health and education sectors.
          </p>
          <p>
            – For sponsoring a child’s English-speaking classes, you can pay ₹3000 for a student or ₹15000 for a full batch of 5 students for all 3 months. We individually cater to every student’s needs through mentorship and career counseling.
          </p>
          <p>
            – For higher education sponsoring, you can pay ₹20,000. This generous donation would be highly beneficial for our students with high potential who lack the financial resources to pay for tuition fees.
          </p>
          <p>
            — At Ishya, we believe that any donation, small or large, helps us transform someone’s life through education. You may choose to donate any amount of your choice. Below are our account details:
          </p>

          <p><strong>Ishya Foundation</strong></p>
          <p>Yes Bank Ltd</p>
          <p>Account no – 000394600001832</p>
          <p>IFSC – YESB0000003</p>
        </div>
        
        {/* Donation Options Button with Dropdown */}
        <div className="donate-dropdown">
          <button onClick={toggleDropdown} className="donate-btn">
            Choose How to Help
            <FaCaretDown className="dropdown-arrow" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Send a Child to School</button>
              <button className="dropdown-item">Help Women Gain Skills</button>
              <button className="dropdown-item">Sponsor Higher Education</button>
              <button className="dropdown-item">Support Healthcare Access</button>
            </div>
          )}
        </div>
        <div className='donate-reminder'>
        <p>Please be reminded to write down your name & contact number on the slip before mailing it to contact_us@ishya.co.in </p>
        <p>“YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER SECTION 80G AS ISHYA FOUNDATION IS REGISTERED AS NON PROFIT ORGANIZATION”
        PAN: AACAI1185K  | 80G NUMBER: AACAI1185KF2022401″</p>
        </div>
        {/* Right-side Image Below the Button */}
        <div className="right-image-container">
  <div className="right-image">
    <img src={DonateQuote} alt="Quote Overlay" />
    <div className="quote-overlay">
      <p>"You have not lived today until you have done something for someone who can never repay you." – John Bunyan</p>
    </div>
  </div>
</div>


        {/* Big Centered Image */}
        <div className="center-image">
          <img src={DonateImage}/>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
