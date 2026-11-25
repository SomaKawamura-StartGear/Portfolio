import "./Section.css";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  gridClassName?: string;
  footer?: React.ReactNode;
}

export const Section = ({
  title,
  children,
  id,
  gridClassName,
  footer,
}: SectionProps) => {
  return (
    <section id={id} className="sections">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className={gridClassName ? `grid ${gridClassName}` : "grid"}>
          {children}
        </div>
        {footer}
      </div>
    </section>
  );
};
