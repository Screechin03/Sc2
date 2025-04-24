import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change when scrolled 50px down
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close mobile menu if open
            if (isOpen) setIsOpen(false);

            // Calculate position accounting for fixed header on desktop
            const offset = window.innerWidth >= 768 ? 100 : 0;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav
            className={`w-full z-[999] transition-all duration-300 md:fixed md:top-0 md:left-0 ${isScrolled
                ? "sm:bg-transparent md:bg-white/1 md:backdrop-blur-md"
                : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center px-6 md:px-4 lg:px-16 py-5">
                <div className="flex items-center">
                    <img src="/Vector.png" alt="Status Code 2" className="h-16 w-auto md:h-12 md:mr-3" />
                </div>
                <div className="hidden md:flex flex-1 justify-center items-center text-white">
                    <div className="flex justify-between md:gap-3 lg:gap-8 w-full max-w-3xl">
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("schedule")}>SCHEDULE</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("prizes")}>PRIZES</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("tracks")}>TRACKS</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("sponsors")}>SPONSORS</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("faqs")}>FAQs</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("contact")}>CONTACT US</p>
                    </div>
                </div>

                <div className="hidden md:block">
                    <img src="/CLG logo.png" alt="CLG Logo" className="h-10 md:h-10 lg:h-12 w-auto md:ml-2 lg:ml-4" />
                </div>

                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={32} />
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-3 bg-blue-900/95 p-4 shadow-lg text-white absolute right-0 w-1/2 z-[999] rounded-lg">
                    <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("schedule")}>SCHEDULE</p>
                    <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("prizes")}>PRIZES</p>
                    <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("tracks")}>TRACKS</p>
                    <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("sponsors")}>SPONSORS</p>
                    <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("faqs")}>FAQs</p>
                    <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("contact")}>CONTACT US</p>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
