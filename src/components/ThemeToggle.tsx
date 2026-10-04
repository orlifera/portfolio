"use client";

import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const subscribe = () => () => { };

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    // The theme is only known on the client; render a stable placeholder until then.
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);

    const isDark = mounted && resolvedTheme === "dark";
    const next = isDark ? "light" : "dark";

    const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!document.startViewTransition || reduceMotion) {
            setTheme(next);
            return;
        }

        // The new theme spreads out from the toggle, like a torch switching on.
        const rect = event.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

        // Keep this callback synchronous. The browser pauses rendering while it runs, so
        // waiting for a frame in here stalls the page until the transition times out.
        const transition = document.startViewTransition(() => {
            flushSync(() => setTheme(next));
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 650, easing: "cubic-bezier(0.25, 1, 0.5, 1)", pseudoElement: "::view-transition-new(root)" }
            );
        }).catch(() => { });
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={mounted ? `Switch to a ${next === "dark" ? "night" : "day"} dive` : "Toggle theme"}
        >
            {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </Button>
    );
}
