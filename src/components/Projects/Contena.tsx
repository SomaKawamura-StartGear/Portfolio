interface ContenaProps {
  title: string;
  role: string;
  description: string;
  links: string;
}
export const Contena = ({ title, role, description, links }: ContenaProps) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <span className="project-role">{role}</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-links">
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
      </div>
    </div>
  );
};
