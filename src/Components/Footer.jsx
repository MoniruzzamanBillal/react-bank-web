import React from "react";

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/constants";
import styles from "../Style";

const Footer = () => {
  return (
    <>
      <div className="footerContainer bg-amber-300 ">
        <div className="footerWrapper bg-fuchsia-600 w-[85%] m-auto ">
          {/* top section of footer starts  */}

          <div className="footerTop bg-red-500 mb-4 flex flex-col md:flex-row justify-between   ">
            {/*  */}
            <div className="footerTopLeftContainer bg-green-600 m-auto md:m-0 w-[62%] sm:w-[50%] md:w-[25%] mb-4 md:mb-0 p-2  ">
              {/*  */}
              <div className="footerTopLeftLogo mb-6  ">
                <img
                  src={logo}
                  className=" w-[10rem] sm:w-[11rem] md:w-[10rem] lg:w-[11rem] "
                />
              </div>
              {/*  */}
              <div className="footerTopLeftPara bg-blue-800 w-[100%] sm:w-[94%] md:w-[90%] lg:w-[85%] ">
                <p className=" text-[#FFFFFFB2] ">
                  A new way to make the payments easy, reliable and secure.
                </p>
              </div>
              {/*  */}
            </div>
            {/*  */}

            {/*  */}
            <div className="footerTopRight bg-secondary m-auto md:m-0 w-[92%] md:w-[84%] flex flex-col md:flex-row justify-evenly items-center md:justify-evenly  ">
              {/*  */}

              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {footerLinks &&
                footerLinks.map((ele) => (
                  <>
                    {/*  */}
                    <div className="footerTopRightContainer bg-lime-400 w-[46%] sm:w-[37%] md:w-[30%] flex flex-col items-start   mb-4 md:mb-0 min-h-fit  md:min-h-[12rem]  ">
                      <div className="topRightHeading bg-red-500 text-white mb-2 ">
                        <h1 className=" text-lg text-white "> {ele.title} </h1>
                      </div>

                      <div className="ulLinks text-white">
                        <ul>
                          {ele.links.map((li, ind) => (
                            <>
                              <li
                                key={ind}
                                className="text-dimWhite hover:text-secondary  "
                              >
                                <a href={li.link}> {li.name} </a>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/*  */}
                  </>
                ))}

              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}

              {/*  */}
            </div>
            {/*  */}

            {/*  */}
          </div>

          {/* top section of footer ends  */}
          {/*  */}

          {/* bottom section of footer starts  */}
          <div className="footerBottom bg-indigo-500 ">
            <h1>footer bottom section</h1>
          </div>

          {/* bootom section of footer ends  */}
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Footer;
