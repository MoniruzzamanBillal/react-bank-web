import React from "react";
import styles from "../Style";

const CTA = () => {
  return (
    <>
      <div className="ctaContainer  mb-8 md:mb-16  ">
        <div className="ctaWrapper bg-black-gradient w-[80%] md:w-[70%] m-auto rounded-md ">
          {/* card starts  */}
          <a className=" px-2 py-6 sm:px-6 sm:py-8 md:px-8  md:py-12 rounded-md shadow flex justify-between items-center cursor-pointer">
            {/* left side of card starts  */}
            <div className="ctaCardLeft w-[65%] sm:w-[70%] md:w-[74%]  ">
              {/*  */}
              <h5 className="mb-7 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Let’s try our service now!
              </h5>
              {/*  */}

              {/*  */}
              <p className="font-normal text-[#FFFFFFB2]  w-[88%] sm:w-[68%] md:w-[62%] lg:w-[58%] text-base sm:text-lg ">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
              {/*  */}
            </div>
            {/* left side of card ends */}

            {/* right side of card starts  */}
            <div className="ctaCardRight w-[35%] sm:w-[30%] md:w-[26%]  ">
              <button
                type="button"
                class=" py-2 sm:py-2.5 px-4 sm:px-5 text-sm sm:text-base font-medium text-gray-700 outline-none rounded hover:text-gray-900 active:scale-95 bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-500 "
              >
                Get Started
              </button>
            </div>
            {/* right side of card ends */}
          </a>

          {/* card ends */}
        </div>
      </div>
    </>
  );
};

export default CTA;
