import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { HeroType } from "@/types"

const obj: HeroType = {
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

export default function Home() {
  return (
    <>
      <Hero
        title={obj.title}
        subtitle={obj.subtitle}
        src={obj.src}
        alt={obj.alt}
        button1={obj.button1}
        button2={obj.button2}
        icon={obj.icon}
        socials={obj.socials}
        classname="brightness-75"
      />
      <About />
      <Projects />
      <div id="contatti" className="h-screen">
        Contacts
      </div>
    </>
  );
}
