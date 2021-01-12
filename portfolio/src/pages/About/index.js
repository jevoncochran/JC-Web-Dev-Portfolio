import React, { useContext, useEffect } from "react";
import "./About.scss";
import { ProjectContext } from "../../context/ProjectContext";

const About = (props) => {
  const { deactivateHome } = useContext(ProjectContext);

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  return (
    <div className="about">
      <div className="about-text-container">
        <p className="about-text about-text-first-line">
          I'm Jevon, a Web Designer and Full Stack Developer based in Oakland,
          CA.
        </p>
        <p className="about-text">
          {" "}
          I have a passion for design and technology and demonstrated experience
          in crafting beautiful, eye-catching websites. My keen eye for design
          converges with my solid software development capabilities and leaves
          me with the ability to craft a killer product for clients of many
          stripes.
        </p>
        <p className="about-text">
          If you are in need of a website for yourself, your organization or
          your business, feel free to reach out to me by pressing the button
          below.
        </p>
        {/* <div className="about-text-btn-container"> */}
        <button
          className="about-text-btn"
          onClick={() => props.history.push("/contact")}
        >
          Contact
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
