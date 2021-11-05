import React from "react";
import "./Contact.css";
import { RiMailLine } from "react-icons/all";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__wrap container">
        <div className="section__title">
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
                <br />à me contacter sur LinkedIn/ Facebook ou simplement par
                mail, <br />
                je ferai de mon mieux pour vous répondre !
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