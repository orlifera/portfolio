import { AboutCardType } from "@/types";
import { FaCode, FaUserGraduate, FaLaptopCode } from "react-icons/fa6";

export const cards: AboutCardType[] = [
    {
        icon: <FaCode className='h-8 w-8' />,
        title: "Languages and Frameworks",
        description: "Experience with HTML, CSS, Javascript, Typescript, TailwindCSS, React, Next.js",
        tags: ["HTML", "CSS", "Typescript", "TailwindCSS", "React", "Next.js"]
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