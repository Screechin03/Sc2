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
                                className={`w-auto h-auto object-contain mt-5 ${
                                    type === 'venue' ? 'max-w-[15%] max-h-[15%]' : 
                                    'max-w-[50%] max-h-[35%]'
                                }`}
                            />
                        </div>
                    ) : (
                        <div className={`
                            ${sponsors.length === 2 ? 'flex justify-center items-center gap-8 w-[80%]' : 
                              sponsors.length === 3 ? 'grid grid-cols-3 gap-4 w-[85%]' :
                              sponsors.length === 4 ? 'grid grid-cols-4 gap-2 w-[85%]' :
                              'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-[95%]'}
                            px-2 mt-3
                        `}>
                            {sponsors.map((sponsor, index) => (
                                <div key={index} className="flex items-center justify-center p-2">
                                    <img
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} LOGO`}
                                                                                className={`
                                                                                        w-auto object-contain
                                                                                        ${type === 'diamond' ? 'max-h-32 sm:max-h-40 md:max-h-48' :
                                                                                            sponsors.length === 2 ? 'max-h-20 sm:max-h-24 md:max-h-28' :
                                                                                            sponsors.length === 3 ? 'max-h-12 sm:max-h-16 md:max-h-20' :
                                                                                            sponsors.length === 4 ? 'max-h-10 sm:max-h-14 md:max-h-18' :
                                                                                            'max-h-8 sm:max-h-12 md:max-h-16'}
                                                                                `}
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
        { name: "VULTR", logo: "/Vultr.png" }
    ];

    const diamondSponsors = [
    { name: "GITHUB", logo: "/github.png" },
    { name: "YES", logo: "/Yes.png" }
    ];

    const platinumSponsors = [
        { name: "DEVFOLIO", logo: "/devfolio.png" },
        { name: "IDFC", logo: "/IDFC.jpg" },

    ];

    const goldSponsors = [
        { name: "ETHINDIA", logo: "/ethindia.png" },
        { name: "ORKES", logo: "/orkess.png" }

    ];

    const silverSponsors = [
    { name: "PEPVERSE", logo: "/pepverse.jpeg" },
    { name: "Appwrite", logo: "/Appwrite.png" },
    { name: "Interview Buddy", logo: "/interviewLogo.png" },
    { name: "DEVREL", logo: "/Devrel.png" },

    ];

    const venuePartner = [
        { name: "IISER", logo: "/IISER.png" },


    ];

    return (
        <div id="sponsors" className="min-h-auto w-auto flex flex-col items-center z-30 gap-40 sm:-mt-20 lg:-mt-10 overflow-hidden">
            <div className="relative mb-10 ">
                <span className="absolute z-1 transform -translate-x-1/2 translate-y-2 text-transparent bg-clip-text text-stroke-2 font-ticket text-[120px] font-bold uppercase opacity-50">
                    SPONSORS
                </span>

                <span className="absolute z-80 transform -translate-x-1/2 translate-y-22 text-white font-ticket text-6xl font-semibold uppercase">
                    __SPONSORS__
                </span>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-10 h-auto px-2 lg:w-[75%]">
                <SponsorFrame frameImage="/Frame 71.svg" sponsors={titleSponsors} type="title" />
                <SponsorFrame frameImage="/Frame 75.svg" sponsors={diamondSponsors} type="diamond" />
                <SponsorFrame frameImage="/Frame 72.svg" sponsors={platinumSponsors} type="platinum" />
                <SponsorFrame frameImage="/Frame 73.svg" sponsors={goldSponsors} type="gold" />
                <SponsorFrame frameImage="/Frame 74.svg" sponsors={silverSponsors} type="silver" />
                <SponsorFrame frameImage="/Frame 70.svg" sponsors={venuePartner} type="venue" />
            </div>
        </div>
    );
};

export default Sponsors;