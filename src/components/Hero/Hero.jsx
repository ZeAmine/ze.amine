import React, { useEffect, useRef } from "react";
import { RiMailLine } from "react-icons/all";
import { gsap } from "gsap";
import { Power4, Sine } from "gsap/gsap-core";
import "./Hero.css";

const Hero = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  const imageBgRef = useRef(null);

  useEffect(() => {
    gsap.from([textRef.current, textRef2.current, textRef3.current], {
      y: 300,
      duration: 1.5,
      delay: 1.2,
    });
    gsap.to([textRef.current, textRef2.current, textRef3.current], {
      y: 0,
      stagger: {
        each: 0.1,
      },
      ease: Power4.easeOut,
      duration: 1.5,
      delay: 1.2,
    });
    gsap.to(imageBgRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      duration: 1.5,
    });
  }, []);

  return (
    <section className="hero" id="accueil">
      <div className="hero__wrap container">
        <div className="hero__name">
          <h3>Je m'appelle Amine Zegmou</h3>
          <div className="hero__line" />
          <h3>disponible pour un éventuel stage (Paris)</h3>
        </div>
        <div className="hero__title">
          <h1>Développeur front-end,</h1>
          <h1>de la conception à la</h1>
          <h1>réalisation.</h1>
        </div>
        <div className="hero__content">
          <div className="hero_content_container">
            <div className="hero_text_container">
              <p className="hero__text" ref={textRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas
              </p>
              <p className="hero__text" ref={textRef2}>
                rhoncus viverra ante, id tincidunt turpis placerat vitae
                suspendisse
              </p>
              <p className="hero__text" ref={textRef3}>
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
        <div className="hero_img_bg" ref={imageBgRef}>
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
