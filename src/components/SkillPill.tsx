import { SkillPillType } from '@/types'
import React from 'react'
import { getIcon } from '@/data'

export default function SkillPill({ title, text = 'text-xs' }: SkillPillType) {
    const icon = getIcon(title)
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-md border bg-secondary px-2.5 py-1 font-mono text-secondary-foreground transition-colors duration-200 [a:hover>&]:border-foreground/50 [a:hover>&]:bg-accent ${text}`}
        >
            {icon ? icon : null}{title}
        </span>
    )
}
