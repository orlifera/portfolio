import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Water from "@/components/Water";
import Diver from "@/components/Diver";
import DepthGauge from "@/components/DepthGauge";
import { obj } from "@/data";

// The sections the depth gauge marks on its ruler, in dive order.
const waypoints = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Log" },
  { id: "contatti", label: "Contact" },
];

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
      />
      <Water>
        <Diver descendTo={obj.icon.key ? obj.icon.link : undefined} />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Contacts />
        <div id="spotify" className="hidden">Music</div>
      </Water>
      <DepthGauge waypoints={waypoints} />
    </>
  );
}
