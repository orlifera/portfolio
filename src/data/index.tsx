import { AboutCardType, experienceType, OfferCardType, timelineType } from "@/types";
import { FaCode, FaUserGraduate } from "react-icons/fa6";
import { HeroType } from "@/types";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiC, SiGnubash, SiPython, SiGit, SiGithub, SiLatex, SiTypst,
  SiLinux, SiNpm, SiMarkdown,
  SiVite,
  SiNetlify,
  SiShadcnui,
  SiFirebase,
  SiStripe,
  SiExpo,
  SiSupabase
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ProjectCardType } from "@/types";
import Image from "next/image";
import SkillPill from "@/components/SkillPill";
import { JSX } from "react";
import { TbBrandReactNative, TbScubaDiving } from "react-icons/tb";



export const cards: AboutCardType[] = [
  {
    icon: <FaCode className='h-8 w-8' />,
    title: "Languages and Frameworks",
    description: "Experience with HTML, CSS, Javascript, Typescript, TailwindCSS, React, Next.js",
    tags: ["HTML", "CSS", "Typescript", "TailwindCSS", "React", "NextJS", "ReactNative"]
  },
  {
    icon: <FaUserGraduate className='h-8 w-8' />,
    title: "Education and Experience",
    description: "BsC in Computer Science from University of Padua, ~2 years of experience as a self-taught developer",
    tags: ["BsC", "Computer Science", "Web Development"]
  }, {

    icon: <TbScubaDiving className='h-8 w-8' />,
    title: "Hobbies",
    description: "Scuba diving, hiking and gaming are what keeps me going in my free time, and coffee, lots of coffee.",
    tags: ["Divemaster", "Deep Guide", "Mountain", "Sport", "Coffee"]
  }
]


export const obj: HeroType = {
  title: "Orlando V. M. Ferazzani",
  subtitle: "Fullstack Developer based in Padua. I have a BsC in Computer Science, with a couple of years of self-taught experience in web development.",
  src: "/uw.PNG",
  alt: "Profile Image",
  button1: {
    text: "See My Work",
    link: "#projects"
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
    node: <SiReact />, title: "React", href: "https://react.dev"
  },
  {
    node: <SiExpo />, title: "Expo", href: "https://expo.dev"
  },
  {
    node: <TbBrandReactNative />, title: "React Native", href: "https://reactnative.dev"
  },
  {
    node: <SiSupabase />, title: "Supabase", href: "https://supabase.com"
  },
  {
    node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org"
  },
  {
    node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org"
  },
  {
    node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com"
  },
  { node: <SiHtml5 />, title: "HTML", href: "" },
  {
    node: <SiCss />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  { node: <SiGnubash />, title: "Bash", href: "" },
  {
    node: <SiPython />, title: "Python", href: "https://www.python.org"
  },
  {
    node: <SiGit />, title: "Git", href: "https://git-scm.com"
  },
  {
    node: <SiGithub />, title: "GitHub", href: "https://github.com"
  },
  {
    node: <SiLatex />, title: "LaTeX", href: "https://latex.org"
  },
  {
    node: <SiTypst />, title: "Typst", href: "https://typst.app"
  },
  {
    node: <SiLinux />, title: "Linux", href: "https://linux.org"
  },
  {
    node: <SiNpm />, title: "NPM", href: "https://www.npmjs.com"
  },
  {
    node: <SiMarkdown />, title: "Markdown", href: "https://www.markdownguide.org"
  },
  { node: <VscVscodeInsiders />, title: "VSCode", href: "https://code.visualstudio.com" },

]


export const projects: ProjectCardType[] = [
  // {
  //     title: "MLTech Store",
  //     description: "E-commerce website made during my third year as a course project. It's the clone of my company's website, specializing in custom-built PCs and accessories.",
  //     tags: ["NextJS", "TypeScript", "TailwindCSS", "Stripe", "Netlify"],
  //     image: ["/mltech.png"],
  //     githubLink: "https://github.com/orlifera/TecWeb",
  //     wip: false,
  // },
  {
    title: "Playground",
    description: "A web app I created to experiment with different things, like TicTacToe, a Kanban Board and a spotify widget.",
    tags: ["React", "JavaScript", "CSS", "Netlify", "API", "Vite"],
    image: ["/playground1-1.webp", "/playground1-2.webp", "/playground1-3.webp", "/playground1-4.webp"],
    githubLink: "https://github.com/orlifera/TTT-Kanban",
    demoLink: "https://orli-tictactoe-kanban.netlify.app/",
    wip: false,
  },
  {
    title: "Thinky",
    description: "My BsC Thesis project. An interactive WebApp made for UniPD's OpenDay activities. It's built to be used strictly under guidance of a professor, and its purpose is to show students that computer science is not so hard, through a series of interactive exercises about syncronization problems.",
    tags: ["React", "TypeScript", "TailwindCSS", "Firebase", "NextJS", "Netlify", "ShadcnUI"],
    image: ["/thinky1.webp", "/thinky2.webp", "/thinky3.webp", "/thinky4.webp", "/thinky5.webp", "/thinky6.webp", "/thinky7.webp"],
    githubLink: "https://github.com/orlifera/Thinky",
    demoLink: "https://prodotto.netlify.app/",
    wip: false,
  },
  {
    title: "Feeldive diving center",
    description: "Modern website built for the diving center I work at. It features a e-commerce system to buy courses, and all other info about the center",
    tags: ["NextJS", "TailwindCSS", "ShadcnUI", "Stripe", "TypeScript"],
    image: ["/feeldive.webp", "/feeldive2.webp"],
    githubLink: "https://github.com/orlifera/feeldive",
    demoLink: "https://feeldive.netlify.app",
    wip: true,
  }, {
    title: "Quote Generator",
    description: "A simple PC Quote generator app that I personally use to created quotes for my clients.",
    tags: ["React", "Typescript", "TailwindCSS", "Netlify"],
    image: ["/quotegen1.webp", "/quotegen2.webp"],
    githubLink: "https://github.com/orlifera/quotegen",
    demoLink: "https://quotegenml.netlify.app/",
    wip: true,
  },
  {
    title: "Parkito Website",
    description: "Main website for the startup I'm currently working at. Parkito it's a rising reality in the short-term rental industry. We are like AirBnB but for private parkings.",
    tags: ["NextJS", "Typescript", "TailwindCSS", "Netlify", "ShadcnUI"],
    image: ["/parkito-web.webp", "/parkito-web2.webp"],
    githubLink: "/no",
    demoLink: "https://parkito.app/",
    wip: false,
  },
  {
    title: "Parkito Host Dashboard",
    description: "Host Dashboard for the startup I'm currently working at. This CRUD web application is only accessible for Hosts, users who rent their parking through our platform.",
    tags: ["NextJS", "Typescript", "TailwindCSS", "Netlify", "ShadcnUI", "Supabase", "Auth", "CRUD"],
    image: ["/parkito-dashboard.webp", "/parkito-dashboard2.webp"],
    githubLink: "/no",
    demoLink: "/no",
    wip: false,
  },
  {
    title: "Parkito App",
    description: "Parkito's mobile app. This is the core of the Startup, the main product and where the magic happens.",
    tags: ["React Native", "Uniwind", "Typescript", "TailwindCss", "Expo", "Supabase", "CRUD"],
    image: ["/parkito-app.webp", "/parkito-app2.webp"],
    githubLink: "/no",
    demoLink: "https://parkito.onelink.me/86z0/bjekqlbd",
    wip: false,
  },
  {
    title: "GitHub Profile",
    description: "Visit my GitHub profile to see more projects and code samples.",
    tags: ["GitHub", "Projects", "Code"],
    image: ["/github.webp"],
    githubLink: "https://github.com/orlifera",
    wip: false,
  }
];


export const offers: OfferCardType[] = [
  {
    title: "Basic Website",
    description: "A complete web presence, in just three pages.",
    features: [
      "Minimal & modern design with animations",
      "Full responsiveness",
      "Up to 3 pages",
      "Performance optimization",
      "Accessibility compliance WCAG AAA",
      "Contact form",
    ],
    spotlightColor: "rgba(0, 229, 255, 0.2)",
    price: "starting from €350",
  },
  {
    title: "Website",
    description: "Everything in the Landing Page, scaled up to a full multi-page experience.",
    features: [
      "Everything included in Landing Page",
      "Up to 10 pages",
      "PostHog analytics integration",
      "Custom domain setup",
      "SEO optimization across all pages",
      "Multilingual support",
    ],
    spotlightColor: "rgba(196, 168, 130, 0.2)",
    price: "Starting from €500"
  },
  {
    title: "Full-Stack Website",
    description: "The complete package — unlimited pages, database and content management built in.",
    features: [
      "Everything included in Website",
      "Unlimited pages",
      "Database connection & setup",
      "Content management system",
      "User authentication",
      "Custom API integrations",
    ],
    spotlightColor: "rgba(244, 114, 182, 0.2)",
    price: "Starting from €1500"
  },
];

export const mobileOffers: OfferCardType[] = [
  {
    title: "Starter App",
    description: "A focused mobile app with the core screens your idea needs.",
    features: [
      "Up to 5 screens",
      "iOS & Android (React Native)",
      "Minimal & modern UI",
      "Full responsiveness across devices",
      "Basic navigation and routing",
      "App Store / Play Store submission",
    ],
    spotlightColor: "rgba(0, 229, 255, 0.2)",
    price: "Starting from €500"
  },
  {
    title: "Basic App",
    description: "A complete app experience with backend and real-time features.",
    features: [
      "Everything in Starter App",
      "Unlimited screens",
      "Push notifications",
      "Authentication (email, social login)",
      "Supabase / Firebase backend integration",
      "Priority support",
    ],
    spotlightColor: "rgba(196, 168, 130, 0.2)",
    price: "Starting from €1200"
  },
  {
    title: "Full-Stack App",
    description: "End-to-end product — app, backend, dashboard and content management.",
    features: [
      "Everything in Full App",
      "Custom requests"
    ],
    spotlightColor: "rgba(244, 114, 182, 0.2)",
  },
];

export const iconMap: Record<string, JSX.Element> = {
  html: <SiHtml5 />,
  css: <SiCss />,
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
  css3: <SiCss />,
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
  reactnative: <TbBrandReactNative />,
  expo: <SiExpo />,
  supabase: <SiSupabase />,
  uniwind: <SiTailwindcss />,

};

export function getIcon(tag: string) {
  return iconMap[tag.toLowerCase()] || null;
}


export const experienceData: experienceType[] = [
  {
    year: "Nov, 2025 - Curr.",
    position: "Fullstack Developer",
    company: "Parkito.app",
    description: "I joined Parkito.app as a FrontEnd Developer, where I worked on the development of the company's website and its Mobile App system. I was responsible for the implementation of the website's user interface and the integration of the user interface and user experience with the company's app.",
    image: "/parkito.webp",
    tags: ["Programming", "Typescript", "React", "NextJS", "TailwindCSS", "ShadcnUI", "Firebase", "Netlify", "API", "React Native"]
  },
  {
    year: "Jul, 2025",
    position: "Bachelor's Degree in Computer Science",
    company: "University of Padua",
    description: "Completed a Bachelor's degree in Computer Science with a thesis on Web Development, gaining knowledge in programming, algorithms, data structures, and more. Developed skills in problem-solving, critical thinking, and teamwork.",
    image: "/IMG_7993.webp",
    tags: ["Programming", "Algorithms", "Data Structures", "Problem-Solving", "Critical Thinking", "Teamwork"]
  },
  {
    year: "Apr, 2022 - Curr.",
    position: "Founder",
    company: "ML Tech",
    description: "Decided to take a leap and start my own business, specializing in custom-built PCs and accessories. Gained experience in entrepreneurship, marketing, and customer service.",
    image: "/mllogo.webp",
    tags: ["Entrepreneurship", "Marketing", "Customer Service", "Leadership", "Business Development"]
  }, {
    year: "Jul, 2021",
    position: "High School Diploma",
    company: "Liceo Scientifico ISIS Follonica",
    description: "Completed a high school diploma in scientific studies, gaining knowledge in mathematics, physics, chemistry, and more. Developed skills in analytical thinking, research, and communication.",
    tags: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking", "Research", "Communication"]
  }, {
    year: "Jun, 2019 - Curr.",
    position: "Divemaster and Deep scuba guide",
    company: "Feeldive Diving Center",
    description: "Growing up on the sea, I developed a passion for diving and underwater exploration. In 2019, I became a Divemaster and Deep scuba guide at Feeldive Diving Center, where I assist instructors in training and guiding certified divers on underwater excursions. This role has allowed me to combine my love for the ocean with my skills in leadership and communication, in addition to saftey and responsability.",
    image: "/uw.PNG",
    tags: ["Customer Service", "Communication", "Safety Procedures"]
  },
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
