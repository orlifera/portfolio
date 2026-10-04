"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

const subscribe = () => () => { };

function Word({ progress, range, children }: { progress: MotionValue<number>; range: [number, number]; children: string }) {
  // Never below 0.5, so the text stays readable before it has been scrolled to.
  const opacity = useTransform(progress, range, [0.5, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

/** A paragraph that comes into focus word by word as it is scrolled through. */
export default function ScrubText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  // Plain text on the server and for reduced motion; the scrub is added once hydrated.
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 40%"] });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {hydrated && !reduceMotion
        ? words.map((word, index) => (
          <Word key={index} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
            {word}
          </Word>
        ))
        : text}
    </p>
  );
}
