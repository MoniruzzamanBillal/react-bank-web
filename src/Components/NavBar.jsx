import React, { useState } from "react";
import Styles from "../Style";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants/constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="navContainer  p-2">
        <div className="navWrapper flex justify-between items-center self-center">
          {/* left side of nav starts  */}
          <div className="navLeft ">
            <div className="navLogo w-[50%]">
              <img src={logo} alt="" />
            </div>
          </div>
          {/* left side of nav ends  */}

          {/* right side of nav starts  */}
          <div className="navRight ">
            {/* for pc view  */}
            <div className="navRightPC hidden sm:flex">
              <ul className="flex">
                {navLinks.map((ele, ind) => (
                  <>
                    <li
                      className={`  ${
                        ind === navLinks.length - 1 ? "mr-0" : "mr-8"
                      } text-[#FFFFFF] text-lg  `}
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
              <div className="menuBtn">
                {/* <img src={menu} alt="" onClick={() => setToggle(!toggle)} /> */}
                <img
                  src={toggle ? close : menu}
                  alt=""
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              {/* menu btn ends  */}

              {/* ul links  */}

              <div
                className={`mobileMenu ${
                  toggle ? "flex " : "hidden"
                } bg-black-gradient absolute top-8 right-0 p-6 text-[#FFFFFF] w-[full]`}
              >
                <ul className="flex flex-col">
                  {navLinks.map((ele, ind) => (
                    <>
                      <li
                        className={`  ${
                          ind === navLinks.length - 1 ? "mb-0" : "mb-2"
                        } text-[#FFFFFF] text-lg  `}
                      >
                        <a
                          href={`#${ele.id}`}
                          onClick={() => setToggle(!toggle)}
                        >
                          {" "}
                          {ele.title}{" "}
                        </a>
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
