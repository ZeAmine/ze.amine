import React from "react";
import "./ListProject.css";
import { RiLinkM, VscGithub } from "react-icons/all";

const ListProject = ({ id, num, url, title, text, language, direction }) => {
  return (
    <article className="project__item">
      <div className={direction ? "project_item_wrap reverse" : "project_item_wrap"}>
        <div className={direction ? "project_content_right reverse" : "project_content_right"}>
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
              <a href="https://www.google.com" rel="noreferrer" target="_blank">
                <RiLinkM className="project__icon" />
              </a>
            </li>
          </ul>
          <div className="project__img">
            <div className="project_img_container">
              <img
                src={process.env.PUBLIC_URL + `/assets/imgs/img${id}.png`}
                alt={title}
              />
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
            <h4>{title}</h4>
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
