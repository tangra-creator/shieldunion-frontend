import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const SmartChat = ({ caseId = "case-general" }) => {
  const { t } = useTranslation("home"); // Using "home" namespace
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function loadMessages() {
      try {
        const res = await axios.get(`${API}/api/chat/${caseId}`);
        setMessages(res.data || []);
      } catch (err) {
        console.error(t("errorLoadingMessages"), err);
      }
    }
    loadMessages();
  }, [caseId, t]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const payload = {
      caseId,
      sender: "user",
      message: input,
    };

    try {
      const res = await axios.post(`${API}/api/chat/send`, payload);
      setMessages((prev) => [
        ...prev,
        { sender: "user", message: input, time: Date.now() },
        res.data.ai,
      ]);
      setInput("");
    } catch (err) {
      console.error(t("errorSendingMessage"), err);
      alert(t("errorSendingMessage"));
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h3>{t("smartChatTitle", "Smart Chat")} — {caseId}</h3>
      <div
        style={{
          height: 300,
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: 10,
          marginBottom: 10,
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.length === 0 ? (
          <p>{t("noMessagesYet", "No messages yet.")}</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: 8 }}>
              <b>{msg.sender}:</b> {msg.message}
            </div>
          ))
        )}
      </div>
      <input
        type="text"
        placeholder={t("typeYourMessage", "Type your message")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        style={{ width: "100%", padding: 8 }}
      />
      <button onClick={handleSend} style={{ marginTop: 8, padding: "8px 12px" }}>
        {t("send", "Send")}
      </button>
    </div>
  );
};

export default SmartChat;
