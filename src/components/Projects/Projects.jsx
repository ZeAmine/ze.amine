import React from "react";
import { projects } from "../../data";
import "./Projects.css";
import ListProject from "../ListProject/ListProject";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="projects__wrap container">
        <div className="section__title">
          <h2>Liste des projets</h2>
        </div>
        {projects.map((project, index) => (
          <ListProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
