"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = Omit<HTMLAttributes<HTMLElement>, "className"> & {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const w = typeof window !== "undefined" ? window : null;
    if (!w) return;

    const showSoon = () => {
      const id = w.setTimeout(() => setShown(true), 0);
      return () => w.clearTimeout(id);
    };

    if (!("IntersectionObserver" in w)) {
      return showSoon();
    }

    const reduced = w.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return showSoon();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            w.setTimeout(() => setShown(true), delay);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
