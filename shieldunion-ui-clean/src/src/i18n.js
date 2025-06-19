import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {t('welcome')}
      </h1>

      <p className="text-lg max-w-xl text-gray-700 mb-6">
        {t('subtitle')}
      </p>

      <Link
        to="/join"
        className="inline-block bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition"
      >
        {t('join')}
      </Link>

      <p className="text-sm text-gray-500 mt-4">
        {t('login')}
      </p>
    </div>
  );
};

export default Home;
