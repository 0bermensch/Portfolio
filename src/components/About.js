import React, { useEffect } from "react";
import codeicon from "../Assets/about/icons8-code-64.png";
import responsiveicon from "../Assets/about/icons8-responsive-64.png";
import timeicon from "../Assets/about/icons8-time-limit-64.png";
import improveicon from "../Assets/about/icons8-improvement-50.png";
import resume from "../Assets/JasonLoResume.pdf";
import coverletter from "../Assets/CoverLetter.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

import { Button } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about__content">
        <h2 className="about__content--mission">Who am I?</h2>
        <div className="about__content--missiontext">
          Hey there! I am Jason. I am a full-stack Web and Mobile Developer. I
          am passionate about developing client facing applications, it is my
          goal to help dreamers, entreprenuers, and businessesactualize their
          ideas into an application.
        </div>
      </div>
      <div className="about__downloads">
        <a href={resume} download>
          <Button className="about__resume" variant="dark">
            <div className="about__resume--text">Resume</div>
          </Button>
        </a>
        <a href={coverletter} download>
          <Button className="about__coverletter" variant="dark">
            <div className="about__coverletter--text">Cover Letter</div>
          </Button>
        </a>
      </div>
      <div className="about__valuetitle">My Core Values</div>
      <div className="about__values">
        <div className="about__values--1">
          <div data-aos="fade-up" className="about__values--section">
            <img
              className="about__values--icon"
              src={codeicon}
              alt="codeicon"
            />
            <div className="about__values--value">Clean Code</div>
            <div className="about__values--details">
              Clear and Well written code, easy to read, and easy to change
            </div>
          </div>
          <div data-aos="fade-up" className="about__values--section">
            <img
              className="about__values--icon"
              src={responsiveicon}
              alt="responsiveicon"
            />
            <div className="about__values--value">Responsive</div>
            <div className="about__values--details">
              The layout of the website will be responsive to the user's device
            </div>
          </div>
        </div>
        <div className="about__values--2">
          <div data-aos="fade-up" className="about__values--section">
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
          <div data-aos="fade-up" className="about__values--section">
            <img
              className="about__values--icon"
              src={improveicon}
              alt="improveicon"
            />
            <div className="about__values--value">Improvment</div>
            <div className="about__values--details">
              I strive to constantly improve, learn new technologies, and stay
              on top of industry standards.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
