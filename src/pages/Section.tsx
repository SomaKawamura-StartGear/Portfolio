import "./Section.css";
interface SectionProps {
  title: string;
  children: React.ReactNode;
}
export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="sections">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="grid">{children}</div>
      </div>
    </section>
  );
};
