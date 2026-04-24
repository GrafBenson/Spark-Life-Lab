"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { ScrollReveal } from "./scroll-reveal";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
};

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = useMemo(
    () => (activeIndex === null ? null : images[activeIndex]),
    [activeIndex, images],
  );

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    // VERBESSERUNG: Tastatursteuerung und Focus-freundliche Lightbox-Navigation.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % images.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? 0 : (current - 1 + images.length) % images.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  const goToPrevious = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + images.length) % images.length,
    );

  const goToNext = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % images.length,
    );

  return (
    <>
      <div className="columns-1 gap-5 md:columns-2">
        {images.map((image, index) => (
          <ScrollReveal key={image.src} className="mb-5 break-inside-avoid">
            <figure className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-[rgba(255,249,242,0.92)] shadow-[0_22px_62px_rgba(84,45,28,0.12)]">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group block w-full text-left"
                aria-label={`${image.alt} vergrößern`}
              >
                <div className="overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  {image.caption}
                </figcaption>
              </button>
            </figure>
          </ScrollReveal>
        ))}
      </div>

      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(28,21,16,0.9)] px-4 py-6 transition-opacity duration-200 ${
          activeImage ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={activeImage ? "false" : "true"}
      >
        {activeImage ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Bildergalerie"
            className="relative flex w-full max-w-5xl items-center justify-center"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-0 top-0 z-10 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
            >
              Schließen
            </button>

            {images.length > 1 ? (
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/14 bg-white/10 px-4 py-3 text-white backdrop-blur-md md:block"
                aria-label="Vorheriges Bild"
              >
                ←
              </button>
            ) : null}

            <div className="w-full rounded-[2rem] border border-white/10 bg-[rgba(37,24,20,0.74)] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-6">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-black/12">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={activeImage.width}
                  height={activeImage.height}
                  className="h-auto max-h-[72vh] w-full object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-sm leading-7 text-white/78">
                  {activeImage.caption}
                </p>
                {images.length > 1 ? (
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={goToPrevious}
                      className="button-secondary border-white/12 bg-white/10 text-white hover:bg-white/16"
                    >
                      Zurück
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      className="button-primary shadow-none"
                    >
                      Weiter
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            {images.length > 1 ? (
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/14 bg-white/10 px-4 py-3 text-white backdrop-blur-md md:block"
                aria-label="Nächstes Bild"
              >
                →
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}
