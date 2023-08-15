import React from "react";

import { stats } from "../constants/constants";
import styles from "../Style";

const Stats = () => {
  return (
    <>
      <div className="statsContainer  mb-12">
        <div className="startsWrapper  w-[85%] m-auto flex justify-between  items-center p-2 flex-col sm:flex-row ">
          {stats.map((ele, ind) => (
            <div
              className={`statItem w-[90%]  sm:w-[33%] flex justify-center items-center ${
                ind === stats.length - 1 ? " mb-0" : " mb-4"
              }  sm:mb-0 `}
              key={ele.id}
            >
              <h4 className=" text-white pr-2 text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ">
                {ele.value}
              </h4>
              <p className="  text-gradient text-white text-lg sm:text-sm md:text-lg lg:text-xl ">
                {ele.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;
