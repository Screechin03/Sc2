import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            // Reenable scrolling
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
        
        return () => {
            // Reenable scrolling
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

    // Function to handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close mobile menu if open
            if (isOpen) {
                setIsOpen(false);
                
                // Small delay to allow menu closing animation to start
                // before scrolling to the section
                setTimeout(() => {
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
                }, 100);
            } else {
                // Direct scroll if menu is already closed
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
        }
    };

    return (
        <nav
            className={`w-full z-[999] transition-all duration-300 fixed md:top-0 md:left-0 ${
                isScrolled
                    ? "sm:bg-transparent bg-white/1 backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <div className="flex justify-between items-center px-6 md:px-4 lg:px-16 py-5">
                <div className="flex items-center">
                    <img src="/Vector.png" alt="Status Code 2" className="h-9 w-auto md:h-12 md:mr-3" />
                </div>
                <div className="hidden md:flex flex-1 justify-center items-center text-white">
                    <div className="flex justify-between md:gap-3 lg:gap-8 w-full max-w-3xl">
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("schedule")}>SCHEDULE</p>
                        {/* <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("prizes")}>PRIZES</p> */}
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("tracks")}>TRACKS</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("sponsors")}>SPONSORS</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("faqs")}>FAQs</p>
                        <p className="text-lg md:text-lg lg:text-xl cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("contact")}>CONTACT US</p>
                    </div>
                </div>

                <div className="hidden md:block">
                    <img src="/CLG logo.png" alt="CLG Logo" className="h-10 md:h-10 lg:h-12 w-auto md:ml-2 lg:ml-4" />
                </div>

                <button className="md:hidden text-white z-[1001]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
            
            {/* Mobile menu - fullscreen with animation */}
            <div 
                className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] transition-all duration-500 ease-in-out ${
                    isOpen 
                    ? "opacity-100 visible" 
                    : "opacity-0 invisible"
                }`}
            >
                <div 
                    className={`flex flex-col items-center justify-center h-full w-full transition-transform duration-500 ease-in-out ${
                        isOpen 
                        ? "translate-y-0" 
                        : "-translate-y-full"
                    }`}
                >
                    <div className="flex flex-col items-center gap-8 text-white text-2xl font-medium">
                        <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("schedule")}>SCHEDULE</p>
                        {/* <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("prizes")}>PRIZES</p> */}
                        <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("tracks")}>TRACKS</p>
                        <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("sponsors")}>SPONSORS</p>
                        <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("faqs")}>FAQs</p>
                        <p className="py-2 cursor-pointer hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection("contact")}>CONTACT US</p>
                    </div>
                    <div className="mt-12">
                        <img src="/CLG logo.png" alt="CLG Logo" className="h-16 w-auto" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;