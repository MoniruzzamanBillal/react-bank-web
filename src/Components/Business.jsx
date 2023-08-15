import React from "react";

import { features } from "../constants/constants";
import styles, { layout } from "../Style";

import Button from "./Button";

const Business = () => {
  return (
    <>
      <div className="businessContainer bg-red-400">
        <div className="businessWrapper bg-green-400 w-[85%] m-auto flex justify-between   ">
          {/*  */}
          {/* left side starts  */}
          <div className="businessLeft bg-blue-400 w-[52%] ">
            <div className="businessLeftWrapper">
              {/* top side of container starts  */}
              <div className="businessLeftTop bg-lime-400 text-white text-5xl font-semibold mb-5 ">
                <h1>You do the business, we’ll handle the money.</h1>
              </div>
              {/* top side of container ends  */}

              {/* middle container starts  */}
              <div className="businessLeftMid bg-green-400 text-lg text-[#FFFFFFB2] mb-5 ">
                <p>
                  With the right credit card, you can improve your financial
                  life by building credit, earning rewards and saving money. But
                  with hundreds of credit cards on the market.
                </p>
              </div>
              {/* middle container ends  */}

              {/* bottom container starts  */}
              <div className="businessLeftBottom bg-violet-500 ">
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-900 outline-none  rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 active:scale-95   bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-500  "
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
          <div className="businessRight bg-amber-200 w-[48%] ">
            right side of business
          </div>
          {/* right side ends  */}
        </div>
      </div>
    </>
  );
};

export default Business;
