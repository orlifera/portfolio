export type HeroType = {
    title: string
    subtitle: string
    src: string
    alt: string
    button1?: {
        text: string
        link: string
    }
    button2?: {
        text: string
        link: string
    }
    icon: { key: boolean, link: string }
    socials: boolean
    classname?: string
}

export type AboutCardType = {
    icon: JSX.Element
    title: string
    description: string
    tags: string[]
}


export type ProjectCardType = {
    image: string[]
    title: string
    description: string
    tags: string[]
    githubLink?: string
    demoLink?: string
    wip: boolean
}

export type SkillPillType = {
    node?: JSX.Element | null
    title: string
    href?: string | null
}