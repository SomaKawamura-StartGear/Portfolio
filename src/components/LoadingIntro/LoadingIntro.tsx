import { useEffect, useRef, useState } from "react";
import { HumanData } from "../../data/ProfileData";
import {
  completeProgress,
  markProgressMilestone,
  PROGRESS_MILESTONES,
  useSmoothProgress,
} from "../../hooks/useSmoothProgress";
import { SkeletonImage } from "../Skeleton/SkeletonImage";
import "./LoadingIntro.css";

type Phase = "loading" | "identity" | "exit" | "done";

type LoadingIntroProps = {
  topReady: boolean;
  mainChunkReady: boolean;
  onComplete: () => void;
};

const IDENTITY_MS = 900;
const EXIT_MS = 500;

export const LoadingIntro = ({
  topReady,
  mainChunkReady,
  onComplete,
}: LoadingIntroProps) => {
  const progress = useSmoothProgress();
  const [phase, setPhase] = useState<Phase>("loading");
  const finishingRef = useRef(false);

  useEffect(() => {
    const boot = document.getElementById("boot-loader");
    if (!boot) return;

    const frame = requestAnimationFrame(() => {
      boot.setAttribute("data-hidden", "true");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (mainChunkReady) {
      markProgressMilestone(PROGRESS_MILESTONES.mainChunk);
    }
  }, [mainChunkReady]);

  useEffect(() => {
    if (topReady) {
      markProgressMilestone(PROGRESS_MILESTONES.topPainted);
    }
  }, [topReady]);

  useEffect(() => {
    if (phase !== "loading") return;
    if (!topReady || !mainChunkReady || finishingRef.current) return;

    finishingRef.current = true;
    completeProgress();
  }, [phase, topReady, mainChunkReady]);

  useEffect(() => {
    if (phase !== "loading") return;
    if (!finishingRef.current) return;
    if (progress < 100) return;

    const timer = window.setTimeout(() => setPhase("identity"), 160);
    return () => window.clearTimeout(timer);
  }, [phase, progress]);

  useEffect(() => {
    if (phase !== "identity") return;

    const timer = window.setTimeout(() => setPhase("exit"), IDENTITY_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    const timer = window.setTimeout(() => {
      setPhase("done");
      onComplete();
    }, EXIT_MS);

    return () => window.clearTimeout(timer);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`loading-intro ${phase === "exit" ? "loading-intro--exit" : ""}`}
      aria-busy={phase === "loading"}
      aria-live="polite"
    >
      {phase === "loading" && (
        <div className="loading-intro__progress">
          <span className="loading-intro__percent">{progress}</span>
          <span className="loading-intro__percent-unit">%</span>
        </div>
      )}

      {(phase === "identity" || phase === "exit") && (
        <div className="loading-intro__identity">
          <SkeletonImage
            src={HumanData.iconlink}
            srcSet={HumanData.iconSrcSet}
            sizes="min(70vw, 260px)"
            sources={HumanData.iconSources?.map((source) => ({
              ...source,
              sizes: "min(70vw, 260px)",
            }))}
            alt={HumanData.name}
            variant="rect"
            className="loading-intro__skeleton-image"
          />
          <p className="loading-intro__name">{HumanData.name}</p>
        </div>
      )}
    </div>
  );
};
