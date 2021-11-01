import React from "react";
import "./Contact.css";
import { RiMailLine } from "react-icons/all";

const Contact = () => {
  return (
    <section className="section contact">
      <div className="contact__wrap container">
        <div className="section__title">
          <h2>Contact</h2>
        </div>
        <div className="contact__content">
          <div className="contact_content_container">
            <div className="contact__title">
              <h4>
                intéressé ? <br /> Prenons contact !
              </h4>
            </div>
            <div className="contact__text">
              <p>
                Je suis actuellement en recherche d'un stage. N'hésitez pas
                <br />
                à me contactez sur LinkedIn/ Facebook, je ferai de mon mieux
                <br />
                pour vous répondre !
              </p>
            </div>
            <div className="contact_btn_container">
              <button className="button__contact">
                <div className="icon__container">
                  <RiMailLine className="icon__contact" />
                </div>
                <span className="mail__contact">
                  <h4>amine.zegmou@gmail.com</h4>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
