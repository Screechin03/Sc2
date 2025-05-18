import React from "react";

// Reusable SponsorFrame component
const SponsorFrame = ({ frameImage, sponsors, type }) => {
    // Check if there are any sponsors
    const hasSponsors = sponsors && sponsors.length > 0;

    return (
        <div className="flex relative w-full">
            <img src={frameImage} alt={`${type} sponsors`} className="w-full" />

            {hasSponsors && (
                <div className="absolute inset-0 flex items-center justify-center">

                    {sponsors.length === 1 ? (
                        <div className="flex justify-center items-center w-full">
                            <img
                                src={sponsors[0].logo}
                                alt={`${sponsors[0].name} LOGO`}
                                className="w-auto h-auto max-w-[50%] max-h-[35%] mt-5 object-contain"
                            />
                        </div>
                    ) : (

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-[80%] px-2 mt-3">
                            {sponsors.map((sponsor, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} LOGO`}
                                        className="w-auto max-h-14 sm:max-h-12 md:max-h-20 object-fill"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
const Sponsors = () => {

    const titleSponsors = [


    ];

    const diamondSponsors = [
    ];

    const platinumSponsors = [
        { name: "DEVFOLIO", logo: "/devfolio.png" },


    ];

    const goldSponsors = [
        { name: "ETHINDIA", logo: "/ethindia.png" },

    ];

    const silverSponsors = [

    ];

    return (
        <div id="sponsors" className="min-h-screen h-auto w-full flex flex-col items-center z-30 gap-40 sm:-mt-20 lg:-mt-10 overflow-hidden">
            <div className="relative mb-10 ">
                <span className="absolute z-1 transform -translate-x-1/2 translate-y-2 text-transparent bg-clip-text text-stroke-2 font-ticket text-[120px] font-bold uppercase opacity-50">
                    SPONSORS
                </span>

                <span className="absolute z-80 transform -translate-x-1/2 translate-y-22 text-white font-ticket text-6xl font-semibold uppercase">
                    __SPONSORS__
                </span>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-10 px-10 h-auto">
                <SponsorFrame frameImage="/Frame 71.svg" sponsors={titleSponsors} type="title" />
                <SponsorFrame frameImage="/Frame 75.svg" sponsors={diamondSponsors} type="diamond" />
                <SponsorFrame frameImage="/Frame 72.svg" sponsors={platinumSponsors} type="platinum" />
                <SponsorFrame frameImage="/Frame 73.svg" sponsors={goldSponsors} type="gold" />
                <SponsorFrame frameImage="/Frame 74.svg" sponsors={silverSponsors} type="silver" />
            </div>
        </div>
    );
};

export default Sponsors;