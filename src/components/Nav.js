import React, { useState } from "react";
import hamburger from "../Assets/navicons/icon-hamburger.svg";
import linkedinlogo from "../Assets/icons/linkedin-original.svg";
import githublogo from "../Assets/icons/icons8-github.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";

const Navigation = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const toggle = () => setNavIcon(!navIcon);

  let hamburgerNav;

  if (openNavMenu) {
    hamburgerNav = (
      <ul className="navbar__hamburgernav">
        <li>
          <Link className="navbar__hamburgernav--item" to="/portfolio">
            Introduction
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="/about">
            Tech Stack
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="contacts">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="contacts">
            Experience
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="contacts">
            Contacts
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="navbar">
      <div className="navbar__socials">
        <img
          className="navbar__socials--logo"
          src={githublogo}
          alt="githublogo"
        />
        <img
          className="navbar__socials--logo"
          src={linkedinlogo}
          alt="linkedinlogo"
        />
      </div>
      <div
        onClick={() => toggle(navIcon)}
        onClick={() => setOpenNavMenu(!openNavMenu)}
      >
        <img className="navbar__hamburger" src={hamburger} alt="hamburger" />
      </div>
      {hamburgerNav}
      <ul className="navbar__navs">
        <li>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="intro"
          >
            Intro
          </Link>
        </li>
        <li>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="tech"
          >
            Tech
          </Link>
        </li>
        <li>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="experience"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="contacts"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
