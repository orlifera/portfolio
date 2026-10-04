"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import { ArrowUpRight, Construction } from 'lucide-react'
import { ProjectCardType } from '@/types'
import SkillPill from '@/components/SkillPill'
import TorchCard from '@/components/TorchCard'
import { Carousel, CarouselContent, CarouselNext, CarouselItem, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'

const isExternal = (href: string) => href.startsWith('http')

const linkClass =
  'group/link inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-semibold transition-colors duration-200 hover:border-foreground/50 hover:bg-accent'

export default function ProjectCard(
  { image, title, description, tags, githubLink, demoLink, wip }: ProjectCardType
) {
  const [api, setApi] = useState<CarouselApi>()
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSlide(api.selectedScrollSnap())
    api.on('select', onSelect)
    return () => { api.off('select', onSelect) }
  }, [api])

  return (
    <TorchCard className="flex h-full flex-col">
      <Carousel className="group/media relative" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="ml-0">
          {image.map((img, idx) => (
            <CarouselItem key={img} className="torch-media relative aspect-16/10 bg-abyss/50 pl-0">
              <Image
                src={img}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 92vw"
                alt={`${title} screenshot ${idx + 1}`}
                className="object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {image.length > 1 &&
          <>
            <CarouselPrevious className="left-3 rounded-md border-0 bg-abyss/80 text-foreground opacity-100 transition-opacity duration-300 hover:bg-abyss hover:text-foreground [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/media:opacity-100 [@media(hover:hover)]:group-focus-within/media:opacity-100" />
            <CarouselNext className="right-3 rounded-md border-0 bg-abyss/80 text-foreground opacity-100 transition-opacity duration-300 hover:bg-abyss hover:text-foreground [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/media:opacity-100 [@media(hover:hover)]:group-focus-within/media:opacity-100" />
            <p aria-hidden className="absolute bottom-3 right-3 rounded-sm bg-abyss/80 px-2 py-0.5 font-mono text-[0.6875rem] tabular-nums">
              {slide + 1} / {image.length}
            </p>
          </>
        }
      </Carousel>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-tight">{title}</h3>
          {wip &&
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-signal/50 px-2 py-1 font-mono text-[0.6875rem] font-medium text-signal">
              <Construction className="size-3.5" aria-hidden />
              Work in progress
            </span>
          }
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`https://www.google.com/search?q=${encodeURIComponent(tag)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md"
              >
                <SkillPill title={tag} />
              </Link>
            </li>
          ))}
        </ul>

        {(githubLink || demoLink) &&
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {githubLink &&
              <Link
                href={githubLink}
                className={linkClass}
                {...(isExternal(githubLink) && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <SiGithub className="size-4" aria-hidden />
                Code
                <span className="sr-only"> for {title}</span>
              </Link>
            }
            {demoLink &&
              <Link
                href={demoLink}
                className={linkClass}
                {...(isExternal(demoLink) && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                Live
                <span className="sr-only"> version of {title}</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 ease-out-expo group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
              </Link>
            }
          </div>
        }
      </div>
    </TorchCard>
  )
}
