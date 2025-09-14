import "./Projects.css";
import { ProjectsData } from "../Data/ProjectsData";
import { Contena } from "../components/projects/Contena";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {ProjectsData.map((project) => (
            <Contena key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
