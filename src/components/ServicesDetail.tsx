"use client"
import { Accessibility, Cog, Globe, MonitorCog, Smartphone } from 'lucide-react';
import Stepper, { Step } from './Stepper';
import Image from 'next/image';
import { BsSpeedometer } from 'react-icons/bs';

export default function ServicesDetail() {
  return (
    <Stepper
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => { window.location.href = "#offers" }}
      backButtonText="Previous"
      nextButtonText="Next"
      className='w-full'
    >
      <Step>
        <h2 className='font-bold text-xl flex items-center gap-2'>Complete Websites <Globe /> and Apps <Smartphone /></h2>
        <p className='pt-4'>I will create a complete website or mobile application based on your need, to showcase your Business or Product, using modern frameworks and technologies. </p>
      </Step>
      <Step>
        <h2 className='font-bold text-xl flex items-center gap-2'>Let me worry about SEO <Cog />, performance <BsSpeedometer /> and Accessibility.<Accessibility /></h2>
        <Image
          src={"/score.webp"}
          alt="Accessibility score"
          width={600}
          height={200}
          className='mx-auto pt-4'
        />
        <p className='pt-4'>I will create a Website 100% compliant with WCAG 2.0 AAA standards, following all best practices and optimizing performance</p>
      </Step>
      <Step>
        <h2 className='font-bold text-xl flex items-center gap-2'>What about maintenance?<MonitorCog /></h2>
        <p className='pt-4'> You don&apos;t need to worry about that neither! After the quote, we will also break down the maintenance price, which will cover domain cost, hosting and all approved modifications to the website.</p>
      </Step>
      <Step>
        <h2 className='font-bold text-xl flex items-center gap-2'>Did I convince you?</h2>
        <p>If so, click the complete button and check my offers below!</p>
      </Step>
    </Stepper>
  )
}