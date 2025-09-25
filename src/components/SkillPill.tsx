import { SkillPillType } from '@/types'
import React from 'react'

export default function SkillPill({ node, title }: SkillPillType) {
    return (
        <div
            className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs hover:bg-accent-foreground/50 hover:text-white"
        >
            {node ? node : null}{title}
        </div>
    )
}