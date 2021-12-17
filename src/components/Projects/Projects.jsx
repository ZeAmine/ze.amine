import React, { useEffect, useRef } from "react";
import "./Projects.css";
import ListProject from "../ListProject/ListProject";
import { useGlobalContext } from "../../context";
import { gsap } from "gsap";
import { Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ title, items }) => {
  const { handleOpenModal } = useGlobalContext();
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
        markers: true,
      },
    });
  };

  useEffect(() => {
    triggerItem(TitleRef.current);
  }, []);

  return (
    <section className="section projects" id="projects">
      <div className="projects__wrap container">
        <div className="section__title" ref={TitleRef}>
          <h1>{title}</h1>
        </div>
        <div className="projects__container">
          {items.map((project, index) => (
            <ListProject
              key={index}
              {...project}
              handleClick={() => handleOpenModal(true)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
