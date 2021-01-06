import React from "react";
import codeicon from "../Assets/about/icons8-code-64.png";
import responsiveicon from "../Assets/about/icons8-responsive-64.png";
import timeicon from "../Assets/about/icons8-time-limit-64.png";
import improveicon from "../Assets/about/icons8-improvement-50.png";
import Typist from "react-typist";
import resume from "../Assets/JasonLoResume.pdf";

import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__content">
        <h2 className="about__content--mission">About</h2>
        <Typist avgTypingDelay className="about__content--missiontext">
          As a developer, it is my goal to help dreamers, entrepreneurs, and
          businesses to bring their ideas into reality on web/mobile platforms
          for the betterment of our society.
        </Typist>
      </div>
      <div className="about__downloads">
        <a href={resume} download>
          <Button className="about__resume" variant="primary">
            <div className="about__resume--text">Resume</div>
          </Button>
        </a>
        <a>
          <Button className="about__coverletter" variant="primary">
            <div className="about__coverletter--text">Cover Letter</div>
          </Button>
        </a>
      </div>
      <div className="about__valuetitle">MY CORE VALUES</div>
      <div className="about__values">
        <div className="about__values--1">
          <div className="about__values--section">
            <img
              className="about__values--icon"
              src={codeicon}
              alt="codeicon"
            />
            <div className="about__values--value">Clean Code</div>
            <div className="about__values--details">
              I ensure my code are elegantly written, easy to read, and
              efficiently written
            </div>
          </div>
          <div className="about__values--section">
            <img
              className="about__values--icon"
              src={responsiveicon}
              alt="responsiveicon"
            />
            <div className="about__values--value">Responsive</div>
            <div className="about__values--details">
              The website will change fit for comprehensibility depending on the
              user's device
            </div>
          </div>
        </div>
        <div className="about__values--2">
          <div className="about__values--section">
            <img
              className="about__values--icon"
              src={timeicon}
              alt="timeicon"
            />
            <div className="about__values--value">Time Efficient</div>
            <div className="about__values--details">
              Fast loading speed all across the website
            </div>
          </div>
          <div className="about__values--section">
            <img
              className="about__values--icon"
              src={improveicon}
              alt="improveicon"
            />
            <div className="about__values--value">Improvment</div>
            <div className="about__values--details">
              Technologies are ever evolving, as a developer I strive to
              constantly improve to stay on top of the change{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
