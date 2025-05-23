import React from "react";

const Glimpse = () => {
  return (
    <div className="relative w-full h-full sm:block overflow-visible z-50 lg:mt-90 -mt-20">
      <div className="flex flex-row items-center space-x-20">
        <div className="absolute top-0  -left-20 lg:left-0 w-78 h-78 sm:w-78 sm:h-78 md:w-130 md:h-130 lg:w-200 lg:h-200 -z-10">
          <img
            src="/Group 253.png"
            alt="Left Background Element"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-0 -right-30 lg:-right-60 w-78 h-78 sm:w-78 md:w-130 md:h-130 sm:h-78 lg:w-200 lg:h-200 -z-10">
          <img
            src="/Group 254.svg"
            alt="Right Background Element"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full lg:space-y-2 space-y-1">
        <div className="relative w-full h-full flex flex-row items-end justify-center lg:space-x-2 space-x-1">
          <div className=" w-10 h-20 sm:w-15 sm:30  md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className=" w-10 h-20 sm:w-15 sm:30  md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lg transform -translate-y-[50%]"></div>
          <div className=" w-10 h-20 sm:w-15 sm:30   md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className=" w-20 h-10 sm:w-30 sm:15  md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
        </div>
        <div className="relative w-full h-full flex flex-row items-start justify-center lg:space-x-2 space-x-1">
          <div className="w-20 h-10 sm:w-30 sm:15  md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className=" w-10 h-20 sm:w-15 sm:30  md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lgtransform -translate-y-[50%] "></div>
          <div className="w-20 h-10 sm:w-30 sm:15  md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className="w-20 h-10 sm:w-30 sm:15  md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
        </div>
        <div className="relative w-full h-full flex flex-row items-start justify-center lg:space-x-2 space-x-1 transform -translate-y-[50%] -translate-x-[8.3%]">
          <div className="w-20 h-10  sm:w-30 sm:15 md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className="w-20 h-10 sm:w-30 sm:15  md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className="w-10 h-20 sm:w-15 sm:30  md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className="w-20 h-10 sm:w-30 sm:15  md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
        </div>
        <div className="relative w-full h-full flex flex-row items-start justify-center lg:space-x-2 space-x-1 transform -translate-y-[100%] -translate-x-[8.3%]">
          <div className="w-20 h-10  sm:w-30 sm:15 md:w-50 md:h-25 lg:w-60 lg:h-30 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className="w-10 h-20 sm:w-15 sm:30  md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
          <div className="w-10 h-20 sm:w-15 sm:30  md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lgtransform translate-y-[50%]"></div>
          <div className="w-10 h-20 sm:w-15 sm:30  md:w-25 md:h-50 lg:w-30 lg:h-60 bg-amber-100 lg:rounded-xl rounded md:rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Glimpse;
