import "./Projects.css";
import { ProjectsData } from "../Data/ProjectsData";
import { Contena } from "../components/projects/Contena";
import { Section } from "./Section";

export const Projects = () => {
  return (
    <Section title="Projects">
      {ProjectsData.map((project) => (
        <Contena key={project.title} {...project} />
      ))}
    </Section>
  );
};
