import React, { useEffect, useState, useRef } from "react";
import { links } from "../../data";
import "./Header.css";

const Header = () => {
  const [slideAnim, setSlideAnim] = useState({ index: 1 });
  const [active, setActive] = useState({ index: 1 });
  const [showMenu, setShowMenu] = useState(false);

  const moveDot = (index) => {
    setSlideAnim({ index: index });
  };

  const heandleActive = (index) => {
    setActive({ index: index });
  };

  const linksContainer = useRef(null);
  useEffect(() => {
    if (showMenu) {
      linksContainer.current.style.height = "3rem";
    } else {
      linksContainer.current.style.height = "0px";
    }
  }, [showMenu]);

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__top">
          <div className="header_top_wrap container">
            <a href="/" className="header__logo">
              <span>Amine Zegmou</span>
            </a>
            {/*<div className="header__buttons">*/}
            {/*  {Array.from({ length: 3 }).map((item, index) => {*/}
            {/*    return (*/}
            {/*      <div*/}
            {/*        className={*/}
            {/*          slideAnim.index === index + 1*/}
            {/*            ? "header__dot active"*/}
            {/*            : "header__dot"*/}
            {/*        }*/}
            {/*        onClick={() => moveDot(index + 1)}*/}
            {/*      />*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</div>*/}
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
              {links.map(({ id, url, text }, index) => {
                return (
                  <li
                    key={id}
                    className={
                      active.index === index + 1
                        ? "header__item active"
                        : "header__item"
                    }
                    onClick={() => heandleActive(index + 1)}
                  >
                    <a href={url} className="header__link">
                      <span>{text}</span>
                    </a>
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
