"use client";

import { useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

// Lightweight pointer-reactive parallax tilt. Stays within ±maxDeg and bails
// out entirely when the user prefers reduced motion. Server-rendered children
// (e.g. <MediaSlot>) are passed straight through.
export function Tilt({
  children,
  className = "",
  maxDeg = 3,
}: {
  children: ReactNode;
  className?: string;
  maxDeg?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  function prefersReducedMotion() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(
        px * maxDeg
      ).toFixed(2)}deg)`,
    });
  }

  function handleLeave() {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`tilt transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
