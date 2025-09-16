import "./Projects.css";
import { ProjectsData } from "../data/ProjectsData";
import { Contena } from "../components/Projects/Contena";
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
