import { projects } from '@/data/';
import HonestWork from './HonestWork';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Projects() {
  return (
    <section id='projects' data-depth='2' className='py-[clamp(4.5rem,11vw,9rem)]'>
      <div className='shell'>
        <SectionHeader
          lead={<p>Hey, take a look around. <HonestWork /></p>}
          title="My projects"
        />

        <ul className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(19rem,100%),1fr))] gap-5 sm:mt-16 sm:gap-6'>
          {projects.map((project, index) => (
            <Reveal as='li' key={project.title} index={index % 3}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                wip={project.wip}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
