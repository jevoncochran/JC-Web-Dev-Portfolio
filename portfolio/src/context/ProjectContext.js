import React, { useState } from "react";

const ProjectContext = React.createContext();

const ProjectProvider = (props) => {
  const [onHomePage, setOnHomePage] = useState(true);

  const activateHome = () => {
    setOnHomePage(true);
  };

  const deactivateHome = () => {
    setOnHomePage(false);
  };

  return (
    <ProjectContext.Provider
      value={{ onHomePage, activateHome, deactivateHome }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

const ProjectConsumer = ProjectContext.consumer;

export { ProjectContext, ProjectConsumer };

export default ProjectProvider;
