"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { SiSpotify } from "react-icons/si";

export default function Nav() {
    const navItems = [
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        }, {
            name: "Experience",
            link: "#experience",
        },
        {
            name: <SiSpotify size={20} />,
            link: "#music",
        }

    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                <NavBody >
                    <NavbarLogo />
                    <NavItems items={navItems} className="text-lg" />
                    <div className="flex items-center gap-4 z-100 mx-4 justify-center">
                        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80" asChild>
                            <Link href="#contacts" target="_blank" rel="noreferrer noopener">
                                Message Me
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <ThemeToggle />
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav className="bg-foreground/60">
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-white dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full mx-auto justify-center items-center flex-col gap-4">
                            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full" asChild>
                                <Link href="#contacts" target="_blank" rel="noreferrer noopener">
                                    Message Me
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <ThemeToggle />
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

        </div>
    );
}
