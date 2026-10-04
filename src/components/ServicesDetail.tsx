"use client"
import { Globe, MonitorCog, Smartphone } from 'lucide-react';
import Stepper, { Step } from './Stepper';
import Image from 'next/image';

const heading = 'flex flex-wrap items-center gap-2 text-lg font-bold [&_svg]:size-5 [&_svg]:text-muted-foreground'

export default function ServicesDetail() {
  return (
    <Stepper
      initialStep={1}
      onFinalStepCompleted={() => document.getElementById('offers')?.scrollIntoView()}
      backButtonText="Previous"
      nextButtonText="Next"
    >
      <Step>
        <h4 className={heading}>Websites <Globe aria-hidden /> and Apps <Smartphone aria-hidden /></h4>
        <p className='pt-4 text-muted-foreground'>I will create a complete website or mobile application based on your need, to showcase your Business or Product, using modern frameworks and technologies. </p>
      </Step>
      <Step>
        <h4 className={heading}>Let me worry about everything</h4>
        <Image
          src={"/score.webp"}
          alt="Lighthouse scores: 99 performance, 100 accessibility, 96 best practices, 100 SEO"
          width={600}
          height={136}
          className='mx-auto mt-4 rounded-lg'
        />
        <p className='pt-4 text-muted-foreground'>I will create a Website 100% compliant with WCAG 2.0 AAA standards, following all best practices and optimizing performance</p>
      </Step>
      <Step>
        <h4 className={heading}>What about maintenance? <MonitorCog aria-hidden /></h4>
        <p className='pt-4 text-muted-foreground'>You don&apos;t need to worry about that either! After the quote, we will also break down the maintenance price, which will cover domain cost, hosting and all approved modifications to the website.</p>
      </Step>
      <Step>
        <h4 className={heading}>Did I convince you?</h4>
        <p className='pt-4 text-muted-foreground'>If so, click the complete button and check my offers below!</p>
      </Step>
    </Stepper>
  )
}
