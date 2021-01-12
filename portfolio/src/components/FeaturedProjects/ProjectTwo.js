import React from "react";
import "./FeaturedProjects.scss";
import ljpeg from "../../assets/ljpeg.png";
import { FaLaptop, FaReact } from "react-icons/fa";

const ProjectTwo = () => {
  return (
    <div className="fp-component">
      <div className="fp-project-sub">
        <div className="fp-project-text-div" style={{ width: "40%" }}>
          <p className="fp-project-text-title">ljpeg.com</p>
          <p className="fp-project-text-summary">
            Online portfolio to showcase the work of Chicago-based photographer
            and multimedia creator, L Janay Pollard
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
            src={ljpeg}
            alt="Food Truck TrackR login page"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
