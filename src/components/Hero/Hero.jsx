import React, { useState, useRef, useEffect } from "react";
import { RiMailLine } from "react-icons/all";
import "./Hero.css";

const Hero = () => {
  //   const [client, setClient] = useState("")
  // }
  //   const imgMouse = useRef();
  //   const imgDivider = 15;
  //
  //   useEffect(() => {
  //     const mDown = (e) => {
  //       const translateY = client;
  //       const translateX = client;
  //       imgMouse.current.style.transform
  //     };
  //     const addEventListeners = () => {
  //       document.addEventListener("mousemove", mDown);
  //     };
  //     const removeEventListeners = () => {
  //       document.removeEventListener("mousemove", mDown);
  //     };
  //
  //     addEventListeners();
  //     return () => removeEventListeners();
  //   }, []);
  //
  //   const mMouv = (e) => {
  //     setClient({x: e.clientY - document.documentElement.clientHeight / 2, y: e.clientX - document.documentElement.clientWidth / 2})
  //   }

  return (
    <section className="hero" id="accueil">
      <div className="hero__wrap container">
        <div className="hero__name">
          <h3>Je m'appelle Amine Zegmou</h3>
          <div className="hero__line" />
          <h3>disponible pour un éventuel stage (Paris)</h3>
        </div>
        <div className="hero__title">
          <h1>Développeur front-end, de la conception à la réalisation.</h1>
        </div>
        <div className="hero__content">
          <div className="hero_text_container">
            <p className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rhoncus viverra ante, id tincidunt turpis placerat vitae
              suspendisse sollicitudin sodales nulla, in euismod ex mattis sit
              amet.
            </p>
          </div>
          <div className="hero__contact">
            <a href="/" className="hero_contact_container">
              <button className="button__contact">
                <div className="icon__container">
                  <RiMailLine className="icon__contact" />
                </div>
                <span className="mail__contact">
                  <h4>amine.zegmou@gmail.com</h4>
                </span>
              </button>
            </a>
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
