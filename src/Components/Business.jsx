import React from "react";

import { features } from "../constants/constants";
import styles, { layout } from "../Style";

import Button from "./Button";

const Business = () => {
  return (
    <>
      <div className="businessContainer mb-8 sm:mb-20">
        <div className="businessWrapper  w-[85%] m-auto flex flex-col md:flex-row justify-between  ">
          {/*  */}
          {/* left side starts  */}
          <div className="businessLeft  w-[100%] sm:w-[90%] md:w-[50%] mb-5 md:mb-0 ">
            <div className="businessLeftWrapper">
              {/* top side of container starts  */}
              <div className="businessLeftTop text-white  font-semibold mb-4 md:mb-7 text-4xl lg:text-5xl ">
                <h1>You do the business, we’ll handle the money.</h1>
              </div>
              {/* top side of container ends  */}

              {/* middle container starts  */}
              <div className="businessLeftMid text-base lg:text-lg text-[#FFFFFFB2] mb-4 md:mb-7 ">
                <p>
                  With the right credit card, you can improve your financial
                  life by building credit, earning rewards and saving money. But
                  with hundreds of credit cards on the market.
                </p>
              </div>
              {/* middle container ends  */}

              {/* bottom container starts  */}
              <div className="businessLeftBottom  ">
                <button
                  type="button"
                  class="py-2.5 px-5 text-base font-medium text-gray-900 outline-none rounded hover:text-white active:scale-95 bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-500 "
                >
                  Get Started
                </button>
              </div>
              {/* bottom container ends  */}
            </div>

            {/*  */}
          </div>
          {/* left side ends  */}

          {/*  */}

          {/* right side starts  */}
          <div className="businessRight m-auto w-[100%] sm:w-[90%] md:w-[48%] flex flex-col justify-center ">
            <div className="businessRightContainer   ">
              {features.map((ele, ind) => (
                <>
                  <div
                    className={`businessRightContainerWrapper  flex items-center justify-between cursor-pointer rounded feature-card py-1  ${
                      ind === features.length - 1 ? "mb-0" : "mb-3"
                    }`}
                  >
                    {/* left side card  */}
                    <div className="businessRightLeft  w-[10%] m-auto flex justify-center items-center self-center   ">
                      <div className="logoLeftContainer bg-[#09977C1A] p-2 rounded-full">
                        <img
                          src={ele.icon}
                          alt=""
                          className=" w-[78%] h-[78%] sm:w-[85%] sm:h-[85%] md:w-[75%] md:h-[75%]  lg:w-[80%] lg:h-[80%] m-auto   "
                        />
                      </div>
                    </div>
                    {/*  */}

                    {/* right side of card  */}
                    <div className="businessRightRight  w-[88%]  ">
                      <div className="businessRightCardWrapper ">
                        {/*  */}
                        <div className="RightCardWrapperLeft  mb-1 text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-sm lg:text-base ">
                          {ele.title}
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="RightCardWrapperRight text-[#FFFFFFB2] text-sm sm:text-base md:text-sm lg:text-base ">
                          {ele.content}
                        </div>

                        {/*  */}
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* right side ends  */}
        </div>
      </div>
    </>
  );
};

export default Business;
