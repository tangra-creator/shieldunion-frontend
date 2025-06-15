import React, { useState } from "react";

const Register = () => {
  const [alias, setAlias] = useState("");
  const [wallet, setWallet] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered anonymously as "${alias}" with wallet: ${wallet}`);
    // Later: Save to decentralized backend or localStorage
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2>📝 Anonymous Member Registration</h2>
      <form onSubmit={handleRegister}>
        <label>
          Alias (username):
          <input
            type="text"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Wallet address:
          <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
