"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WebContent from './WebContent'
import MobileContent from './MobileContent'
import { Button } from './ui/button'

export default function Offers() {
  return (
    <div className='flex flex-col'>
      <Tabs defaultValue="web" className="w-full mx-auto">
        <TabsList>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
        </TabsList>
        <TabsContent value="web">
          <WebContent />
        </TabsContent>
        <TabsContent value="mobile">
          <MobileContent />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-primary-foreground font-semibold text-lg">Didn&apos;t find what you were looking for? Just shoot me a text!</p>
        <Button variant="default" onClick={() => { window.location.href = "#contatti" }}>
          Let&apos;s chat
        </Button>
      </div>
    </div>
  )
}