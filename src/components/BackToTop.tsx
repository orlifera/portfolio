'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { Button } from './ui/button'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (y) => setIsVisible(y > 600))

    const scrollToTop = () => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="water fixed bottom-4 right-4 z-gauge"
                >
                    <Button
                        variant="outline"
                        onClick={scrollToTop}
                        className="group h-11 bg-[oklch(0.17_0.055_263/0.92)] px-4 shadow-[0_8px_30px_-8px_oklch(0.05_0.03_265/0.8)] backdrop-blur-md hover:bg-[oklch(0.22_0.06_263)] has-[>svg]:px-4"
                        aria-label="Back to the surface"
                    >
                        <ArrowUp className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5" />
                        <span className="max-sm:sr-only">Surface</span>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
