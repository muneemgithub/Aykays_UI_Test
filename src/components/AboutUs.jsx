import React from "react";
import leftImage from "../assets/Group 3.png";

const AboutUs = () => {
  const features = [
    {
      emoji: "🎥",
      title: "Short Videos & Reels",
      desc: "Share engaging, bite-sized content that keeps everyone entertained.",
    },
    {
      emoji: "🔔",
      title: "Smart Notifications",
      desc: "Stay updated on what matters without the noise.",
    },
    {
      emoji: "👥",
      title: "Interest-Based Communities",
      desc: "Join groups and discussions that match your passion.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Left Side - Mobile Images */}
      <div className="relative w-full max-w-md flex justify-center">
        <img
          src={leftImage}
          alt="Phone Mockup 1"
          className="w-40 sm:w-48 md:w-56 rotate-[12deg] z-10"
        />
      </div>

      {/* Right Side - Text + Features */}
      <div className="flex-1 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Where Every Click Sparks a Connection!
        </h2>
        <p className="text-gray-600 mb-8">
          A small act of kindness today can create a lifetime of impact for
          someone in need. Give from the heart and change a life!
        </p>

        <div className="space-y-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-blue-500 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  {item.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1 group-hover:text-gray-800">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
