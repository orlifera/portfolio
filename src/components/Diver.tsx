"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import diver from "../../public/uw.webp";

/** The hero photo, just under the surface. It drifts, shrinks and dims as you descend past it. */
export default function Diver({ descendTo }: { descendTo?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-36, 72]);
  const scale = useTransform(scrollYProgress, [0.45, 1], reduceMotion ? [1, 1] : [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], reduceMotion ? [1, 1] : [1, 0.4]);

  return (
    <div ref={ref} className="relative mx-auto w-(--diver-w)">
      {/* Clipped at the waterline, so the photo never rises into the air. */}
      <div className="overflow-hidden">
        <motion.div style={{ y, scale, opacity }} className="relative -mt-[calc(var(--diver-h)*0.1)]">
          <Image
            src={diver}
            alt="Orlando scuba diving in open blue water, throwing two shaka signs at the camera"
            preload
            placeholder="blur"
            sizes="(min-width: 960px) 928px, 96vw"
            className="diver-photo h-auto w-full hero-fade"
            style={{ "--i": 6 } as CSSProperties}
          />
        </motion.div>
      </div>

      {descendTo && (
        <Link
          href={descendTo}
          className="relative mx-auto -mt-[calc(var(--diver-h)*0.1)] flex w-fit flex-col items-center gap-3 rounded-md px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          Descend
          <span aria-hidden className="sounding-line" />
        </Link>
      )}
    </div>
  );
}
