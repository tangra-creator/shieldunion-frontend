import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const SmartChat = ({ caseId, sender }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API}/api/chat/${caseId}`);
      setMessages(res.data);
    } catch (err) {
      console.error('Failed to load messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 4000); // Poll every 4s
    return () => clearInterval(interval);
  }, [caseId]);

  // Auto-scroll to bottom
  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  // Send message
  const sendMessage = async () => {
    if (!messageInput.trim()) return;

    try {
      await axios.post(`${API}/api/chat/send`, {
        caseId,
        sender,
        message: messageInput,
      });
      setMessageInput('');
      fetchMessages();
    } catch (err) {
      console.error('Send failed:', err);
    }
  };

  // Send with Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">🧠 Smart Chat — Case {caseId}</h3>

      <div
        id="chat-container"
        className="max-h-64 overflow-y-auto space-y-2 border p-2 rounded bg-gray-50 mb-3"
      >
        {loading ? (
          <div className="flex items-center justify-center text-gray-500 text-sm animate-pulse">
            Loading conversation...
          </div>
        ) : messages.length === 0 ? (
          <p className="text-gray-400 text-sm">No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="text-sm">
              <span className="font-semibold text-gray-800">
                {msg.sender === sender ? '🧍 You' : '👥 ' + msg.sender}:
              </span>{' '}
              {msg.message}
              <span className="text-gray-400 text-xs block">
                {new Date(msg.timestamp).toLocaleString()}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

import Footer from "../components/Footer";

...

return (
  <div className="min-h-screen flex flex-col justify-between">
    <div className="flex-grow">{/* Chat logic here */}</div>
    <Footer />
  </div>
);


import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default SmartChat;
