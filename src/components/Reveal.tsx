"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "li" | "section" | "article" | "header";
  /** rise: fade up. wipe: uncover the child top-down. title: see SectionHeader. */
  kind?: "rise" | "wipe" | "title";
  /** Position in a group, for stagger. */
  index?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Reveals its children when they scroll into view. Content renders visible;
 * it is only hidden after hydration, and only if it is still below the fold.
 */
export default function Reveal({ as = "div", kind = "rise", index = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal-kind={kind}
      className={className}
      style={{ "--i": index } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
