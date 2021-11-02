import React from "react";
import {
  RiArrowUpSLine,
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
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
                <a href="/">
                  <RiFacebookCircleFill className="footer_social_icon" />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="/">
                  <RiLinkedinBoxFill className="footer_social_icon" />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="/">
                  <RiGithubFill className="footer_social_icon" />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="/">
                  <RiTwitterFill className="footer_social_icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <div className="footer_contact_title">
              <h4>Contactez-moi.</h4>
            </div>
            <span className="footer_contact_mail">
              <a href="/">amine.zegmou@gmail.com</a>
            </span>
          </div>
          <div className="footer__back">
            <button className="footer_back_btn">
              <span>Haut de page</span>
              <RiArrowUpSLine className="footer_back_icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
