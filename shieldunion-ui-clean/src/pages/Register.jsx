import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    incomeTier: 'Tier A: £0–10,000 → £6',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCryptoConnect = () => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          alert(`Connected wallet: ${accounts[0]}`);
        })
        .catch((err) => console.error('Wallet connection failed:', err));
    } else {
      alert('Please install MetaMask or another Web3 wallet to continue.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registering with crypto payment only...');
    // handle registration logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">🛡️ Register for ShieldUnion</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Select your income tier:</label>
          <select
            name="incomeTier"
            value={formData.incomeTier}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option>Tier A: £0–10,000 → £6</option>
            <option>Tier B: £10,001–15,000 → £10</option>
            <option>Tier C: £15,001–25,000 → £20</option>
            <option>Tier D: £25,001–50,000 → £50</option>
            <option>Tier E: £50,001–100,000 → £100</option>
            <option>Tier F: £100,001–200,000 → £200</option>
            <option>Tier G: £200,000+ → £500–1,500</option>
          </select>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Register with Crypto
          </button>
        </div>
      </form>

      <div className="mt-6 border-t pt-4 text-center">
        <p className="mb-2">💠 Connect your Wallet</p>
        <button
          onClick={handleCryptoConnect}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Connect MetaMask / Web3 Wallet
        </button>
        <p className="text-xs text-gray-500 mt-2">
          Only cryptocurrency payments are supported. This ensures total anonymity and removes the need for bank or identity verification.
        </p>
      </div>
    </div>
  );
};

export default Register;
