import { ProjectCardType } from "@/types";

export const projects: ProjectCardType[] = [
    {
        title: "MLTech Store",
        description: "E-commerce website made during my third year as a course project. It's the clone of my company's website, specializing in custom-built PCs and accessories.",
        tags: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "Netlify"],
        image: ["/mltech.png"],
        githubLink: "https://github.com/orlifera/TecWeb",
        wip: false,
    },
    {
        title: "Playground",
        description: "A web app I created to experiment with different things, like TicTacToe, a Kanban Board and a spotify widget.",
        tags: ["React", "JavaScript", "CSS", "Netlify", "API", "Vite"],
        image: ["/tictactoe.png", "/kanban.png"],
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
        tags: ["Next.js", "TypeScript", "TailwindCSS", "Netlify", "API"],
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