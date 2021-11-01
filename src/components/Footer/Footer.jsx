import React from "react";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/all";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap container">
        <div className="footer__social">
          <div className="footer_social_title">
            <h4>Mes Réseaux</h4>
            <ul className="footer_social_list">
              <li className="footer_social_item">
                <a href="/">
                  <RiFacebookCircleFill />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="/">
                  <RiLinkedinBoxFill />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="/">
                  <RiGithubFill />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="/">
                  <RiTwitterFill />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=""></div>
      </div>
    </footer>
  );
};

export default Footer;
