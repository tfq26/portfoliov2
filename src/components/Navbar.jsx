import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#161833] sticky top-0 z-[999] h-20 flex items-center justify-between px-5 md:px-20">
            {/* Logo */}
            <a href="#home" id="navbar__logo" className="flex items-center">
                <img
                    src="/wink-tongue-svgrepo-com.svg"
                    alt="Logo"
                    className="h-10 animate-rotate"
                />
            </a>

            {/* Mobile Menu Toggle */}
            <div
                className="navbar__toggle md:hidden flex flex-col items-center cursor-pointer"
                id="mobile-menu"
                onClick={toggleMobileMenu}
            >
                <span
                    className={`bar w-6 h-1 bg-white my-1 transition-transform duration-300 ${
                        isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                    className={`bar w-6 h-1 bg-white my-1 transition-opacity duration-300 ${
                        isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`bar w-6 h-1 bg-white my-1 transition-transform duration-300 ${
                        isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
            </div>

            {/* Menu Links */}
            <ul
                className={`font-Oswald flex flex-col md:flex-row items-center absolute md:static top-20 left-0 w-full md:w-auto bg-[#161833] md:bg-transparent transition-transform duration-300 ${
                    isMobileMenuOpen ? "translate-y-0" : "-translate-y-[1000px]"
                } md:translate-y-0 z-10`}
            >
                <li className="py-3 md:py-0">
                    <a
                        href="#about"
                        className= "text-[#7861f2] text-2xl md:mx-5 px-3 py-3 rounded-lg hover:shadow-lg transition-all duration-200 ease-in-out hover:bg-indigo-700 hover:text-white"

                    >
                        About
                    </a>
                </li>
                <li className="py-3 md:py-0">
                    <a
                        href="#projects"
                        className= "text-[#7861f2] text-2xl md:mx-5 px-3 py-3 rounded-lg hover:shadow-lg transition-all duration-200 ease-in-out hover:bg-indigo-700 hover:text-white"
                    >
                        Projects
                    </a>
                </li>
                <li className="py-3 md:py-0">
                    <a
                        href="#contact"
                        className= "text-[#7861f2] text-2xl md:mx-5 px-3 py-3 rounded-lg hover:shadow-lg transition-all duration-200 ease-in-out hover:bg-indigo-700 hover:text-white"
                    >
                        Contact
                    </a>
                </li>
                {/*<li className="ml-[2rem] py-3 md:py-0 hover:scale-110 ease-in-out duration-200">*/}
                {/*    <a*/}
                {/*        href="https://github.com/tfq26"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        className="button px-6 py-2 text-white bg-gradient-to-l from-[#c1b5ff] to-[#6a9dfc] rounded-lg"*/}
                {/*    >*/}
                {/*        Github*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default Navbar;
