"use client"
import { Check } from "lucide-react";
import { CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";
import SpotlightCard from "./SpotlightCard";
import { Button } from "./ui/button";
import { offers } from "@/data/";

export default function WebContent() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-2 mx-auto w-full items-stretch justify-center">
      {offers.map((offer, index) => (
        <SpotlightCard
          key={index}
          className="custom-spotlight-card h-full flex flex-col"
          spotlightColor={"rgba(0, 229, 255, 0.2)"}
        >
          <CardTitle className="py-0 my-0 p-0 text-white text-xl">{offer.title}</CardTitle>
          <CardDescription className="mt-1">{offer.description}</CardDescription>
          <CardContent className="p-0 mt-3 flex-1">
            <p className="text-white">What does this include?</p>
            <ul className="px-4 text-white">
              {offer.features.map((feature, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <Check className="text-green-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-4 p-0 flex flex-row justify-between w-full">
            <Button variant="default" onClick={() => { window.location.href = "#contatti" }}>
              Let&apos;s chat
            </Button>
            <p>{offer.price && offer.price}</p>
          </CardFooter>
        </SpotlightCard>
      ))}
    </div>
  )
}
