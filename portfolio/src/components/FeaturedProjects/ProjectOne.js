import React from "react";
import "./FeaturedProjects.scss";
import foodTruckTrackr from "../../assets/food-truck-trackr-screenshot.png";
import { FaLaptop, FaMobileAlt, FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

const ProjectOne = () => {
  return (
    <div>
      <div className="fp-project-sub">
        <div className="fp-project-image-div" style={{ width: "60%" }}>
          <img
            className="fp-project-image"
            src={foodTruckTrackr}
            alt="Food Truck TrackR login page"
          />
        </div>
        <div className="fp-project-text-div" style={{ width: "40%" }}>
          <p className="fp-project-text-title">Food Truck TrackR</p>
          <p className="fp-project-text-summary">
            A simple to use web and mobile application that effortlessly
            connects food truck vendors and hungry customers
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
          <div className="fp-project-category-div-sub">
            <div className="fp-project-category-icon">
              <FiDatabase />
            </div>
            <p className="fp-project-category-text">Backend Development</p>
          </div>
          </div>
          <button className="fp-project-btn">View Site</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
