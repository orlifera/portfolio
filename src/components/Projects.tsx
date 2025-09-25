import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';


export default function Projects() {
    console.log(projects);
    return (
        <div className='min-h-screen'>
            <h1 className='text-4xl font-extrabold text-center my-8'>Check out my Projects</h1>
            <div id='projects' className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        image={project.image}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                        wip={project.wip}
                    />
                ))}
            </div>
        </div>
    )
}