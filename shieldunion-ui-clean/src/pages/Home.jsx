import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";

const PROMO_THRESHOLD = 1500;
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Home = () => {
  const { t } = useTranslation();
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const res = await axios.get(`${API}/api/member/total`);
        setTotalMembers(res.data.total || 0);
      } catch (error) {
        console.error("Failed to fetch total members", error);
      }
    };
    fetchTotalMembers();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="bg-black text-white py-6 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">🛡️ ShieldUnion</h1>
        <p className="text-lg max-w-xl mx-auto">
          {t("home.subtitle") || "Unstoppable Global Protection Powered by AI and Justice"}
        </p>
        <div className="mt-4">
          <LanguageSelector />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">{t("home.joinTitle") || "Join the Revolution"}</h2>
          <p className="text-gray-700 text-lg mb-6">
            {t("home.joinDesc") || "Protect yourself, protect others, and stand for truth with ShieldUnion."}
          </p>

          <div className="space-y-4 sm:space-x-4 sm:space-y-0 sm:flex sm:justify-center">
            <Link to="/register" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 block">
              {t("home.getStarted") || "📝 Register Now"}
            </Link>
            <Link to="/submit-case" className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 block">
              {t("home.submitCase") || "📂 Submit a Case"}
            </Link>
            <Link to="/dao-voting" className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 block">
              {t("home.vote") || "🗳️ DAO Voting"}
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            {totalMembers < PROMO_THRESHOLD
              ? `🎉 ${PROMO_THRESHOLD - totalMembers} Early Access Spots Remaining`
              : "🔥 Early Access Promo Ended"}
          </p>
        </div>
      </main>

      {/* SmartChat Floating Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50">
        <SmartChat />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
