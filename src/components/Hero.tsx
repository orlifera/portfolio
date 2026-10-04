"use client"

import { useRef, useState, type CSSProperties } from "react"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Download, Globe } from "lucide-react"
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"
import { HeroType } from "@/types"
import { Button } from "./ui/button"
import CVDownloadModal from "./CVDownloadModal"

const socials = [
    { href: "https://instagram.com/oferazzani125", label: "Instagram", icon: IconBrandInstagram },
    { href: "https://www.linkedin.com/in/orlando-v-m-ferazzani/", label: "LinkedIn", icon: IconBrandLinkedin },
    { href: "https://mltech.store", label: "ML Tech store", icon: Globe },
]

const step = (i: number) => ({ "--i": i }) as CSSProperties

/** The part of the page above the waterline: name, pitch and the two main actions. */
export default function Hero(obj: HeroType) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const ref = useRef<HTMLElement>(null)
    const reduceMotion = useReducedMotion()

    // Pressure: the name narrows as the surface scrolls away.
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const width = useTransform(scrollYProgress, [0, 1], [125, reduceMotion ? 125 : 80])

    const words = obj.title.split(" ")
    const lastName = words.pop()
    const firstNames = words.join(" ")

    return (
        <section
            ref={ref}
            className={`hero-sky relative isolate flex min-h-[56svh] flex-col justify-end overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 ${obj.classname ?? ""}`}
        >
            <div className="shell">
                <p className="hero-fade mb-3 font-mono text-sm sm:mb-4 sm:text-lg" style={step(0)}>
                    Hello 🤙🏽 I&apos;m
                </p>
                <motion.h1
                    className="display hero-name text-[clamp(1.75rem,min(10.8vw,12.5svh),6rem)]"
                    style={{ "--wdth": width } as CSSProperties}
                >
                    <span className="hero-mask">
                        <span className="hero-line" style={step(1)}>{firstNames}</span>
                    </span>
                    <span className="hero-mask">
                        <span className="hero-line" style={step(2)}>{lastName}</span>
                    </span>
                </motion.h1>

                <div className="mt-6 flex flex-col gap-6 sm:mt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                    <p className="hero-fade max-w-xl text-base text-muted-foreground sm:text-lg" style={step(4)}>
                        {obj.subtitle}
                    </p>

                    <div className="hero-fade flex flex-wrap items-center gap-3" style={step(5)}>
                        {obj.button1 && (
                            <Button size="lg" asChild>
                                <Link href={obj.button1.link}>{obj.button1.text}</Link>
                            </Button>
                        )}
                        {obj.button2 && (
                            <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
                                {obj.button2.text}
                                <Download />
                            </Button>
                        )}
                        {obj.socials && (
                            <ul className="flex items-center sm:ml-2">
                                {socials.map(({ href, label, icon: Icon }) => (
                                    <li key={href}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-foreground"
                                        >
                                            <Icon className="size-5" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <CVDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
