import React, { useEffect } from "react";
import "./Hero.css";
import { RiMailLine } from "react-icons/all";
import { gsap } from "gsap";
import { Power4, Sine } from "gsap/gsap-core";

const Hero = () => {
  const slideText = (elem, delay, duration) => {
    gsap.from(elem, {
      y: 300,
      stagger: 0.1,
      ease: Power4.easeOut,
      delay: delay,
      duration: duration,
      scrub:true,
      pin:true,
    });
  };

  const appearBtn = (elem, delay, duration) => {
    gsap.from(elem, {
      opacity: 0,
      ease: Power4.easeInOut,
      duration: duration,
      delay: delay,
    });
  };

  const slideImg = (elem, duration) => {
    gsap.to(elem, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      duration: duration,
    });
  };

  const growImg = (elem, delay, duration) => {
    gsap.from(elem, {
      opacity: 0,
      ease: Power4.easeInOut,
      duration: duration,
      delay: delay,
      onComplete: () => {
        document.querySelector('.app').classList.remove('is-loading')
      }
    });
  };

  useEffect(() => {
    slideText([".hero_name_text", ".hero__line"], 1.2, 1.7);
    slideText(".hero__text", 2, 1.7);
    appearBtn(".button__contact", 2, 1);
    growImg(".hero_img_bg", 2.5, 1);
    slideImg(".hero_img_bg", 2);
  }, []);

  return (
    <section className="hero" id="accueil">
      <div className="hero__wrap container">
        <div className="hero__name">
          <h3 className="hero_name_text">Amine Zegmou</h3>
          <div className="hero__line" />
          <h3 className="hero_name_text">
            Disponible pour un éventuel stage sur Paris
          </h3>
        </div>
        <div className="hero__title">
          <h1>Développeur front-end, de la conception à la réalisation.</h1>
        </div>
        <div className="hero__content">
          <div className="hero_content_container">
            <div className="hero_text_container">
              <p className="hero__text">
                Je suis développeur junior et j’étudie actuellement chez Hetic,
              </p>
              <p className="hero__text">
                une école basée dans le digital et le numérique. Je suis
              </p>
              <p className="hero__text">
                passionné par le développement web depuis peu et Hetic m’aide
              </p>
              <p className="hero__text">
                à réaliser de nombreux projets sur lesquels j'aime travailler.
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
          </div>
        </div>
        <div className="hero_img_bg">
          <img
            src={process.env.PUBLIC_URL + "/assets/imgs/hero/spiral.png"}
            alt="forme abstraite"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
