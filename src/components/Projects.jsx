import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-black pb-4">
        <h2 className="my-20 text-center text-4xl bg-gradient-to-r from-cyan-300 via-slate-300 to-cyan-600 bg-clip-text text-transparent">Projects</h2>
        <div>
            {PROJECTS.map((project, volume) => (
                <div key={volume} className="mb-8 flex flex-wrap lg:justify-center ">
                    <div className="w-full lg:w-1/4">
                    <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded"/>
                    </div>
                    <div className="w-full max-x-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-cyan-300 bg-clip-text text-transparent "> {project.title} </h6>
                    <p className="font-light mb-4 tracking-tighter">{project.description}</p>
                {project.technologies.map((techsign, index) => (
                    <span key={index} className="mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-100 text-cyan-600">
                        {techsign}
                    </span>

                ))}
 
                    </div>
                </div>

        ))}
        </div>
        </div>
  )
}

export default Projects;