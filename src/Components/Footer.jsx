import React from "react";

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/constants";
import styles from "../Style";

import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footerContainer ">
        <div className="footerWrapper w-[85%] m-auto ">
          {/* top section of footer starts  */}
          <div className="footerTop  mb-4  flex flex-col md:flex-row justify-between   ">
            {/*  */}
            <div className="footerTopLeftContainer  m-auto md:m-0 w-[62%] sm:w-[50%] md:w-[25%] mb-10 md:mb-0 p-2  ">
              {/*  */}
              <div className="footerTopLeftLogo mb-6  ">
                <img
                  src={logo}
                  className=" w-[10rem] sm:w-[11rem] md:w-[10rem] lg:w-[11rem] "
                />
              </div>
              {/*  */}
              <div className="footerTopLeftPara  w-[100%] sm:w-[94%] md:w-[90%] lg:w-[85%] ">
                <p className=" text-[#FFFFFFB2] ">
                  A new way to make the payments easy, reliable and secure.
                </p>
              </div>
              {/*  */}
            </div>
            {/*  */}

            {/*  */}
            <div className="footerTopRight  m-auto md:m-0 w-[92%] md:w-[84%] flex flex-col md:flex-row justify-evenly items-center md:justify-evenly  ">
              {/*  */}
              {footerLinks &&
                footerLinks.map((ele, ind) => (
                  <>
                    {/*  */}
                    <div
                      className={`footerTopRightContainer  w-[46%] sm:w-[37%] md:w-[30%] flex flex-col items-start pl-0 md:pl-10 ${
                        ind === footerLinks.length - 1 ? " mb-2 " : " mb-12 "
                      }  md:mb-0 min-h-fit  md:min-h-[12rem]`}
                    >
                      <div className="topRightHeading  text-white mb-2 ">
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
            </div>
            {/*  */}
          </div>

          {/* top section of footer ends  */}
          {/*  */}
          <div className="whiteLine hidden sm:block ">
            <hr />
          </div>
          {/*  */}

          {/* bottom section of footer starts  */}
          <div className="footerBottom pb-4 mt-6 ">
            <div className="footerBottomWrapper  flex justify-between flex-col sm:flex-row ">
              <div className="footerBottomLeft  text-sm sm:text-base text-center sm:text-justify mb-5 sm:mb-0 text-[#FFFFFF99] ">
                <p>Copyright @ 2023 HooBank. All Rights Reserved.</p>
              </div>

              <div className="footerBottomRight  flex w-[100%] sm:w-[20%] ">
                <div className="footerBottomIcon  m-auto w-[45%] sm:w-[86%] flex justify-between items-center self-center text-xl sm:text-lg md:text-xl text-white ">
                  <a href="#">
                    <BsInstagram className="cursor-pointer  " />{" "}
                  </a>

                  <a href="#">
                    <BsFacebook className="cursor-pointer  " />{" "}
                  </a>

                  <a href="#">
                    <BsLinkedin className="cursor-pointer  " />{" "}
                  </a>

                  <a href="#">
                    <BsTwitter className="cursor-pointer  " />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* bootom section of footer ends  */}
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Footer;
