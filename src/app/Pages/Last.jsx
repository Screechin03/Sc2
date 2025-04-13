import React from 'react'
import { FaInstagram, FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Last = () => {
    return (
        <div className="relative flex flex-col justify-center items-center -mt-28 ">
            <img src="/TEXT.svg" className="h-75 z-60" />
            <img src="/Vector (3).svg" className="z-80 mt-20 h-22 mix-blend-color-dodge" />
            <div className="alsolute z-60 -mt-6 flex justify-center items-center flex-col">
                <p className="text-3xl relative top-12 font-ticket font-light">Join Us</p>
                <img src="Cta Button (1).png" className=" w-56" />
                <p className="text-[#2A4EB0] font-light text-2xl px-24 mt-8 font-ticketing text-center brightness-180 z-60">Join our discord community to stay updated on all the latest developments and announcements for out hackathon! Don’t miss out on key updates and opportunities, join us today!</p>
            </div>
            <div className="relative flex space-x-76 justify-around mt-17 z-60 text-white">
                <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold">ADDRESS</p>
                    <p className="text-xl text-[#92DEFF] text-center bf-clip-text mt-2">
                        APC Ray Lecture Hall Complex<br />
                        IISER Kolkata
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold">RESOURCES</p>
                    <div className="flex flex-col text-xl text-[#92DEFF] mt-2 items-center">
                        <a href="/sponsorship-brochure.pdf" target="_blank" className="hover:underline">
                            Sponsorship Brochure
                        </a>
                        <a href="/hacker-guide.pdf" target="_blank" className="hover:underline ">
                            Hacker Guide
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold">STAY CONNECTED</p>
                    <div className="flex space-x-6 text-[#92DEFF] mt-2">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl hover:text-white font-ticketing" />
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <FaDiscord className="text-3xl hover:text-white" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl hover:text-white" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-3xl hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden -mt-80">
                {/* Moon Glow */}
                <img
                    src="/glowmoon.png"
                    className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-1 w-[800px] opacity-70"
                    alt="Moon Glow"
                />

                {/* Mountains */}
                <img
                    src="/mountians.png"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-2 w-full opacity-100"
                    alt="Mountains"
                />

                {/* Land */}
                <img
                    src="/land.png"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-2 w-full opacity-80 mix-blend-difference"
                    alt="Land"
                />

                {/* Character */}
                <img
                    src="/Group 170.png"
                    className="absolute top-[46%] right-110 transform -translate-x-1/2 z-4 w-[240px]"
                    alt="Character on Broomstick"
                />

                {/* Rectangle 15 (Reduced Height) */}
                <img
                    src="/Rectangle 15.svg"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-2 w-full  opacity-90"
                    alt="Rectangle Background"
                />

                {/* Thank You Text */}
                <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 z-5 text-white text-center text-xl font-semibold tracking-wide">
                    @2025 IIIT Kalyani
                </div>
            </div>

        </div >
    )
}

export default Last
