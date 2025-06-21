import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import SmartChat from "../components/SmartChat";
import axios from "axios";

const PROMO_THRESHOLD = 1500;
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Home = () => {
  const { t } = useTranslation();
  const [totalMembers, setTotalMembers] = useState(0);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const res = await axios.get(`${API}/api/member/total`);
        setTotalMembers(res.data.total || 0);
      } catch (err) {
        console.error("Error fetching total members:", err);
      }
    };
    fetchTotal();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4 flex justify-end">
        <LanguageSelector />
      </div>

      <main className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold mt-2 mb-1">🛡️ ShieldUnion</h1>
        <p className="text-lg text-gray-600">{t("subtitle")}</p>
        <p className="text-sm text-gray-500 mb-6">
          {t("Join the world’s first unstoppable global protection network.")}
        </p>

        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Xv-QWQHfXY8"
                title="ShieldUnion Explainer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 text-left border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">What ShieldUnion Offers:</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>CivGuard Protection</li>
              <li>Anonymous Help Network</li>
              <li>Classified Vault</li>
              <li>DAO Legal Voting</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">Real people. Real justice. Global shield.</p>
          </div>
        </div>

        <div className="flex gap-4 mb-3">
          <Link
            to="/register/member"
            className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
          >
            Join as Member
          </Link>
          <Link
            to="/register/civguard"
            className="bg-gray-200 px-5 py-2 rounded hover:bg-gray-300"
          >
            Join as CivGuard
          </Link>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          🏷️ {PROMO_THRESHOLD - totalMembers} Early Access Spots Remaining
        </p>

        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700"
        >
          💬 Open ShieldUnion AI Chat
        </button>

        {showChat && (
          <div className="w-full max-w-xl mb-8">
            <SmartChat />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
