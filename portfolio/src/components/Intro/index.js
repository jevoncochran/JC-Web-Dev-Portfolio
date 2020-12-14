import React from "react";
import "./Intro.scss";
import jcInQuibdo from "../../assets/jevon_cochran_quibdo.jpg";

const Intro = () => {
  return (
    <div className="intro-main">
      <p className="intro-p">
        Hello, my name is Jevon. I am a{" "}
        <span style={{ color: "#e67e22", fontWeight: "500" }}>
          Full Stack Web Developer
        </span>{" "}
        and{" "}
        <span style={{ color: "#e67e22", fontWeight: "500" }}>
          Digital Nomad
        </span>{" "}
        currently based in Oakland, CA.
      </p>

      <div className="intro-img-container">
        <img src={jcInQuibdo} alt="Jevon Cochran" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
