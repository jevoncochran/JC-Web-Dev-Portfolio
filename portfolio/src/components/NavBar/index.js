import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-main">
      <div className="nav-sub nav-headline-sub">
        <h1>JC</h1>
      </div>
      <div className="nav-sub nav-link-sub">
        <Link className="nav-link" to="/about">
          About Me
        </Link>
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
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
