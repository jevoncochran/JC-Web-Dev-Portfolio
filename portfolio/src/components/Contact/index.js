import React, { useState } from "react";
import "./Contact.scss";
import { sendInquiry } from "./sendInquiry";

const Contact = () => {
  const [inquiry, setInquiry] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChanges = (e) => {
    setInquiry({
      ...inquiry,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      <div className="contact-bio">
        <p className="contact-headline">Jevon Cochran</p>
        <p className="contact-title">Web Developer</p>
        <p className="contact-contact">jevon.cochran@gmail.com</p>
      </div>
      <p className="contact-pitch">
        For inquiries, please message below.
      </p>
      <form className="contact-form" onSubmit={sendInquiry}>
        <div className="contact-input-div">
          <p className="contact-form-label">Name:</p>
          <div className="contact-name-input-div">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="contact-input contact-input-name"
              onChange={handleChanges}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="contact-input contact-input-name"
              onChange={handleChanges}
            />
          </div>
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Email Address:</p>
          <input
            type="text"
            name="email"
            className="contact-input"
            onChange={handleChanges}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Subject:</p>
          <input
            type="text"
            name="subject"
            className="contact-input"
            onChange={handleChanges}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Message:</p>
          <input
            type="text"
            name="message"
            className="contact-input contact-msg-input"
            onChange={handleChanges}
          />
        </div>
        <button type="submit" className="contact-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;