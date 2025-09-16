import "./About.css";
import { Section } from "./Section";
import { Contena } from "../components/About/Contena";
import { AboutData } from "../Data/AboutData";

export const About = () => {
  return (
    <Section title="About">
      {AboutData.map((about) => (
        <Contena key={about.title} {...about} />
      ))}
    </Section>
  );
};
