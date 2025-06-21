import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const SmartChat = ({ caseId = "General", sender = "Anonymous" }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Load messages on mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API}/api/chat/${caseId}`);
        setMessages(res.data);
      } catch (err) {
        console.error("⚠️ Failed to load messages:", err);
      }
    };
    fetchMessages();
  }, [caseId]);

  // Send message
  const handleSend = async () => {
    if (!input.trim()) return;
    const newMsg = { sender, message: input };

    try {
      await axios.post(`${API}/api/chat/${caseId}`, newMsg);
      setMessages((prev) => [...prev, { ...newMsg, time: Date.now() }]);
      setInput("");
    } catch (err) {
      console.error("❌ Failed to send message:", err);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">🧠 Smart Chat — Case {caseId}</h2>

      <div className="border h-64 overflow-y-auto p-2 mb-3 rounded text-sm bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-gray-500 italic">No messages yet.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="mb-1">
              <span className="font-semibold">{msg.sender}:</span>{" "}
              <span>{msg.message}</span>
            </div>
          ))
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-grow border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-black text-white px-4 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SmartChat;
