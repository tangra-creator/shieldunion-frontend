import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import LanguageSelector from './LanguageSelector';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const SmartChat = ({ caseId = 'General', sender = 'anonymous' }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API}/api/chat/${caseId}`);
      setMessages(res.data);
    } catch (err) {
      console.error('❌ Failed to load messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 4000);
    return () => clearInterval(interval);
  }, [caseId]);

  useEffect(() => {
    const container = document.getElementById('chat-container');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

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
      console.error('❌ Failed to send message:', err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow rounded">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold text-gray-800">🧠 Smart Chat — Case {caseId}</h2>
            <LanguageSelector />
          </div>

          <div
            id="chat-container"
            className="h-64 overflow-y-auto border rounded bg-gray-100 p-3 space-y-2"
          >
            {loading ? (
              <p className="text-center text-gray-500 text-sm animate-pulse">Loading conversation...</p>
            ) : messages.length === 0 ? (
              <p className="text-center text-gray-400 text-sm">No messages yet.</p>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className="text-sm">
                  <strong className={msg.sender === sender ? 'text-blue-600' : 'text-gray-800'}>
                    {msg.sender === sender ? '🧍 You' : '👥 ' + msg.sender}:
                  </strong>{' '}
                  {msg.message}
                  <div className="text-xs text-gray-400">
                    {new Date(msg.timestamp).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              className="flex-1 border px-3 py-2 rounded"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </div>
      </main>

      <Footer
        links={[
          { name: 'Privacy Policy', to: '/privacy' },
          { name: 'Terms of Use', to: '/terms' },
          { name: 'About', to: '/about' },
        ]}
        note="Conversations are secure and logged only by the AI engine. Misuse triggers automatic DAO review."
      />
    </div>
  );
};

export default SmartChat;
