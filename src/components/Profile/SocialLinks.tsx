import { ProfileData } from "../../Data/ProfileData";
import { Links } from "./Link";

interface SocialLinksProps {
  links: ProfileData[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="social-links">
      {links.map((link) => (
        <Links key={link.description} {...link} />
      ))}
    </div>
  );
};
