import React, { useEffect } from "react";
import { RiMailLine } from "react-icons/all";
import { gsap } from "gsap";
import { Power4, Sine } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
  const slideText = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        y: 300,
        ease: Power4.easeOut,
        delay: delay,
        duration: duration,
      },
      {
        y: 0,
        stagger: {
          each: 0.1,
        },
        ease: Power4.easeOut,
        delay: delay,
        duration: duration,
      }
    );
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

  // Logo Animation
  const triggerLogo = (elemTrigger, elemTarget, duration) => {
    gsap.to(elemTarget, {
      ScrollTrigger: {
        trigger: elemTrigger,
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      width: 200,
      duration: duration,
    });
  };

  useEffect(() => {
    slideText(".hero__text", 1.2, 1.5);
    slideText([".hero_name_text", ".hero__line"], 1.5, 1.5);
    slideImg(".hero_img_bg", 1.5);
    triggerLogo(".projects", ".header__logo", 1);
  }, []);

  return (
    <section className="hero" id="accueil">
      <div className="hero__wrap container">
        <div className="hero__name">
          <h3 className="hero_name_text">Amine Zegmou</h3>
          <div className="hero__line" />
          <h3 className="hero_name_text">
            Disponible pour un éventuel stage (Paris)
          </h3>
        </div>
        <div className="hero__title">
          <h1>Développeur front-end, de la conception à la réalisation.</h1>
        </div>
        <div className="hero__content">
          <div className="hero_content_container">
            <div className="hero_text_container">
              <p className="hero__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas
              </p>
              <p className="hero__text">
                rhoncus viverra ante, id tincidunt turpis placerat vitae
                suspendisse
              </p>
              <p className="hero__text">
                sollicitudin sodales nulla, in euismod ex mattis sit amet.
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
