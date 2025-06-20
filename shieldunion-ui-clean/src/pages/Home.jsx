import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Welcome to ShieldUnion
      </h1>

      <p className="text-lg max-w-2xl text-gray-700 mb-6">
        ShieldUnion is the world’s first unstoppable global protection platform
        defending people from injustice, corruption, and danger.
        <br />
        Anonymous reporting. DAO voting. CivGuard response.
      </p>

      <Link
        to="/join"
        className="inline-block bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition"
      >
        Join Now
      </Link>

      <p className="text-sm text-gray-500 mt-3">
        Already registered?{' '}
        <Link to="/login" className="underline text-blue-600">
          Login here
        </Link>
      </p>

      {/* ✅ Synthesia Video Embed */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🎥 ShieldUnion: Unstoppable Global Protection
        </h2>
        <div
          className="aspect-w-16 aspect-h-9 mb-8"
          style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16 / 9' }}
        >
          <iframe
            src="https://share.synthesia.io/embeds/videos/4aebfec9-3b43-4ae2-9945-a31736f0f550"
            loading="lazy"
            title="ShieldUnion video player"
            allowFullScreen
            allow="encrypted-media; fullscreen;"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0,
              overflow: 'hidden',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
