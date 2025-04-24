import React from "react";

const Sponsors = () => {
    return (
        <div id="sponsors" className="min-h-screen w-full flex flex-col items-center z-30 gap-40 -mt-10 overflow-hidden">
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
            <div className="flex flex-col gap-40 space-x-30 w-full">

                <div className="relative lg:right-26 md:right-10 md:w-[514px] lg:w-[812px] lg:h-[117px] hidden sm:block">
                    <div className="w-full h-full relative">
                        <img
                            src="/diamond.png"
                            className="mix-blend-color-dodge brightness-115 saturate-70"
                            alt="Diamond Sponsor"
                        />
                    </div>
                </div>
                <div className="relative -left-7 w-[340px] h-[17px] block sm:hidden">
                    <div className="w-full h-full relative">
                        <img
                            src="/diamond.png"
                            className="mix-blend-color-dodge brightness-115 saturate-70"
                            alt="Diamond Sponsor"
                        />
                    </div>
                </div>


                <div className="relative lg:left-166 md:left-123 md:w-[514px] lg:w-[812px] lg:h-[117px] hidden sm:block">
                    <div className="w-full h-full relative">
                        <img
                            src="/Platinum.png"
                            className="mix-blend-color-dodge brightness-125 saturate-70"
                            alt="Platinum Sponsor"
                        />
                    </div>
                </div>
                <div className="relative left-43 w-[350px] h-[7px] block sm:hidden">
                    <div className="w-full h-full relative">
                        <img
                            src="/Platinum.png"
                            className="mix-blend-color-dodge brightness-125 saturate-70"
                            alt="Platinum Sponsor"
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-40 space-x-30 items-end mb-40 w-full">

                <div className="relative lg:right-152 md:right-93 md:w-[514px] lg:w-[812px] lg:h-[117px] hidden sm:block">
                    <div className="w-full h-full relative">
                        <img
                            src="/Gold.png"
                            className="mix-blend-color-dodge brightness-125 saturate-70"
                            alt="Gold Sponsor"
                        />
                    </div>
                </div>
                <div className="relative right-15 w-[340px] h-[17px] block sm:hidden">
                    <div className="w-full h-full relative">
                        <img
                            src="/Gold.png"
                            className="mix-blend-color-dodge brightness-125 saturate-70"
                            alt="Gold Sponsor"
                        />
                    </div>
                </div>

                <div className="relative lg:left-40 md:left-38 lg:w-[812px] md:w-[514px] lg:h-[117px] hidden sm:block">
                    <div className="w-full h-full relative">
                        <img
                            src="/Silver.png"
                            className="mix-blend-color-dodge brightness-125 saturate-70"
                            alt="Silver Sponsor"
                        />
                    </div>
                </div>
                <div className="relative left-6 w-[350px] h-[7px] block sm:hidden">
                    <div className="w-full h-full relative">
                        <img
                            src="/Silver.png"
                            className="mix-blend-color-dodge brightness-125 saturate-70"
                            alt="Silver Sponsor"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;