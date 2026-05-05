"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
  alt: string;
}

export function HeroVideo({ src, poster, alt }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect prefers-reduced-motion — pause immediately and let poster show
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    const handleEnded = () => {
      video.pause();
      // Seek slightly before the true end so the final frame stays visible
      if (video.duration > 0) {
        video.currentTime = Math.max(video.duration - 0.05, 0);
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="hero-video-wrap" role="img" aria-label={alt}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="hero-video"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
