import { MAX_DEPTH } from "@/lib/depth";

export default function Footer() {
    return (
        <footer className="water bg-abyss">
            <div className="shell">
                <div className="flex flex-col gap-4 border-t py-10 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-xs text-muted-foreground">
                        <span className="text-signal">{MAX_DEPTH.toFixed(1)} m</span> · As deep as recreational diving goes. Time to head back up.
                    </p>
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Orlando V. M. Ferazzani. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
