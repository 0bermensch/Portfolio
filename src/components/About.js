import React from "react";
import codeicon from "../Assets/about/icons8-code-64.png";
import responsiveicon from "../Assets/about/icons8-responsive-64.png";
import timeicon from "../Assets/about/icons8-time-limit-64.png";
import improveicon from "../Assets/about/icons8-improvement-50.png";
import Typist from "react-typist";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h2 className="about__content--mission">Mission</h2>
        <Typist avgTypingDelay className="about__content--missiontext">
          As a developer, it is my goal to help dreamers, entrepreneurs, and
          businesses to bring their ideas into reality on web/mobile platforms
          for the betterment of our society.
        </Typist>
      </div>
      <div className="about__valuetitle"> My Core Values</div>
      <div className="about__values">
        <div className="about__values--1">
          <div className="about__values--section">
            <img
              className="about__values--icon"
              src={codeicon}
              alt="codeicon"
            />
            <div className="about__values--value">Clean Code</div>
          </div>
          <div className="about__values--section">
            <img
              className="about__values--icon"
              src={responsiveicon}
              alt="responsiveicon"
            />
            <div className="about__values--value">Responsive</div>
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
          </div>
          <div className="about__values--section">
            <img
              className="about__values--icon"
              src={improveicon}
              alt="improveicon"
            />
            <div className="about__values--value">Improvment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
