import React, { useState } from "react";
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
  const [moveSelec, setMoveSelec] = useState({ index: 1 });

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <span className="navbar__selector" />
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              <span>Accueil</span>
              <RiHome6Line className="navbar__icon" />
              <RiHome6Fill className="navbar__icon" />
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              <span>Projets</span>
              <RiLayoutMasonryLine className="navbar__icon" />
              <RiLayoutMasonryFill className="navbar__icon" />
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              <span>Contact</span>
              <RiAccountCircleLine className="navbar__icon" />
              <RiAccountCircleFill className="navbar__icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
