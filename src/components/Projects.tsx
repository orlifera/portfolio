import { projects } from '@/data/';
import ProjectCard from './ProjectCard';
import Image from 'next/image';


export default function Projects() {
    console.log(projects);
    return (
        <div id='projects' className='min-h-screen mt-8 flex flex-col w-full'>
            <h2 className='text-xl mt-6 mx-auto' > Hey, take a look around. {" "}
                <span className='group'>
                    It&apos;s not much, but it&apos; honest work.
                    <div className='w-[40%] hidden group-hover:block flex-col items-center mx-auto justify-center mt-6'>
                        <Image
                            src="/easteregg.avif"
                            alt="Easter Egg"
                            width={300}
                            height={300}
                            className='rounded w-full mx-auto'
                        />
                        <p className='text-center text-sm'>Hey, you found the easter egg! 🥚</p>
                    </div>
                </span>

            </h2>
            <h1 className='text-4xl font-extrabold text-center my-8'>My Projects</h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
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