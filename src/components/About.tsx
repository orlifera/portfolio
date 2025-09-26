import Image from 'next/image';
import AboutCard from '@/components/AboutCard';
import LogoLoop from '@/components/LogoLoop';
import { cards } from '@/data/';
import { techLogos } from '@/data/';

export default function About() {
    return (
        <div id='about' className='w-full min-h-screen flex flex-col'>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl mt-6'>Get to Know me</h2>
                <h1 className='text-4xl font-extrabold mb-8'>About Me</h1>
            </div>
            <div className='flex md:flex-row flex-col flex-1 w-full'>
                <div className='md:w-[40%] w-full flex flex-col justify-center items-center'>
                    <Image
                        src="/IMG_7993.png"
                        alt="Profile Image"
                        width={500}
                        height={500}
                        className='rounded-lg mb-16'
                    />
                </div>
                <div className='md:w-[60%] w-full flex flex-col justify-center items-center'>
                    <p className='text-lg w-full max-w-2xl mx-auto font-light leading-relaxed p-8'>
                        I am a Frontend Developer based in Padua. I have a BsC in Computer Science, with a a couple of years of experience in web development as a self-taught developer, building various WebApps, one of which was my BsC Thesys project. I am passionate about creating beautiful and functional websites and applications that provide an excellent user experience. I am always looking for new challenges and opportunities to learn and grow as a developer. I am also an avid andrenaline junkie, always eager to push my limits both above and underwater, without compromising safety.
                    </p>
                    <div className="w-full flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-8 items-stretch">
                        {cards.map((card, index) => (
                            <AboutCard
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                tags={card.tags}
                            />
                        ))}
                    </div>
                    <div className='w-full my-4 px-8 overflow-hidden text-white'>
                        <LogoLoop
                            logos={techLogos}
                            speed={70}
                            direction="left"
                            logoHeight={52}
                            gap={50}
                            pauseOnHover
                            scaleOnHover
                            ariaLabel="Technologies I work with"

                        />
                    </div>
                </div>


            </div >
        </div>
    )
}