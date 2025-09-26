"use client";

import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiPaperPlane } from "react-icons/bi";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Contacts() {
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            console.log("FormData entries:", [...formData.entries()]);
            console.log("Data object:", data);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            console.log("Response body:", result);

            if (res.ok && result.success) {
                toast.success("Messaggio inviato con successo!");
                form.reset();
                return;
            }

            toast.error(result.error || "Errore durante l'invio. Riprova più tardi.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div
            id="contatti"
            className="min-h-screen flex flex-col gap-6 px-4 py-8 md:grid md:grid-cols-2 md:gap-8 md:px-12 lg:px-20 items-center justify-center"
        >
            {/* Left block */}
            <div className="flex h-[70%] flex-col justify-center items-center border border-ring/50 rounded-lg bg-muted-foreground/30 p-6">
                <h2 className="text-lg sm:text-xl text-primary-foreground mb-1">
                    I promise I&apos;ll be quick
                </h2>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-6 text-center">
                    Get in Touch
                </h1>

                <ul className="flex flex-col gap-4 w-full max-w-sm">
                    <li>
                        <Link
                            href="mailto:orlandovm.ferazzani@gmail.com"
                            className="hover:underline text-base sm:text-lg text-primary-foreground flex items-center gap-2"
                        >
                            <Mail className="shrink-0" />
                            <span className="truncate">orlandovm.ferazzani@gmail.com</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="tel:+393927958165"
                            className="hover:underline text-base sm:text-lg text-primary-foreground flex items-center gap-2"
                        >
                            <Phone className="shrink-0" /> +39 349 788 3125
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://wa.me/393927958165"
                            className="hover:underline text-base sm:text-lg text-primary-foreground flex items-center gap-2"
                        >
                            <BsWhatsapp className="shrink-0" /> WhatsApp
                        </Link>
                    </li>
                </ul>

                <div className="flex flex-wrap gap-4 justify-center mt-8 pt-6 border-t border-ring w-full max-w-sm">
                    <Link
                        href="https://www.linkedin.com/in/orlando-v-m-ferazzani/"
                        className="hover:underline text-base text-primary-foreground flex items-center gap-2"
                    >
                        <Linkedin className="shrink-0" /> Linkedin
                    </Link>
                    <Link
                        href="https://instagram.com/oferazzani125"
                        className="hover:underline text-base text-primary-foreground flex items-center gap-2"
                    >
                        <Instagram className="shrink-0" /> Instagram
                    </Link>
                    <Link
                        href="https://github.com/orlifera"
                        className="hover:underline text-base text-primary-foreground flex items-center gap-2"
                    >
                        <Github className="shrink-0" /> Github
                    </Link>
                </div>
            </div>

            {/* Right block */}
            <div className=" h-[70%] flex flex-col justify-center items-center border border-ring/50 rounded-lg p-6">
                <h2 className="text-lg sm:text-xl text-primary-foreground mb-1">
                    Feel free to reach out
                </h2>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-6 text-center">
                    Shoot me an Email
                </h1>

                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name" className="text-primary-foreground">
                                Name
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                className="bg-muted-foreground/30 text-primary-foreground border border-ring/50 focus:border-primary-foreground focus:ring-0"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="lastname" className="text-primary-foreground">
                                Last Name
                            </Label>
                            <Input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Your Last Name"
                                className="bg-muted-foreground/30 text-primary-foreground border border-ring/50 focus:border-primary-foreground focus:ring-0"
                                required
                            />
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email" className="text-primary-foreground">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                className="bg-muted-foreground/30 text-primary-foreground border border-ring/50 focus:border-primary-foreground focus:ring-0"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="phone" className="text-primary-foreground">
                                Phone
                            </Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Your Phone Number"
                                className="bg-muted-foreground/30 text-primary-foreground border border-ring/50 focus:border-primary-foreground focus:ring-0"
                                inputMode="numeric"
                            />
                        </div>
                    </fieldset>

                    <fieldset className="flex flex-col gap-2 my-4">
                        <Label htmlFor="message" className="text-primary-foreground">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            className="bg-muted-foreground/30 text-primary-foreground border border-ring/50 focus:border-primary-foreground focus:ring-0 rounded-md p-4 min-h-[150px] sm:min-h-[200px] resize-none"
                            required
                        />
                    </fieldset>

                    <div className="flex justify-end mt-6">
                        <Button
                            type="submit"
                            variant="outline"
                            className="bg-primary-foreground text-primary font-semibold py-2 px-4 rounded-lg"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : <>Send <BiPaperPlane className="ml-2" /></>}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
