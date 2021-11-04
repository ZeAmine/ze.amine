import React, { useEffect, useState, useRef } from "react";
import { links } from "../../data";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState({ index: 1 });
  const [showMenu, setShowMenu] = useState(false);

  const heandleActive = (index) => {
    setActive({ index: index });
  };

  const linksContainer = useRef(null);
  useEffect(() => {
    if (showMenu) {
      linksContainer.current.style.height = "3rem";
      linksContainer.current.style.opacity = "1";
    } else {
      linksContainer.current.style.height = "0";
      linksContainer.current.style.opacity = "0";
    }
  }, [showMenu]);

  return (
    <header className="header" id="header">
      <nav className="header__nav">
        <div className="header__top">
          <div className="header_top_wrap container">
            <a href="/" className="header__logo">
              <img
                src={process.env.PUBLIC_URL + "assets/imgs/logo_v2.svg"}
                alt="logo"
              />
            </a>
            <button
              className="header__menu"
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="header__line" />
            </button>
          </div>
        </div>
        <div className="header__bottom" ref={linksContainer}>
          <div className="header_bottom_wrap container">
            <ul className="header__list">
              {links.map(({ id, url, text }) => {
                return (
                  <li key={id} className="header__item">
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
