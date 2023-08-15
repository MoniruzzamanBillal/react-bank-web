import React from "react";

import { bill, apple, google } from "../assets";
import styles from "../Style";

const Billing = () => {
  return (
    <>
      <div className="billingContainer mb-8 sm:mb-20">
        <div className="billingWrapper  w-[85%] m-auto flex justify-between flex-col md:flex-row  ">
          {/*  */}

          {/* billing left side starts  */}
          <div className="billingLeftContainer  m-auto w-[98%] sm:w-[90%] md:w-[48%] mb-6 md:mb-0 relative z-[8]">
            <div className="billingLeftImgContainer    z-[6] ">
              <img src={bill} alt="" className=" w-[98%] h-[98%] m-auto  " />
            </div>

            {/*  */}
            <div className="div1 absolute z-[1] w-[45%] h-[55%] top-[10rem] pink__gradient  "></div>
            {/*  */}
            <div className="div2 absolute z-[0] w-[50%] h-[60%] top-[8rem] left-8 white__gradient  "></div>
            {/*  */}
          </div>
          {/* billing left side ends */}

          {/* billing right side starts  */}
          <div className="billingRightContainer mx-auto w-[98%] sm:w-[90%] md:w-[52%] pr-0 md:pr-8 mb-6 md:mb-0  flex flex-col justify-center items-center  ">
            <div className="billingRightContainerWrapper  ">
              {/* top side of container starts  */}
              <div className="billingRightTop text-white  font-semibold mb-4 md:mb-7 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
                <h1>Easily control your billing & invoicing.</h1>
              </div>
              {/* top side of container ends  */}

              {/* middle container starts  */}
              <div className="billingRightMid   text-[#FFFFFFB2] mb-6 md:mb-7 text-start text-sm sm:text-base ">
                <p>
                  Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                  ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                  integer platea placerat.
                </p>
              </div>
              {/* middle container ends  */}

              {/* bottom container starts  */}
              <div className="billingRightBottom  flex">
                <img src={google} alt="" />
                <img
                  src={apple}
                  alt=""
                  className=" ml-3 sm:ml-6 md:ml-8 lg:ml10   "
                />
              </div>
              {/* bottom container ends  */}
            </div>
          </div>
          {/* billing right side ends */}

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Billing;
