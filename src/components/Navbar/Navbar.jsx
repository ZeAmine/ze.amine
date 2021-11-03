import React, { useState, useRef } from "react";
import {
  RiAccountCircleFill,
  RiAccountCircleLine,
  RiHome6Fill,
  RiHome6Line,
  RiLayoutMasonryFill,
  RiLayoutMasonryLine,
} from "react-icons/all";
import "./Navbar.css";

const Navbar = () => {
  const [slideAnim, setSlideAnim] = useState({ index: 1 });

  // const scrollToProject = () => window.scrollTo(0, 1150)

  const moveSelect = (index) => {
    setSlideAnim({ index: index });
  };

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <span className="navbar__selector" />
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#header" className="navbar__link">
              <RiHome6Line className="navbar__icon" />
              <span>Accueil</span>
              {/*<RiHome6Fill className="navbar__icon" />*/}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#project" className="navbar__link">
              <RiLayoutMasonryLine className="navbar__icon" />
              <span>Projets</span>
              {/*<RiLayoutMasonryFill className="navbar__icon" />*/}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link">
              <RiAccountCircleLine className="navbar__icon" />
              <span>Contact</span>
              {/*<RiAccountCircleFill className="navbar__icon" />*/}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
