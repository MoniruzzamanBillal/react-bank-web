import React from "react";

import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <>
      <div className="getContainer w-[7rem] h-[7rem] bg-blue-gradient p-1 rounded-full  ">
        <div className="getWrapper w-[100%] h-[100%] m-auto bg-[#00040F] rounded-full flex flex-col justify-center items-center text-white ">
          <div className="itemContainer">
            {/*  */}
            <div className="div1 flex text-gradient mb-1">
              <h1>get </h1>
              <img src={arrowUp} alt="" />
            </div>
            {/*  */}

            {/*  */}
            <div className="div2 text-gradient">
              <h1> Started </h1>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
