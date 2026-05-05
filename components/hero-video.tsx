"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
  finalPoster: string;
  alt: string;
}

// How many seconds from the end to begin easing playback rate
const EASING_WINDOW = 2.0;
// How many seconds from the end to begin fading in the final poster
const FADE_WINDOW = 0.4;
// Minimum playback rate at the very end of the easing curve
const MIN_RATE = 0.1;

export function HeroVideo({ src, poster, finalPoster, alt }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video || !overlay) return;

    // Reduced-motion: skip autoplay, show final poster immediately (no transition)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      overlay.style.transition = "none";
      overlay.style.opacity = "1";
      return;
    }

    let rafId: number;

    const tick = () => {
      if (video.duration > 0 && !video.paused && !video.ended) {
        const remaining = video.duration - video.currentTime;

        if (remaining > EASING_WINDOW) {
          // Normal playback — ensure rate is 1 in case of replay
          if (video.playbackRate !== 1) video.playbackRate = 1;
        } else {
          // Ease-out: progress goes 0→1 as remaining goes EASING_WINDOW→0
          const progress = 1 - remaining / EASING_WINDOW;
          // Cubic ease-out: slow at first, then rapidly decelerates
          const eased = 1 - Math.pow(1 - progress, 3);
          video.playbackRate = Math.max(1 - eased * (1 - MIN_RATE), MIN_RATE);
        }

        // Fade in final poster only in the last FADE_WINDOW seconds
        if (remaining <= FADE_WINDOW) {
          overlay.style.opacity = "1";
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    const handlePlay = () => {
      // Reset overlay when video replays from the start
      overlay.style.opacity = "0";
      video.playbackRate = 1;
    };

    const handleEnded = () => {
      cancelAnimationFrame(rafId);
      video.pause();
      video.playbackRate = 1;
      // Seek just before true end so the final frame stays visible under overlay
      if (video.duration > 0) {
        video.currentTime = Math.max(video.duration - 0.05, 0);
      }
      overlay.style.opacity = "1";
    };

    rafId = requestAnimationFrame(tick);
    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("play", handlePlay);
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
      {/* Final-frame overlay — fades in during last ~0.4 s of playback */}
      <img
        ref={overlayRef}
        src={finalPoster}
        alt=""
        aria-hidden="true"
        className="hero-video-final-overlay"
      />
    </div>
  );
}
