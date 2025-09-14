import "./Profile.css";
import { ProfileData } from "../Data/ProfileData";
import { SocialLinks } from "../components/Profile/SocialLinks";
import { HumanData } from "../Data/ProfileData";

export const Profile = () => {
  return (
    <section id="profile" className="profile">
      <div className="profile-container">
        <div className="profile-image text-center justify-center flex">
          <img src={HumanData.iconlink} alt={HumanData.name} />
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
