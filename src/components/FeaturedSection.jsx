export default function FeaturesSection() {
    const features = [
      {
        emoji: '🔥',
        title: 'Seamless Connections',
        desc: 'Stay in touch with friends, family, and like-minded people with just a tap.',
      },
      {
        emoji: '📸',
        title: 'Share Your Story',
        desc: 'Upload photos, videos, and updates to let the world know what’s happening in your life.',
      },
      {
        emoji: '💬',
        title: 'Real-Time Chat',
        desc: 'Connect instantly with smooth, lightning-fast messaging.',
      },
      {
        emoji: '🔒',
        title: 'Privacy First',
        desc: 'We prioritize your privacy with world-class security.',
      },
      {
        emoji: '🌐',
        title: 'Discover & Explore',
        desc: 'Find trending content, join communities, and follow pages that match your interests.',
      },
      {
        emoji: '💼',
        title: 'Grow Your Business',
        desc: 'Market your brand, connect with customers, and build meaningful relationships.',
      },
    ];
  
    return (
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Features That Keep You Hooked!</h2>
        <p className="text-lg text-gray-600 mb-12">Meet, Chat, Share – Anytime, Anywhere!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                <span className="mr-2">{item.emoji}</span>{item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  