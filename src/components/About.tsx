import Image from 'next/image'
import Link from 'next/link'
import LogoLoop from '@/components/LogoLoop'
import Reveal from '@/components/Reveal'
import ScrubText from '@/components/ScrubText'
import SectionHeader from '@/components/SectionHeader'
import SkillPill from '@/components/SkillPill'
import { cards, techLogos } from '@/data/'

export default function About() {
  return (
    <section id='about' data-depth='1' className='pb-[clamp(4rem,9vw,7rem)] pt-[clamp(3.5rem,8vw,6rem)]'>
      {/* Phones read the heading first; from lg up the portrait takes the left column. */}
      <div className='shell grid gap-x-16 gap-y-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr]'>
        <SectionHeader lead="Get to know me" title="About me" className='lg:col-span-7 lg:col-start-6' />

        <Reveal kind='wipe' className='lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1'>
          <Image
            src="/img_7993.webp"
            alt="Orlando on graduation day, wearing a laurel wreath and holding his degree"
            width={720}
            height={960}
            sizes="(min-width: 1024px) 420px, 92vw"
            className='mx-auto aspect-3/4 w-full max-w-md rounded-xl object-cover lg:sticky lg:top-28'
          />
        </Reveal>

        <div className='min-w-0 lg:col-span-7 lg:col-start-6'>
          <div className='max-w-[65ch] space-y-4 text-base leading-relaxed sm:text-lg'>
            <ScrubText text="I am a Frontend Developer based in Padua. I have a BSc in Computer Science, with a couple of years of experience in web development as a self-taught developer, building various WebApps, one of which was my BSc thesis project." />
            <p className='text-muted-foreground'>
              I am passionate about creating beautiful and functional websites and applications that provide an excellent user experience. I am always looking for new challenges and opportunities to learn and grow as a developer, which is why I&apos;m currently learning React Native. I am also an avid adrenaline junkie, always eager to push my limits both above and underwater, without compromising safety.
            </p>
          </div>

          <ul className='mt-10 border-t'>
            {cards.map((card, index) => (
              <Reveal as='li' key={card.title} index={index} className='grid gap-x-5 gap-y-3 border-b py-6 sm:grid-cols-[auto_1fr]'>
                <span aria-hidden className='flex size-11 items-center justify-center rounded-lg bg-secondary text-foreground [&_svg]:size-5'>
                  {card.icon}
                </span>
                <div>
                  <h3 className='text-lg font-bold'>{card.title}</h3>
                  <p className='mt-1 text-muted-foreground'>{card.description}</p>
                  <div className='mt-3 flex flex-wrap gap-2'>
                    {card.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`https://www.google.com/search?q=${encodeURIComponent(tag)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='rounded-md'
                      >
                        <SkillPill title={tag} />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className='mt-[clamp(3.5rem,8vw,6rem)] text-foreground/80'>
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={44}
          gap={56}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technologies I work with"
        />
      </div>
    </section>
  )
}
