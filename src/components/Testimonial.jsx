import React from "react";
import EmilyImg from "../assets/Avatar.png";
import AmitImg from "../assets/Avatar (1).png";
import SophieImg from "../assets/Avatar (2).png";
import JaveriaImg from "../assets/Avatar (3).png";
import lucasImg from "../assets/Avatar (4).png";
import NaraImg from "../assets/Avatar (5).png";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily R",
      country: "USA",
      image: EmilyImg,
      text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
      rating: 5,
    },
    {
      name: "Amit K",
      country: "India",
      image: AmitImg,
      text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",
      rating: 5,
    },
    {
      name: "Sophie M",
      country: "UK",
      image: SophieImg,
      text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
      rating: 5,
    },
    {
      name: "Javier L",
      country: "Spain",
      image: JaveriaImg,
      text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",
      rating: 5,
    },
    {
      name: "Lucas T",
      country: "Brazil",
      image: lucasImg,
      text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
      rating: 5,
    },
    {
      name: "Nara S",
      country: "Canada",
      image: NaraImg,
      text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#F2F2F2] py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            What Our Users Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:mx-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center gap-5 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 w-[100%] rounded-2xl bg-[#F2F2F2] backdrop-blur-md text-center
             shadow-[4px_4px_10px_rgba(0,0,0,0.1),-3px_-3px_7px_#FFFFFF]
             transition duration-300"
            >
              {/* Star Rating */}
              <div className="flex mb-4 text-start">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#212121] mb-6 font-[600] text-start">
                {testimonial.text}
              </p>

              {/* User Info */}
              <div className="flex text-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra faded cards row preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center text-center gap-4 mt-[-40px] md:ms-16 pointer-events-none opacity-50 select-none">
          <div
            className="p-5 w-[94%] h-[24vh] rounded-2xl bg-[#F2F2F2] backdrop-blur-md text-center
  shadow-[4px_4px_10px_rgba(0,0,0,0.1),-3px_-3px_7px_#FFFFFF] transition duration-300 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 30%, transparent 60%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 5%, transparent 80%)",
            }}
          >
            <p className="text-[#212121] mb-6 font-[500] text-start">
              This platform brings people closer in the best way possible! From
              reconnecting with old friends to making new ones, every moment
              here feels special.
            </p>
          </div>

          {/* Faded card 2 */}
          <div
            className="p-5 w-[94%] md:-mt-0 -mt-14 md:ms-[346px] h-[24vh] rounded-2xl bg-[#F2F2F2] backdrop-blur-md text-center
  shadow-[4px_4px_10px_rgba(0,0,0,0.1),-3px_-3px_7px_#FFFFFF] transition duration-300 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 30%, transparent 60%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 5%, transparent 80%)",
            }}
          >
            <p className="text-[#212121] md:mb-6 font-[500] text-start">
              A social network that actually listens to its users! The design is
              sleek, the features are powerful, and the experience is seamless.
              I'm hooked!
            </p>
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center md:-mt-14 -mt-8">
          <button
            className="p-3 md:w-[16%] w-[100%] rounded-xl font-[700] text-[#FF5349] bg-[#F2F2F2] backdrop-blur-md text-center
             shadow-[4px_4px_10px_rgba(0,0,0,0.1),-3px_-3px_7px_#FFFFFF]
             transition duration-300"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
