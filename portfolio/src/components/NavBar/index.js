import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import linkedInPic from "../../assets/linkedIn_pic.jpg";
import { ProjectContext } from "../../context/ProjectContext";

const NavBar = () => {
  const { onHomePage } = useContext(ProjectContext);

  return (
    <div className="nav">
      <div className={onHomePage ? "nav-top-home" : "nav-top"}>
        <Link to="/" className="nav-top-name">
          Jevon
        </Link>
        <Link to="/" className="nav-top-name">
          Cochran
        </Link>
        <Link to="/" className="nav-top-title">
          Full Stack Developer
        </Link>
        <img
          className={onHomePage ? "nav-top-pic-home" : "nav-top-pic"}
          src={linkedInPic}
          alt="Jevon Cochran professional"
          style={{ marginTop: "5%" }}
        />
      </div>
      <div className="nav-bottom">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About Me
        </Link>
        <Link className="nav-link">Resume</Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
