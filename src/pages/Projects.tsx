import "./Projects.css";
import {
  ProjectsData,
  type ProjectsData as ProjectsDataType,
} from "../data/ProjectsData";
import { Contena } from "../components/Projects/Contena";
import { Section } from "./Section";

export const Projects = () => {
  return (
    <Section title="Projects" id="projects" gridClassName="grid--projects">
      {ProjectsData.map((project: ProjectsDataType) => (
        <Contena key={project.title} {...project} />
      ))}
    </Section>
  );
};
