import React, { useState } from "react";
import Styles from "../Style";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants/constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const menuClick = () => {
    // console.log("menu click");
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <div className="navContainer  p-2 mb-7 sm:mb-12 w-[85%] m-auto  ">
        <div className="navWrapper flex justify-between items-center self-center">
          {/* left side of nav starts  */}
          <div className="navLeft ">
            <div className="navLogo w-[34%] sm:w-[40%] md:w-[44%] ">
              <img src={logo} alt="" />
            </div>
          </div>
          {/* left side of nav ends  */}

          {/* right side of nav starts  */}
          <div className="navRight ">
            {/* for pc view  */}
            <div className="navRightPC hidden sm:flex">
              <ul className="flex ">
                {navLinks.map((ele, ind) => (
                  <>
                    <li
                      key={Math.random() * 100}
                      className={` feature-card px-5 py-2 rounded-md ${
                        ind === navLinks.length - 1 ? "mr-0" : "mr-2"
                      } text-[#FFFFFF] hover:text-red-400 sm:text-sm md:text-base lg:text-lg  cursor-pointer `}
                    >
                      <a href={`#${ele.id}`}> {ele.title} </a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            {/* pc view   */}

            {/* for mobile view  */}

            <div className="phoneView flex relative sm:hidden">
              {/* menu btn  */}
              <div className="menuBtn ">
                <img
                  src={toggle ? close : menu}
                  alt=""
                  onClick={() => menuClick()}
                />
              </div>
              {/* menu btn ends  */}

              {/* ul links  */}
              <div
                className={`mobileMenu ${
                  toggle ? "flex " : "hidden"
                } bg-black-gradient absolute top-[1.8rem] right-0 py-3 px-6 text-[#FFFFFF] w-[full] z-[20]`}
              >
                <ul className="flex flex-col ">
                  {navLinks.map((ele, ind) => (
                    <>
                      <li
                        key={ind}
                        className={`  ${
                          ind === navLinks.length - 1 ? "mb-0" : "mb-3"
                        } text-[#FFFFFF] text-sm cursor-pointer`}
                        onClick={() => menuClick()}
                      >
                        <a href={`#${ele.id}`}>{ele.title}</a>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              {/* ul links ends */}
            </div>
          </div>
          {/* left side of nav ends  */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
