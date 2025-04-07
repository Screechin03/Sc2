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
            <div className="relative w-full overflow-hidden hidden sm:block ">
                <img src="/Group 81.png" alt="Background Element" className="w-full h-auto opacity-100 mt-50 relative z-10 " />
                <div className="absolute top-97 left-1/2 transform -translate-x-1/2 text-white text-[170px] z-1 font-bold px-4 py-2 rounded hidden sm:block">
                    {formatTime(time)}
                </div>
                <div className="absolute z-10 top-77 left-156 text-red-500 font-light flex flex-row text-6xl space-x-36 items-center ">
                    HURRY UP!
                </div>
                <div className="absolute z-10 top-89 left-130 text-white font-light flex flex-row text-6xl space-x-36 items-center">
                    HACKING STARTS IN...
                </div>
                <div className="absolute z-10 top-137 left-116 text-red-500 font-light flex flex-row text-4xl space-x-36 items-center">
                    <p>DAYS</p>
                    <p>HOURS</p>
                    <p>MINUTES</p>
                </div>
                <div className="lg:overflow-hidden">
                    <img src="/rotate=0.svg" className="h-340 w-340 absolute -top-10 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden pt-8" />
                    <img src="/rotate=120.png" className="h-260 w-260 absolute top-20 left-1/2 transform -translate-x-1/2 z-2 spin-slow overflow-hidden mt-7" />
                    <img src="/rotate=0.svg" className="h-240 w-240 absolute top-20 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden pt-4" />
                </div>
            </div>
            <div className="relative w-full  block sm:hidden mb-49">
                <img src="/Group 81.png" alt="Background Element" className="w-full h-auto opacity-100 mt-50 relative z-10 hidden sm:block" />
                <div className="absolute top-43 left-1/2 transform -translate-x-1/2 text-white text-5xl z-1 font-bold px-4 py-2 rounded ">
                    {formatTime(time)}
                </div>
                <div className="absolute z-10 top-27 left-1/2 text-red-500 font-light transform  -translate-x-1/2 flex flex-row text-xl  items-center ">
                    HURRY UP!
                </div>
                <div className="absolute z-10 top-33 left-1/2 text-white  font-light transform -translate-x-1/2 flex flex-row text-xl space-x-36 items-center">
                    HACKING STARTS IN...
                </div>
                <div className="absolute z-10 top-54 left-63 text-red-500 font-light transform -translate-x-1/2 flex flex-row text-lg space-x-5 items-center">
                    <p>DAYS</p>

                    <p>HOURS</p>

                    <p>MINUTES</p>
                </div>
                <div className="lg:overflow-hidden">
                    <img src="/rotate=0.svg" className="h-[480px] w-[480px] absolute -top-14  left-62 transform -translate-x-1/2 z-2 spin overflow-hidden " />
                    <img src="/rotate=120.png" className="h-[360px] w-[360px] absolute top-0 left-1/2 transform -translate-x-1/2 z-2 spin-slow overflow-hidden " />
                    <img src="/rotate=0.svg" className="h-[320px] w-[320px] absolute top-5 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden " />
                </div>
            </div>
        </>
    );
};

export default Second;