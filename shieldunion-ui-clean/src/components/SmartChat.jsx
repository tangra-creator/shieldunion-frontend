import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
console.log("SmartChat using API:", API); // Debug log to verify API URL

const SmartChat = ({ caseId = "case-general" }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // For simplicity, use a fixed sender name or you can pass as prop
  const sender = "user"; // TODO: replace with dynamic user ID or name

  // Load messages on mount or caseId change
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API}/api/chat/${caseId}`);
        setMessages(res.data || []);
      } catch (err) {
        console.error("⚠️ Failed to load messages:", err);
      }
    };
    fetchMessages();
  }, [caseId]);

  // Send message handler
  const handleSend = async () => {
    if (!input.trim()) return;

    // Create new message object to send
    const newMsg = { sender, message: input };

    try {
      // Construct payload to send to backend API
      const payload = {
        caseId,
        sender,
        message: input,
      };

      const response = await axios.post(`${API}/api/chat/send`, payload);
      console.log("Response from backend:", response.data);

      // Update local messages with new message including timestamp
      setMessages((prev) => [...prev, { ...newMsg, time: Date.now() }]);
      setInput("");
    } catch (err) {
      console.error("❌ Failed to send message:", err);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">🧠 Smart Chat — Case {caseId}</h2>
      <div className="border rounded p-2 mb-2 h-60 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-gray-400">No messages yet.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="mb-1">
              <strong>{msg.sender}:</strong> {msg.message}
            </div>
          ))
        )}
      </div>
      <input
        type="text"
        className="border rounded p-2 w-full mb-2"
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default SmartChat;
