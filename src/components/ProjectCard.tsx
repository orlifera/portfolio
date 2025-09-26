import { ProjectCardType } from '@/types'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SkillPill from '@/components/SkillPill'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselNext, CarouselItem, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { SiGithub } from 'react-icons/si'
import { LuConstruction } from 'react-icons/lu'
import { LinkIcon } from 'lucide-react'


export default function ProjectCard(
    { image, title, description, tags, githubLink, demoLink, wip }: ProjectCardType
) {

    return (
        <Card className="flex flex-col justify-between  shadow-lg ">
            <CardHeader className="flex flex-col gap-4 mx-auto w-full items-center justify-center">
                <CardTitle className="flex justify-center">{title}</CardTitle>
                <Carousel className="relative w-full" opts={{ loop: true }}>
                    <CarouselContent className="flex mx-auto">
                        {image.map((img, idx) => (
                            <CarouselItem key={idx} className="w-full flex flex-shrink-0 px-2">
                                <Image
                                    src={img}
                                    width={800}
                                    height={400}
                                    alt={`${title} screenshot ${idx + 1}`}
                                    className="rounded-lg w-full my-2 justify-center items-center mx-auto "
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Controls - now positioned relative to Carousel */}
                    {image.length > 1 &&
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                        </>
                    }
                </Carousel>



            </CardHeader >
            <CardContent>
                <CardDescription className="text-center text-sm">{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 justify-center">
                <div className="flex flex-wrap gap-2 justify-center">
                    {tags.map((tag, index) => (
                        <Link href={`https://www.google.com/search?q=${tag}`} key={index} target="_blank" rel="noopener noreferrer">
                            <SkillPill title={tag} text='text-xs' />
                        </Link>
                    ))}
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    {githubLink &&
                        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                            <SiGithub className='h-6 w-6 hover:cursor-pointer' />
                        </Link>
                    }
                    {demoLink &&
                        <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                            <LinkIcon className='text-sm underline hover:cursor-pointer ml-2' />
                        </Link>
                    }
                    {wip &&
                        <LuConstruction className='h-6 w-6 text-yellow-500 inline-block ml-2' title='Work in Progress' />
                    }
                </div>
            </CardFooter>
        </Card >
    )
}