import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { RiMailLine } from "react-icons/all";
import { gsap } from "gsap";
import { Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Contact = () => {
  const TitleRef = useRef(null);

  const triggerItem = (elem) => {
    gsap.from(elem, {
      opacity: 0,
      y: 50,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        end: "bottom",
      },
    });
  };

  useEffect(() => {
    triggerItem(TitleRef.current);
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact__wrap container">
        <div className="section__title" ref={TitleRef}>
          <h1>Contact.</h1>
        </div>
        <div className="contact__content">
          <div className="contact_content_container">
            <div className="contact__title">
              <h2>
                intéressé ? <br /> Prenons contact !
              </h2>
            </div>
            <div className="contact__text">
              <p>
                Je suis actuellement en recherche d'un stage. N'hésitez pas
                <br />à me contacter sur LinkedIn ou simplement par mail.
              </p>
            </div>
            <div className="contact_btn_container">
              <button className="button__contact">
                <div className="icon__container">
                  <RiMailLine className="icon__contact" />
                </div>
                <a
                  href="mailto:amine95170@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mail__contact">
                    <h4>amine95170@gmail.com</h4>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
