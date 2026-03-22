import { useLayoutEffect, useRef, useState } from "react";
import "./Contena.css";

interface ContenaProps {
  title: string;
  limit_date: string;
  description: string;
  expandable?: boolean;
}

export const Contena = ({
  title,
  limit_date,
  description,
  expandable = false,
}: ContenaProps) => {
  const [expanded, setExpanded] = useState(false);
  const [titleOverflow, setTitleOverflow] = useState(false);
  const [descOverflow, setDescOverflow] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!expandable || expanded) return;
    const el = descRef.current;
    if (!el) return;
    setDescOverflow(el.scrollHeight > el.clientHeight + 1);
  }, [description, expandable, expanded]);

  useLayoutEffect(() => {
    if (!expandable || expanded) return;
    const el = titleRef.current;
    if (!el) return;
    setTitleOverflow(el.scrollWidth > el.clientWidth + 1);
  }, [title, expandable, expanded]);

  const cardClass =
    "project-card" + (expandable ? " project-card--expandable" : "");
  const descClass =
    "project-description" +
    (expandable && !expanded ? " project-description--collapsed" : "") +
    (expandable && expanded ? " project-description--expanded" : "");
  const titleClass =
    "project-title" +
    (expandable && !expanded ? " project-title--single-line" : "");

  const showExpand =
    expandable && (titleOverflow || descOverflow || expanded);

  return (
    <div className={cardClass}>
      <div
        className={
          "project-header" +
          (expandable ? " project-header--expandable" : "")
        }
      >
        <h3 ref={titleRef} className={titleClass}>
          {title}
        </h3>
        <span className="project-role">{limit_date}</span>
      </div>
      {expandable ? (
        <>
          <div className="project-description-block">
            <p
              ref={descRef}
              className={descClass}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          {showExpand && (
            <div className="project-footer-actions">
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
            </div>
          )}
        </>
      ) : (
        <p
          className="project-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};
