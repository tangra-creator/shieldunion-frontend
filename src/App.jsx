import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import Register from './pages/Register';
import SubmitCase from './pages/SubmitCase';
import Dashboard from './pages/Dashboard';
import ProposalForm from './components/ProposalForm';
import Vault from './pages/Vault';
import CivGuardApply from './pages/CivGuardApply';
import AdminPanel from './pages/AdminPanel';
import DAOControl from './pages/DAOControl';
import InfoTrade from './pages/InfoTrade';
import MemberProfile from './pages/MemberProfile';
import MyCases from './pages/MyCases';
import MyProtection from './pages/MyProtection';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="p-4 bg-gray-100 mb-6 flex flex-wrap gap-4">
        <a href="/" className="text-blue-600 underline">Home</a>
        <a href="/dashboard" className="text-blue-600 underline">Dashboard</a>
        <a href="/register" className="text-blue-600 underline">Register</a>
        <a href="/about" className="text-blue-600 underline">About</a>
        <a href="/contact" className="text-blue-600 underline">Contact</a>
        <a href="/privacy" className="text-blue-600 underline">Privacy</a>
        <a href="/terms" className="text-blue-600 underline">Terms</a>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<SubmitCase />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proposal" element={<ProposalForm />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/civguard" element={<CivGuardApply />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/daocontrol" element={<DAOControl />} />
        <Route path="/infotrade" element={<InfoTrade />} />
        <Route path="/memberprofile" element={<MemberProfile />} />
        <Route path="/mycases" element={<MyCases />} />
        <Route path="/myprotection" element={<MyProtection />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
