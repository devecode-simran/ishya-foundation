import React from 'react';  
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHeader from '../Components/PageHeader';
import '../Styles/ContactUs.css';
import Partner from "../Components/Partner";
import careerForteLogo from '../Images/PartnersLogo/CareerForte.png';
import chadhachadha from '../Images/PartnersLogo/Chadha&Chadha.png';
import projectBala from '../Images/PartnersLogo/ProjectBala.png';
import essci from '../Images/PartnersLogo/ESSCI.png';
import giveIndia from '../Images/PartnersLogo/GiveIndia.png';
import GovtofJK from '../Images/PartnersLogo/GovtofJammuKashmir.png';
import HeadspaceHealing from '../Images/PartnersLogo/HeadspaceHealing.png';
import iCanDoIt from '../Images/PartnersLogo/ICanDoIt.png';
import katha from '../Images/PartnersLogo/Katha.png';
import nsdc from '../Images/PartnersLogo/NSDC.png';
import qrg from '../Images/PartnersLogo/QRG.png';
import sambhavna from '../Images/PartnersLogo/Sambhavna.png';
import simplySuparna from '../Images/PartnersLogo/SimplySuparna.png';
import yuno from '../Images/PartnersLogo/YUNO.png';
import vishramVridhAshramSheows from '../Images/PartnersLogo/VishramVridhAshramSheows.png';
import salaamBaalakTrust from '../Images/PartnersLogo/SalaamBaalakTrust.png';
import marengoAsiaHospital from '../Images/PartnersLogo/MarengoAsiaHospital.png';
import ministryofHAFW from '../Images/PartnersLogo/MinistryofHAFW.png';
import KasturbaGandhiBalikaVidyalaya from '../Images/PartnersLogo/KasturbaGandhiBalikaVidyalaya.png';
import Partner1 from '../Images/Partner (1).png';
import Partner2 from '../Images/Partner (2).png';
import Partner3 from '../Images/Partner (3).png';
import Partnerships from '../Components/Partnerships';
import Quotes from '../Components/Quotes';
import PartnerWithUs from '../Components/PartnerWithUs';
const partners = [
    projectBala,
    qrg,
    yuno,
    nsdc,
    essci,
    careerForteLogo,
    simplySuparna,
    ministryofHAFW,
    KasturbaGandhiBalikaVidyalaya,
    vishramVridhAshramSheows,
    HeadspaceHealing,
    GovtofJK,
    chadhachadha,
    sambhavna,
    marengoAsiaHospital,
    salaamBaalakTrust,
    iCanDoIt,
    katha,
    giveIndia
    
  ];
const PartnershipsPage = () => {
    const partnersData = [
      {
        id:1,  
        heading: "Project Baala",
        imageSrc: Partner1,
        subheading: "Back to the future: Quality education through respect, commitment and accountability",
        description: "At Ishya, we strongly believe education is that one key that can open many doors for the youth of India. Education combined with the right skill set can prove to be the gateway for better prospects."
      },
      {
        id:2,  
        heading: "Social Protection Scheme training",
        imageSrc: Partner2,
        subheading: "Empowering Communities Through Awareness of Social Protection Schemes",
        description: "On April 27th, lawyer Ms. Ritu Mehra conducted an enlightening session at the Ishya Learning Centre, empowering residents of Chhalera Village and nearby slums with knowledge about social protection schemes. A total of 53 community members attended the session, gaining crucial insights into programs designed to provide essential support and assistance."
      },
      {   
        id:3,
        heading: "Women interface training session with NCUI & ISRA",
        imageSrc: Partner3,
        subheading: "Empowering Communities Through Awareness of Social Protection Schemes",
        description: "On April 27th, lawyer Ms. Ritu Mehra conducted an enlightening session at the Ishya Learning Centre, empowering residents of Chhalera Village and nearby slums with knowledge about social protection schemes. A total of 53 community members attended the session, gaining crucial insights into programs designed to provide essential support and assistance."
      }
    ];
  
    return (
      <div>
        <Navbar />
        <PageHeader pageName="Partnerships" breadcrumb="Home/Partnerships" />
  
        {/* ✅ Corrected: Mapping through partnersData */}
        <div className="partners-list">
        {partnersData.map((partner) => (
          <Partner 
            key={partner.id}  
            heading={partner.heading}
            imageSrc={partner.imageSrc}
            subheading={partner.subheading}
            description={partner.description}
          />
        ))}
      </div>
      <Quotes 
      quote= "No act of kindness, no matter how small, is ever wasted. - Aesop"
      />
      <PartnerWithUs/>
      <Partnerships logos={partners} />
        <Footer />
      </div>
    );
  };
  
  export default PartnershipsPage;