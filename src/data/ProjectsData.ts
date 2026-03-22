export interface ProjectsData {
  title: string;
  role: string;
  description: string;
  links: string;
}

export const ProjectsData: ProjectsData[] = [
  {
    title: "業務改善アプリ（スタプロハッカソン）",
    role: "デザイン / フロントエンド / プレゼン",
    description:
      "スタプロハッカソン（2025年12月、2週間）にて開発。業務改善アプリのデザイン・フロントエンド実装・プレゼンテーションを担当し、最優秀賞を受賞。",
    links: "",
  },
  {
    title: "ランニングルート自動生成アプリ（技育CAMP Vol.23）",
    role: "リーダー / バックエンドエンジニア",
    description:
      "技育CAMP Vol.23（2025年2月、1週間）にて開発。リーダーとして進捗共有用にDiscordにTIMESチャンネルを作成し、メンバーの作業状況を可視化。バックエンド開発を担当。",
    links: "https://github.com/KEIDOROa/RouteRun",
  },
  {
    title: "レシピ生成アプリ",
    role: "フロントエンドエンジニア",
    description:
      "ハッカソンで開発したレシピ生成アプリ。フロントエンド開発を担当。",
    links: "https://github.com/misonikomipan/recipe-to-music",
  },
  {
    title: "焼肉屋Webページ",
    role: "全般",
    description: "焼肉店のWebサイト制作。デザインからのコーディングを担当。",
    links: "",
  },
  {
    title: "SES自社開発サービス",
    role: "全般",
    description: "企業向けの自社開発サービス。設計後から実装までを担当。",
    links: "",
  },
];