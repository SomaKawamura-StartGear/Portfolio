# Skeleton

共通のスケルトンローディングコンポーネントです。

## 使い方

```tsx
import { Skeleton } from "./Skeleton";
import { SkeletonImage } from "./SkeletonImage";
import { PageSkeleton } from "./PageSkeleton";

<Skeleton variant="text" width="80%" />
<Skeleton variant="circle" width={48} height={48} />
<SkeletonImage
  src="/images/profile-400.png"
  sources={[
    { type: "image/avif", srcSet: "/images/profile-400.avif 400w" },
    { type: "image/webp", srcSet: "/images/profile-400.webp 400w" },
  ]}
  alt="profile"
  variant="circle"
  width={200}
  height={200}
/>
<PageSkeleton />
```

## Variants

- `text` / `circle` / `rect` / `card`
- `SkeletonImage` … 画像読み込み完了までスケルトンを表示
- `PageSkeleton` … ページ全体の仮レイアウト
