import type { CSSProperties, ReactNode } from "react";
import Ambient from "./Ambient";

const RIPPLE_WIDTH = 2880;

/** A shallow sine-like line, periodic so it loops seamlessly at half its width. */
function rippleLine(period: number, base: number, amplitude: number) {
  const half = period / 2;
  let d = `M0 ${base} Q ${half / 2} ${base - amplitude} ${half} ${base}`;
  for (let x = period; x <= RIPPLE_WIDTH; x += half) d += ` T ${x} ${base}`;
  return d;
}

// Fainter and slower with depth, so the surface reads as light on water rather than drawn waves.
const ripples = [
  { d: rippleLine(720, 6, 6), opacity: 0.42, dur: "48s", reverse: false },
  { d: rippleLine(480, 13, 7), opacity: 0.24, dur: "67s", reverse: true },
  { d: rippleLine(1440, 21, 8), opacity: 0.13, dur: "90s", reverse: false },
];

// Deterministic pseudo-random spread, so the particles sit the same on every render.
const motes = Array.from({ length: 28 }, (_, i) => {
  const rand = (seed: number) => {
    const x = Math.sin((i + 1) * seed) * 10000;
    return x - Math.floor(x);
  };
  return {
    left: `${(rand(12.9898) * 100).toFixed(2)}%`,
    top: `${(rand(78.233) * 100).toFixed(2)}%`,
    size: 1 + Math.round(rand(3.7) * 2),
    alpha: (0.12 + rand(5.1) * 0.24).toFixed(2),
    dur: `${22 + Math.round(rand(9.3) * 26)}s`,
    delay: `${-Math.round(rand(2.2) * 30)}s`,
    dx: `${Math.round((rand(6.6) - 0.5) * 70)}px`,
    dy: `${-20 - Math.round(rand(4.4) * 70)}px`,
  };
});

/**
 * Everything below the waterline. Carries the water-column gradient and the
 * underwater colour tokens, with the surface on top, light in the shallows
 * and suspended particles all the way down.
 */
export default function Water({ children }: { children: ReactNode }) {
  return (
    <div className="water water-column relative isolate">
      <Ambient className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[150svh] overflow-hidden">
        <div className="rays" />
        <div className="rays rays-slow" />
        <div className="surface">
          {ripples.map((ripple) => (
            <svg
              key={ripple.dur}
              className="ripple"
              viewBox={`0 0 ${RIPPLE_WIDTH} 28`}
              preserveAspectRatio="none"
              style={{ "--dur": ripple.dur, animationDirection: ripple.reverse ? "reverse" : undefined } as CSSProperties}
            >
              <path d={ripple.d} fill="none" stroke="white" strokeOpacity={ripple.opacity} strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          ))}
        </div>
      </Ambient>

      {/* Stays in view for the whole descent without taking up any room in the flow. */}
      <div aria-hidden className="pointer-events-none sticky top-0 -z-10 -mb-[100svh] h-svh overflow-hidden">
        {motes.map((mote, index) => (
          <span
            key={index}
            className={index % 2 ? "mote max-sm:hidden" : "mote"}
            style={{
              left: mote.left,
              top: mote.top,
              "--s": `${mote.size}px`,
              "--a": mote.alpha,
              "--dur": mote.dur,
              "--delay": mote.delay,
              "--dx": mote.dx,
              "--dy": mote.dy,
            } as CSSProperties}
          />
        ))}
      </div>

      {children}
    </div>
  );
}
