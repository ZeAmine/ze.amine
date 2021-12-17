import React, { useEffect, useState } from "react";
import "./ListProject.css";
import { RiLinkM, VscGithub } from "react-icons/all";
import { useGlobalContext } from "../../context";
import { gsap } from "gsap";
import { Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ListProject = ({
  id,
  num,
  img,
  url,
  urlGit,
  title,
  text,
  language,
  direction,
  handleClick,
}) => {
  const { toggleCursor, setSelected, setLineCross } = useGlobalContext();
  const [hoverIcon, setHoverIcon] = useState(false);

  const triggerItem = (elem) => {
    gsap.fromTo(
      elem,
      {
        y: 50,
        ease: Power4.easeOut,
      },
      {
        y: 0,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "bottom",
        },
      }
    );
  };

  useEffect(() => {
    triggerItem(".project__item");
    triggerItem(".project_item_reverse");
  }, []);

  return (
    <article className={direction ? "project_item_reverse" : "project__item"}>
      <div
        className={
          direction ? "project_item_wrap_reverse" : "project_item_wrap"
        }
      >
        <div
          className={
            direction
              ? "project_content_right_reverse"
              : "project_content_right"
          }
        >
          <ul
            className="project__links"
            style={{ display: id === 4 || id === 5 ? "none" : null }}
          >
            <li className="project_item_link github">
              <a
                href={urlGit}
                rel="noreferrer"
                target="_blank"
                onMouseOver={() => setHoverIcon(true)}
                onMouseLeave={() => setHoverIcon(false)}
                style={{
                  width: hoverIcon && "11em",
                  padding: !hoverIcon && "0.37em",
                }}
              >
                <VscGithub className="project_link_icon github" />
                {hoverIcon && (
                  <span className="project_link_text">Visiter le github</span>
                )}
              </a>
            </li>
            <li className="project_item_link site">
              <a
                href={url}
                style={{
                  width: hoverIcon && "2em",
                  padding: hoverIcon && "0.37em",
                }}
              >
                <RiLinkM className="project_link_icon site" />
                {!hoverIcon && (
                  <span className="project_link_text">Visiter le site</span>
                )}
              </a>
            </li>
          </ul>
          <div
            className="project_background_img"
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
            onClick={() => setSelected(id)}
          >
            <div
              className="project_img_container"
              onClick={id === 4 || id === 5 ? handleClick : null}
            >
              <a
                href={url}
                rel="noreferrer"
                target="_blank"
                onClick={() => setLineCross(true)}
              >
                <img
                  src={process.env.PUBLIC_URL + `/assets/imgs/projects/${img}`}
                  alt={title}
                />
              </a>
            </div>
          </div>
          <div className="project__info">
            <div className="project_info_container">
              <span className="number">{num}</span>
              <div className="project__line" />
              <span className="language">{language}</span>
            </div>
          </div>
        </div>
        <div className="project_content_left">
          <div className="project__title">
            <h2>{title}</h2>
          </div>
          <div className="project__text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ListProject;
