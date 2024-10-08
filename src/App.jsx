import Navbar from "./components/Navbar";
import Him from "./components/Him";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experince from "./components/Experiences";
import Experiences from "./components/Experiences";
import Projects from "./components/projects";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white-200 ">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] 
        bg-[radial-gradient(#ffffff88_1px,#1a2a3d_1px)] bg-[size:20px_20px]"></div>

      </div>
       

      <div className="container mx-auto px-auto ">
      <Navbar/>

      <Him/>

      <About/>

      <Technologies/>

      <Experiences/>
      
      <Projects/>

      <Contact/>




      </div>
     
    </div>

  );
};

export default App;