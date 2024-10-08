import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Technologies = () => {
  return (
    <div className="border-b border-black pb-24">
        <h2 className="my-20 text-center text-4xl bg-gradient-to-t from-cyan-200 via-neutral-300 to-cyan-400 bg-clip-text text-transparent">Technologies </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 text-7xl">
            <div className="rounded-2xl border-4 border-black p-4" >
                <RiReactjsLine className=" text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-black p-4" >
                <TbBrandNextjs />
            </div>
            <div className="rounded-2xl border-4 border-black p-4" >
                <SiMongodb className=" text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-black p-4" >
                <FaJs className=" text-cyan-700"/>
            </div>
            <div className="rounded-2xl border-4 border-black p-4" >
                <VscVscode className=" text-blue-500"/>
            </div>
            <div className="rounded-2xl border-4 border-black p-4" >
                <FaNodeJs className=" text-green-500"/>
            </div>
           


        </div>
    </div>
  )
}

export default Technologies