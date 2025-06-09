import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import SubmitCase from "./pages/SubmitCase";
import Dashboard from "./pages/Dashboard";
import ProposalForm from "./components/ProposalForm"; // Make sure this is imported

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <h1>🛡️ Welcome to ShieldUnion!</h1>
        <p>The backend is live and your protection is active.</p>

        <nav style={{ margin: '1rem 0' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/register" style={{ marginRight: '1rem' }}>Register</Link>
          <Link to="/submit" style={{ marginRight: '1rem' }}>Submit Case</Link>
          <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <Link to="/proposal" style={{ marginRight: '1rem' }}>Proposal</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit" element={<SubmitCase />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposal" element={<ProposalForm />} />
        </Routes>
      </div>
    </Router>
  );
}

// Optional Home page
function Home() {
  return (
    <div>
      <h2>ShieldUnion Frontend</h2>
      <p>Shieldunion backend server is running.</p>
    </div>
  );
}

export default App;
