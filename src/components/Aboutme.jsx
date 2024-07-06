import aboutpic from "../assets/about-pic.png";
import { SlBadge } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
const AboutMe = () => {
  return (
    <>
      {/* container div */}
      <div className="h-[90vh] my-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-lg text-gray-700">Get To Know More</p>
          <h1 className="text-5xl font-bold">About Me</h1>
        </div>
        <div className="px-4 py-4 flex items-center justify-center gap-2 my-4">
          <div className="w-[35vw] flex items-center justify-center">
            <img src={aboutpic} alt="profile_pic" title="Himanshu avatar" className="w-[400px] h-[400px] rounded-2xl"/>
          </div>
          <div className="w-[55vw] px-4 py-4">
                <div className="flex items-center justify-start gap-6">
                       <div className="border-2 border-gray-400 rounded-2xl flex justify-center items-center flex-col  w-[22vw] h-[24vh] py-5 px-5">
                           <SlBadge className="text-4xl my-2"/> 
                           <h2 className="text-2xl font-semibold">Experience</h2> 
                           <p className="text-gray-700 text-lg">Fresher</p>
                           <p className="text-gray-700 text-lg">Web Development</p>
                       </div>
                       <div className="border-2 border-gray-400 rounded-2xl flex justify-center items-center flex-col  w-[22vw] h-[24vh] py-5 px-5">
                              <IoPersonSharp className="text-2xl my-2"/>
                              <h2 className="text-2xl font-semibold">Education</h2>
                              <p className="text-gray-700 text-lg">BCA</p>
                              <p className="text-gray-700 text-sm">(Bachelors Of Computer Application)</p>
                       </div>
                </div>
                <div className="my-5 text-lg text-gray-600 ">
                    <p>Hello! I'm Himanshu Kumar, a passionate full stack developer eager to start my professional journey. I specialize in both front-end and back-end development, bringing creativity and precision to every project. My goal is to deliver innovative solutions and collaborate effectively. Outside of coding, I enjoy travelling .</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
