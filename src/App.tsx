import { useCallback, useEffect, useState } from "react";
import { AnimatedBackground } from "./pages/AnimatedBackground";
import { Header } from "./pages/Header";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { LoadingIntro } from "./components/LoadingIntro/LoadingIntro";
import { ProfileData, HumanData } from "./data/ProfileData";
import "./App.css";

const MAIN_ASSETS = [
  HumanData.iconlink,
  ...ProfileData.map((item) => item.imglink),
];

const MIN_LOADING_MS = 1800;

export const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    let assetsDone = false;
    let minTimeDone = false;
    const totalSteps = MAIN_ASSETS.length + 2;
    const startedAt = performance.now();

    const finishIfReady = () => {
      if (cancelled || !assetsDone || !minTimeDone) return;
      setProgress(100);
      setReady(true);
    };

    const syncProgress = () => {
      if (cancelled) return;

      const assetRatio = Math.min(loadedCount / totalSteps, 1);
      const elapsedRatio = Math.min(
        (performance.now() - startedAt) / MIN_LOADING_MS,
        1
      );
      const blended = assetRatio * 0.55 + elapsedRatio * 0.45;
      const next = assetsDone && minTimeDone ? 100 : Math.min(99, Math.round(blended * 100));
      setProgress((current) => Math.max(current, next));
    };

    const markStep = () => {
      if (cancelled) return;
      loadedCount += 1;
      if (loadedCount >= totalSteps) {
        assetsDone = true;
      }
      syncProgress();
      finishIfReady();
    };

    MAIN_ASSETS.forEach((src) => {
      const image = new Image();
      image.onload = markStep;
      image.onerror = markStep;
      image.src = src;
    });

    if ("fonts" in document) {
      document.fonts.ready.then(markStep).catch(markStep);
    } else {
      markStep();
    }

    let frameA = 0;
    let frameB = 0;
    frameA = requestAnimationFrame(() => {
      frameB = requestAnimationFrame(() => {
        markStep();
      });
    });

    const progressTicker = window.setInterval(syncProgress, 40);

    const minTimer = window.setTimeout(() => {
      minTimeDone = true;
      syncProgress();
      finishIfReady();
    }, MIN_LOADING_MS);

    const fallback = window.setTimeout(() => {
      if (cancelled) return;
      assetsDone = true;
      minTimeDone = true;
      setProgress(100);
      setReady(true);
    }, 10000);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameA);
      cancelAnimationFrame(frameB);
      window.clearInterval(progressTicker);
      window.clearTimeout(minTimer);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      {showIntro && (
        <LoadingIntro
          progress={progress}
          ready={ready}
          onComplete={handleIntroComplete}
        />
      )}
      <AnimatedBackground />
      <div className={`context ${showIntro ? "context--loading" : ""}`}>
        <Header />
        <Profile />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};
