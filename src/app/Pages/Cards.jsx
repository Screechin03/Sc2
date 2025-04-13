import React, { useState } from "react";

const Cards = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        { id: 1, front: <img src="/Test.svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className=" h-[662px] w-[487px]" /> },
        { id: 2, front: <img src="/Test (1).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className=" h-[662px] w-[487px]" /> },
        { id: 3, front: <img src="/Test (2).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className=" h-[662px] w-[487px]" /> },
        { id: 4, front: <img src="/Test (3).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className=" h-[662px] w-[487px]" /> },
        { id: 5, front: <img src="/Test (4).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className=" h-[662px] w-[487px]" /> },
        { id: 6, front: <img src="/Test (5).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className=" h-[662px] w-[487px]" /> },

    ];

    return (
        <div className="relative flex flex-col items-center min-h-screen w-screen bg-center text-white z-60">
            <div className="text-center">
                <div className="relative ">
                    <span className="absolute z-1 transform -translate-x-1/2 translate-y-2 text-transparent bg-clip-text  text-stroke-2 font-ticket text-[120px] font-bold uppercase opacity-50 tracking-wide">
                        TRACKS
                    </span>


                    <span className="absolute z-80 transform -translate-x-1/2 translate-y-22  text-white font-ticket text-6xl font-semibold uppercase tracking-wide">
                        __TRACKS__
                    </span>


                </div>
            </div>
            <div className="flex gap-4 mt-70">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`relative w-[180px] h-[432px]  shadow-lg transition-transform duration-500 transform perspective ${hoveredIndex === index
                            ? "scale-110 rotate-y-180 w-[387px] h-160"
                            : hoveredIndex !== null
                                ? "scale-80 "
                                : "scale-100"
                            }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >

                        <div
                            className={`absolute w-full h-full backface-hidden flex items-center justify-center text-lg font-bold text-gray-800 ${hoveredIndex === index ? "hidden" : "block"
                                }`}
                        >
                            {card.front}
                        </div>
                        <div
                            className={`absolute w-full h-full  flex items-center justify-center text-lg font-bold  rotate-y-180 ${hoveredIndex === index ? "block" : "hidden"
                                }`}
                        >
                            {card.back}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;