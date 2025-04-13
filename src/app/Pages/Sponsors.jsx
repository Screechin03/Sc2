import React from "react";

const Sponsors = () => {
    return (
        <div className="min-h-screen w-screen flex flex-col items-center z-30 gap-40 mt-50 mb-40">
            <div className="relative mb-10 ">
                {/* Top outline layer */}
                <span className="absolute z-1 transform -translate-x-1/2 translate-y-2 text-transparent bg-clip-text  text-stroke-2 font-ticket text-[120px] font-bold uppercase opacity-50">
                    SPONSORS
                </span>

                {/* Middle filled layer */}
                <span className="absolute z-80 transform -translate-x-1/2 translate-y-22  text-white font-ticket text-6xl font-semibold uppercase">
                    __SPONSORS__
                </span>
                {/* Bottom outline layer */}

            </div>
            <div className="flex flex-col gap-40 space-x-30 ">

                <div className="relative right-40 w-[1012px] h-[117px]">
                    <img src="/diamond.svg" className="mix-blend-dodge" alt="Diamond Sponsor" />
                </div>


                <div className="relative left-130 w-[812px] h-[117px]">
                    <img src="/platinum.svg" />
                </div>
            </div>


            <div className="flex flex-col gap-40 space-x-30 items-end">

                <div className="relative right-40 w-[1012px] h-[117px]">
                    <img src="/gold.svg" />
                </div>


                <div className="relative left-50 w-[812px] h-[117px]  ">
                    <img src="/silver.svg" />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;