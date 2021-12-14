import React, { useEffect, useState, useRef } from "react";
import { links } from "../../data";
import { RiMoonLine, RiSunLine } from "react-icons/all";
import { useGlobalContext } from "../../context";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [lineMenu, setLineMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [hoverLogo, setHoverLogo] = useState(false);

  const {
    isOpen,
    handleOpenModal,
    showMenu,
    setShowMenu,
    lineCross,
    setLineCross,
  } = useGlobalContext();

  useEffect(() => {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "default");
    } else {
      document.documentElement.setAttribute("data-theme", "clear");
    }
  }, [theme]);

  const handleAnimMode = () => {
    setTranslate(!translate);
    setTheme(!theme);
  };

  return (
    <header className="header">
      <div className="header__nav">
        <div className="header_nav_wrap container">
          {/*Logo*/}
          <div
            className="header_logo_block"
            onMouseOver={() => setHoverLogo(true)}
            onMouseLeave={() => setHoverLogo(false)}
          >
            <div
              className="header__logo"
              style={{ width: hoverLogo ? "7em" : "10em" }}
            >
              <a href="#home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 223.89 55.82"
                >
                  <g id="Logo">
                    <g className="symbole">
                      <line
                        className="cls-1"
                        y1="52.04"
                        x2="55.43"
                        y2="52.04"
                      />
                      <path
                        className="cls-1"
                        d="M15.36,3.77,51.75,4V40.54H4C4,20,9.16,15.37,22.82,15.37s19.45,4.7,19.45,25.17"
                      />
                    </g>
                    <text
                      className={hoverLogo ? "cls-2 over" : "cls-2 leave"}
                      transform="translate(74.19 44.49)"
                    >
                      Amine
                    </text>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          {/*Navlist*/}
          <ul className="header__list">
            {links.map(({ url, text }, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className="header__item"
                >
                  <a href={url}>
                    <span
                      className={
                        index === active
                          ? "header_item_text active"
                          : "header_item_text"
                      }
                    >
                      {text}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/*Buttons*/}
          <div className="header__buttons">
            {isOpen ? (
              <button
                className={
                  lineCross ? "header__close is-active" : "header__close"
                }
                onClick={() => handleOpenModal(false)}
              >
                <div
                  className="header_close_container"
                  onClick={() => setLineCross(false)}
                >
                  <span className="header_line_close" />
                  <span className="header_line_close" />
                  <span className="header_line_close" />
                </div>
              </button>
            ) : (
              <>
                <button className="header__mode" onClick={handleAnimMode}>
                  <div className="header_mode_container">
                    <div
                      className={
                        translate
                          ? "header_icon_container active"
                          : "header_icon_container"
                      }
                    >
                      <RiSunLine className="header_mode_icon" />
                      <RiMoonLine className="header_mode_icon" />
                    </div>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
