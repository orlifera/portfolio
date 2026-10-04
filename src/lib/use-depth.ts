"use client";

import { useScroll, useTransform } from "motion/react";
import { MAX_DEPTH } from "@/lib/depth";

/** Scroll position as depth in metres: 0 at the top of the page, MAX_DEPTH at the bottom. */
export function useDepth() {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, MAX_DEPTH]);
}
