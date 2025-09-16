import "./Contena.css";
interface ContenaProps {
  title: string;
  limit_date: string;
  description: string;
}
export const Contena = ({ title, limit_date, description }: ContenaProps) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <span className="project-role">{limit_date}</span>
      </div>
      <p
        className="project-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
