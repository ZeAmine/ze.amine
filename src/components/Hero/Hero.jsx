import React from "react";
import { RiMailLine } from "react-icons/all";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrap container">
        <div className="hero__name">
          <h4>Je m'appelle Amine Zegmou</h4>
          <div className="hero__line" />
          <h4>disponible pour un éventuel stage (Paris)</h4>
        </div>
        <div className="hero__title">
          <h1>Développeur front-end, de la conception à la réalisation.</h1>
        </div>
        <div className="hero__content">
          <div className="hero__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              <br />
              rhoncus viverra ante, id tincidunt turpis placerat vitae
              suspendisse
              <br />
              sollicitudin sodales nulla, in euismod ex mattis sit amet.
              <br />
            </p>
          </div>
          <div className="hero__contact">
            <button className="button__contact">
              <div className="icon__container">
                <RiMailLine className="icon__contact" />
              </div>
              <span className="mail__contact">
                <h4>amine.zegmou@gmail.com</h4>
              </span>
            </button>
          </div>
          <div className="hero_img_bg">
            <img
              src={process.env.PUBLIC_URL + "/assets/imgs/abstract_image.png"}
              alt="forme abstraite"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
