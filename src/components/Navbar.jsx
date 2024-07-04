import "../components/Navbar.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  const [hamburger, sethamburger] = useState(true);

  function showicons() {
    sethamburger(!hamburger);
  }
  return (
    <>
      <div className=" flex  items-center justify-between gap-2 ">
        <div className="w-1/2 ">
          <img
            src={logo}
            alt="logo"
            className=" w-28 h-24 relative lg:left-32 "
          />
        </div>
        <div
          className="w-1/2 flex justify-center items-center  py-2 sm:hidden md:hidden lg:block"
          id="navbar_container"
        >
          <ul className=" flex justify-center items-center gap-9 font-normal text-2xl">
            <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75">
              <a href="#experience">Experience</a>
            </li>
            <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-neutral-400 hover:underline hover:decoration-2 hover:duration-75">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {hamburger ? (
          <div className="text-3xl px-8 py-4 lg:hidden font-semibold">
            <RxHamburgerMenu
              className="cursor-pointer"
              onClick={() => showicons()}
            />
          </div>
        ) : (
          <>
            <div className="text-3xl px-8 py-4 lg:hidden font-semibold">
              <RxCross1
                className="cursor-pointer"
                onClick={() => showicons()}
              />
            </div>
          </>
        )}
      </div>
      {
       
       (!hamburger &&     
        <div className="lg:hidden bg-white py-4 px-4 flex justify-center items-center text-xl font-semibold relative bottom-8">
        <ul>
         <li className="px-1 py-1">About</li>
         <li className="px-1 py-1">Experience</li>
         <li className="px-1 py-1">Projects</li>
         <li className="px-1 py-1">Contact</li>
        </ul>
       </div>
       )
            
        
      }
      
    </>
  );
};
export default Navbar;
