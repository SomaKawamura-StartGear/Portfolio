import { useState } from "react";
import "./About.css";
import { Section } from "./Section";
import { Contena } from "../components/About/Contena";
import { AboutData, type AboutData as AboutDataType } from "../data/AboutData";

const INITIAL_VISIBLE = 6;

export const About = () => {
  const [showAll, setShowAll] = useState(false);
  const hasMore = AboutData.length > INITIAL_VISIBLE;
  const visibleItems = showAll
    ? AboutData
    : AboutData.slice(0, INITIAL_VISIBLE);

  return (
    <Section
      title="About"
      id="about"
      gridClassName="grid--about"
      footer={
        hasMore ? (
          <div className="about-more">
            <button
              type="button"
              className="about-more__button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
            >
              {showAll ? "閉じる" : "もっと見る"}
            </button>
          </div>
        ) : null
      }
    >
      {visibleItems.map((about: AboutDataType) => (
        <Contena key={about.title} {...about} expandable />
      ))}
    </Section>
  );
};
