import "./Profile.css";
import { ProfileData } from "../data/ProfileData";
import { SocialLinks } from "../components/Profile/SocialLinks";
import { HumanData } from "../data/ProfileData";
import { SkeletonImage } from "../components/Skeleton/SkeletonImage";

export const Profile = () => {
  return (
    <section id="profile" className="profile">
      <div className="profile-container">
        <div className="profile-image text-center justify-center flex">
          <SkeletonImage
            src={HumanData.iconlink}
            srcSet={HumanData.iconSrcSet}
            sizes={HumanData.iconSizes}
            sources={HumanData.iconSources}
            alt={HumanData.name}
            variant="circle"
            width={200}
            height={200}
            className="profile-image__skeleton"
          />
        </div>
        <div className="profile-info">
          <h2 className="name">{HumanData.name}</h2>
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: HumanData.description }}
          ></p>
          <SocialLinks links={ProfileData} />
        </div>
      </div>
    </section>
  );
};
