import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {t('home.welcome')}
      </h1>

      <p className="text-lg max-w-2xl text-gray-700 mb-6">
        {t('home.description')}
        <br />
        {t('home.subtitle')}
      </p>

      <Link
        to="/join"
        className="inline-block bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition"
      >
        {t('home.joinNow')}
      </Link>

      <p className="text-sm text-gray-500 mt-3">
        {t('home.alreadyRegistered')}{' '}
        <Link to="/login" className="underline text-blue-600">
          {t('home.loginHere')}
        </Link>
      </p>

      {/* 🎥 Videos */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('home.video.platform')}</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/placeholder_intro"
            title="ShieldUnion Platform Intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('home.video.civguard')}</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/placeholder_civguard"
            title="CivGuard Explainer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('home.video.sixPounds')}</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/placeholder_member"
            title="Member Benefits"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('home.video.infotrade')}</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/placeholder_infotrade"
            title="InfoTrade System"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
