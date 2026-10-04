"use client";

import { useRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** A panel lit by a dive torch that follows the pointer. Styles live in globals.css. */
export default function TorchCard({ className, children, ...props }: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  const aim = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--tx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--ty", `${event.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={aim} className={cn("torch-card", className)} {...props}>
      {children}
    </div>
  );
}
