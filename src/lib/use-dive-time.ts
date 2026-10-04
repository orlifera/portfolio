"use client";

import { useEffect, useRef, type RefObject } from "react";

const formatTime = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

/**
 * Dive time, written into `ref` as mm:ss once a second. It starts at first
 * water contact and keeps counting from there, even after surfacing and going back down.
 */
export function useDiveTime(ref: RefObject<HTMLElement | null>, submerged: boolean) {
  const diveStart = useRef<number | null>(null);

  useEffect(() => {
    if (!submerged) return;
    diveStart.current ??= Date.now();
    const tick = () => {
      if (!ref.current || diveStart.current === null) return;
      ref.current.textContent = formatTime(Math.floor((Date.now() - diveStart.current) / 1000));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [ref, submerged]);
}
