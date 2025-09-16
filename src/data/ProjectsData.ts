export interface ProjectsData {
  title: string;
  role: string;
  description: string;
  links: string;
}

export const ProjectsData: ProjectsData[] = [
  {
    title: "レシピ生成アプリ",
    role: "フロントエンドエンジニア",
    description: "ハッカソンで開発したレシピ生成アプリ。フロントエンド開発を担当。",
    links: "https://github.com/misonikomipan/recipe-to-music",
  },
  {
    title: "焼肉屋Webページ",
    role: "全般",
    description: "焼肉店のWebサイト制作。デザインからのコーディングを担当。",
    links: "",
  },
  
  {
    title: "ランニングルート生成アプリ",
    role: "バックエンドエンジニア",
    description: "ランニングルートを自動生成するアプリ。バックエンド開発を担当。",
    links: "https://github.com/KEIDOROa/RouteRun",
  },
  {
    title: "SES自社開発サービス",
    role: "全般",
    description: "企業向けの自社開発サービス。設計後から実装までを担当。",
    links: "",
  },
];