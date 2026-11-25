import { useEffect, useState } from "react";
import {
  createSmoothProgress,
  PROGRESS_MILESTONES,
  type SmoothProgress,
} from "../lib/smoothProgress";

let sharedProgress: SmoothProgress | null = null;

export const getSharedProgress = () => {
  if (!sharedProgress) {
    sharedProgress = createSmoothProgress();
    sharedProgress.start();
  }
  return sharedProgress;
};

export const markProgressMilestone = (value: number) => {
  getSharedProgress().milestone(value);
};

export const completeProgress = () => {
  getSharedProgress().complete();
};

export const useSmoothProgress = () => {
  const [progress, setProgress] = useState(() => {
    getSharedProgress();
    const boot =
      typeof window !== "undefined" && typeof window.__bootProgress === "number"
        ? window.__bootProgress
        : 0;
    return Math.max(boot, getSharedProgress().getDisplay(), PROGRESS_MILESTONES.boot);
  });

  useEffect(() => {
    const controller = getSharedProgress();
    controller.milestone(PROGRESS_MILESTONES.reactMounted);
    return controller.subscribe((value) => {
      setProgress((current) => Math.max(current, value));
    });
  }, []);

  return progress;
};

export { PROGRESS_MILESTONES };
