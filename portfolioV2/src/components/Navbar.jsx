import React, { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#e6daca] sticky top-0 z-[999] h-20 flex items-center justify-between px-5 md:px-20">
            {/* Logo */}
            <a href="#home" id="navbar__logo" className="text-3xl font-bold bg-gradient-to-r from-[#98a191] to-[#98a191] bg-clip-text text-transparent">
                Taufeeq
            </a>

            {/* Mobile Menu Toggle */}
            <div
                className="navbar__toggle md:hidden flex flex-col items-center cursor-pointer"
                id="mobile-menu"
                onClick={toggleMobileMenu}
            >
                <span className={`bar w-6 h-1 bg-black my-1 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`bar w-6 h-1 bg-black my-1 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`bar w-6 h-1 bg-black my-1 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>

            {/* Menu Links */}
            <ul
                className={`navbar__menu flex flex-col md:flex-row items-center absolute md:static top-20 left-0 w-full md:w-auto bg-[#e6daca] md:bg-transparent transition-transform duration-300 ${
                    isMobileMenuOpen ? "translate-y-0" : "-translate-y-[1000px]"
                } md:translate-y-0 z-10`}
            >
                <li className="navbar__item py-3 md:py-0">
                    <a
                        href="#about"
                        className="navbar__links text-[#5f704c] text-2xl md:mx-5 hover:text-[#56ab2f] transition-all"
                    >
                        About
                    </a>
                </li>
                <li className="navbar__item py-3 md:py-0">
                    <a
                        href="#projects"
                        className="navbar__links text-[#5f704c] text-2xl md:mx-5 hover:text-[#56ab2f] transition-all"
                    >
                        Projects
                    </a>
                </li>
                <li className="navbar__item py-3 md:py-0">
                    <a
                        href="https://github.com/tfq26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar__links text-[#5f704c] text-2xl md:mx-5 hover:text-[#56ab2f] transition-all"
                    >
                        Github
                    </a>
                </li>
                <li className="navbar__btn py-3 md:py-0">
                    <a
                        href="https://www.linkedin.com/in/taufeeq-ali-260366215"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button px-6 py-2 text-white bg-gradient-to-l from-[#B0DAB9] to-[#DAD299] rounded-lg hover:scale-105 transition-transform"
                    >
                        Get in Touch
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
