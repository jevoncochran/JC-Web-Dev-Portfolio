import React from "react";
import "./FeaturedProjects.scss";
import teslaClone from "../../assets/tesla-clone.png";
import { FaMobileAlt, FaReact } from "react-icons/fa";

const ProjectTwo = () => {
  return (
    <div className="fp-component">
      <div className="fp-project-sub">
        <div className="fp-project-text-div" style={{ width: "45%" }}>
          <p className="fp-project-text-title">Tesla Clone</p>
          <p className="fp-project-text-summary">
            A sleek and beautifully designed mobile application that aids users
            interested in purchasing one of the various Tesla models
          </p>
          <div className="fp-project-category-div">
            <div className="fp-project-category-div-sub">
              <div className="fp-project-category-icon">
                <FaMobileAlt />
              </div>
              <p className="fp-project-category-text">Mobile Application</p>
            </div>
            <div className="fp-project-category-div-sub">
              <div className="fp-project-category-icon">
                <FaReact />
              </div>
              <p className="fp-project-category-text">Frontend Development</p>
            </div>
          </div>
          <button className="fp-project-btn">View More</button>
        </div>
        <div className="fp-project-image-div" style={{ width: "30%" }}>
          <img
            className="fp-project-image"
            src={teslaClone}
            alt="Food Truck TrackR login page"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
