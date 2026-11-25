import { useLayoutEffect, useRef, useState } from "react";
import "../About/Contena.css";

interface ContenaProps {
  title: string;
  role: string;
  description: string;
  links: string;
}

export const Contena = ({ title, role, description, links }: ContenaProps) => {
  const [expanded, setExpanded] = useState(false);
  const [titleOverflow, setTitleOverflow] = useState(false);
  const [descOverflow, setDescOverflow] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (expanded) return;
    const el = descRef.current;
    if (!el) return;
    setDescOverflow(el.scrollHeight > el.clientHeight + 1);
  }, [description, expanded]);

  useLayoutEffect(() => {
    if (expanded) return;
    const el = titleRef.current;
    if (!el) return;
    setTitleOverflow(el.scrollWidth > el.clientWidth + 1);
  }, [title, expanded]);

  const descClass =
    "project-description" +
    (!expanded ? " project-description--collapsed" : "") +
    (expanded ? " project-description--expanded" : "");
  const titleClass =
    "project-title" +
    (!expanded ? " project-title--single-line" : "");

  const showExpand = titleOverflow || descOverflow || expanded;

  return (
    <div className="project-card project-card--expandable">
      <div className="project-header project-header--expandable">
        <h3 ref={titleRef} className={titleClass}>
          {title}
        </h3>
        <span className="project-role">{role}</span>
      </div>
      <div className="project-description-block">
        <p ref={descRef} className={descClass}>
          {description}
        </p>
      </div>
      <div className="project-links project-links--with-toggles">
        {links ? (
          <a
            href={links}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Github
          </a>
        ) : (
          <span className="project-link disabled">公開不可</span>
        )}
        {showExpand && (
          <button
            type="button"
            className="project-title-toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={
              expanded
                ? "タイトルと説明を折りたたむ"
                : "タイトルと説明をすべて表示"
            }
          >
            {expanded ? "閉じる" : "もっと見る"}
          </button>
        )}
      </div>
    </div>
  );
};
