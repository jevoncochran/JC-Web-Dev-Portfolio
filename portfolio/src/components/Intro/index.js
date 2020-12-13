import React from "react";
import "./Intro.scss";
import jcInQuibdo from "../../assets/jevon_cochran_quibdo.jpg";

const Intro = () => {
  return (
    <div className="intro-main">
      <p className="intro-p">
        Hello, my name is Jevon. I am a Full Stack Web Developer living in
        Oakland, CA.
      </p>

      <div className="intro-img-container">
        <img src={jcInQuibdo} alt="Jevon Cochran" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
