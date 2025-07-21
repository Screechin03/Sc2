import React, { useState } from "react";

const Marquee = () => {

    const avatar1 = "/image 26 (1).svg";
    const box = "Group 498.svg";
    const avatar2 = "/image 26 (2).svg";

    // Data for marquee content - can be either logo+name or direct content image
    const dataUpper = [
        {
            type: "logo+name",
            logo: "/Anonymous Legion.png",
            name: "Anonymous Legion"
        },
        {
            type: "logo+name",
            logo: "/codeS.svg",
            name: "CODE SAURAS"
        },
        {
            type: "logo+name",
            logo: "/Devdotcom.svg",
            name: "DEV DOT COM"
        },
        {
            type: "logo+name",
            logo: "/Apex_circle.jpg",
            name: "Apex circle"
        },

        {
            type: "logo+name",
            logo: "/devhive_logo.jpg",
            name: "Apex Devhive"
        },
        {
            type: "logo+name",
            logo: "/devsdungeon_logo.webp",
            name: "Devs dungeon"
        },
        {
            type: "logo+name",
            logo: "/Digital_dominator_logo.webp",
            name: "Digital dominator"
        },
        {
            type: "content",
            image: "/Frame 387.png",

        },
        {
            type: "content",
            image: "/Frame 388.png",

        },
        {
            type: "content",
            image: "/Frame 389.png",

        },
        {
            type: "content",
            image: "/Frame 390.png",
        },
        {
            type: "content",
            image: "/Frame 390-1.png",

        },
        {
            type: "content",
            image: "/Frame 389-1.png",

        },
        {
            type: "content",
            image: "/IEI.svg",
        },

    ];
    const dataLower = [
        {
            type: "logo+name",
            logo: "/innovatex_logo.jpg",
            name: "Innovatex"
        },
        {
            type: "logo+name",
            logo: "/LNC logo.png",
            name: "LNC"
        },


        {
            type: "logo+name",
            logo: "/Nexus of Nerds.png",
            name: "Nexus of Nerds"
        },
        {
            type: "logo+name",
            logo: "/Postman_Kolkata.jpg",
            name: "Postman Kolkata"
        },
        {
            type: "logo+name",
            logo: "/Repository_logo.png",
            name: "Repository"
        },
        {
            type: "logo+name",
            logo: "/samarth logo white-1.png",
            name: "Samarth"
        },

        {
            type: "logo+name",
            logo: "/Tech Defenders Logo.png",
            name: "Tech Defenders"
        },
        {
            type: "logo+name",
            logo: "/the ascent circle logo.jpeg",
            name: "The ascent circle "
        },
        {
            type: "logo+name",
            logo: "/The Code Bird (Logo).png",
            name: "The Code Bird "
        },
        {
            type: "logo+name",
            logo: "/Webytes_logo.jpg",
            name: "Webytes"
        },

    ]
    // Create a function to render marquee items
    const renderMarqueeItems = (data, avatar, avatarPosition = 'left') => (
        data.map((item, i) => (
            <div key={i} className="relative mx-8 flex-shrink-0">
                <img
                    src={box}
                    alt="Partner Box"
                    className="w-44 h-44 md:w-86 md:h-86 object-contain"
                />

                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                    {item.type === "logo+name" ? (
                        <div className="flex items-center space-x-2">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-10 h-10 md:w-14 md:h-14 object-contain"
                            />
                            <span className="text-white font-medium lg:text-xl sm:text-xs md:text-base">
                                {item.name}
                            </span>
                        </div>
                    ) : (
                        <img
                            src={item.image}
                            alt="Partner Content"
                            className="w-32 h-20 md:w-40 md:h-24 lg:w-44 lg:h-28 object-contain"
                        />
                    )}
                </div>
                <img
                    src={avatar}
                    alt="Community Partner"
                    className={`absolute top-6 lg:top-13 md:top-13 ${avatarPosition === 'right' ? 'right-0' : 'left-0'} w-12 h-12 md:w-22 md:h-22 object-contain`}
                />
            </div>
        ))
    );

    return (
        <div
            id="faqs"
            className="relative flex flex-col items-center min-h-auto mb-40 w-screen bg-center text-white z-60"
        >

            <div className="text-center">
                <div className="relative">
                    {/* Top outline layer - with larger size for mobile */}
                    <span className="absolute z-1 transform -translate-x-1/2 translate-y-4 sm:translate-y-2 text-transparent bg-clip-text text-stroke-2 font-ticket text-[70px] sm:text-[4vw] md:text-[120px] font-bold uppercase opacity-50 tracking-tight md:tracking-wide whitespace-nowrap">
                        COMMUNITY PARTNERS
                    </span>

                    {/* Middle filled layer - with larger size for mobile, positioned closer to outline */}
                    <span className="absolute z-80 transform -translate-x-1/2 translate-y-16 sm:translate-y-23 text-white font-ticket text-3xl sm:text-3xl md:text-6xl font-semibold uppercase tracking-wide whitespace-nowrap">
                        __COMMUNITY PARTNERS__
                    </span>
                </div>
            </div>

            {/* Marquee content */}
            <div className="w-full overflow-hidden mt-60">
                <div className="flex animate-marquee-rtl mb-4">
                    {/* Create enough duplicates for seamless loop */}
                    {renderMarqueeItems(dataUpper, avatar1, 'left')}
                    {renderMarqueeItems(dataUpper, avatar1, 'left')}
                    {renderMarqueeItems(dataUpper, avatar1, 'left')}
                </div>
                <div className="flex animate-marquee-ltr">
                    {/* Create enough duplicates for seamless loop */}
                    {renderMarqueeItems(dataLower, avatar2, 'right')}
                    {renderMarqueeItems(dataLower, avatar2, 'right')}
                    {renderMarqueeItems(dataLower, avatar2, 'right')}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee-rtl {
                    0% { 
                        transform: translateX(0%); 
                    }
                    100% { 
                        transform: translateX(-33.333%); 
                    }
                }
                
                @keyframes marquee-ltr {
                    0% { 
                        transform: translateX(-33.333%); 
                    }
                    100% { 
                        transform: translateX(0%); 
                    }
                }
                
                .animate-marquee-rtl {
                    animation: marquee-rtl 40s linear infinite;
                    width: max-content;
                }
                
                .animate-marquee-ltr {
                    animation: marquee-ltr 40s linear infinite;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

export default Marquee;
