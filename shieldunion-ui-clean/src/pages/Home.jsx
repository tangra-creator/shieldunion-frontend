import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";
import { useTranslation } from "react-i18next";

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
      } catch (err) {
        console.error("Failed to fetch total members:", err);
      }
    };
    fetchTotalMembers();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <header className="bg-black text-white py-6 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="ShieldUnion" className="h-10" />
            <h1 className="text-3xl font-bold">ShieldUnion</h1>
          </div>
          <LanguageSelector />
        </header>

        <div className="flex flex-col items-center justify-center px-4 py-10 text-center bg-white">
          <h2 className="text-xl text-gray-600 mb-2">{t("home.subtitle", "Justice Without Borders")}</h2>
          <h3 className="text-2xl font-semibold mb-4">{t("home.joinTitle", "Join the Global Protective Union")}</h3>
          <p className="text-gray-700 mb-6 max-w-xl">
            {t("home.joinDesc", "Protect your rights and share your truth anonymously.")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/register?type=member" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
              🛡️ {t("home.getStarted", "Join as Member")}
            </Link>
            <Link to="/register?type=civguard" className="bg-gray-100 text-black px-6 py-3 rounded hover:bg-gray-200">
              👮‍♂️ {t("home.getStartedGuard", "Join as CivGuard")}
            </Link>
          </div>

          {totalMembers < PROMO_THRESHOLD && (
            <p className="text-sm text-green-600 mt-2">
              🎉 {PROMO_THRESHOLD - totalMembers} Early Access Spots Remaining
            </p>
          )}
        </div>

        {/* Promo Video */}
        <div className="px-4 max-w-screen-lg mx-auto mb-12">
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
              src="https://share.synthesia.io/embeds/videos/4aebfec9-3b43-4ae2-9945-a31736f0f550"
              title="ShieldUnion Promo"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* Smart Chat */}
        <div className="px-4 max-w-screen-lg mx-auto mb-12">
          <SmartChat />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
