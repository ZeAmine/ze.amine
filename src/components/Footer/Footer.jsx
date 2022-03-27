import React from "react";
import {
  RiArrowUpSLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/all";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap container">
        <div className="footer__nav">
          <div className="footer__social">
            <div className="footer_social_title">
              <h4>Mes Réseaux.</h4>
            </div>
            <ul className="footer_social_list">
              <li className="footer_social_item">
                <a
                  href="https://www.linkedin.com/in/zeamine/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiLinkedinBoxFill className="footer_social_icon" />
                </a>
              </li>
              <li className="footer_social_item">
                <a
                  href="https://github.com/ZeAmine"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiGithubFill className="footer_social_icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <div className="footer_contact_title">
              <h4>Contactez-moi.</h4>
            </div>
            <a
              href="mailto:amine95170@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer_contact_mail">
                <a href="/">amine95170@gmail.com</a>
              </span>
            </a>
          </div>
          <div className="footer__back">
            <button className="footer_back_btn">
              <a href="#home">
                <div className="footer_back_btn_container">
                  <span>Haut de page</span>
                  <RiArrowUpSLine className="footer_back_icon" />
                </div>
              </a>
            </button>
          </div>
        </div>
        <div className="footer__logo">
          <div className="footer_logo_container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.89 55.82">
              <line className="cls-1" y1="52.04" x2="55.43" y2="52.04" />
              <path
                className="cls-1"
                d="M15.36,3.77,51.75,4V40.54H4C4,20,9.16,15.37,22.82,15.37s19.45,4.7,19.45,25.17"
              />
              <text className="cls-2" transform="translate(74.19 44.49)">
                Amine
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
