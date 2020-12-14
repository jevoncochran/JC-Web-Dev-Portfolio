import React from "react";
import "./Resume.scss";
import favelaHeadshot from "../../assets/favela-headshot.jpg";

const PersonalDetails = () => {
  return (
    <div className="resume-personal">
      <div className="resume-personal-img-div">
        <img
          src={favelaHeadshot}
          alt="Jevon Cochran pictured from shoulders up in Salvador da Bahia, Brazil with favela in background"
          className="resume-personal-img"
        />
      </div>
      <h2 className="resume-personal-headline">Jevon Cochran</h2>
      <p className="resume-personal-title">Full Stack Web Dev</p>
      <hr className="resume-divider" />
      <div className="resume-personal-summary-div">
        <p className="resume-personal-text-reg resume-personal-summary">
          Recent Lambda School graduate with a passion for all things tech,
          travel and blogging. Self-starter, team player and exceptional
          communicator.
        </p>
      </div>
      <hr className="resume-divider" />
      <div className="resume-personal-category-div">
        <h4 className="resume-personal-category">Location</h4>
        <p className="resume-personal-text-reg">Oakland, CA</p>
      </div>
      <div className="resume-personal-category-div">
        <h4 className="resume-personal-category">Email</h4>
        <p className="resume-personal-text-reg">jevon.cochran@gmail.com</p>
      </div>
      <div className="resume-personal-category-div">
        <h4 className="resume-personal-category">Website</h4>
        <p className="resume-personal-text-reg">www.jevoncochran.com</p>
      </div>
    </div>
  );
};

export default PersonalDetails;
