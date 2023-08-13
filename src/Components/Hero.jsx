import React from "react";

import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="heroContainer ">
        <div className="heroWrapper  flex ">
          {/* left side starts  */}
          <div className="heroLeftContainer bg-amber-500 w-[60%] flex flex-col justify-center">
            <div className="heroLeftContainerWrapper bg-pink-500 ml-20 ">
              {/* left top section  */}
              <div className="heroLeftTop bg-blue-200 mb-6">
                {/* hero top left starts  */}
                <div className="heroLeftTopContainer bg-discount-gradient  flex items-center self-center px-3 py-1 w-[65%] text-start">
                  <div className="heroLeftTopLogo bg-blue-300 mr-2">
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
              <div className="heroLeftMid bg-red-600 text-white">
                <div className="heroMidHeading text-7xl font-semibold">
                  <h1 className="mb-4">The Next</h1>
                  <h1 className="mb-4 text-gradient">Generation</h1>
                  <h1 className="mb-8"> Payment Method.</h1>
                </div>
              </div>

              {/* bottom side of hero section  */}
              <div className="heroLeftBottom bg-violet-700 w-[65%] mt-6">
                <p className="text-[#FFFFFFB2] text-base">
                  Our team of experts uses a methodology to identify the credit
                  cards most likely to fit your needs. We examine annual
                  percentage rates, annual fees.
                </p>
              </div>
            </div>
          </div>
          {/* left side ends  */}

          {/* right side starts  */}
          <div className="heroRightContainer w-[40%] bg-red-500">
            <div className="heroRightContainerWrapper bg-green-600 ">
              {/*  */}
              <div className="heroRightImg relative z-10  flex justify-end">
                <img src={robot} alt="" className=" h-[100%] object-fit-none" />
              </div>
              {/*  */}

              {/* pink color gradient  */}
              <div className="div1 absolute z-[0] w-[45%] h-[55%] top-0 pink__gradient "></div>

              {/* white color gradient  */}
              <div className="div1  absolute z-[1] w-[45%] h-[55%] rounded-full bottom-40 white__gradient"></div>

              {/* blue gradient  */}
              <div className="div1 absolute z-[0] w-[50%] h-[50%] right-10 bottom-12 blue__gradient"></div>
            </div>
          </div>
          {/* right side ends  */}
        </div>
      </div>
    </>
  );
};

export default Hero;
