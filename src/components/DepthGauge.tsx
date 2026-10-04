"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { MAX_DEPTH } from "@/lib/depth";
import { useDiveTime } from "@/lib/use-dive-time";
import { cn } from "@/lib/utils";

type Waypoint = { id: string; label: string };
type Stop = Waypoint & { at: number };

const TICKS = Array.from({ length: MAX_DEPTH / 5 + 1 }, (_, i) => i * 5);

/**
 * The dive computer: a fixed ruler that maps scroll position to depth, with the
 * page sections as waypoints. Like the real thing, it switches on at water contact.
 */
export default function DepthGauge({ waypoints }: { waypoints: Waypoint[] }) {
  const { scrollY, scrollYProgress } = useScroll();
  // A little lag, so the needle settles like an instrument instead of snapping.
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 32, mass: 0.35 });
  const markerY = useTransform(progress, (p) => `${p * 100}%`);

  const gaugeRef = useRef<HTMLElement>(null);
  // Scroll position at which the waterline has cleared the top of the gauge.
  const contactAt = useRef(Infinity);
  const depthRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  const [submerged, setSubmerged] = useState(false);
  const [stops, setStops] = useState<Stop[]>([]);
  const [current, setCurrent] = useState<string | null>(null);

  // Place each section on the ruler at the scroll position where it becomes the one being read.
  useEffect(() => {
    const measure = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      if (range <= 0) return;
      setStops(
        waypoints.flatMap((waypoint) => {
          const el = document.getElementById(waypoint.id);
          if (!el) return [];
          const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.35;
          return [{ ...waypoint, at: Math.min(1, Math.max(0, top / range)) }];
        })
      );

      const water = document.querySelector(".water-column");
      const gauge = gaugeRef.current;
      if (!water || !gauge) return;
      contactAt.current = water.getBoundingClientRect().top + window.scrollY - gauge.getBoundingClientRect().top + 16;
      setSubmerged(window.scrollY >= contactAt.current);
    };

    // Fires once on observe, then whenever images or fonts change the page height.
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [waypoints]);

  useMotionValueEvent(progress, "change", (p) => {
    const metres = p * MAX_DEPTH;
    if (depthRef.current) depthRef.current.textContent = metres.toFixed(1);

    let reached: string | null = null;
    for (const stop of stops) if (p >= stop.at - 0.002) reached = stop.id;
    setCurrent(reached);
  });

  useMotionValueEvent(scrollY, "change", (y) => setSubmerged(y >= contactAt.current));

  useDiveTime(timeRef, submerged);

  return (
    <aside
      ref={gaugeRef}
      aria-label="Depth gauge"
      inert={!submerged}
      className={cn(
        "water fixed right-5 top-1/2 z-gauge hidden w-36 -translate-y-1/2 font-mono transition-[opacity,translate] duration-700 ease-out-expo min-[1440px]:block",
        submerged ? "opacity-100" : "pointer-events-none translate-x-3 opacity-0"
      )}
    >
      <div aria-hidden className="mb-5 pr-7 text-right">
        <p className="text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">Depth</p>
        <p className="text-2xl font-semibold leading-tight tabular-nums text-signal">
          <span ref={depthRef}>0.0</span>
          <span className="ml-1 text-xs font-normal text-muted-foreground">m</span>
        </p>
        <p className="mt-1 text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
          Dive time <span ref={timeRef} className="tabular-nums text-foreground">00:00</span>
        </p>
      </div>

      <div className="relative h-[44vh]">
        {/* Ruler */}
        <div aria-hidden className="absolute inset-y-0 right-7 w-px bg-foreground/30" />
        {/* Ticks draw in one after another when the gauge switches on. */}
        {TICKS.map((metres, index) => (
          <div
            key={metres}
            aria-hidden
            className="absolute right-0 flex -translate-y-1/2 items-center"
            style={{ top: `${(metres / MAX_DEPTH) * 100}%`, "--i": index } as CSSProperties}
          >
            <span
              className={cn(
                "h-px origin-right bg-foreground/45 transition-[scale] duration-500 ease-out-expo [transition-delay:calc(var(--i)*45ms+150ms)]",
                metres % 10 === 0 ? "w-2.5" : "w-1.5",
                submerged ? "scale-x-100" : "scale-x-0"
              )}
            />
            <span
              className={cn(
                "w-7 pl-1.5 text-[0.625rem] tabular-nums text-muted-foreground transition-opacity duration-500 [transition-delay:calc(var(--i)*45ms+250ms)]",
                submerged ? "opacity-100" : "opacity-0"
              )}
            >
              {metres % 10 === 0 ? metres : ""}
            </span>
          </div>
        ))}

        {/* Waypoints */}
        <nav aria-label="Sections by depth">
          <ul>
            {stops.map((stop, index) => (
              <li
                key={stop.id}
                className={cn(
                  "absolute right-[2.75rem] -translate-y-1/2 transition-[opacity,translate] duration-500 ease-out-expo [transition-delay:calc(var(--i)*70ms+350ms)]",
                  submerged ? "opacity-100" : "translate-x-2 opacity-0"
                )}
                style={{ top: `${stop.at * 100}%`, "--i": index } as CSSProperties}
              >
                <a
                  href={`#${stop.id}`}
                  aria-current={current === stop.id ? "location" : undefined}
                  className={cn(
                    "block whitespace-nowrap rounded-sm px-1 py-0.5 text-[0.625rem] uppercase tracking-[0.14em] transition-colors duration-300 hover:text-foreground",
                    current === stop.id ? "text-signal" : "text-muted-foreground"
                  )}
                >
                  {stop.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Needle */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ y: markerY }}>
          <span className="absolute right-[1.375rem] top-0 h-0.5 w-3.5 -translate-y-1/2 rounded-full bg-signal" />
        </motion.div>
      </div>
    </aside>
  );
}
