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

    return (
        <nav
            className={`fixed top-0 left-0 w-full  z-[6] transition-all duration-300 ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-md " : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center px-6 lg:mr-10 md:px-16 py-5">
                {/* Left Logo */}
                <img src="/Vector.png" alt="Vector" className="h-13 w-auto mr-4" />

                {/* Menu Items (Desktop) */}
                <div className="hidden md:flex flex-1 justify-center space-x-20 items-center text-white">
                    <p className="text-xl">SCHEDULE</p>
                    <p className="text-xl">PRIZES</p>
                    <p className="text-xl">TRACKS</p>
                    <p className="text-xl">SPONSORS</p>
                    <p className="text-xl">FAQs</p>
                    <p className="text-xl">CONTACT US</p>
                </div>

                {/* Right Logo */}
                <img src="/CLG logo.png" alt="CLG Logo" className="h-12 w-auto hidden md:block ml-4" />

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={32} />
                </button>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="md:hidden flex flex-col  items-center gap-3 bg-blue-900/90 p-4 shadow-lg text-black">
                    <p>SCHEDULE</p>
                    <p>PRIZES</p>
                    <p>TRACKS</p>
                    <p>SPONSORS</p>
                    <p>FAQs</p>
                    <p>CONTACT US</p>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
