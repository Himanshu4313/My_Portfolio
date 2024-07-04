import '../components/Navbar.css'
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const [hamburger, sethamburger] = useState(true);

    function showicons(){
        sethamburger(!hamburger);
    }
    return (
        <>
               <div className=" flex  items-center justify-evenly py-6 px-4 gap-2 ">
                       <div className="w-1/2 flex justify-center items-center ">
                            <h3 className=" font-medium lg:text-4xl md:text-3xl sm:text-2xl text-black">Himanshu Kr.</h3>
                       </div>
                       <div className="w-1/2 flex justify-center items-center  py-2 sm:hidden md:hidden lg:block" id='navbar_container'>
                       

                            <ul className=" flex justify-center items-center gap-9 font-normal text-2xl">
                                <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75"><a href="#about">About</a></li>
                                <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75"><a href="#experience">Experience</a></li>
                                <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75"><a href="#projects">Projects</a></li>
                                <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75"><a href="#contact">Contact</a></li>
                            </ul>
                       </div>

                            <div className=" pr-5 lg:hidden sm:block md:block ">
                                {
                                    hamburger ? <RxHamburgerMenu className="cursor-pointer text-3xl font-medium" onClick={() => showicons()}/> : (
                                    
                                    // <RxCross1 />
                                    <>
                                         <div className="flex  justify-between gap-4">
                                             <div>
                                                <ul className="flex flex-col gap-2 font-normal text-2xl">
                                                    <li><a href="#about">About</a></li>
                                                    <li><a href="#experience">Experience</a></li>
                                                    <li><a href="#projects">Projects</a></li>
                                                    <li><a href="#contact">Contact</a></li>
                                                </ul>
                                             </div>
                                             <div>
                                             <RxCross1 className="cursor-pointer text-3xl font-medium" onClick={() => showicons()}/>
                                             </div>
                                         </div>
                                    </>
                                )
                                }
                                   
                                  
                            </div>
                           
                       </div>
               
        </>
    );
}
export default Navbar;