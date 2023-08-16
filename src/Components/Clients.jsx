import React from "react";

import { clients } from "../constants/constants";
import styles from "../Style";

const Clients = () => {
  return (
    <>
      <div className="clientsContainer  mb-8 md:mb-16   ">
        <div className="clientsWrapper  w-[80%] m-auto p-1 flex justify-evenly sm:justify-between flex-wrap items-center  ">
          {clients &&
            clients.map((ele, ind) => (
              <div
                className="clientItem  flex justify-center items-center mb-7   sm:mb-4 "
                key={ele.id}
              >
                <img
                  src={ele.logo}
                  className=" w-[9rem] h-[3rem] sm:w-[10rem] sm:h-[3.4rem] lg:w-[11rem] lg:h-[3.6rem]  "
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
