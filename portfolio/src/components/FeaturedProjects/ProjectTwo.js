import React from "react";
import "./FeaturedProjects.scss";
import patuconFilms from "../../assets/patucon-films-screenshot.png";
import { FaLaptop, FaReact } from "react-icons/fa";

const ProjectTwo = () => {
  return (
    <div className="fp-component">
      <div className="fp-project-sub">
        <div className="fp-project-text-div" style={{ width: "40%" }}>
          <p className="fp-project-text-title">Patucon Films</p>
          <p className="fp-project-text-summary">
            Website to promote and showcase the work of social-justice oriented
            videographer and storyteller, Lucas Solorzano
          </p>
          <div className="fp-project-category-div">
            <div className="fp-project-category-div-sub">
              <div className="fp-project-category-icon">
                <FaLaptop />
              </div>
              <p className="fp-project-category-text">Web Design</p>
            </div>
            <div className="fp-project-category-div-sub">
              <div className="fp-project-category-icon">
                <FaReact />
              </div>
              <p className="fp-project-category-text">Frontend Development</p>
            </div>
          </div>
          <button className="fp-project-btn">View Site</button>
        </div>
        <div className="fp-project-image-div" style={{ width: "60%" }}>
          <img
            className="fp-project-image"
            src={patuconFilms}
            alt="Food Truck TrackR login page"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
