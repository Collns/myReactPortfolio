import AboutImg from "../assets/Aboutmeimg.jpg";
import { ABOUT_CONTENT } from "../constants";
export const About = () => {
return (
    <div className="border-b border-black pb-4 "> 
    <h2 className="my-20 text-center text-4xl bg-gradient-to-t from-cyan-200 via-neutral-300 to-cyan-400 bg-clip-text text-transparent"> About Me </h2>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center ">
                <img className="rounded-2xl " src={AboutImg} alt="About" />
            </div>
            </div>
            <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_CONTENT} </p>
            </div>
        
        </div>
    </div>
</div>
)
}

export default About;
