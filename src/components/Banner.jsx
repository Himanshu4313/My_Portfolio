import profilePic from "../assets/profile-pic.png";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import resume from "../assets/Resume_Himanshu.pdf";
const Banner = () => {
    

     function downloadCV(){
           window.open(resume)
     }



  return (
    <>
      {/* container div */}
      <div className="h-[90vh] flex justify-center items-center gap-20 flex-col md:flex-row lg:flex-row">
        <div className="py-4 px-4 md:py-0 md:px-0 lg:py-0 lg:px-0">
          <img
            src={profilePic}
            alt="Himanshu profile pic"
            className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-xl text-gray-600">Hello, I'm</p>
          <h1 className=" text-3xl lg:text-5xl md:text-5xl font-semibold py-3">Himanshu Kumar</h1>
          <p className="text-3xl font-semibold text-gray-600 ">Web Developer</p>
          <div className="py-4 flex justify-center items-center gap-4">
            <button className="border-gray-950 border-2 px-5 py-3 text-base font-medium rounded-full hover:bg-gray-800 hover:text-white hover:ease-in-out hover:duration-700" onClick={downloadCV}>
              Download CV
            </button>
            <button className="border-gray-950 border-2 px-5 py-3 text-base font-medium rounded-full bg-gray-800 text-white hover:bg-gray-950 hover:transition-all hover:duration-700 ">
              Contact Info
            </button>
          </div>
          <div className=" flex justify-center items-center gap-3 md:gap-2 lg:gap-2 ">
            <a href="https://www.linkedin.com/in/himanshukumar24/"><SiLinkedin className=" text-4xl md:text3xl lg:text-3xl rounded-full cursor-pointer hover:scale-110 hover:duration-700"/></a>
            <a href="https://github.com/Himanshu4313"><FaGithub className="text-4xl md:text3xl lg:text-3xl rounded-full cursor-pointer hover:scale-110 hover:duration-700" /></a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
