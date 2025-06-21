import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import axios from "axios";

const PROMO_THRESHOLD = 1500;
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Home = () => {
  const { t } = useTranslation("home");
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const res = await axios.get(`${API}/api/member/total`);
        setTotalMembers(res.data.total || 0);
      } catch (err) {
        console.error("Error fetching member count:", err);
      }
    };
    fetchTotalMembers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      {/* Header */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Xv-QWQHfXY8?autoplay=1&mute=1&controls=0&loop=1&playlist=Xv-QWQHfXY8"
          title="ShieldUnion Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">ShieldUnion</h1>
          <p className="mt-2 text-lg md:text-xl">{t("subtitle")}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("joinTitle")}</h2>
        <p className="mb-6 text-lg">{t("joinDesc")}</p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
          <Link
            to="/register?type=member"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            {t("getStarted")}
          </Link>
          <Link
            to="/register?type=civguard"
            className="bg-gray-200 text-black px-6 py-3 rounded hover:bg-gray-300"
          >
            {t("getStartedGuard")}
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/submit-case"
            className="bg-white border border-black px-5 py-2 rounded hover:bg-gray-100"
          >
            {t("submitCase")}
          </Link>
          <Link
            to="/dao-voting"
            className="bg-white border border-black px-5 py-2 rounded hover:bg-gray-100"
          >
            {t("vote")}
          </Link>
        </div>

        {totalMembers < PROMO_THRESHOLD && (
          <div className="mt-6 text-sm text-gray-600">
            🪙 {PROMO_THRESHOLD - totalMembers} Early Access Spots Remaining
          </div>
        )}
      </div>

      {/* Language and Chat */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <div className="fixed top-4 right-28 z-50">
        <SmartChat />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
