import React, { useEffect, useState } from "react";
import axios from "axios";
import MemberNavbar from "../components/MemberNavbar";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const MyCases = () => {
  const [cases, setCases] = useState([]);
  const [alias, setAlias] = useState("");

  useEffect(() => {
    const storedAlias = localStorage.getItem("alias") || "anonymous-user";
    setAlias(storedAlias);

    const fetchCases = async () => {
      try {
        const res = await axios.get(`${API}/api/cases/member/${storedAlias}`);
        setCases(res.data || []);
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 relative">
      <MemberNavbar />
      <SmartChat />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
          <div className="flex justify-end mb-2">
            <LanguageSelector />
          </div>

          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
            📂 My Submitted Cases
          </h2>

          {cases.length === 0 ? (
            <p className="text-center text-gray-500">You haven't submitted any cases yet.</p>
          ) : (
            <ul className="space-y-4">
              {cases.map((c, idx) => (
                <li key={idx} className="border p-4 rounded bg-gray-50 shadow-sm">
                  <p><span className="font-semibold">Title:</span> {c.title}</p>
                  <p><span className="font-semibold">Description:</span> {c.description}</p>
                  <p><span className="font-semibold">Status:</span> {c.status || "Pending"}</p>
                  {c.createdAt && (
                    <p className="text-sm text-gray-500 italic">
                      Submitted: {new Date(c.createdAt).toLocaleString()}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyCases;
