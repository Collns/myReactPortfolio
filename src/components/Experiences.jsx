import {EXPERIENCES } from "../constants";
const Experiences = () => {
  return (
    <div className="border-b border-black pb-4">
        <h2 className="my-20 text-4xl text-center bg-gradient-to-r from-cyan-300 via-slate-300 to-cyan-600 bg-clip-text text-transparent">
        Experiences
        </h2>
        <div>
          {EXPERIENCES.map((experience, volume) => (
            <div key={volume} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm font-light"> {experience.year} </p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
              <h6> {experience.role} -{" "}
                 <span className="text-sm text-cyan-500">
                {experience.company}
                </span></h6>
                <p className="font-light mb-4 tracking-tighter"> {experience.description} </p>
              </div>


            </div>

          ))}
          
        </div>
    </div>
  )
}

export default Experiences