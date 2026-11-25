import type { CSSProperties } from "react";
import "./Skeleton.css";

type SkeletonVariant = "text" | "circle" | "rect" | "card";

type SkeletonProps = {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
};

export const Skeleton = ({
  variant = "rect",
  width,
  height,
  className = "",
  style,
}: SkeletonProps) => {
  return (
    <span
      className={`skeleton skeleton--${variant} ${className}`.trim()}
      style={{
        width,
        height,
        ...style,
      }}
      aria-hidden="true"
    />
  );
};
