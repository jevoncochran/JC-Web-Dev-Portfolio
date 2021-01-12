import React, { useContext, useEffect } from "react";
import "./Projects.scss";
import { projects } from "./projects";
import ProjectSummary from "./ProjectSummary";
import { ProjectContext } from "../../context/ProjectContext";

const Projects = (props) => {
  const { deactivateHome } = useContext(ProjectContext);

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  return (
    <div className="projects">
      <h1 className="projects-headline">Projects</h1>
      {projects.map((project) => (
        <ProjectSummary
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          leadImage={project.images[0]}
          technologies={project.technologies}
          history={props.history}
        />
      ))}
    </div>
  );
};

export default Projects;
