import type { ProfileData } from "../../data/ProfileData";
import { SkeletonImage } from "../Skeleton/SkeletonImage";

export const Links = (link: ProfileData) => {
  return (
    <a
      href={link.snslink}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link x"
    >
      <SkeletonImage
        src={link.imglink}
        alt={link.description}
        variant="circle"
        width={24}
        height={24}
        className="social-link__skeleton"
      />
    </a>
  );
};
