import React from "react";

import { quotes } from "../assets";

// const FeedBackCard = (props) => {
const FeedBackCard = ({ content, name, title, img }) => {
  console.log("content:", content);

  return (
    <>
      <div className="feedbackContainer  ">
        <div className="feedbackWrapper w-[100%] md:min-h-[19rem]  lg:min-h-[18rem] m-auto flex flex-col  justify-center  feedback-card rounded-md ">
          <div className="feedBackCardContent px-7 md:px-4 lg:px-6 py-10 md:py-1   ">
            {/*  */}
            {/* top section of feedback card starts  */}
            <div className="feedbackCardTop mb-4 w-[1.9rem] h-[1.9rem] sm:w-[2.2rem] sm:h-[2.2rem]  ">
              <img
                src={quotes}
                alt=""
                className=" w-[80%] h-[80%] sm:w-[90%] sm:h-[90%]  "
              />
            </div>
            {/* top section of feedback card ends  */}
            {/*  */}

            {/*  */}
            {/* mid section of feedback card starts  */}
            <div className="feedbackCardMid mb-4 w-[100%] md:w-[98%] lg:w-[90%] text-sm sm:text-base text-[#FFFFFFB2]   ">
              <p>{content}</p>
            </div>
            {/* mid section of feedback card ends  */}
            {/*  */}

            {/*  */}
            {/* bottom  section of feedback card starts  */}

            <div className="feedbackCardBottom flex justify-between items-center self-center    ">
              {/* left side of card bottom starts  */}
              <div className="feedbackCardBottomLeft  w-[15%] flex justify-center items-center self-center  pr-1 sm:pr-0 ">
                {" "}
                <img
                  class="w-11 h-11  sm:w-12 sm:h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                  src={img}
                  alt="Bordered avatar"
                />{" "}
              </div>
              {/* left side of card bottom ends   */}

              {/* right side of card bottom starts  */}
              <div className="feedbackCardBottomRight w-[83%]  ">
                {/*  */}
                <div className="feedbackBottomRightLeft text-sm sm:text-base text-white ">
                  <p>{name}</p>
                </div>
                {/*  */}

                {/*  */}
                <div className="feedbackBottomRightRight text-[#FFFFFFB2] text-sm sm:text-base ">
                  <p> {title} </p>
                </div>
                {/*  */}
              </div>
              {/* right side of card bottom ends   */}
            </div>
            {/* bottom  section of feedback card ends  */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackCard;
