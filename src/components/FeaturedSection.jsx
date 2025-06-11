export default function FeaturesSection() {
  const features = [
    {
      emoji: "🔥",
      title: "Seamless Connections",
      desc: "Stay in touch with friends, family, and like-minded people with just a tap.",
    },
    {
      emoji: "📸",
      title: "Share Your Story",
      desc: "Upload photos, videos, and updates to let the world know what’s happening in your life.",
    },
    {
      emoji: "💬",
      title: "Real-Time Chat",
      desc: "Connect instantly with smooth, lightning-fast messaging.",
    },
    {
      emoji: "🔒",
      title: "Privacy First",
      desc: "We prioritize your privacy with world-class security.",
    },
    {
      emoji: "🌐",
      title: "Discover & Explore",
      desc: "Find trending content, join communities, and follow pages that match your interests.",
    },
    {
      emoji: "💼",
      title: "Grow Your Business",
      desc: "Market your brand, connect with customers, and build meaningful relationships.",
    },
  ];

  return (
    <section className="bg-[#F2F2F2] py-16 text-center pt-28">
      <h2 className="text-4xl font-bold text-[#282722] mb-2">
        Features That Keep You Hooked!
      </h2>
      <p className="text-md text-[#222222] font-bold mb-12">
        Meet, Chat, Share – Anytime, Anywhere!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-[#F2F2F2] backdrop-blur-md text-center
             shadow-[4px_4px_10px_rgba(0,0,0,0.1),-2px_-2px_6px_#FFFFFF]
             transition duration-300"
          >
            <h3 className="mb-2 flex justify-center items-center gap-2">
              <span>{item.emoji}</span>
              <span className="text-[#1A293C] text-xl font-[700]">
                {item.title}
              </span>
            </h3>
            <p className="text-[#222222] font-[600] text-sm leading-relaxed px-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}