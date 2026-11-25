import { useEffect, useState } from "react";
import { HumanData } from "../../data/ProfileData";
import "./LoadingIntro.css";

/**
 * Loading Intro Component
 *
 * SVG 線描画のローディング演出は、Eshan Rajapakshe 氏の CodePen を参考に改変しています。
 * 参考作品: https://codepen.io/eshanrajapakshe/pen/KeBzRv
 * 作者: © Eshan Rajapakshe
 *
 * 当該 Pen 自体も Wokine.com の SVG アニメーション再制作であり、
 * Mack Ayache 氏の Pen (https://codepen.io/Ayachem/pen/KaLbZK) を再デザインしたものです。
 */

type Phase = "draw" | "identity" | "exit" | "done";

type LoadingIntroProps = {
  onComplete: () => void;
};

const DRAW_MS = 2600;
const IDENTITY_MS = 1800;
const EXIT_MS = 900;

export const LoadingIntro = ({ onComplete }: LoadingIntroProps) => {
  const [phase, setPhase] = useState<Phase>("draw");

  useEffect(() => {
    if (phase !== "draw") return;

    const timer = window.setTimeout(() => setPhase("identity"), DRAW_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

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
      aria-busy={phase === "draw"}
      aria-live="polite"
    >
      {phase === "draw" && (
        <div className="loading-intro__draw">
          <svg
            className="loading-intro__word"
            viewBox="0 0 760 150"
            role="img"
            aria-label="Portfolio"
          >
            <g className="letter letter-p">
              <line className="stroke stroke-p-stem" x1="28" y1="18" x2="28" y2="132" />
              <path
                className="stroke stroke-p-bowl"
                d="M28 18 H62 Q98 18 98 52 Q98 86 62 86 H28"
              />
            </g>

            <g className="letter letter-o1">
              <circle className="stroke stroke-o1" cx="155" cy="75" r="40" />
            </g>

            <g className="letter letter-r">
              <line className="stroke stroke-r-stem" x1="220" y1="35" x2="220" y2="132" />
              <path
                className="stroke stroke-r-arm"
                d="M220 72 Q220 38 258 38"
              />
            </g>

            <g className="letter letter-t">
              <line className="stroke stroke-t-stem" x1="312" y1="18" x2="312" y2="132" />
              <line className="stroke stroke-t-bar" x1="278" y1="18" x2="348" y2="18" />
            </g>

            <g className="letter letter-f">
              <line className="stroke stroke-f-stem" x1="388" y1="18" x2="388" y2="132" />
              <line className="stroke stroke-f-top" x1="388" y1="18" x2="448" y2="18" />
              <line className="stroke stroke-f-mid" x1="388" y1="68" x2="432" y2="68" />
            </g>

            <g className="letter letter-o2">
              <circle className="stroke stroke-o2" cx="510" cy="75" r="40" />
            </g>

            <g className="letter letter-l">
              <line className="stroke stroke-l" x1="575" y1="18" x2="575" y2="132" />
            </g>

            <g className="letter letter-i">
              <line className="stroke stroke-i-stem" x1="625" y1="48" x2="625" y2="132" />
              <line className="stroke stroke-i-dot" x1="625" y1="22" x2="625" y2="22" />
            </g>

            <g className="letter letter-o3">
              <circle className="stroke stroke-o3" cx="700" cy="75" r="40" />
            </g>

            <line className="stroke stroke-accent" x1="748" y1="120" x2="748" y2="120" />
          </svg>
        </div>
      )}

      {phase === "identity" && (
        <div className="loading-intro__identity">
          <div className="loading-intro__icon">
            <img src={HumanData.iconlink} alt={HumanData.name} />
          </div>
          <p className="loading-intro__name">{HumanData.name}</p>
        </div>
      )}
    </div>
  );
};
