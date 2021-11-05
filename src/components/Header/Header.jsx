import React, { useEffect, useState, useRef } from "react";
import { links } from "../../data";
import { RiMoonLine, RiSunLine, RiStarSLine } from "react-icons/all";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState(false);
  const [translate, setTranslate] = useState(false);

  console.log(translate);

  const linksContainer = useRef(null);

  useEffect(() => {
    if (showMenu) {
      linksContainer.current.style.height = "3rem";
      linksContainer.current.style.opacity = "1";
      navCursor.current.style.opacity = "1";
      navCursor.current.style.transform = "translateY(0)";
    } else {
      linksContainer.current.style.height = "0";
      linksContainer.current.style.opacity = "0";
      navCursor.current.style.opacity = "0";
      navCursor.current.style.transform = "translateY(-20px)";
    }
  }, [showMenu]);

  const navCursor = useRef(null);
  const navItems = useRef(null);
  const handleMouseEnterNavItem = (e) => {
    const { offsetLeft, clientWidth } = e.target;
    navCursor.current.style.left = offsetLeft + "px";
    navCursor.current.style.width = clientWidth + "px";
  };

  const handleMoveIcon = () => {
    setMode(!mode);
    setTranslate(!translate);
  };

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
            <div className="header__buttons">
              <button className="header__mode" onClick={handleMoveIcon}>
                {/*<div className="header_mode_container">*/}
                {/*  {mode ? (*/}
                {/*    <RiSunLine*/}
                {/*      className={*/}
                {/*        translate*/}
                {/*          ? "header_mode_icon active"*/}
                {/*          : "header_mode_icon"*/}
                {/*      }*/}
                {/*      ref={sun}*/}
                {/*    />*/}
                {/*  ) : (*/}
                {/*    <RiMoonLine*/}
                {/*      className={*/}
                {/*        !translate*/}
                {/*          ? "header_mode_icon active"*/}
                {/*          : "header_mode_icon"*/}
                {/*      }*/}
                {/*      ref={moon}*/}
                {/*    />*/}
                {/*  )}*/}
                {/*</div>*/}
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
              <button
                className="header__menu"
                onClick={() => setShowMenu(!showMenu)}
              >
                <div className="header__line" />
              </button>
            </div>
          </div>
        </div>
        <div className="header__bottom" ref={linksContainer}>
          <div className="header_bottom_wrap container">
            <div className="header_nav_cursor" ref={navCursor} />
            <ul className="header__list">
              {links.map(({ id, url, text }) => {
                return (
                  <li key={id} className="header__item">
                    <a href={url}>
                      <span ref={navItems} onClick={handleMouseEnterNavItem}>
                        {text}
                      </span>
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
