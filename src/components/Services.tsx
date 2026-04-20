import Offers from "./Offers";
import ServicesDetail from "./ServicesDetail";


export default function Services() {
  return (
    <div id='services' className='w-full min-h-screen flex flex-col'>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl mt-6'>What can I do for you</h2>
        <h1 className='text-4xl font-extrabold mb-8'>My services</h1>
      </div>
      <div className='flex flex-col lg:flex-row w-full min-h-fit py-20 px-4 gap-8 items-center'>
        <div className="rounded-lg p-10 bg-card lg:max-w-sm shrink-0">
          <h1 className="text-2xl font-bold md:text-4xl mb-4 text-primary max-w-4xl">
            Fullstack Web and <br /> Mobile development
          </h1>
          <p className="text-primary text-sm md:text-base">
            Apart from my job with Parkito, I work as a freelancer building products for businesses and professionals who need clean, fast websites or mobile apps.
            I primarily focus on the Veneto Area, but I have no problem working outside the region.
          </p>
        </div>
        <ServicesDetail />
      </div>
      <div id="offers" className="w-full flex md:flex-row flex-col ">
        <Offers />
      </div>
    </div>
  )
}