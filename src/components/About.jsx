import "react";

const About = () => {
    return (
        <div id="about" className="hero flex flex-col md:flex-row items-center w-full h-fit bg-[#bfa893] py-10 px-5">
            {/* Hero Image Container */}
            <div className="hero_img_container w-full md:w-1/2 flex justify-center">
                <img
                    alt="Profile"
                    src="/IMG_2260.JPG"
                    className="object-cover rounded-full aspect-square max-w-[300px] md:max-w-[400px]"
                />
            </div>

            {/* Hero Text Container */}
            <div className="hero_text_container flex flex-col w-full items-center md:items-start">
                <h1 id="greeting" className="text-9xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-t from-green-800 to-emerald-500">
                    Hello
                </h1>
                <h2 id="subheader" className="text-4xl text-center md:text-left text-[#5f704c] mt-4">
                    My names Taufeeq!
                </h2>
                <p id="hero_description" className="text-lg text-center md:text-left text-gray-700 mt-2">
                    {/* Add any additional description here */}
                </p>
            </div>
        </div>
    );
};

export default About;
