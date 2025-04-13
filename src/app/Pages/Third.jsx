import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
    { id: "A", src: "/float3.svg" },
    { id: "B", src: "/float3.svg" },
    { id: "C", src: "/float3.svg" }
];

const Third = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logic for next image (right button)
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Logic for previous image (left button)
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-screen z-40  mt-44 ">

                <motion.img
                    key={images[(currentIndex + 2) % images.length].id}
                    src={images[(currentIndex + 2) % images.length].src}
                    alt="Left Image"
                    className="absolute left-43 top-1/2 z-8 transform -translate-y-1/2 opacity-100 w-114 blur-xs"
                    initial={{ scale: 0.8, x: "-60%" }}
                    animate={{ scale: 0.9, x: "-30%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                <motion.button
                    onClick={prevImage}
                    className="absolute top-83 left-[380px] text-white px-6 py-3 rounded-full text-lg z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img src="/Arrow (1).png" alt="Previous" className="w-12 h-12 z-50" />
                </motion.button>
                <motion.img
                    key={images[currentIndex].id}
                    src={images[currentIndex].src}
                    alt="Center Image"
                    className="relative  w-128 opacity-100 z-50 mx-8"
                    initial={{ scale: 1, x: "0%" }}
                    animate={{ scale: 1.3, x: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />


                <motion.button
                    onClick={nextImage} // Correct logic for next image
                    className="absolute top-83 right-[380px] text-white px-6 py-3 rounded-full text-lg z-50" // Use arbitrary value for right positioning
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img src="/Arrow.png" alt="Next" className="w-12 h-12 z-50" />
                </motion.button>

                {/* Right Image */}
                <motion.img
                    key={images[(currentIndex + 1) % images.length].id}
                    src={images[(currentIndex + 1) % images.length].src}
                    alt="Right Image"
                    className="absolute z-8 right-43 top-1/2 transform -translate-y-1/2 opacity-100 w-114 blur-xs"
                    initial={{ scale: 0.8, x: "60%" }}
                    animate={{ scale: 0.9, x: "30%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                <img src="/CLoud3.png" className="absolute z-7 w-100 left-0 top-77 " />
                <img src="/CLoud3 (3).png" className="absolute z-7 w-100 right-0 top-77 " />
                <img src="/cld.png" className="absolute z-60 w-70 left-124 top-125 " />
                <img src="/cld.png" className="absolute z-10 w-70 left-168 top-115 " />
                <img src="/cld1.png" className="absolute z-8 w-140 h-62 right-0 opacity-90  top-115 " />
                <img src="/cld (5).png" className="absolute z-10 w-180 h-62 right-0  opacity-80 top-130 blur-[3px]" />
                <img src="/cld (6).png" className="absolute z-10 w-180 h-62 right-48  opacity-90 top-130 blur-[2px]" />
                <img src="/cld (7).png" className="absolute z-11 w-108 left-0 opacity-80 top-123 blur-[1px]" />
                <img src="/cld1 (3).png" className="absolute z-9 w-110 left-0 opacity-80 top-87  " />
                <img src="/Cloud1.png" className="absolute z-3 w-70 right-0 opacity-100 top-107  blur-[1px]" />
                <img src="/Rectangle 15.svg" className="absolute z-20 w-full right-0 opacity-80 top-98  blur-[6px] " />

                <img src="/Rectangle 15.svg" className="absolute z-20 w-full right-0 opacity-100 top-173  blur-[14px] transform scale-y-[-1]" />


            </div>
        </>
    );
};

export default Third;