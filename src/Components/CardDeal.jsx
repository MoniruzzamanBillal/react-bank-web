import React from "react";
import { card } from "../assets";
import styles from "../Style";

const CardDeal = () => {
  return (
    <div className="cardDealContainer  mb-8 sm:mb-20 ">
      <div className="cardDealWrapper  w-[85%] m-auto flex justify-between flex-col md:flex-row  ">
        {/*  */}

        {/* card deal left side starts  */}

        <div className=" cardDealLeftContainer mx-auto w-[98%] sm:w-[90%] md:w-[52%] pr-0 md:pr-8 mb-6 md:mb-0  flex flex-col justify-center items-center  ">
          <div className="cardDealLeftContainerWrapper  ">
            <div className="cardDealLeftTop text-white  font-semibold mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
              <h1>Find a better card deal in few easy steps.</h1>
            </div>
            {/* top side of container ends  */}

            {/* middle container starts  */}
            <div className="cardDealLeftMid   text-[#FFFFFFB2] mb-3 md:mb-4 text-start text-sm sm:text-base ">
              <p>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
            </div>
            {/* middle container ends  */}

            {/* bottom container starts  */}
            <div className="cardDealLeftBottom  ">
              <button
                type="button"
                class="py-2.5 px-5 text-base font-medium text-gray-900 outline-none rounded hover:text-white active:scale-95 bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-500 "
              >
                Get Started
              </button>
            </div>
            {/* bottom container ends  */}
          </div>
        </div>
        {/* card deal left side ends  */}

        {/* card deal right side starts  */}
        <div className="cardDealRightContainer  m-auto w-[82%] sm:w-[80%] md:w-[48%] mb-6 md:mb-0 relative z-[8]">
          <div className="cardDealRightImgContainer    z-[6] ">
            <img src={card} alt="" className=" w-[98%] h-[98%] m-auto  " />
          </div>

          {/*  */}
          <div className="div1 absolute z-[1] w-[45%] h-[55%] top-[7rem] right-20 pink__gradient  "></div>
          {/*  */}
          <div className="div2 absolute z-[0] w-[55%] h-[64%] top-[10rem] right-0 white__gradient   "></div>
          {/*  */}
        </div>

        {/* card deal right side ends */}

        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default CardDeal;
