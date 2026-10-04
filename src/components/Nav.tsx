"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import DepthReadout from "@/components/DepthReadout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Experience", id: "experience" },
];

const sectionIds = navItems.map((item) => item.id);

const ease = [0.16, 1, 0.3, 1] as const;

/** The section currently crossing the middle of the viewport, if any. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids.flatMap((id) => document.getElementById(id) ?? []);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Orlando V. M. Ferazzani, home"
      className="whitespace-nowrap rounded-md px-1.5 py-1 font-mono text-[0.8125rem] font-bold min-[360px]:px-2 min-[360px]:text-sm sm:text-base"
    >
      <span className="text-muted-foreground">&lt;</span>
      <span className="text-signal">OVMF</span>{" "}
      <span className="text-[oklch(0.8_0.1_225)]">id=</span>
      <span className="text-foreground">&quot;dev&quot;</span>{" "}
      <span className="text-muted-foreground">/&gt;</span>
    </Link>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const active = useActiveSection(sectionIds);
  const lit = hovered ?? active;

  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 48));

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-nav px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={cn(
          "water nav-in pointer-events-auto relative mx-auto flex items-center justify-between gap-2 rounded-xl border bg-[oklch(0.17_0.055_263/0.92)] px-2 py-1.5 backdrop-blur-md transition-[max-width,box-shadow] duration-700 ease-out-expo sm:px-3 sm:py-2",
          scrolled ? "max-w-4xl shadow-[0_12px_40px_-12px_oklch(0.05_0.03_265/0.7)]" : "max-w-6xl"
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onMouseEnter={() => setHovered(item.id)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "relative block rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300",
                    active === item.id ? "text-signal" : "text-foreground"
                  )}
                >
                  {lit === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-accent"
                      transition={{ duration: 0.4, ease }}
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <DepthReadout className="mr-1 max-[359px]:hidden min-[1440px]:hidden" />
          <Button size="sm" className="group hidden sm:inline-flex" asChild>
            <Link href="/#contatti">
              Message me
              <ArrowUpRight className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* How far down the page you are, as a hairline along the bar. */}
        <motion.span
          aria-hidden
          style={{ scaleX: scrollYProgress }}
          className="pointer-events-none absolute inset-x-3 bottom-0 h-px origin-left bg-signal"
        />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Main"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
              transition={{ duration: 0.35, ease }}
              className="absolute inset-x-0 top-full mt-2 rounded-xl border bg-[oklch(0.17_0.055_263)] p-3 shadow-xl lg:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease, delay: 0.04 * index + 0.05 }}
                  >
                    <Link
                      href={`/#${item.id}`}
                      aria-current={active === item.id ? "location" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "display block rounded-lg px-3 py-3 text-2xl",
                        active === item.id ? "text-signal" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button className="mt-3 w-full" size="lg" asChild>
                <Link href="/#contatti" onClick={() => setIsMenuOpen(false)}>
                  Message me
                  <ArrowUpRight />
                </Link>
              </Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
