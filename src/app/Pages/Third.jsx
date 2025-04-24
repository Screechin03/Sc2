import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
    {
        id: "A",
        content: (
            <div className="relative flex flex-col items-center justify-center">
                <h2 className="pt-20 text-4xl md:text-5xl font-bold tracking-wide z-[3] bg-gradient-to-r from-[#FF5F6D] to-[#FF7E6C] text-transparent bg-clip-text">
                    May 5
                </h2>
                <p className="text-2xl md:text-3xl font-bold tracking-wider z-[3] bg-gradient-to-r from-[#7BD7FF] to-[#C893FF] text-transparent bg-clip-text">
                    12:00 AM
                </p>
                <img src="/land ghost.png" alt="Trophy 2" className="bottom-27 w-64 relative z-[3] mt-16" />
                <img src="/Group 67.svg" className="text-red-500  absolute top-59 z-90 w-37" />
            </div>
        )
    },
    {
        id: "B",
        content: (
            <div className="relative flex flex-col items-center justify-center">
                <h2 className="pt-20 text-4xl md:text-5xl font-extrabold tracking-wide z-[3] bg-gradient-to-r from-[#FF5F6D] to-[#FF7E6C] text-transparent bg-clip-text">
                    May 15
                </h2>
                <p className="text-2xl md:text-3xl font-bold z-[3] bg-gradient-to-r from-[#7BD7FF] to-[#C893FF] text-transparent bg-clip-text">
                    11:59 PM
                </p>
                <img src="/land ghost.png" alt="Trophy 2" className="bottom-20  w-64 relative z-[3]" />
                <p className="absolute top-90 text-red-500 font-bold text-xl md:text-3xl tracking-wider z-[3]">
                    Registration End
                </p>
            </div>
        )
    },
    {
        id: "C",
        content: (
            <div className="relative flex flex-col items-center justify-center">
                <h2 className="pt-20 text-4xl md:text-5xl font-extrabold tracking-wide z-[3] bg-gradient-to-r from-[#FF5F6D] to-[#FF7E6C] text-transparent bg-clip-text">
                    May 25
                </h2>
                <p className="text-2xl md:text-3xl font-bold z-[3] bg-gradient-to-r from-[#7BD7FF] to-[#C893FF] text-transparent bg-clip-text">
                    9:00 AM
                </p>
                <img src="/land ghost.png" alt="Trophy 2" className="bottom-20   w-64 relative z-[3]" />
                <p className="absolute top-90 text-red-500 font-bold text-xl md:text-3xl tracking-wider z-[3]">
                    Hacking Begins
                </p>
            </div>
        )
    }
];

const Third = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [animating, setAnimating] = useState(false);
    const nextImage = () => {
        if (animating) return;
        setDirection("next");
        setAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setTimeout(() => setAnimating(false), 1000);
    };
    const prevImage = () => {
        if (animating) return;
        setDirection("prev");
        setAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        setTimeout(() => setAnimating(false), 1000);
    };
    const leftIndex = (currentIndex + 2) % slides.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % slides.length;

    return (
        <>
            <div id="schedule" className="relative flex flex-col items-center justify-center h-screen z-40  md:-mt-16">
                <motion.div
                    key={`left-slide-${leftIndex}-${direction}`}
                    className="absolute lg:left-43 sm:left-43 lg:top-1/2 sm:top-1/2 z-8 md:left-22 transform -translate-y-1/2 opacity-100 w-114 blur-xs hidden sm:block"
                    initial={direction === "next"
                        ? { scale: 0.7, x: "-90%", opacity: 0.7, zIndex: 7 }
                        : { scale: 0.9, x: "0%", opacity: 0.9, zIndex: 40 }
                    }
                    animate={{ scale: 0.9, x: "-30%", opacity: 0.9, zIndex: 8 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut"
                    }}
                >
                    {slides[leftIndex].content}
                </motion.div>
                <motion.button
                    onClick={prevImage}
                    className="absolute lg:top-83 lg:left-[380px] md:left-[260px] text-white px-6 py-3 rounded-full text-lg z-[100] cursor-pointer hidden sm:block"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        pointerEvents: 'auto',
                        position: 'absolute',
                        zIndex: 100
                    }}
                    disabled={animating}
                >
                    <img src="/Arrow (1).png" alt="Previous" className="lg:w-12 lg:h-12 md:h-10 md:w-10 relative" />
                </motion.button>

                <motion.button
                    onClick={prevImage}
                    className="absolute top-63 left-0 text-white px-6 py-3 rounded-full text-lg z-[100] cursor-pointer block sm:hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        pointerEvents: 'auto',
                        position: 'absolute',
                        zIndex: 100
                    }}
                    disabled={animating}
                >
                    <img src="/Arrow (1).png" alt="Previous" className="w-12 h-12 relative" />
                </motion.button>
                <motion.div
                    key={`center-slide-${centerIndex}-${direction}`}
                    className="relative w-128 opacity-100 mx-8 hidden sm:block"
                    initial={direction === "next"
                        ? { scale: 0.9, x: "30%", opacity: 0.9, zIndex: 40 }
                        : { scale: 0.9, x: "-30%", opacity: 0.9, zIndex: 40 }
                    }
                    animate={{ scale: 1.3, x: "0%", opacity: 1, zIndex: 50 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut"
                    }}
                >
                    {slides[centerIndex].content}
                </motion.div>
                <motion.div
                    key={`center-mobile-slide-${centerIndex}-${direction}`}
                    className="relative w-110 opacity-100 mx-8 block sm:hidden"
                    initial={direction === "next"
                        ? { scale: 0.9, x: "30%", opacity: 0.9, zIndex: 40 }
                        : { scale: 0.9, x: "-30%", opacity: 0.9, zIndex: 40 }
                    }
                    animate={{ scale: 1.3, x: "0%", opacity: 1, zIndex: 50 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut"
                    }}
                >
                    {slides[centerIndex].content}
                </motion.div>


                {/* Right Button */}
                <motion.button
                    onClick={nextImage}
                    className="absolute lg:top-83 lg:right-[380px] md:right-[270px] text-white px-6 py-3 rounded-full text-lg z-[100] hidden sm:block"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        pointerEvents: 'auto',
                        position: 'absolute',
                        zIndex: 100
                    }}
                    disabled={animating}
                >
                    <img src="/Arrow.png" alt="Next" className="lg:w-12 lg:h-12 md:w-10 md:h-10 relative" />
                </motion.button>
                <motion.button
                    onClick={nextImage}
                    className="absolute top-63 right-0 text-white px-6 py-3 rounded-full text-lg z-[100] block sm:hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        pointerEvents: 'auto',
                        position: 'absolute',
                        zIndex: 100
                    }}
                    disabled={animating}
                >
                    <img src="/Arrow.png" alt="Next" className="w-12 h-12 relative" />
                </motion.button>
                <motion.div
                    key={`right-slide-${rightIndex}-${direction}`}
                    className="absolute z-8 lg:right-43 lg:top-1/2 sm:right-43 sm:top-1/2 md:right-22 transform -translate-y-1/2 opacity-100 w-114 blur-xs hidden sm:block"
                    initial={direction === "next"
                        ? { scale: 0.9, x: "0%", opacity: 0.9, zIndex: 40 }
                        : { scale: 0.7, x: "90%", opacity: 0.7, zIndex: 7 }
                    }
                    animate={{ scale: 0.9, x: "30%", opacity: 0.9, zIndex: 8 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut"
                    }}
                >
                    {slides[rightIndex].content}
                </motion.div>
                <img src="/CLoud3.png" className="absolute z-7 lg:w-100 md:w-80 left-0 top-76 hidden sm:block" />
                <img src="/CLoud3 (3).png" className="absolute z-7 lg:w-100 md:w-80  right-0 top-77 hidden sm:block " />
                <img src="/cld.png" className="absolute z-60 lg:w-70 md:w-60 lg:left-124 md:left-63 lg:top-125 md:top-120 hidden sm:block" />
                <img src="/cld.png" className="absolute z-10 w-70 left-168 top-115 hidden sm:block md:hidden lg:block" />
                <img src="/cld1.png" className="absolute z-8 lg:w-140 md:w-110 lg:h-62 md:h-50 right-0 opacity-90 top-115 hidden sm:block" />
                <img src="/cld (5).png" className="absolute z-10 lg:w-180 md:w-140 lg:h-62 md:h-46 right-0 opacity-80 top-130 blur-[3px] hidden sm:block " />
                <img src="/cld (6).png" className="absolute z-10 lg:w-180 md:w-130 h-62 right-48 opacity-90 lg:top-130 md:top-120 blur-[2px] hidden lg:block md:hidden sm:block" />
                <img src="/cld (7).png" className="absolute z-11 w-108 left-0 opacity-80 lg:top-123 md:top-113 blur-[1px] hidden sm:block" />
                <img src="/cld1 (3).png" className="absolute z-9 w-110 left-0 opacity-80 top-87 hidden sm:block " />
                <img src="/Cloud1.png" className="absolute z-3 w-70 right-0 opacity-100 top-107 blur-[1px] hidden sm:block" />
                <img src="/Rectangle 15.svg" className="absolute z-20 w-full right-0 lg:opacity-80 md:opacity-100 lg:top-98 md:top-128 blur-[6px] hidden sm:block" />
                <img src="/Rectangle 15.svg" className="absolute z-20 w-full right-0 opacity-100 top-181 blur-[14px] transform scale-y-[-1] mb-8 hidden sm:block" />


                <img src="/Cld.svg" className="absolute z-70 w-77 left-0 top-77 block sm:hidden blue-[1px]" />
                <img src="/Cld (1).svg" className="absolute z-70 w-71 right-0 top-97 block sm:hidden blue-[1px]" />
                <img src="/cld (2).svg" className="absolute z-70 w-34 left-18 top-127 block sm:hidden " />
                <img src="/CLoud3.svg" className="absolute z-0 w-67 left-0 top-79 block sm.hidden " />
                <img src="/cld1.svg" className="absolute z-0 w-47 right-0 top-93 block sm.hidden " />
                <img src="/Cloud1.svg" className="absolute z-0 w-77 right-0 top-77 block sm.hidden " />
            </div>
        </>
    );
};

export default Third;