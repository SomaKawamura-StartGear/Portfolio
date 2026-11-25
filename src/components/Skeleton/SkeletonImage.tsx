import { useState, type CSSProperties } from "react";
import { Skeleton } from "./Skeleton";
import "./Skeleton.css";

export type PictureSource = {
  type: string;
  srcSet: string;
  sizes?: string;
};

type SkeletonImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: "circle" | "rect";
  style?: CSSProperties;
  sources?: PictureSource[];
  sizes?: string;
  srcSet?: string;
};

export const SkeletonImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  variant = "rect",
  style,
  sources,
  sizes,
  srcSet,
}: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const image = (
    <img
      className={`skeleton-image__img ${loaded ? "is-loaded" : ""}`}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );

  return (
    <span
      className={`skeleton-image ${loaded ? "is-loaded" : ""} ${className}`.trim()}
      style={{ width, height, ...style }}
    >
      {!loaded && (
        <Skeleton
          variant={variant}
          className="skeleton-image__placeholder"
          width="100%"
          height="100%"
        />
      )}
      {sources && sources.length > 0 ? (
        <picture className="skeleton-image__picture">{sources.map((source) => (
            <source
              key={source.type + source.srcSet}
              type={source.type}
              srcSet={source.srcSet}
              sizes={source.sizes ?? sizes}
            />
          ))}
          {image}
        </picture>
      ) : (
        image
      )}
    </span>
  );
};
