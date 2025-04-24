import React, { useState } from "react";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "HOW MANY TEAM MEMBERS DO I NEED?",
            answer: "You need a team of 2-4 members to participate in the hackathon.",
        },
        {
            question: "WILL THE HACKATHON BE IN PERSON OR ONLINE?",
            answer: "The hackathon will be conducted online this year.",
        },
        {
            question: "HOW MUCH ARE THE PARTICIPATION FEES?",
            answer: "There are no participation fees for this hackathon. It's completely free!",
        },
        {
            question: "WHAT ARE THE PREREQUISITES TO PARTICIPATE IN THIS HACKATHON?",
            answer: "You should have basic knowledge of programming and a passion for hackathons.",
        },
        {
            question: "HOW DO I REGISTER?",
            answer: (
                <span>
                    Register your team @
                    <a
                        href="https://devfolio.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#92DEFF] underline hover:text-blue-300"
                    >
                        Devfolio
                    </a>
                </span>
            ),
        },
    ];

    return (
        <div id="faqs"
            className="relative flex flex-col items-center min-h-screen w-screen bg-center text-white z-60"
        >
            {/* FAQ Header */}
            <div className="text-center">
                <div className="relative ">
                    {/* Top outline layer */}
                    <span className="absolute z-1 transform -translate-x-1/2 translate-y-2 text-transparent bg-clip-text  text-stroke-2 font-ticket text-[120px] font-bold uppercase opacity-50 tracking-wide hidden sm:block">
                        F.A.Q.S
                    </span>
                    <span className="absolute z-1 transform -translate-x-1/2 translate-y-2 text-transparent bg-clip-text  text-stroke-2 font-ticket text-[120px] font-bold uppercase opacity-50 tracking-tight block sm:hidden">
                        F.A.Q.S
                    </span>
                    {/* Middle filled layer */}
                    <span className="absolute z-80 transform -translate-x-1/2 translate-y-22  text-white font-ticket text-6xl font-semibold uppercase tracking-wide">
                        __FAQ__
                    </span>
                    {/* Bottom outline layer */}

                </div>
            </div>
            <div className="mt-60 w-full flex flex-col gap-4 pl-47 hidden sm:block">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="flex flex-col text-2xl  pb-2 tracking-wide font-ticketing justify-start"
                    >
                        <div className="flex items-center justify-between">
                            <button
                                className={`w-8 h-8 flex items-center justify-center transform transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"
                                    }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <img
                                    src="/Group 150.svg"
                                    alt={openIndex === index ? "Close" : "Open"}
                                    className="w-full h-full"
                                />
                            </button>


                            <p className="flex-grow pl-4">{faq.question}</p>
                        </div>

                        {openIndex === index && (
                            <p className="mt-2 pl-12 text-[#92DEFF] z-80">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-60 w-full flex flex-col gap-2 pl-4 block sm:hidden">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="flex flex-col text-lg  pb-2 tracking-tight font-ticketing justify-start"
                    >
                        <div className="flex items-center justify-between">
                            <button
                                className={`w-8 h-8 flex items-center justify-center transform transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"
                                    }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <img
                                    src="/Group 150.svg"
                                    alt={openIndex === index ? "Close" : "Open"}
                                    className="w-7 h-7"
                                />
                            </button>


                            <p className="flex-grow pl-4">{faq.question}</p>
                        </div>

                        {openIndex === index && (
                            <p className="mt-2 pl-12 text-[#92DEFF] z-80">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>



        </div>
    );
};

export default Faqs;