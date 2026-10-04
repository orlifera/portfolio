"use client";

import { useState } from "react";
import { ArrowUpRight, Check, LoaderCircle, Mail, Phone, Send } from "lucide-react";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { BsWhatsapp } from "react-icons/bs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";

const direct = [
    { href: "mailto:orlandovm.ferazzani@gmail.com", label: "orlandovm.ferazzani@gmail.com", icon: Mail },
    { href: "tel:+393927958165", label: "+39 392 795 8165", icon: Phone },
    { href: "https://wa.me/393927958165", label: "WhatsApp", icon: BsWhatsapp },
];

const socials = [
    { href: "https://www.linkedin.com/in/orlando-v-m-ferazzani/", label: "LinkedIn", icon: IconBrandLinkedin },
    { href: "https://instagram.com/oferazzani125", label: "Instagram", icon: IconBrandInstagram },
    { href: "https://github.com/orlifera", label: "GitHub", icon: IconBrandGithub },
];

const fieldClass =
    "h-12 rounded-lg border-input bg-foreground/5 px-4 text-base transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted-foreground/80 hover:border-foreground/50 focus-visible:bg-foreground/10 md:text-base";

type Status = "idle" | "sending" | "sent";

export default function Contacts() {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();

            if (res.ok && result.success) {
                toast.success(`Thanks ${data.name}! Your message is on its way.`);
                form.reset();
                setStatus("sent");
                setTimeout(() => setStatus("idle"), 3000);
                return;
            }
            throw new Error("send failed");
        } catch {
            toast.error("That didn't go through. Try again, or email me directly.");
            setStatus("idle");
        }
    };

    return (
        <section id="contatti" data-depth="5" className="pb-[clamp(4rem,9vw,7rem)] pt-[clamp(4.5rem,11vw,9rem)]">
            <div className="shell grid gap-x-16 gap-y-14 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-5">
                    <SectionHeader lead="I promise I'll be quick" title="Get in touch" />

                    <ul className="mt-10 border-t">
                        {direct.map(({ href, label, icon: Icon }, index) => (
                            <Reveal as="li" key={href} index={index} className="border-b">
                                <a
                                    href={href}
                                    className="group flex items-center gap-4 py-4 transition-colors duration-200 hover:text-signal"
                                >
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors duration-200 group-hover:bg-signal group-hover:text-signal-foreground">
                                        <Icon className="size-5" aria-hidden />
                                    </span>
                                    <span className="min-w-0 text-base font-semibold [overflow-wrap:anywhere] sm:text-lg">
                                        {label.includes("@") ? <>{label.split("@")[0]}@<wbr />{label.split("@")[1]}</> : label}
                                    </span>
                                    <ArrowUpRight
                                        aria-hidden
                                        className="ml-auto size-5 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-[opacity,translate] duration-300 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                            </Reveal>
                        ))}
                    </ul>

                    <ul className="mt-8 flex flex-wrap gap-2">
                        {socials.map(({ href, label, icon: Icon }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-11 items-center gap-2 rounded-md border px-4 text-sm font-semibold transition-colors duration-200 hover:border-foreground/50 hover:bg-accent"
                                >
                                    <Icon className="size-4" aria-hidden />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="min-w-0 rounded-xl border bg-card p-6 sm:p-8 lg:col-span-7">
                    <p className="text-muted-foreground">Feel free to reach out</p>
                    <h3 className="mt-1 text-2xl font-bold sm:text-3xl">Shoot me an Email</h3>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" autoComplete="given-name" placeholder="Your Name" className={fieldClass} required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input type="text" id="lastname" name="lastname" autoComplete="family-name" placeholder="Your Last Name" className={fieldClass} required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" autoComplete="email" placeholder="Your Email" className={fieldClass} required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="phone">
                                Phone <span className="font-normal text-muted-foreground">(optional)</span>
                            </Label>
                            <Input type="tel" id="phone" name="phone" autoComplete="tel" inputMode="tel" placeholder="Your Phone Number" className={fieldClass} />
                        </div>
                        <div className="flex flex-col gap-2 sm:col-span-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" placeholder="Your Message" className={`${fieldClass} h-auto min-h-40 resize-y py-3`} required />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button type="submit" size="lg" className="group min-w-36" disabled={status === "sending"}>
                            {status === "sending" && <>Sending <LoaderCircle className="animate-spin" /></>}
                            {status === "sent" && <>Sent <Check /></>}
                            {status === "idle" && (
                                <>
                                    Send
                                    <Send className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
