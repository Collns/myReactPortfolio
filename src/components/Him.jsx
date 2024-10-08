import { HIM_CONTENT } from "../constants";
import profilePic from "../assets/Mypicture.jpg";
const Him = () => {
return(

    <div className="border-b border-black pb-4 lg:mb-35 ">
        <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl">Collins Ehirim</h1>
                <span className="bg-gradient-to-r from-cyan-300 via-slate-300 to-cyan-600 bg-clip-text text-3xl tracking-tight text-transparent">
                    Aspiring Software Engineer</span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HIM_CONTENT}
                    </p>
            </div>
            </div>
                <div className="w-full lg:w-1/2 lg:p-8"> 
                <div className="flex justify-center">
                <img  className="rounded-2xl " src={profilePic} alt="Collins Ehirim" />
                </div>

                </div>
        </div>
    </div>
)
}

export default Him