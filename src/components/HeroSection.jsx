import React from "react";
import phoneMockup from "../assets/Group 1.png";
import logoDecoration from "../assets/Group 12.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-red-500 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Centered Logo */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex items-center">
            <img
              src={logoDecoration}
              alt="Logo decoration"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[326.87px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] object-contain"
              style={{ marginLeft: "clamp(20px, 5vw, 96.23px)" }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Stay Connected</span>
              <span className="block">Stay Social</span>
              <span className="block">Stay You!</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
              Connect with friends, share your moments, and discover new
              experiences. Mybindle brings people together in a way that's
              authentic and meaningful.
            </p>

            {/* CTA Button */}
            <button className="px-8 py-4 bg-white text-red-500 rounded-full font-bold text-lg hover:bg-red-50 transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-[280px] md:w-[320px] mx-auto">
                <img
                  src={phoneMockup}
                  alt="Phone mockup"
                  className="w-full h-auto rounded-[2rem] shadow-2xl"
                />
              </div>

              {/* Tooltip 1 */}
              <div className="absolute top-1/4 -left-4 bg-white px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-red-500 font-semibold whitespace-nowrap">
                  🔥 Seamless Connections
                </p>
              </div>

              {/* Tooltip 2 */}
              <div className="absolute bottom-1/4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-red-500 font-semibold whitespace-nowrap">
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
