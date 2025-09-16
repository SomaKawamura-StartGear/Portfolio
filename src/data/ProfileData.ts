export interface ProfileData {
    snslink: string;
    imglink:string;
    description: string;
}

export interface HumanData{
    name: string;
    description: string;
    iconlink: string;
}

export const HumanData: HumanData = {
    name: "Kawamura Soma",
    description: "フロントエンジニア & バックエンジニア<br />From Hiroshima, Japan",
    iconlink: "/images/profile.png",
}

export const ProfileData: ProfileData[] = [
    {
        snslink: "https://github.com/KEIDOROa",
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
    
]