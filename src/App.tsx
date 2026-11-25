import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { LoadingIntro } from "./components/LoadingIntro/LoadingIntro";
import { PageSkeleton } from "./components/Skeleton/PageSkeleton";
import {
  getSharedProgress,
  PROGRESS_MILESTONES,
} from "./hooks/useSmoothProgress";
import { AnimatedBackground } from "./pages/AnimatedBackground";
import "./App.css";

const mainSiteImport = import("./pages/MainSite").then((module) => {
  getSharedProgress().milestone(PROGRESS_MILESTONES.mainChunk);
  return { default: module.MainSite };
});

const MainSite = lazy(() => mainSiteImport);

export const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [topReady, setTopReady] = useState(false);
  const [mainChunkReady, setMainChunkReady] = useState(false);

  useEffect(() => {
    getSharedProgress().milestone(PROGRESS_MILESTONES.reactMounted);
    mainSiteImport.then(() => setMainChunkReady(true));
  }, []);

  const handleTopReady = useCallback(() => {
    setTopReady(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && (
        <LoadingIntro
          topReady={topReady}
          mainChunkReady={mainChunkReady}
          onComplete={handleIntroComplete}
        />
      )}
      <AnimatedBackground />
      <Suspense
        fallback={
          <div className={showIntro ? "context--loading" : ""}>
            <PageSkeleton />
          </div>
        }
      >
        <MainSite
          isCovered={showIntro}
          loadBelow={!showIntro}
          onTopReady={handleTopReady}
        />
      </Suspense>
    </>
  );
};
