"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent } from "motion/react";
import { ArrowDown, Timer } from "lucide-react";
import { SUBMERGED_AT } from "@/lib/depth";
import { useDepth } from "@/lib/use-depth";
import { useDiveTime } from "@/lib/use-dive-time";
import { cn } from "@/lib/utils";

/**
 * Compact dive computer for the nav: depth over dive time. Stacked, so it takes
 * no more width than the depth alone. Wakes up once the page is below the waterline.
 */
export default function DepthReadout({ className }: { className?: string }) {
  const depth = useDepth();
  const depthRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const [submerged, setSubmerged] = useState(false);

  useMotionValueEvent(depth, "change", (metres) => {
    if (depthRef.current) depthRef.current.textContent = metres.toFixed(1);
    setSubmerged(metres >= SUBMERGED_AT);
  });

  useDiveTime(timeRef, submerged);

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex flex-col gap-0.5 font-mono text-[0.6875rem] leading-none tabular-nums transition-opacity duration-500",
        submerged ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <span className="flex items-center gap-1 text-signal">
        <ArrowDown className="size-3" />
        <span>
          <span ref={depthRef}>0.0</span> m
        </span>
      </span>
      <span className="flex items-center gap-1 text-muted-foreground">
        <Timer className="size-3" />
        <span ref={timeRef}>00:00</span>
      </span>
    </span>
  );
}
