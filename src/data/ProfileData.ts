export interface ProfileData {
  snslink: string;
  imglink: string;
  description: string;
}

export interface HumanData {
  name: string;
  description: string;
  iconlink: string;
  iconSrcSet?: string;
  iconSizes?: string;
  iconSources?: Array<{
    type: string;
    srcSet: string;
    sizes?: string;
  }>;
}

export const HumanData: HumanData = {
  name: "Kawamura Soma",
  description:
    "フロントエンジニア & バックエンジニア<br />From Hiroshima, Japan",
  iconlink: "/images/profile-400.png",
  iconSizes: "(max-width: 768px) 150px, 200px",
  iconSrcSet: "/images/profile-400.png 400w",
  iconSources: [
    {
      type: "image/avif",
      srcSet: "/images/profile-400.avif 400w, /images/profile-600.avif 600w",
    },
    {
      type: "image/webp",
      srcSet: "/images/profile-400.webp 400w, /images/profile-600.webp 600w",
    },
  ],
};

export const ProfileData: ProfileData[] = [
  {
    snslink: "https://github.com/SomaKawamura-StartGear?tab=repositories",
    imglink: "/images/github.svg",
    description: "G itHub",
  },
  {
    snslink: "https://qiita.com/KEIDORO",
    imglink: "/images/qiita.svg",
    description: "Qiita",
  },
  {
    snslink: "https://x.com/777so_jp",
    imglink: "/images/x.svg",
    description: "X (Twitter)",
  },
];
