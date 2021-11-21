import React from "react";
import ListProject from "../ListProject/ListProject";
import "./Projects.css";
import { useGlobalContext } from "../../context";

const Projects = ({ title, items }) => {
  const { handleOpenModal } = useGlobalContext();

  return (
    <section className="section projects" id="projects">
      <div className="projects__wrap container">
        <div className="section__title">
          <h1>{title}</h1>
        </div>
        {items.map((project, index) => (
          <ListProject
            key={index}
            {...project}
            handleClick={() => handleOpenModal(true)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
