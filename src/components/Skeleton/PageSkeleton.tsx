import { Skeleton } from "./Skeleton";
import "./Skeleton.css";

type PageSkeletonProps = {
  variant?: "page" | "intro";
};

export const PageSkeleton = ({ variant = "page" }: PageSkeletonProps) => {
  return (
    <div
      className={`page-skeleton ${variant === "intro" ? "page-skeleton--intro" : ""}`}
      aria-busy="true"
      aria-label="読み込み中"
    >
      <div className="page-skeleton__profile">
        <Skeleton variant="circle" width={200} height={200} />
        <Skeleton variant="text" width="60%" height={28} />
        <Skeleton variant="text" width="80%" height={16} />
        <Skeleton variant="text" width="55%" height={16} />
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
          <Skeleton variant="circle" width={44} height={44} />
          <Skeleton variant="circle" width={44} height={44} />
          <Skeleton variant="circle" width={44} height={44} />
        </div>
      </div>

      <div className="page-skeleton__section">
        <Skeleton variant="text" width={120} height={28} />
        <div className="page-skeleton__grid">
          <Skeleton variant="card" height={150} />
          <Skeleton variant="card" height={150} />
          <Skeleton variant="card" height={150} />
        </div>
      </div>
    </div>
  );
};
