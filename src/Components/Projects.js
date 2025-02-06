import React from "react";
import "../Styles/Projects.css";
import KushalSakhi from '../Images/KushalSakhiBanner.png';
import Udaan from '../Images/UdaanBanner.png';
import ShikshaSeSaksham from '../Images/ShikshaseSakshamBanner.png';
import Sahayak from '../Images/SahayakBanner.png';

const LatestProjects = () => {
  const projects = [
    {
      id: 1,
      image: KushalSakhi,
      category: "Women Empowerment",
      title: "KUSHAL SAKHI",
      description:
        "Empowering women through skill development and livelihood opportunities.",
    },
    {
      id: 2,
      image: Udaan,
      category: "Education",
      title: "UDAAN",
      description:
        "A program for children aged 3-6, enrolling 31 children in a critical development stage.",
    },
    {
      id: 3,
      image: ShikshaSeSaksham,
      category: "Education",
      title: "SHIKSHA SE SAKSHAM",
      description:
        "Catering to 32 children who never attended formal school or dropped out, providing a path back into education.",
    },
    {
      id: 4,
      image: Sahayak,
      category: "Education",
      title: "SAHAYAK",
      description:
        "Supporting 37 children from families struggling to afford additional academic support.",
    },
  ];

  return (
    <div className="latest-projects-container">
      {/* Header Section */}
      <div className="latest-projects-header">
        <div>
          <h4 className="small-heading">Latest Projects</h4>
          <h2 className="big-heading">
            Explore Our Projects That
          </h2>
          <h2 className="big-heading-2">
            Make A Difference.
            </h2>
        </div>
        <button className="explore-more-btn">Explore more projects</button>
      </div>

      {/* Project Tiles */}
      <div className="projectS-tiles">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`projectS-tile ${
              index % 2 === 0 ? "green-tile" : "purple-tile"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="projectS-image"
            />
            <div className="projectS-content">
              <p className="projectS-category">{project.category}</p>
              <h3 className="projectS-title">{project.title}</h3>
              <p className="projectS-description">{project.description}</p>
              <button className="read-more-btn-projects">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
