"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useSpring } from "motion/react"
import SectionHeader from "@/components/SectionHeader"
import SkillPill from "@/components/SkillPill"
import { experienceData } from "@/data"
import { experienceType } from "@/types"
import { cn } from "@/lib/utils"

/** One entry in the log. Its marker lights up once the entry has been scrolled to. */
function LogEntry({ entry }: { entry: experienceType }) {
  const ref = useRef<HTMLLIElement>(null)
  const logged = useInView(ref, { margin: "0px 0px -22% 0px", once: true })

  return (
    <li
      ref={ref}
      className="relative grid gap-x-10 gap-y-2 pb-14 pl-9 last:pb-0 md:grid-cols-[10rem_1fr] md:pl-0"
    >
      <span
        aria-hidden
        data-logged={logged}
        className={cn(
          "log-marker absolute left-0 top-1.5 size-[15px] rounded-full border-2 transition-[background-color,border-color,scale] duration-500 ease-out-expo md:left-[12rem]",
          logged ? "scale-100 border-signal bg-signal" : "scale-75 border-foreground/40 bg-abyss"
        )}
      />

      <p className="font-mono text-sm text-muted-foreground md:pr-2 md:pt-0.5 md:text-right">{entry.year}</p>

      <div
        className={cn(
          "transition-[opacity,translate] duration-700 ease-out-expo md:pl-8",
          logged ? "opacity-100" : "translate-y-3 opacity-70"
        )}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="display text-2xl sm:text-3xl">{entry.position}</h3>
            <p className="mt-2 font-semibold text-foreground/85">{entry.company}</p>
          </div>
          {entry.image && (
            // Logos sit on white so dark wordmarks stay legible underwater.
            <div className="relative size-16 shrink-0 overflow-hidden rounded-lg border bg-white sm:size-20">
              <Image
                src={entry.image}
                alt=""
                fill
                sizes="80px"
                className={entry.logo ? "object-contain p-1.5" : "object-cover"}
              />
            </div>
          )}
        </div>

        <p className="mt-4 max-w-[65ch] leading-relaxed text-muted-foreground">{entry.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <li key={tag}>
              <SkillPill title={tag} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 78%", "end 78%"] })
  const fill = useSpring(scrollYProgress, { stiffness: 160, damping: 34, mass: 0.4 })

  return (
    <section id="experience" data-depth="4" className="py-[clamp(4.5rem,11vw,9rem)]">
      <div className="shell">
        <SectionHeader title="Orlando's Changelog" />
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I have a lot of experience with many different things. It may be not all Web Development, or general programming, but every single piece of experience I made during the years, I can apply to my work.
        </p>

        <div ref={listRef} className="relative mt-14 sm:mt-20">
          <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-foreground/20 md:left-[calc(12rem+7px)]">
            <motion.div style={{ scaleY: fill }} className="h-full w-full origin-top bg-signal" />
          </div>
          <ol>
            {experienceData.map((entry) => (
              <LogEntry key={`${entry.company}-${entry.year}`} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
