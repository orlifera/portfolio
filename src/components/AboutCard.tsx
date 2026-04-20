"use client"

import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { AboutCardType } from "@/types"
import SkillPill from "@/components/SkillPill"
import Link from "next/link"
import BorderGlow from "./BorderGlow"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'


export default function AboutCard({ icon, title, description, tags }: AboutCardType) {

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const bgCard = mounted && resolvedTheme === 'dark' ? '#1c1917' : '#ffffff';


  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor={bgCard}
      borderRadius={10}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated
      colors={['#c084fc', '#f472b6', '#38bdf8']}
      className="flex flex-col justify-between h-full rounded-lg p-4">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="flex justify-center">{icon}</CardTitle>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <Link href={`https://www.google.com/search?q=${tag}`} key={index} target="_blank" rel="noopener noreferrer">
            <SkillPill title={tag} text="text-xs" />
          </Link>
        ))}
      </CardFooter>
    </BorderGlow>

  )
}