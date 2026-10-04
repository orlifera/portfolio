"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** The easter egg: the meme behind "it's honest work", shown on hover, focus or tap. */
export default function HonestWork() {
  const [pinned, setPinned] = useState(false);

  return (
    <span className="group relative inline-block">
      <button
        type="button"
        aria-expanded={pinned}
        aria-controls="honest-work"
        onClick={() => setPinned((open) => !open)}
        onBlur={() => setPinned(false)}
        className="cursor-help rounded-sm underline decoration-dotted decoration-1 underline-offset-4"
      >
        It&apos;s not much, but it&apos;s honest work.
      </button>
      <span
        id="honest-work"
        aria-hidden={!pinned}
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-10 mt-3 block w-64 -translate-x-1/2 origin-top rounded-xl border bg-popover p-2 text-popover-foreground shadow-2xl transition-[opacity,scale,rotate] duration-300 ease-out-expo sm:left-0 sm:translate-x-0",
          "group-hover:scale-100 group-hover:-rotate-2 group-hover:opacity-100",
          pinned ? "scale-100 -rotate-2 opacity-100" : "scale-90 rotate-0 opacity-0"
        )}
      >
        <Image
          src="/easteregg.avif"
          alt="The farmer from the 'It ain't much, but it's honest work' meme"
          width={300}
          height={150}
          className="w-full rounded-lg"
        />
        <span className="block px-1 pb-1 pt-2 text-center text-sm">Hey, you found the easter egg! 🥚</span>
      </span>
    </span>
  );
}
