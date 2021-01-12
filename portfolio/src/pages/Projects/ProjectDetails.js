import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Projects.scss";
import { projects } from "./projects";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { ProjectContext } from "../../context/ProjectContext";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { deactivateHome } = useContext(ProjectContext);

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  return (
    <div className="projects-pd">
      <div className="projects-pd-top">
        <div className="projects-pd-text-container">
          <p className="projects-pd-title">{projects[projectId - 1].title}</p>
          <p className="projects-pd-description">
            {projects[projectId - 1].description}
          </p>
          <p className="projects-pd-purpose">
            {projects[projectId - 1].purpose}
          </p>
          <ul className="projects-pd-details-list">
            {projects[projectId - 1].details.map((detail) => (
              <div className="projects-pd-detail-div">
                <li className="projects-pd-text">{detail.detail}</li>
                {detail.subdetails && (
                  <ul className="projects-pd-subdetails-list">
                    {detail.subdetails.map((sub) => (
                      <li className="projects-pd-text projects-pd-subdetail">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
          <div className="projects-pd-btn-div">
            <a
              className="projects-pd-external-link"
              href={projects[projectId - 1].online}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="projects-pd-btn">
                <div className="projects-bd-btn-icon">
                  <BiLinkExternal />
                </div>
                <p className="projects-pd-btn-text">View online</p>
              </button>
            </a>
            <a
              className="projects-pd-external-link"
              href={projects[projectId - 1].github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projects-pd-btn">
                <div className="projects-bd-btn-icon">
                  <AiFillGithub />
                </div>
                <p className="projects-pd-btn-text">Github repo</p>
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="projects-pd-tech-container">
          <p className="projects-pd-tech-headline">TECHNOLOGIES USED:</p>
          <div className="projects-pd-technologies">
            {projects[projectId - 1].technologies.map((t) => (
              <div className="projects-pd-tech">{t}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="projects-pd-botom">
        {projects[projectId - 1].images.map((image) => (
          <img className="projects-pd-img" src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
