import { SkillPillType } from '@/types'
import React from 'react'
import { getIcon } from '@/data'

export default function SkillPill({ title, text }: SkillPillType) {
    const icon = getIcon(title)
    return (
        <div
            className={`bg-primary/70 text-background p-2 rounded-full hover:bg-muted/50 hover:text-white flex items-center gap-1 ${text}`}
        >
            {icon ? icon : null}{title}
        </div>
    )
}