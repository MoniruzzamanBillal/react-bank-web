import React from "react";

import { quotes } from "../assets";

// const FeedBackCard = (props) => {
const FeedBackCard = ({ content, name, title, img }) => {
  console.log("content:", content);

  return (
    <>
      <div className="feedbackContainer bg-violet-400  ">
        <div className="feedbackWrapper bg-orange-300 w-[100%] md:min-h-[19rem]  lg:min-h-[18rem] m-auto flex flex-col  justify-center  feedback-card rounded-md ">
          <div className="feedBackCardContent px-6 md:px-3 lg:px-5 py-10 md:py-1   ">
            {/*  */}
            {/* top section of feedback card starts  */}
            <div className="feedbackCardTop bg-red-400 mb-4 w-[2.2rem] h-[2.2rem]  ">
              <img src={quotes} alt="" className=" w-[90%] h-[90%]  " />
            </div>
            {/* top section of feedback card ends  */}
            {/*  */}

            {/*  */}
            {/* mid section of feedback card starts  */}
            <div className="feedbackCardMid bg-blue-500 mb-4 w-[100%] md:w-[98%] lg:w-[90%]    ">
              <p>{content}</p>
            </div>
            {/* mid section of feedback card ends  */}
            {/*  */}

            {/*  */}
            {/* bottom  section of feedback card starts  */}

            <div className="feedbackCardBottom bg-green-500 flex justify-between items-center self-center    ">
              {/* left side of card bottom starts  */}
              <div className="feedbackCardBottomLeft bg-emerald-300 w-[15%] flex justify-center items-center self-center ">
                {" "}
                <img
                  class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={img}
                  alt="Bordered avatar"
                />{" "}
              </div>
              {/* left side of card bottom ends   */}

              {/* right side of card bottom starts  */}
              <div className="feedbackCardBottomRight bg-pink-500 w-[83%]  ">
                {/*  */}
                <div className="feedbackBottomRightLeft bg-blue-400 ">
                  <p>{name}</p>
                </div>
                {/*  */}

                {/*  */}
                <div className="feedbackBottomRightRight bg-yellow-400 text-[#FFFFFFB2] ">
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
