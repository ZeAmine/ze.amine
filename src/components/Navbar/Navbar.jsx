import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <span className="navbar__selector" />
        <div className="navbar__items">
          <a href="/" className="navbar__item">
            <span>Accueil</span>
          </a>
          <a href="/" className="navbar__item">
            <span>Projets</span>
          </a>
          <a href="/" className="navbar__item">
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
