"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { Inter, Tiny5 } from "next/font/google";
import Navbar from "./Navbar";
import Second from "./Second";
import Third from "./Third";
import Prizes from "./Prizes";
import Glimpse from "./Glimpse";
import Last from "./Last";
import Faqs from "./Faqs";
import Cards from "./Cards";
import Sponsors from "./Sponsors";
import DevfolioButton from "./DevfolioButton";
import Devi from "./Devi";

const inter = Inter({ subsets: ["latin"] });
const tiny = Tiny5({ subsets: ["latin", "greek"], weight: "400" });

export default function Home() {
    const videoRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div className="relative flex flex-col gap-3 min-h-screen overflow-x-hidden"
            style={{
                background: "linear-gradient(to bottom, #063254 0%, #004484 10%, #004484 61%, #01193D 86%)",
                width: "100%",
                maxWidth: "100vw"
            }}
        >
            {/* 🎥 Background Video */}
           {isClient && ( <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100 mix-blend-screen"
            >
                <source src="/537d97592d242580cfeedf0083ac44a75d06f8e4.mp4" type="video/mp4" />
            </video> )}




            <img src="/Group 85.png" alt="Background Element" className="w-8 absolute top-35 left-28 h-8 z-[2] hidden sm:block" />
            <img src="/Group 85.png" alt="Background Element" className="w-7 absolute top-51 left-3 h-7 z-[2] block sm:hidden" />
            <img src="/Group 85.png" alt="Background Element" className="w-6 absolute top-65 right-3 h-6 z-[2] block sm:hidden" />
            <img src="/Group 87.png" alt="Background Element" className="w-7 absolute top-75 right-67 h-7 z-[2]  hidden sm:block" />
            <img src="/Group 86.png" alt="Background Element" className="w-6 absolute top-103 right-157 h-6 z-[2] hidden sm:block" />
            <img src="/Comet.svg" alt="Background Element" className="w-34 absolute top-20 right-24 h-34 z-[2] hidden sm:block" />
            <img src="/Group 129.svg" alt="Background Element" className="w-10 absolute top-140 right-24 h-10 opacity-80 z-[2] hidden sm:block" />


            
            <div className="relative z-[999]">
                <Navbar/>
            </div>
            <div className="relative flex flex-col items-center justify-center min-h-auto text-white font-ticketing mt-19 z-[3] pb-32">
                <Head>
                    <title>Status Code 2</title>
                </Head>

                <>

                    <img src="/Vector (1).svg" className="hidden sm:block mb-4" alt="Desktop Vector" />
                    <img src="/Vector (4).png" className="block sm:hidden mb-4 mt-9" alt="Mobile Vector" />
                </>

                <p className="mt-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl bg-gradient-to-r from-[#BAF7FF] to-white text-transparent bg-clip-text sm:font-medium sm:mb-7">
                    Code with Purpose & Innovate, Collaborate, Dominate
                </p>
                
                  <Devi />
                 

                {/* Floating Ghost + More Elements */}
                <div className="-mt-25 relative flex flex-col items-center justify-center w-full z-[2]">
                    <div className="flex flex-col absolute inset-0 w-full h-full z-[2]">
                        <p className="mt-28 bg-gradient-to-r from-[#A5FECB] to-[#A5FECB] via-[#92EFFD] text-transparent bg-clip-text  font-ticketing mx-8 text-center opacity-100 text-base absolute z-20 block sm:hidden">
                            Unleash your creativity and join Status Code 2, the ultimate 36-hour hackathon extravaganza! Compete across diverse categories, showcasing your skills, ingenuity, and collaborative spirit alongside like-minded individuals. Discover the perfect platform to challenge yourself.
                        </p>
                        <img src="/Base.svg" alt="Background Element" className="w-full absolute top-74 h-auto opacity-100 hidden sm:block" />
                        <img src="/Group 225.svg" alt="Background Element" className="w-full absolute top-134 h-auto opacity-70 blur-[1px] block sm:hidden " />
                        <img src="/Rectangle 3.png" className="absolute -z-0 w-full right-0 opacity-70 h-60 top-117 blur-[8px] hidden sm:block " />
                        <img src="/Rectangle 3.png" className="absolute -z-0 w-full right-0 opacity-80 h-60 top-123 hidden sm:block blur-[8px] transform scale-y-[-1]" />
                        <img src="/Rectangle 3.png" className="absolute -z-0 w-full right-0 opacity-100 h-60 top-183 block sm:hidden blur-[8px] transform scale-y-[-1]" />
                        <img src="/Rectangle 3.png" className="absolute top-99 z-7 blur-[9px] opacity-80 " />
                        <p className="lg:mt-158 md:mt-130 bg-gradient-to-r from-[#A5FECB] to-[#A5FECB] via-[#92EFFD] text-transparent bg-clip-text text-xl font-ticketing mx-34 text-center opacity-100 absolute z-20 hidden sm:block">
                            Unleash your creativity and join Status Code 2, the ultimate 36-hour hackathon extravaganza! Compete across diverse categories, showcasing your skills, ingenuity, and collaborative spirit alongside like-minded individuals. Discover the perfect platform to challenge yourself.
                        </p>
                    </div>

                    {/* Levitating Ghost */}
                    <img
                        src="/Levitaing Ghost.svg"
                        alt="Levitating Ghost"
                        className="w-135 h-130  top-10 animate-[wiggle_5s_ease-in-out_infinite] relative z-[14] hidden sm:block"
                    />
                    <img
                        src="/Levitaing Ghost.svg"
                        alt="Levitating Ghost"
                        className="w-135 h-130  top-60 animate-[wiggle_5s_ease-in-out_infinite] relative z-[14] block sm:hidden"
                    />
                </div>
            </div>

            {/* Add proper margin before Second component */}
            <div className="mt-16 md:mt-36"></div>
            <Second className="mt-2" />


            <div className="mt-16 md:mt-36"></div>
            <Third />

            <div className="mt-16 md:mt-36"></div>
            <Glimpse />

            <div className="hidden sm:flex mt-20 md:mt-40"></div>
            <Prizes />

            <div className="mt-20 md:mt-40"></div>
            <Cards />

            <div className="mt-20 md:mt-40"></div>
            <Sponsors />

            <div className="mt-20 md:mt-40"></div>
            <Faqs />

            <div className="mt-20 md:mt-40"></div>
            <Last />
        </div>
    );
}
