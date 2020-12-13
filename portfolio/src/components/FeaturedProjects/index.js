import React from "react";
import "./FeaturedProjects.scss";
import ProjectOne from "./ProjectOne";

const FeaturedProjects = () => {
  return (
    <div className="fp-main">
      <div className="fp-sub">
        <h1 className="fp-headline">Featured Projects</h1>
        <hr style={{ color: "#ebedef" }} />
      </div>
      <div className="fp-sub">
        <ProjectOne />
      </div>
    </div>
  );
};

export default FeaturedProjects;
