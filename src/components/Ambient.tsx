"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Decorative layer whose looping animations rest while it is off screen (see globals.css). */
export default function Ambient({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      el.dataset.paused = String(!entry.isIntersecting);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className={className}>
      {children}
    </div>
  );
}
