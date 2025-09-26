import { AboutCardType, experienceType, timelineType } from "@/types";
import { FaCode, FaUserGraduate, FaLaptopCode } from "react-icons/fa6";
import { HeroType } from "@/types";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
    SiC, SiGnubash, SiPython, SiGit, SiGithub, SiLatex, SiTypst,
    SiLinux, SiNpm, SiMarkdown,
    SiVite,
    SiNetlify,
    SiShadcnui,
    SiFirebase,
    SiStripe
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ProjectCardType } from "@/types";
import Image from "next/image";
import SkillPill from "@/components/SkillPill";
import { JSX } from "react";



export const cards: AboutCardType[] = [
    {
        icon: <FaCode className='h-8 w-8' />,
        title: "Languages and Frameworks",
        description: "Experience with HTML, CSS, Javascript, Typescript, TailwindCSS, React, Next.js",
        tags: ["HTML", "CSS", "Typescript", "TailwindCSS", "React", "NextJS"]
    },
    {
        icon: <FaUserGraduate className='h-8 w-8' />,
        title: "Education and Experience",
        description: "BsC in Computer Science from University of Padua, ~2 years of experience as a self-taught developer",
        tags: ["BsC", "Computer Science", "Web Development"]
    },
    {
        icon: <FaLaptopCode className='h-8 w-8' />,
        title: "Projects",
        description: "Various WebApps built, including my BsC Thesis project. Always trying to learn and improve",
        tags: ["WebApp", "Feeldive"]
    }
]


export const obj: HeroType = {
    title: "Orlando V. M Ferazzani",
    subtitle: "Frontend Developer based in Padua. I have a BsC in Computer Science, with a a couple of years of experience in web development as a self-taught developer.",
    src: "/uw.PNG",
    alt: "Profile Image",
    button1: {
        text: "See My Work",
        link: "/projects"
    },
    button2: {
        text: "My CV",
        link: "/CV_ENG.pdf"
    },
    icon: { key: true, link: "#about" },
    socials: true
}



export const techLogos = [
    {
        node: <SiReact />, title: "React", href: "https:/ / react.dev"
    },
    {
        node: <SiNextdotjs />, title: "Next.js", href: "https:/ / nextjs.org"
    },
    {
        node: <SiTypescript />, title: "TypeScript", href: "https:/ / www.typescriptlang.org"
    },
    {
        node: <SiTailwindcss />, title: "Tailwind CSS", href: "https:/ / tailwindcss.com"
    },
    { node: <SiHtml5 />, title: "HTML", href: "" },
    {
        node: <SiCss3 />, title: "CSS", href: "https:/ / developer.mozilla.org / en - US / docs / Web / CSS"
    },
    {
        node: <SiC />, title: "C", href: "https:/ / en.wikipedia.org / wiki / C_(programming_language)"
    },
    { node: <SiGnubash />, title: "Bash", href: "" },
    {
        node: <SiPython />, title: "Python", href: "https:/ / www.python.org"
    },
    {
        node: <SiGit />, title: "Git", href: "https:/ / git - scm.com"
    },
    {
        node: <SiGithub />, title: "GitHub", href: "https:/ / github.com"
    },
    {
        node: <SiLatex />, title: "LaTeX", href: "https:/ / latex.org"
    },
    {
        node: <SiTypst />, title: "Typst", href: "https:/ / typst.app"
    },
    {
        node: <SiLinux />, title: "Linux", href: "https:/ / linux.org"
    },
    {
        node: <SiNpm />, title: "NPM", href: "https:/ / www.npmjs.com"
    },
    {
        node: <SiMarkdown />, title: "Markdown", href: "https:/ / www.markdownguide.org"
    },
    { node: <VscVscodeInsiders />, title: "VSCode", href: "https:/ / code.visualstudio.com" },
]


export const projects: ProjectCardType[] = [
    {
        title: "MLTech Store",
        description: "E-commerce website made during my third year as a course project. It's the clone of my company's website, specializing in custom-built PCs and accessories.",
        tags: ["NextJS", "TypeScript", "TailwindCSS", "Stripe", "Netlify"],
        image: ["/mltech.png"],
        githubLink: "https://github.com/orlifera/TecWeb",
        wip: false,
    },
    {
        title: "Playground",
        description: "A web app I created to experiment with different things, like TicTacToe, a Kanban Board and a spotify widget.",
        tags: ["React", "JavaScript", "CSS", "Netlify", "API", "Vite"],
        image: ["/playground1-1.png", "/playground1-2.png", "/playground1-3.png", "/playground1-4.png"],
        githubLink: "https://github.com/orlifera/TTT-Kanban",
        demoLink: "https://orli-tictactoe-kanban.netlify.app/",
        wip: false,
    },
    {
        title: "Thinky",
        description: "My BsC Thesis project. An interactive WebApp made for UniPD's OpenDay activities. It's built to be used strictly under guidance of a professor, and its purpose is to show students that computer science is not so hard, through a series of interactive exercises about syncronization problems.",
        tags: ["React", "TypeScript", "TailwindCSS", "Firebase", "NextJS", "Netlify", "ShadcnUI"],
        image: ["/thinky1.png", "/thinky2.png", "/thinky3.png", "/thinky4.png", "/thinky5.png", "/thinky6.png", "/thinky7.png"],
        githubLink: "https://github.com/orlifera/Thinky",
        demoLink: "https://prodotto.netlify.app/",
        wip: false,
    }, {
        title: "Playground 2.0",
        description: "Another website I made to experiment and develop my skills. It features a notes section, a dynamic wishlist with an addForm and a watchlist that uses localStorage to save your movies.",
        tags: ["NextJS", "TypeScript", "TailwindCSS", "Netlify", "API"],
        image: ["/playground2-1.png", "/playground2-2.png", "/playground2-3.png", "/playground2-4.png"],
        githubLink: "https://github.com/orlifera/project",
        wip: false,
    },
    {
        title: "Feeldive diving center",
        description: "Modern website built for the diving center I work at. It features a e-commerce system to buy courses, and all other info about the center",
        tags: ["NextJS", "TailwindCSS", "ShadcnUI", "Stripe", "TypeScript"],
        image: ["/feeldive.png", "/feeldive2.png"],
        githubLink: "https://github.com/orlifera/feeldive",
        demoLink: "https://feeldive.netlify.app",
        wip: true,
    }, {
        title: "Quote Generator",
        description: "A simple PC Quote generator app that I personally use to created quotes for my clients.",
        tags: ["React", "Typescript", "TailwindCSS", "Netlify"],
        image: ["/quotegen1.png", "/quotegen2.png"],
        githubLink: "https://github.com/orlifera/quotegen",
        demoLink: "https://quotegenml.netlify.app/",
        wip: true,
    }
];


export const iconMap: Record<string, JSX.Element> = {
    html: <SiHtml5 />,
    css: <SiCss3 />,
    javascript: <SiReact />,
    react: <SiReact />,
    nextjs: <SiNextdotjs />,
    vite: <SiVite />,
    netlify: <SiNetlify />,
    shadcnui: <SiShadcnui />,
    firebase: <SiFirebase />,
    stripe: <SiStripe />,
    typescript: <SiTypescript />,
    tailwindcss: <SiTailwindcss />,
    html5: <SiHtml5 />,
    css3: <SiCss3 />,
    c: <SiC />,
    gnubash: <SiGnubash />,
    python: <SiPython />,
    git: <SiGit />,
    github: <SiGithub />,
    latex: <SiLatex />,
    typst: <SiTypst />,
    linux: <SiLinux />,
    npm: <SiNpm />,
    markdown: <SiMarkdown />,
    vscodeinsiders: <VscVscodeInsiders />,
};

export function getIcon(tag: string) {
    return iconMap[tag.toLowerCase()] || null;
}


export const experienceData: experienceType[] = [
    {
        year: "2025",
        position: "Bachelor's Degree in Computer Science",
        company: "University of Padua",
        description: "Completed a Bachelor's degree in Computer Science with a thesis on Web Development, gaining knowledge in programming, algorithms, data structures, and more. Developed skills in problem-solving, critical thinking, and teamwork.",
        image: "/IMG_7993.png",
        tags: ["Programming", "Algorithms", "Data Structures", "Problem-Solving", "Critical Thinking", "Teamwork"]
    },
    {
        year: "2022",
        position: "Founder",
        company: "ML Tech",
        description: "Decided to take a leap and start my own business, specializing in custom-built PCs and accessories. Gained experience in entrepreneurship, marketing, and customer service.",
        image: "/mllogo.png",
        tags: ["Entrepreneurship", "Marketing", "Customer Service", "Leadership", "Business Development"]
    }, {
        year: "2019",
        position: "Divemaster and Deep scuba guide",
        company: "Feeldive Diving Center",
        description: "Growing up on the sea, I developed a passion for diving and underwater exploration. In 2019, I became a Divemaster and Deep scuba guide at Feeldive Diving Center, where I assist instructors in training and guiding certified divers on underwater excursions. This role has allowed me to combine my love for the ocean with my skills in leadership and communication, in addition to saftey and responsability.",
        image: "/uw.PNG",
        tags: ["Customer Service", "Communication", "Safety Procedures"]
    }, {
        year: "2021",
        position: "High School Diploma",
        company: "Liceo Scientifico ISIS Follonica",
        description: "Completed a high school diploma in scientific studies, gaining knowledge in mathematics, physics, chemistry, and more. Developed skills in analytical thinking, research, and communication.",
        tags: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking", "Research", "Communication"]
    }
]

export const timelineData: timelineType[] = experienceData.map((exp) => ({
    title: `${exp.position} - ${exp.company} (${exp.year})`,
    content: (
        <div className="flex flex-col gap-4 w-full items-center justify-end">
            <div className="md:w-1/3 flex flex-row items-center justify-center w-[50%]">
                {
                    exp.image &&
                    <Image
                        src={exp.image}
                        width={300}
                        height={300}
                        alt={`${exp.year} - ${exp.position} at ${exp.company}`}
                        className="object-contain mb-2 rounded"
                    />
                }
            </div>
            <div className="md:w-2/3">
                <p className="mb-2 text-primary-foreground text-md font-semibold">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, index) => (
                        <SkillPill
                            key={index}
                            title={tag}
                            text="text-sm"
                        />
                    ))}
                </div>
            </div>
        </div>
    ),
}));