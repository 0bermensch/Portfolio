import React from "react";
import { Button } from "react-bootstrap";
import githublogo from "../Assets/icons/github-6-128.png";
import linkedinlogo from "../Assets/icons/linkedin.png";
import emaillogo from "../Assets/icons/email.svg";
import phonelogo from "../Assets/icons/telephone.svg";
import resume from "../Assets/JasonLoResume.pdf";

const Contacts = () => {
  return (
    <div className="contact">
      <div className="contact__title">Contacts</div>
      <div className="contact__container">
        <div className="contact__form">
          <div className="contact__form--email">Email</div>
          <input className="contact__form--emailinput"></input>
          <div className="contact__form--subject">subject</div>
          <input className="contact__form--subjectinput"></input>
          <div className="contact__form--body">body:</div>
          <input className="contact__form--bodyinput"></input>
        </div>

        <div className="contact__divider">
          <div className="contact__email">
            <a href="mailto:jason.lo.kc@gmail.com">
              <img
                className="contact__email--logo"
                src={emaillogo}
                alt="emaillogo"
              />
            </a>
            <div className="contact__email--email">jason.lo.kc@gmail.com</div>
          </div>
          <div className="contact__phone">
            <a href="tel:[7788913983]">
              <img
                className="contact__phone--logo"
                src={phonelogo}
                alt="phonelogo"
              />
            </a>
            <div className="contact__phone--number">+1 778-891-3983</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
