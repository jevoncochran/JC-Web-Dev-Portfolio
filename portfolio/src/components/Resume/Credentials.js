import React from "react";
import "./Resume.scss";

const Credentials = () => {
  return (
    <div className="resume-credentials">
      <div className="resume-credentials-sub">
        <h3 className="resume-credentials-category">Education</h3>
        <div className="resume-credentials-sub-div">
          <p className="resume-credentials-sub-div-left">2010-2014</p>
          <div className="resume-credentials-sub-div-right">
            <p className="resume-credentials-entity">
              University of California, Berkeley
            </p>
            <p>Graduted with B.A. in Spanish: Latin-American Studies</p>
          </div>
        </div>
        <div className="resume-credentials-sub-div">
          <p className="resume-credentials-sub-div-left">2019-2020</p>
          <div className="resume-credentials-sub-div-right">
            <p className="resume-credentials-entity">Lambda School</p>
            <p>
              9 month coding bootcamp. Completed Full Stack Web Development
              track
            </p>
          </div>
        </div>
        <hr className="resume-credentials-divider" />
      </div>
      <div className="resume-credentials-sub">
        <h3 className="resume-credentials-category">Recent Employment</h3>
        <div className="resume-credentials-sub-div">
          <p className="resume-credentials-sub-div-left">2019 - 2020</p>
          <div className="resume-credentials-sub-div-right">
            <p className="resume-credentials-entity">Private English Teacher</p>
            <p>
              Spent a year abroad solidifying my tech skills and working
              independently as an English instructor in Salvador da Bahia,
              Brazil
            </p>
          </div>
        </div>
        <div className="resume-credentials-sub-div">
          <p className="resume-credentials-sub-div-left">2016 - 2018</p>
          <div className="resume-credentials-sub-div-right">
            <p className="resume-credentials-entity">
              Rapid Response Coordinator
            </p>
            <p className="resume-credentials-company">
              Alameda County Immigration Legal and Educational Partnership
              (ACILEP)
            </p>
            <p>
              Co-coordinated an initiaitive led by a network of non-profits to
              provide legal support and "Know Your Rights" outreach to the Bay
              Area immigrant rights community in the face of stepped up federal
              immigration enforcement actions
            </p>
          </div>
        </div>
        <hr className="resume-credentials-divider" />
      </div>
      <div className="resume-credentials-sub">
        <h3 className="resume-credentials-category">Skills</h3>
        <div className="resume-credentials-sub-div">
          <p className="resume-credentials-sub-div-left">Programming</p>
          <div className="resume-credentials-sub-div-right">
            <p className="resume-credentials-skill">HTML</p>
            <p className="resume-credentials-skill">CSS</p>
            <p className="resume-credentials-skill">Javascript</p>
            <p className="resume-credentials-skill">React</p>
            <p className="resume-credentials-skill">Node.js</p>
            <p className="resume-credentials-skill">Python</p>
            <p className="resume-credentials-skill">React Native</p>
          </div>
        </div>
        <div className="resume-credentials-sub-div">
          <p className="resume-credentials-sub-div-left">Beyond</p>
          <div className="resume-credentials-sub-div-right">
            <p
              className="resume-credentials-skill"
              style={{ fontWeight: "700" }}
            >
              I am fully fluent in the following languages:
            </p>
            <p className="resume-credentials-skill">English</p>
            <p className="resume-credentials-skill">Spanish</p>
            <p className="resume-credentials-skill">French</p>
            <p className="resume-credentials-skill">Portuguese</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
