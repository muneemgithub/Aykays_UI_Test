import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "MyBindle has transformed how I connect with friends. The interface is intuitive and the features are exactly what I needed!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      country: "India",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "This app makes sharing moments with family so easy. I love how seamless everything works together.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      country: "United Kingdom",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Finally found a social platform that prioritizes genuine connections. The community here is amazing!",
      rating: 5,
    },
    {
      name: "Carlos Rodriguez",
      country: "Spain",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      text: "The features are innovative and the user experience is top-notch. Highly recommend!",
      rating: 5,
    },
    {
      name: "Maria Silva",
      country: "Brazil",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      text: "Love how easy it is to discover new communities and connect with like-minded people.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      country: "Canada",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      text: "The best social networking app I've used. Clean interface and great privacy features!",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex mb-4">
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
              <p className="text-gray-600 mb-6">"{testimonial.text}"</p>

              {/* User Info */}
              <div className="flex items-center">
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

        {/* See More Button */}
        <div className="text-center">
          <button className="text-[#FF4E4E] font-semibold text-lg hover:text-red-600 transition-colors duration-300">
            See More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
