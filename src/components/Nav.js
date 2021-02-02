import React, { useState } from "react";
import hamburger from "../Assets/navicons/icon-hamburger.svg";
import mylogo from "../Assets/Mylogo.png";
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
          <Link className="navbar__hamburgernav--item" to="portfolio">
            Introduction
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="about">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="tech">
            Tech
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navbar__hamburgernav--item" to="contacts">
            Contact
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo--logo" src={mylogo} />
      </div>
      <div onClick={() => toggle(navIcon)}>
        <img
          className="navbar__hamburger"
          onClick={() => setOpenNavMenu(!openNavMenu)}
          src={hamburger}
          alt="hamburger"
        />
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
            Introduction
          </Link>
        </li>
        <li>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="about"
          >
            About
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
