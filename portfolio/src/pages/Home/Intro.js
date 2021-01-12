import React from "react";
import linkedInPic from "../../assets/linkedIn_pic.jpg";
import "./Home.scss";

const Intro = () => {
  return (
    <div
      className="home-intro"
      style={{ backgroundImage: `url(${linkedInPic})` }}
    >
      <div className="home-intro-text-container">
        <div className="home-intro-text-background"></div>
        <p className="home-intro-headline">Hello, I'm Jevon.</p>
        <p className="home-intro-text">
          a Full Stack Web Developer based in Oakland, CA.
        </p>
      </div>
    </div>
  );
};

export default Intro;
