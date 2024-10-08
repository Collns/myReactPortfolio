import logo from "../assets/CollinsEhirimLogo.png";
import { FaLinkedin} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex item-center justify-between py-6">

        <div className="flex flex-shrink-0 items-center" >
            <img src={logo} alt="logo" className="w-16 h-16 ml-2"/>
            </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <SiGmail/>
        </div>

    
    </nav>
  )
}

export default Navbar