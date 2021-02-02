import React from "react";
import linkedinlogo from "../Assets/icons/linkedin-original.svg";
import githublogo from "../Assets/icons/icons8-github.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__space"></div>
      <div className="footer__info">
        <div>Jason Lo</div>
        <div>© Vancouver, BC 2021</div>
      </div>

      <div className="footer__socials">
        <a href="https://github.com/0bermensch">
          <img
            className="footer__socials--logo"
            src={githublogo}
            alt="githublogo"
          />
        </a>
        <a href="https://www.linkedin.com/in/jason--lo/">
          <img
            className="footer__socials--logo"
            src={linkedinlogo}
            alt="linkedinlogo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
