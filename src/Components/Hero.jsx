import React from "react";

import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <div className="heroContainer mb-6 md:mb-16 ">
        <div className="heroWrapper  flex ">
          {/* left side starts  */}
          <div className="heroLeftContainer w-[52%] sm:w-[60%] flex flex-col justify-center">
            <div className="heroLeftContainerWrapper ml-10 sm:ml-12 md:ml-20 lg:ml-28 relative  ">
              {/* left top section  */}
              <div className="heroLeftTop inline-block mb-2 sm:mb-4 md:mb-5 lg:mb-6">
                {/* hero top left starts  */}
                <div className="heroLeftTopContainer bg-discount-gradient  flex items-center self-center px-3 py-1 w-[100%] justify-start text-center rounded-md ">
                  <div className="heroLeftTopLogo mr-[.1rem] sm:mr-[.15rem] md:mr-1 lg:mr-2  hidden sm:block">
                    <img
                      src={discount}
                      alt=""
                      className=" w-[78%] sm:w-[84%] md:w-[87%] lg:w-[100%]  "
                    />
                  </div>

                  <div className="heroLeftTopPara text-[#FFFFFF] text-[.65rem] sm:text-xs md:text-sm lg:text-base ">
                    <p>
                      20% <span className="text-[#FFFFFF99]">DISCOUNT FOR</span>{" "}
                      1 MONTH <span className="text-[#FFFFFF99]">ACCOUNT</span>
                    </p>
                  </div>
                </div>

                {/* hero top left ends */}
              </div>

              {/* middle side of hero section */}
              <div className="heroLeftMid  text-white">
                <div className="heroMidHeading text-xl sm:text-2xl md:text-4xl lg:text-5xl  xl:text-7xl font-semibold">
                  <h1 className=" mb-[.01rem] sm:mb-1 md:mb-2 lg:mb-4 xl:mb-5 ">
                    The Next
                  </h1>
                  <h1 className=" mb-[.01rem] sm:mb-1 md:mb-2 lg:mb-4 xl:mb-5 text-gradient">
                    Generation
                  </h1>
                  <h1 className=" text-base sm:text-2xl md:text-4xl lg:text-5xl  xl:text-7xl mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5">
                    Payment Method.
                  </h1>
                </div>
              </div>

              {/* bottom side of hero section  */}
              <div className="heroLeftBottom w-[100%] sm:w-[90%] md:w-[84%] lg:w-[70%] mt-3 md:mt-5 lg:mt-6  ">
                <p className="text-[#FFFFFFB2] text-xs sm:text-[.8rem] md:text-base lg:text-lg leading-5 sm:leading-6 md:leading-7 lg:leading-8">
                  Our team of experts uses a methodology to identify the credit
                  cards most likely to fit your needs. We examine annual
                  percentage rates, annual fees.
                </p>
              </div>

              {/* get started container  */}
              <div className="getStartedContainer absolute  transform translate-x-1/2 translate-y-1/2 top-3   right-32  hidden sm:block  ">
                <GetStarted />
              </div>
              {/* get started container ends */}
            </div>
            {/*  */}
          </div>
          {/* left side ends  */}

          {/* right side starts  */}
          <div className="heroRightContainer w-[48%] sm:w-[40%] ">
            <div className="heroRightContainerWrapper  relative ">
              {/*  */}
              <div className="heroRightImg    ">
                <img src={robot} alt="" className=" h-[100%] w-[100%] " />
              </div>
              {/*  */}

              {/* pink color gradient  */}
              <div className="div1 absolute z-[0] w-[100%] h-[50%] top-0 pink__gradient  "></div>

              {/* white color gradient  */}
              <div className="div1  absolute z-[1] w-[88%] h-[55%] rounded-full bottom-40  white__gradient"></div>

              {/* blue gradient  */}
              <div className="div1 absolute z-[0] w-[90%]  h-[56%]  right-10 bottom-12  blue__gradient"></div>
            </div>
          </div>
          {/* right side ends  */}
        </div>
      </div>
    </>
  );
};

export default Hero;
