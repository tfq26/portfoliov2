import { useState, useEffect } from "react";

const Portfolio = () => {
    const [expandedTile, setExpandedTile] = useState(null);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768); // Initial check for screen size

    const toggleDescription = (tile) => {
        setExpandedTile((prev) => (prev === tile ? null : tile));
    };

    const projects = [
        {
            name: "Toros",
            description: `Toros is a Pickleball tournament management system designed to streamline the
                organization, tracking, and visualization of live Pickleball tournaments. Built using
                Spring Boot for the backend, React for the frontend, and a MongoDB database for
                persistent storage, the app allows users to manage player data, create and configure
                tournaments, generate matches, and track scores in real time.`,
            backgroundImage: "/bull-svgrepo-com.svg",
        },
        {
            name: "Libra",
            description: `Libra is an advanced AI-powered technology assistant designed to provide dynamic and
                personalized support for troubleshooting, answering questions, and enhancing user interactions.
                Built using Node.js, React, and the Google Generative AI (Gemini) model.`,
            backgroundImage: "/libra-svgrepo-com.svg",
        },
        {
            name: "Pisces",
            description: `Pisces is an innovative event management platform built with React, Node.js, and MongoDB,
             designed to empower organizers to seamlessly host events of all sizes.`,
            backgroundImage: "/pisces-svgrepo-com.svg",
        },
    ];

    // Automatically switch views based on screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Update state based on screen width
        };

        window.addEventListener("resize", handleResize); // Add event listener on mount
        return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }, []);

    return (
        <div className="bg-indigo-950 min-h-screen">
            {/* Hero Section */}
            <div
                id="home"
                className="hero flex flex-col items-center md:flex-row w-full min-h-[70vh] py-10 px-5 bg-gradient-to-b from-indigo-950 to-indigo-900"
            >
                {/* Portfolio Image Container */}
                <div className="hero_img_container w-full md:w-1/2 flex justify-center relative mb-8 md:mb-0">
                    <div className="absolute bg-blue-800 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-lg -z-10 translate-x-4 translate-y-4"></div>
                    <img
                        alt="Profile"
                        src="/IMG_2260.JPG"
                        className="object-cover rounded-lg max-w-[200px] md:max-w-[400px] aspect-square"
                    />
                </div>

                {/* Portfolio Text Container */}
                <div
                    className="hero_text_container flex flex-col items-center text-center md:text-left w-full md:w-1/2">
                    <h2 className="text-5xl md:text-7xl text-gray-200 mt-4">Hello, I&#39;m</h2>
                    <h1 className="text-6xl md:text-[10em] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-blue-500">
                        Taufeeq Ali
                    </h1>
                    <h2 className="text-4xl md:text-6xl text-gray-200 mt-4">A Full-Stack Developer</h2>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 mt-9">
                        <a
                            href="https://www.linkedin.com/in/taufeeq-ali-260366215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button px-6 py-2 text-white bg-gradient-to-r hover:scale-105 ease-in-out duration-400 from-[#1c6bff] to-[#6a9dfc] rounded-lg"
                        >
                            View my LinkedIn
                        </a>
                        <a
                            href="mailto:taufeeq2608@gmail.com?body=I%20would%20like%20to%20connect%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button px-6 py-2 text-white bg-gradient-to-l hover:scale-105 ease-in-out duration-400 from-[#1c6bff] to-[#6a9dfc] rounded-lg"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="https://github.com/tfq26"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button px-6 py-2 text-white bg-gradient-to-r hover:scale-105 ease-in-out duration-400 from-[#1c6bff] to-[#6a9dfc] rounded-lg"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="about flex flex-col items-center py-[10vh] px-5">
                <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-8">About Me</h2>
                <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl">
                    Hello, I&#39;m Taufeeq and I&#39;m currently a Junior in Computer Science at the University of Texas
                    at Dallas (UTD). I specialize in React, Node.js, and modern web development tools, creating seamless
                    user experiences.
                </p>
                <div className="flex justify-center space-x-6 mt-8">
                    {["react", "javascript", "java", "css", "c-sharp"].map((icon) => (
                        <img
                            key={icon}
                            src={`/${icon}-16-svgrepo-com.svg`}
                            alt={icon}
                            className="h-10 w-10 md:h-12 md:w-12 hover:scale-110 transition-transform duration-300 invert-100"
                        />
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            <div
                id="projects"
                className="projects flex flex-col items-center w-full bg-gradient-to-b from-indigo-800 to-indigo-900 py-10 px-5"
            >
                <h2
                    className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-gray-100 to-blue-500 mb-8"
                    style={{
                        height: `calc(2vh + 4rem)`, // Adjust height dynamically based on viewport height
                    }}
                >
                    Projects
                </h2>


                {isMobileView ? (
                    // Mobile View Layout
                    <div className="flex flex-col space-y-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative w-full p-6 bg-indigo-700 rounded-lg shadow-lg text-white cursor-pointer"
                                onClick={() => toggleDescription(project.name)}
                            >
                                {/* Wrapper with Padding */}
                                <div className="absolute inset-0 p-4 rounded-lg box-border">
                                    <div
                                        className="w-full h-full bg-center bg-no-repeat bg-contain opacity-50 rounded-lg"
                                        style={{ backgroundImage: `url('${project.backgroundImage}')` }}
                                    ></div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-4xl font-bold mb-3">{project.name}</h3>
                                    <p
                                        className={`text-white text-xl transition-max-height duration-500 ease-in-out overflow-hidden ${
                                            expandedTile === project.name ? "max-h-[500px] pt-6" : "max-h-0"
                                        }`}
                                    >
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Desktop View Layout
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative w-96 h-96 bg-indigo-700 rounded-lg shadow-lg text-white cursor-pointer"
                                onMouseEnter={() => setExpandedTile(project.name)}
                                onMouseLeave={() => setExpandedTile(null)}
                                onClick={() => toggleDescription(project.name)}
                            >
                                {/* Background image with opacity */}
                                <div className="absolute inset-0 p-8 rounded-lg box-border">
                                    <div
                                        className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg opacity-50"
                                        style={{backgroundImage: `url('${project.backgroundImage}')`}}
                                    ></div>
                                </div>


                                {/* Content */}
                                <div className="relative p-4">
                                    <h3 className="text-5xl text-center font-bold mb-2">{project.name}</h3>
                                    <p
                                        className={`text-white text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
                                            expandedTile === project.name ? "max-h-[500px] pt-2" : "max-h-0"
                                        }`}
                                    >
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Contact Section */}
            <div id="contact" className="contact flex flex-col items-center py-10 px-5">
                <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-8">Get in Touch</h2>
                <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mb-6">
                    If you&#39;d like to collaborate or discuss a project, feel free to reach out!
                </p>
                <a
                    href="mailto:taufeeq2608@gmail.com"
                    className="button px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
