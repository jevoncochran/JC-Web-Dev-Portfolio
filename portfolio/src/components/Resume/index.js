import React from "react";
import "./Resume.scss";
import PersonalDetails from "./PersonalDetails";
import Credentials from "./Credentials";

const Resume = () => {
  return (
    <div className="resume-main">
        
      <PersonalDetails />
      <Credentials />
    </div>
  );
};

export default Resume;
