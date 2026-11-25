import { lazy, Suspense, useEffect } from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Skeleton } from "../components/Skeleton/Skeleton";

const BelowFold = lazy(() =>
  import("./BelowFold").then((module) => ({ default: module.BelowFold }))
);

type MainSiteProps = {
  isCovered: boolean;
  loadBelow: boolean;
  onTopReady: () => void;
};

const BelowFoldSkeleton = () => (
  <div className="page-skeleton__section" style={{ padding: "2rem 1.5rem" }}>
    <Skeleton variant="text" width={120} height={28} />
    <div className="page-skeleton__grid">
      <Skeleton variant="card" height={150} />
      <Skeleton variant="card" height={150} />
      <Skeleton variant="card" height={150} />
    </div>
  </div>
);

export const MainSite = ({
  isCovered,
  loadBelow,
  onTopReady,
}: MainSiteProps) => {
  useEffect(() => {
    let frameA = 0;
    let frameB = 0;

    frameA = requestAnimationFrame(() => {
      frameB = requestAnimationFrame(() => {
        onTopReady();
      });
    });

    return () => {
      cancelAnimationFrame(frameA);
      cancelAnimationFrame(frameB);
    };
  }, [onTopReady]);

  return (
    <div className={`context ${isCovered ? "context--loading" : ""}`}>
      <Header />
      <Profile />
      {loadBelow && (
        <Suspense fallback={<BelowFoldSkeleton />}>
          <BelowFold />
        </Suspense>
      )}
    </div>
  );
};
