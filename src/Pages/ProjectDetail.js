import React from "react"; 
import { useParams } from "react-router-dom";
import '../Styles/ProjectDetail.css';
import projects from "./ProjectsData";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import AboutProject from "../Components/AboutProject";
import TheNeed from "../Components/TheNeed";
import TheImpact from "../Components/TheImpact";
import Quotes from "../Components/Quotes";
import Footer from "../Components/Footer";
import useScrollAnimation from "../Components/ScrollAnimation";
import JoinUs from "../Components/JoinUs";
import ProjectTestimonials from "../Components/ProjectTestimonials";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  // Activate animations
  useScrollAnimation();

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className="project-page">
      <Navbar />
      <PageHeader pageName="Contact Us" breadcrumb="Home/Contact Us" />

      {/* First Component */}
      <div className="hidden">
        <AboutProject
          image={project.firstComponent.image}
          heading={project.firstComponent.heading}
          description={project.firstComponent.description}
          buttonText="Get Involved"
        />
      </div>

      {/* Second Component: THE NEED */}
      <div className="hidden">
        <TheNeed
          images={project.theNeed.images}
          descriptions={project.theNeed.descriptions}
        />
      </div>

      {/* Third Component: THE IMPACT */}
      <div className="hidden">
      <Quotes quote={project.quote} />
        <TheImpact
          heading="THE IMPACT"
          subheading={project.theImpact.subheading}
          points={project.theImpact.points}
          image={project.theImpact.image}
        />
      </div>

      {/* Testimonial Component */}
      <div className="hidden">
        {project.testimonials ? (
          <ProjectTestimonials
            heading={project.testimonials.heading}
            subheading={project.testimonials.subheading}
            reviews={project.testimonials.reviews}  // Pass reviews as a prop
          />
        ) : (
          <div>No testimonials available.</div>
        )}
      </div>

      {/* Join Us Component */}
      <JoinUs
        heading={project.JoinUs.heading}
        description={project.JoinUs.description}
        image={project.JoinUs.image}
      />
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
