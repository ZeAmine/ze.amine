import React from "react";
import { RiLinkM, VscGithub } from "react-icons/all";
import { useGlobalContext } from "../../context";
import "./ListProject.css";

const ListProject = ({
  id,
  num,
  url,
  title,
  text,
  language,
  direction,
  handleClick,
}) => {
  const { toggleCursor } = useGlobalContext();

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
          <ul className="project__links">
            <li className="project_item_link">
              <a
                href="https://github.com/ZeAmine"
                rel="noreferrer"
                target="_blank"
              >
                <VscGithub className="project__icon" />
              </a>
            </li>
            <li className="project_item_link">
              <a href={url}>
                <RiLinkM className="project__icon" />
              </a>
            </li>
          </ul>
          <div
            className="project__img"
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
          >
            <div
              className="project_img_container"
              onClick={id === 5 || id === 6 ? handleClick : null}
            >
              {/*<a href={url} rel="noreferrer" target="_blank">*/}
              <img
                src={
                  process.env.PUBLIC_URL + `/assets/imgs/projects/img${id}.png`
                }
                alt={title}
              />
              {/*</a>*/}
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
