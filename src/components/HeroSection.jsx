import React from "react";
import phoneMockup from "../assets/Group 1.png";
import logoDecoration from "../assets/Group 12.png";

const HeroSection = () => {
  return (
    <div className="md:h-[104vh] h-[140vh] bg-[#FF5349] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  md:px-10 lg:px-8 py-6">
        {/* Centered Logo */}
        <div className="flex justify-center items-center md:mb-10 mb-16">
          <div className="flex items-center">
            <img
              src={logoDecoration}
              alt="Logo decoration"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[326.87px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[50px] object-contain"
              style={{ marginLeft: "clamp(20px, 5vw, 96.23px)" }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between md:mb-8 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white md:-mt-10 lg:-mt-45 ">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl text-[#FAFAFA] lg:text-5xl font-bold leading-tight mb-6">
              <span className="block">Stay Connected</span>
              <span className="block">Stay Social</span>
              <span className="block">Stay You!</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl mb-6 text-[#FAFAFA] max-w-xl">
              A place where friendships grow, communities thrive, and moments
              turn into unforgettable experiences. Whether you're looking to
              reconnect with old friends, build new relationships, or share what
              matters most to you MyBindle is your home on the internet.
            </p>

            {/* CTA Button */}
            <button className="px-8 py-2 bg-[#F2F2F2] text-[#FF5349] rounded-[7px] font-[600] text-lg hover:bg-red-50 transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 relative ms-8 md:ms-0">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-[280px] md:w-[340px] mx-auto">
                <img
                  src={phoneMockup}
                  alt="Phone mockup"
                  className="w-full h-auto rounded-[2rem] "
                />
              </div>

              {/* Tooltip 1 */}
              <div className="absolute top-7 left-[64px] bg-white px-5 py-4 rounded-[12px] shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-[#1A293C] font-semibold whitespace-nowrap">
                  🔥 Seamless Connections
                </p>
              </div>

              {/* Tooltip 2 */}
              <div className="absolute bottom-1/4 md:right-36 right-28 bg-white px-5 py-4 rounded-[12px] shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-[#1A293C] font-semibold whitespace-nowrap">
                  🌐 Discover & Explore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
