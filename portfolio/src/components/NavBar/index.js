import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-main">
      <Link className="nav-link" to="/JC-Web-Dev-Portfolio">
        <div className="nav-sub nav-headline-sub">
          <h1 className="nav-headline-text">JC</h1>
        </div>
      </Link>
      <div className="nav-sub nav-link-sub">
        <Link className="nav-link" to="/JC-Web-Dev-Portfolio/about">
          About Me
        </Link>
        <Link className="nav-link" to="/JC-Web-Dev-Portfolio/resume">
          Resume
        </Link>
        <Link className="nav-link" to="/JC-Web-Dev-Portfolio/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/JC-Web-Dev-Portfolio/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
