import React, { useState, useEffect } from 'react';


const Second = () => {
    const [isClient, setIsClient] = useState(false);
    const [time, setTime] = useState(86400);

    useEffect(() => {
        setIsClient(true); // Ensure it's client-side
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!isClient) return null;

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / 86400).toString().padStart(2, '0');
        const hrs = Math.floor((seconds % 86400) / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        return `${days}:${hrs}:${mins}`;
    };

    return (
        <>
            <div id="second" className="relative w-full overflow-hidden hidden sm:block -mb-50 md:mt-30 md:z-[90]">

                <img src="/Landgroup.png" alt="Background Element" className="w-full opacity-100 mt-50 relative z-4" />

                <div className="absolute lg:top-97 md:top-76 lg:left-1/2 md:left-1/2 transform -translate-x-1/2 text-white md:text-[120px] lg:text-[170px] z-1 font-bold px-4 py-2 rounded hidden sm:block">
                    {formatTime(time)}
                </div>
                <div className="absolute z-10 md:top-60 lg:top-77 md:left-95 lg:left-156 text-red-500 font-light flex flex-row md:text-4xl lg:text-6xl lg:space-x-36 items-center ">
                    HURRY UP!
                </div>
                <div className="absolute z-10 md:top-69 lg:top-89 md:left-80 lg:left-130 text-white font-light flex flex-row md:text-4xl lg:text-6xl lg:space-x-36 items-center">
                    HACKING STARTS IN...
                </div>

                <div className="absolute z-10 md:top-107 lg:top-137 md:left-73 lg:left-116 text-red-500 font-light flex flex-row md:text-2xl lg:text-4xl md:space-x-24 lg:space-x-36 items-center">
                    <p>DAYS</p>
                    <p>HOURS</p>
                    <p>MINUTES</p>
                </div>
                <div className="absolute z-4 top-120 opacity-80 blue-[3px] hidden md:block lg:hidden sm:block"><img src="/Rectangle 15.svg" /></div>
                <div className="absolute z-4 top-160 opacity-90 blue-[3px] hidden md:block lg:hidden sm:block transform scale-y-[-1]"><img src="/Rectangle 15.svg" /></div>
                <div className="overflow-hidden h-screen w-full absolute top-0 left-0">
                    <img src="/rotate=0.svg" className="h-340 w-340 md:h-220 md:w-220 lg:h-340 lg:w-340 absolute md:-top-10 lg:-top-24 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden lg:pt-8" />
                    <img src="/rotate=120.png" className="h-260 w-260 md:h-170 md:w-170 lg:h-260 lg:w-260 absolute md:top-10 top-20 left-1/2 transform -translate-x-1/2 z-2 spin-slow overflow-hidden mt-7" />
                    <img src="/rotate=0.svg" className="h-240 w-240 md:h-160 md:w-160 lg:h-240 lg:w-240 absolute md:top-15 top-23 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden pt-4" />
                </div>
            </div>
            <div className="relative w-full block sm:hidden py-16 md:hidden mb-70 mt-70" id="second-mobile">
                <div className="absolute top-43 left-1/2 transform -translate-x-1/2 text-white text-5xl z-10 font-bold px-4 py-2 rounded">
                    {formatTime(time)}
                </div>
                <div className="absolute z-10 top-27 left-1/2 text-red-500 font-light transform -translate-x-1/2 flex flex-row text-xl items-center">
                    HURRY UP!
                </div>
                <div className="absolute z-10 top-33 left-1/2 text-white font-light transform -translate-x-1/2 flex flex-row text-xl items-center">
                    HACKING STARTS IN...
                </div>
                <div className="absolute z-10 top-54 left-63 text-red-500 font-light transform -translate-x-1/2 flex flex-row text-lg space-x-5 items-center">
                    <p>DAYS</p>
                    <p>HOURS</p>
                    <p>MINUTES</p>
                </div>
                <div className=" h-screen w-full absolute -top-45 left-0">
                    <div className="relative h-full w-full flex items-center justify-center">
                        <img src="/rotate=0.svg" className="h-[480px] w-[480px] transform translate-x-1 left-1 translate-y-1 absolute z-4 spin" />
                        <img src="/rotate=120.png" className="h-[360px] w-[360px] transform translate-x-1 translate-y-1 absolute z-2 spin-slow" />
                        <img src="/rotate=0.svg" className="h-[320px] w-[320px]  transform translate-x-1 translate-y-1 absolute z-2 spin" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Second;