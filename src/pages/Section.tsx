import "./Section.css";
interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}
export const Section = ({ title, children, id }: SectionProps) => {
  return (
    <section id={id} className="sections">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="grid">{children}</div>
      </div>
    </section>
  );
};
