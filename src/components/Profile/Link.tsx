import type { ProfileData } from "../../data/ProfileData";

export const Links = (link: ProfileData) => {
  return (
    <a
      href={link.snslink}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link x"
    >
      <img src={link.imglink} alt={`${link.description}`} />
    </a>
  );
};
