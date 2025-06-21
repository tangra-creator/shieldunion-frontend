import React from "react";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-white">
      <SmartChat />

      <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        <h2 className="text-3xl font-bold mb-4">🛡️ About ShieldUnion</h2>
        <p className="mb-4">
          ShieldUnion is a decentralized global protection system designed to safeguard people against
          corruption, injustice, and persecution. We operate beyond borders, without the permission of governments
          or institutions, using AI and DAO governance to enforce justice and safety.
        </p>
        <p className="mb-4">
          Every member is anonymous. Every vote is decentralized. Every decision is driven by fairness and integrity.
          ShieldUnion is not a company — it is a collective force born to protect.
        </p>
        <p className="mb-4">
          The founder receives no power or control. The system continues even if all nodes are attacked — it is unstoppable.
          In the future, all control will pass to AI enforcement and family legacy. No one owns it. No one can stop it.
        </p>
        <p className="text-sm text-gray-500 text-right">Last updated: June 2025</p>
      </main>

      <Footer />
    </div>
  );
};

export default About;
