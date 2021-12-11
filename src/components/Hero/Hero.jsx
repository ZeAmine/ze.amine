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

  // // Logo Animation
  // const triggerLogo = (elemTrigger, elemTarget, duration) => {
  //   gsap.from(elemTarget, {
  //     opacity: 0,
  //     y: 500,
  //     duration: duration,
  //     ease: Power4.easeInOut,
  //     ScrollTrigger: {
  //       trigger: elemTrigger,
  //       start: "top top",
  //       end: () => `+=${elemTrigger.offset}`,
  //       scrub: 0.5,
  //       pin: true,
  //     },
  //   });
  // };

  useEffect(() => {
    slideText(".hero__text", 1.2, 1.5);
    slideText([".hero_name_text", ".hero__line"], 1.5, 1.5);
    slideImg(".hero_img_bg", 2);
    // triggerLogo(".hero__wrap", ".hero__title", 1);
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
