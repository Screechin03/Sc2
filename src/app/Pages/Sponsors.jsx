import React from "react";

const Sponsors = () => {
    return (
      <>
      <div id="sponsors" className="min-h-screen w-screen hidden md:flex flex-col items-center z-30 gap-40 mt-10 mb-40">
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
        <div className="flex flex-col gap-40 space-x-30">
          <div className="relative right-87 w-[1012px] h-[117px]">
            <div className="w-full h-full relative">
              <img
                src="/Diamond.png"
                className="mix-blend-color-dodge brightness-115 saturate-70"
                alt="Diamond Sponsor"
              />
            </div>
          </div>

          <div className="relative left-133 w-[1012px] h-[117px]">
            <div className="w-full h-full relative">
              <img
                src="/Platinum.png"
                className="mix-blend-color-dodge brightness-125 saturate-90"
                alt="Platinum Sponsor"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center mt-24 -ml-44">
              <div className="w-64 h-36 relative">
                <img
                  src="/devfolio.png"
                  className="w-40 h-40 object-contain mix-blend-color-dodge brightness-115"
                  alt="Devfolio"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-40 space-x-30 ">
          <div className="relative right-87 w-[1012px] h-[117px]">
            <div className="w-full h-full relative">
              <img
                src="/Gold.png"
                className="mix-blend-color-dodge brightness-115 saturate-70"
                alt="Gold Sponsor"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center mt-24">
              <div className="w-48 h-12 relative">
                <img
                  src="/ethIndia.png"
                  className="w-40 h-20 mb-20 object-contain mix-blend-color-dodge brightness-115"
                  alt="ETHIndia"
                />
              </div>
            </div>
          </div>

          <div className="relative left-133 w-[1012px] h-[117px]">
            <div className="w-full h-full relative">
              <img
                src="/Silver.png"
                className="mix-blend-color-dodge brightness-125 saturate-90"
                alt="Silver Sponsor"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="sponsors2" className="min-h-screen w-screen flex flex-col items-center z-30 gap-20 mt-50 mb-40 md:hidden max-sm:-mb-35">
        <div className="relative mb-40 ">
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
        <div className="flex flex-col gap-20 max-sm:gap-8 space-x-30">
          <div className="relative right-15 w-[300px] h-[50px] max-sm:px-12">
            <div className="w-full h-full relative">
              <img
                src="/Diamond.png"
                className="mix-blend-color-dodge brightness-115 saturate-70"
                alt="Diamond Sponsor"
              />
            </div>
          </div>

          <div className="relative left-40 w-[300px] h-[50px] max-sm:px-9">
            <div className="w-full h-full relative">
              <img
                src="/Platinum.png"
                className="mix-blend-color-dodge brightness-125 saturate-90"
                alt="Platinum Sponsor"
              />
            </div>
            {/*Devfolio as Platinum sponsor for mobile */}
            <div className="absolute inset-0 flex items-center justify-center mt-14">
              <div className="w-10 h-10 relative">
                <img
                  src="/devfolio.png"
                  className="w-30px h-30px object-contain mix-blend-color-dodge brightness-115"
                  alt="Devfolio"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20 max-sm:gap-8 space-x-30">
          <div className="relative right-15 w-[300px] h-[50px] max-sm:px-12">
            <div className="w-full h-full relative">
              <img
                src="/Gold.png"
                className="mix-blend-color-dodge brightness-115 saturate-70"
                alt="Gold Sponsor"
              />
            </div>
            {/* ETHIndia as Gold sponsor for mobile */}
            <div className="absolute inset-0 flex items-center justify-center mt-14">
              <div className="w-10 h-10 relative">
                <img
                  src="/ethIndia.png"
                  className="w-30px h-30px ml-30 object-contain mix-blend-color-dodge brightness-115"
                  alt="ETHIndia"
                />
              </div>
            </div>
          </div>

          <div className="relative left-40 w-[300px] h-[50px] max-sm:px-9">
            <div className="w-full h-full relative">
              <img
                src="/Silver.png"
                className="mix-blend-color-dodge brightness-125 saturate-90"
                alt="Silver Sponsor"
              />
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default Sponsors;
