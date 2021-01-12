import React from "react";
import "./Projects.scss";

const ProjectSummary = (props) => {
  return (
    <div className="projects-ps">
      <div className="projects-ps-text-container">
        <p className="projects-ps-title">{props.title}</p>
        <p className="projects-ps-description">{props.description}</p>
        <p className="project-ps-technologies-headline">TECHNOLOGIES:</p>
        <div className="projects-ps-technologies-container">
          {props.technologies.map((t) => (
            <div className="projects-ps-tech">{t}</div>
          ))}
        </div>
        <div className="project-ps-btn-div">
          <button
            className="project-ps-btn"
            onClick={() => props.history.push(`/projects/${props.id}`)}
          >
            More details
          </button>
        </div>
      </div>
      <img className="projects-ps-img" src={props.leadImage} alt="" />
    </div>
  );
};

export default ProjectSummary;
