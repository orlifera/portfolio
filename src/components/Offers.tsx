"use client"

import { useState, type CSSProperties } from "react"
import Link from "next/link"
import { Tabs } from "radix-ui"
import { motion } from "motion/react"
import { Check } from "lucide-react"
import CountUp from "./CountUp"
import TorchCard from "./TorchCard"
import { Button } from "./ui/button"
import { mobileOffers, offers } from "@/data"
import { OfferCardType } from "@/types"

const tabs = [
  { value: "web", label: "Web", offers },
  { value: "mobile", label: "Mobile", offers: mobileOffers },
]

function OfferCard({ offer, index }: { offer: OfferCardType; index: number }) {
  const [, from, amount] = offer.price?.match(/^(From )?(.*)$/) ?? []

  return (
    <TorchCard className="rise-in flex h-full flex-col p-6 sm:p-7" style={{ "--i": index } as CSSProperties}>
      <h4 className="text-xl font-bold">{offer.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:min-h-[2.85rem]">{offer.description}</p>

      <p className="mt-6 font-mono text-3xl font-semibold tabular-nums">
        {from && <span className="mr-2 text-sm font-normal text-muted-foreground">From</span>}
        {amount ? <CountUp value={amount} /> : <span className="text-xl">On request</span>}
      </p>

      <p className="mt-6 text-sm font-semibold">What does this include?</p>
      <ul className="mt-3 flex-1 space-y-2.5 text-sm">
        {offer.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
            {feature}
          </li>
        ))}
      </ul>

      <Button variant="outline" className="mt-8 h-11 w-full" asChild>
        <Link href="#contatti">Let&apos;s chat</Link>
      </Button>
    </TorchCard>
  )
}

export default function Offers() {
  const [tab, setTab] = useState(tabs[0].value)

  return (
    <Tabs.Root value={tab} onValueChange={setTab}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl font-bold sm:text-3xl">Offers</h3>
        <Tabs.List aria-label="Offer type" className="inline-flex rounded-lg bg-secondary p-1">
          {tabs.map(({ value, label }) => (
            <Tabs.Trigger
              key={value}
              value={value}
              className="relative h-10 rounded-md px-4 text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground data-[state=active]:text-signal-foreground"
            >
              {tab === value && (
                <motion.span
                  layoutId="offer-tab"
                  className="absolute inset-0 rounded-md bg-foreground"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative">
                {label}<span className="max-sm:sr-only"> Development</span>
              </span>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>

      {tabs.map(({ value, offers }) => (
        <Tabs.Content key={value} value={value} className="mt-8 rounded-xl">
          <ul className="grid gap-5 md:grid-cols-3">
            {offers.map((offer, index) => (
              <li key={offer.title}>
                <OfferCard offer={offer} index={index} />
              </li>
            ))}
          </ul>
        </Tabs.Content>
      ))}

      <div className="mt-12 flex flex-col items-start gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-semibold">Didn&apos;t find what you were looking for? Just shoot me a text!</p>
        <Button size="lg" asChild>
          <Link href="#contatti">Let&apos;s chat</Link>
        </Button>
      </div>
    </Tabs.Root>
  )
}
