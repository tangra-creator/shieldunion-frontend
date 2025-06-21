import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat";
import LanguageSelector from "../components/LanguageSelector";
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
        console.error("Failed to fetch member count:", err);
      }
    };

    fetchTotalMembers();
  }, []);

  const promoMessage = t("promoMessage") || "🚀 First 1500 members join FREE!";
  const promoThresholdMessage =
    totalMembers < PROMO_THRESHOLD
      ? `${PROMO_THRESHOLD - totalMembers} free spots left!`
      : "Promo ended. Normal fees apply.";

  return (
    <div className="relative">
      {/* Promo banner */}
      <div className="bg-green-100 text-center py-2 text-sm">
        <div>{promoMessage}</div>
        <div>{promoThresholdMessage}</div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-2">🛡️ welcomeTo ShieldUnion</h1>
        <p className="text-gray-600 mb-4">{t("platformDescription") || "platformDescription"}</p>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* YouTube Video */}
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/Xv-QWQHfXY8"
            title="ShieldUnion Video"
            frameBorder="0"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>

          {/* What we offer */}
          <div className="max-w-md text-left">
            <h3 className="text-lg font-semibold mb-2">What ShieldUnion Offers:</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>CivGuard Protection</li>
              <li>Anonymous Help Network</li>
              <li>Classified Vault</li>
              <li>DAO Legal Voting</li>
              <li>Real people. Real justice. Global shield.</li>
            </ul>
          </div>
        </div>

        {/* Join buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link to="/register?type=member" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            🧑‍💻 joinAsMember
          </Link>
          <Link to="/civguard-apply" className="bg-white border border-black py-2 px-4 rounded hover:bg-gray-100">
            🛡️ applyAsCivGuard
          </Link>
        </div>
      </div>

      {/* Language selector bottom left */}
      <div className="fixed bottom-4 left-4 z-50">
        <LanguageSelector />
      </div>

      {/* SmartChat bottom right */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "320px",
          maxHeight: "500px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        <SmartChat />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
