import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const PROMO_THRESHOLD = 1500;

const Home = () => {
  const { t } = useTranslation(["home", "translation"]);
  const [totalMembers, setTotalMembers] = useState(0);
  const [isMember, setIsMember] = useState(false); // mock check or replace with real auth

  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const res = await axios.get(`${API}/api/member/total`);
        setTotalMembers(res.data.total || 0);
      } catch (err) {
        console.error("Failed to fetch member total", err);
      }
    };
    fetchTotalMembers();

    // Fake check – replace with real auth
    const memberStatus = localStorage.getItem("isMember");
    setIsMember(memberStatus === "true");
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Background Video or Image */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-earth-at-night-4049/1080p.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white px-4 text-center">
          <img src="/logo.png" alt="ShieldUnion" className="w-16 mb-2" />
          <h1 className="text-3xl md:text-5xl font-bold mb-2">ShieldUnion</h1>
          <p className="text-xl font-medium mb-1">{t("home.subtitle")}</p>
          <p className="text-sm md:text-base max-w-xl">{t("home.joinDesc")}</p>
        </div>
      </div>

      {/* Language Selector */}
      <div className="mt-4 flex justify-center">
        <LanguageSelector />
      </div>

      {/* Buttons Section */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">{t("home.joinTitle")}</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
          <Link to="/register?type=member" className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
            {t("home.getStarted")}
          </Link>
          <Link to="/register?type=civguard" className="bg-gray-200 text-black px-5 py-2 rounded hover:bg-gray-300 transition">
            {t("home.getStartedGuard")}
          </Link>

          {isMember && (
            <>
              <Link to="/submit-case" className="bg-white border border-black px-4 py-2 rounded hover:bg-gray-100 transition">
                {t("home.submitCase")}
              </Link>
              <Link to="/dao-voting" className="bg-white border border-black px-4 py-2 rounded hover:bg-gray-100 transition">
                {t("home.vote")}
              </Link>
            </>
          )}
        </div>

        {totalMembers < PROMO_THRESHOLD && (
          <p className="mt-4 text-sm text-blue-700">
            🎉 {PROMO_THRESHOLD - totalMembers} Early Access Spots Remaining
          </p>
        )}
      </div>

      {/* Smart Chat (right floating on desktop) */}
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs md:max-w-sm">
        <SmartChat />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
