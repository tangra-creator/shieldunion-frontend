import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const CivGuardChat = ({ caseId = "default-case-001" }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load chat history on mount
  useEffect(() => {
    const loadChat = async () => {
      try {
        const res = await axios.get(`${API}/api/chat/${caseId}`);
        setMessages(res.data || []);
      } catch (err) {
        console.error("Failed to load chat history:", err);
      }
    };
    loadChat();
  }, [caseId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "CivGuard", message: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      await axios.post(`${API}/api/chat/send`, {
        caseId,
        sender: "CivGuard",
        message: input,
      });

      // Simulate AI response (replace with real if needed)
      const aiRes = await axios.post(`${API}/api/chat/ai`, { message: input });
      const aiMessage = {
        sender: "AI",
        message: aiRes.data?.reply || "AI is thinking...",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Send error:", err);
      setMessages((prev) => [...prev, { sender: "AI", message: "⚠️ AI error." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded shadow h-[80vh] flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">🧠 Smart Chat (CivGuard)</h2>

      <div className="flex-1 overflow-y-auto border p-4 mb-4 rounded bg-gray-50">
        {messages.length === 0 && (
          <p className="text-gray-400 text-center">Start your conversation…</p>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded ${
              msg.sender === "CivGuard"
                ? "bg-black text-white text-right"
                : "bg-gray-200 text-gray-800 text-left"
            }`}
          >
            <strong>{msg.sender === "CivGuard" ? "🛡️ You" : "🤖 AI"}:</strong>{" "}
            {msg.message}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded px-4 py-2"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? "bg-gray-500" : "bg-black hover:bg-gray-800"
          }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

import React from "react";
import Footer from "../components/Footer";

const PageName = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        {/* your existing content here */}
      </main>

      <Footer />
    </div>
  );
};

export default CivGuardChat;
