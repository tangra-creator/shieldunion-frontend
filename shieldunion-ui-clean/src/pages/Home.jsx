import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Welcome Section */}
        <h1 className="text-4xl font-bold text-center mb-6">
          🛡️ Welcome to ShieldUnion
        </h1>
        <p className="text-center text-lg mb-10">
          A global, unstoppable protection network governed by AI and DAO. We defend individuals, expose corruption, and protect truth — anonymously and permanently.
        </p>

        {/* Embedded Video */}
        <div className="mt-10 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">🎥 Watch the ShieldUnion Story</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/Xv-QWQHfXY8"
              title="ShieldUnion Promo Video"
              style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl font-semibold mb-4">
            Ready to join the world’s most advanced protection alliance?
          </p>
          <a
            href="/register"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
          >
            Join ShieldUnion
          </a>
        </div>

      </div>
    </div>
  );
};

export default Home;
