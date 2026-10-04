"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Counts up to the number inside `value` (e.g. "€1500") the first time it is seen,
 * like a readout settling. Renders the final value, so it is correct without JS.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!el || !match || !inView || reduceMotion) return;

    const [, prefix, digits, suffix] = match;
    const controls = animate(0, Number(digits), {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (current) => {
        el.textContent = `${prefix}${Math.round(current)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [value, inView, reduceMotion]);

  return <span ref={ref}>{value}</span>;
}
