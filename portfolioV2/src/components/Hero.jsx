import React from "react";

const Hero = () => {
    return (
        <div id="home" className="hero flex flex-col md:flex-row items-center bg-[#bfa893] py-10 px-5">
            {/* Hero Image Container */}
            <div className="hero_img_container w-full md:w-1/2 flex justify-center">
                <img
                    alt="Profile"
                    src="resx/IMG_2260.JPG"
                    className="object-cover rounded-full aspect-square max-w-[300px] md:max-w-[400px]"
                />
            </div>

            {/* Hero Text Container */}
            <div className="hero_text_container mt-8 md:mt-0 md:ml-10 flex flex-col items-center md:items-start">
                <h1 id="greeting" className="text-5xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
                    Hello
                </h1>
                <h2 id="subheader" className="text-3xl text-center md:text-left text-[#5f704c] mt-4">
                    Glad you&#39;re here!
                </h2>
                <p id="hero_description" className="text-lg text-center md:text-left text-gray-700 mt-2">
                    {/* Add any additional description here */}
                </p>
            </div>
        </div>
    );
};

export default Hero;
