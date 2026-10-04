import Offers from "./Offers";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ServicesDetail from "./ServicesDetail";


export default function Services() {
  return (
    <section id='services' data-depth='3' className='py-[clamp(4.5rem,11vw,9rem)]'>
      <div className='shell'>
        <SectionHeader lead="What can I do for you" title="My services" />

        <div className='mt-12 grid items-start gap-x-14 gap-y-10 sm:mt-16 lg:grid-cols-12'>
          <Reveal className='lg:col-span-5'>
            <h3 className='text-2xl font-bold leading-tight sm:text-3xl'>
              Fullstack Web and Mobile development
            </h3>
            <p className='mt-4 max-w-[52ch] leading-relaxed text-muted-foreground'>
              Apart from my job with Parkito, I work as a freelancer building products for businesses and professionals who need clean, fast websites or mobile apps.
              I primarily focus on the Veneto Area, but I have no problem working outside the region.
            </p>
          </Reveal>
          <Reveal index={1} className='lg:col-span-7'>
            <ServicesDetail />
          </Reveal>
        </div>

        <div id="offers" className='mt-[clamp(4rem,9vw,7rem)]'>
          <Offers />
        </div>
      </div>
    </section>
  )
}
