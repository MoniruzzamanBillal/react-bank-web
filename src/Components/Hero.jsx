import React from "react";

import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <div className="heroContainer ">
        <div className="heroWrapper  flex ">
          {/* left side starts  */}
          <div className="heroLeftContainer  w-[60%] flex flex-col justify-center">
            <div className="heroLeftContainerWrapper  ml-20 relative">
              {/* left top section  */}
              <div className="heroLeftTop  mb-6">
                {/* hero top left starts  */}
                <div className="heroLeftTopContainer bg-discount-gradient  flex items-center self-center px-3 py-1 w-[50%] text-start">
                  <div className="heroLeftTopLogo  mr-2">
                    <img src={discount} alt="" />
                  </div>

                  <div className="heroLeftTopPara  text-[#FFFFFF]">
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
                <div className="heroMidHeading text-7xl font-semibold">
                  <h1 className="mb-5">The Next</h1>
                  <h1 className="mb-5 text-gradient">Generation</h1>
                  <h1 className="mb-9"> Payment Method.</h1>
                </div>
              </div>

              {/* bottom side of hero section  */}
              <div className="heroLeftBottom  w-[65%] mt-6">
                <p className="text-[#FFFFFFB2] text-lg leading-8">
                  Our team of experts uses a methodology to identify the credit
                  cards most likely to fit your needs. We examine annual
                  percentage rates, annual fees.
                </p>
              </div>

              {/* get started container  */}

              <div className="getStartedContainer absolute top-[30%] right-[20%] transform -translate-x-1/2 -translate-y-1/2">
                <GetStarted />
              </div>
              {/* get started container ends */}
            </div>
          </div>
          {/* left side ends  */}

          {/* right side starts  */}
          <div className="heroRightContainer w-[40%] ">
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
