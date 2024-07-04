import profilePic from "../assets/profile-pic.png";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      {/* container div */}
      <div className="h-[90vh] border-2 flex justify-center items-center gap-14 flex-col md:flex-row lg:flex-row">
        <div className="border-2">
          <img
            src={profilePic}
            alt="Himanshu profile pic"
            className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[200px] sm:h-[200px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-xl text-gray-600">Hello, I'm</p>
          <h1 className="text-5xl font-semibold py-3">Himanshu Kumar</h1>
          <p className="text-3xl font-semibold text-gray-600 ">Web Developer</p>
          <div className="py-4 flex justify-center items-center gap-4">
            <button className="border-gray-950 border-2 px-5 py-3 text-base font-medium rounded-full hover:bg-gray-800 hover:text-white">
              Download CV
            </button>
            <button className="border-gray-950 border-2 px-5 py-3 text-base font-medium rounded-full bg-gray-800 text-white hover:bg-gray-950">
              Contact Info
            </button>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <SiLinkedin className="text-3xl rounded-full cursor-pointer"/>
            <FaGithub className="text-3xl rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
