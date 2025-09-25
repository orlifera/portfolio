import { HeroType } from "@/types"
import Image from "next/image"
import { ArrowDown, Download, Globe, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero(obj: HeroType) {
    return (
        <div className="relative px-2 w-full md:min-h-screen h-svh mx-auto flex flex-col items-center justify-center text-primary">
            <div className="relative z-20 text-center flex flex-col items-center justify-center px-6 max-w-4xl">
                <div className="relative md:w-64 md:h-64 h-48 w-48 rounded-full mb-6 overflow-hidden">
                    <Image
                        src={obj.src}
                        alt="Banner Background"
                        fill
                        objectFit="cover"
                    />
                </div>
                <p className="text-2xl mb-4 font-light">Hello🤙🏽 I&apos;m</p>
                <h1 className="text-5xl font-extrabold mb-6">{obj.title}</h1>
                <p className="text-md w-full max-w-2xl mx-auto font-light leading-relaxed mb-8">
                    {obj.subtitle}
                </p>
                <div className='flex flex-row items-center justify-center gap-4'>
                    {obj.button1 &&
                        <Button variant={"default"} className="mt-4 p-6 rounded-lg" asChild>
                            <Link href={obj.button1.link}>
                                {obj.button1.text}
                            </Link>
                        </Button>
                    }
                    {
                        obj.button2 &&
                        <Button variant={"outline"} className="mt-4 p-6 rounded-lg text-primary" asChild>
                            <Link href={obj.button2.link}>
                                {obj.button2.text}
                                <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    }
                </div>
            </div>

            {/* <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70 z-10' /> */}
            {obj.socials &&
                <ul className='absolute bottom-0 m-4 gap-4 z-50 flex flex-row right-0 text-primary'>
                    <li>
                        <Link href='https://instagram.com/oferazzani125'><Instagram className=" hover:cursor-pointer " /></Link>
                    </li>
                    <li><Link href='https://www.linkedin.com/in/orlando-v-m-ferazzani/'><Linkedin className="hover:cursor-pointer " /></Link></li>
                    <li>
                        <Link href='https://mltech.store'><Globe className="hover:cursor-pointer" /></Link>
                    </li>
                </ul>}

            {
                obj.icon.key === true &&
                <div className='absolute bottom-10 z-20 animate-bounce items-center justify-center'>
                    <Link href={obj.icon.link}><ArrowDown /></Link>
                </div>
            }
        </div >
    )
}