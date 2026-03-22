export interface ActivityItem {
  title: string;
  limit_date: string;
  description: string;
}

export const ActivityData: ActivityItem[] = [
  {
    title: "スタプロハッカソン",
    limit_date: "2025/12",
    description:
      "業務改善アプリを開発。デザイン・フロントエンド・プレゼンテーションを担当し、最優秀賞を受賞（開発期間：約2週間）",
  },
  {
    title: "技育CAMP ハッカソン Vol.23",
    limit_date: "2025/02",
    description:
      "ランニングルート自動生成アプリを開発。リーダーとしてチームを牽引し、DiscordのTIMESチャンネルで進捗を可視化（開発期間：約1週間）",
  },
  {
    title: "技育CAMP ハッカソン Vol.7",
    limit_date: "2024/06",
    description: "ハッカソンに参加し、チーム開発の経験を積む",
  },
  {
    title: "Progate ハッカソン",
    limit_date: "2024/05",
    description: "ハッカソンに参加",
  },
];
