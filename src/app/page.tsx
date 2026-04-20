import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import { obj } from "@/data";


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
      <div className="h-20" />
      <About />
      <Projects />
      <Services />
      <div className="h-20" />
      <Experience />
      <Contacts />
      <div id="spotify" className="hidden">Music</div>
    </>
  );
}
