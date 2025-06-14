import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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


function App() {
  return (
    <Router>
      {/* ✅ Navigation Bar */}
      <nav className="p-4 bg-gray-100 mb-6 flex flex-wrap gap-4">
        <Link to="/" className="text-blue-600 underline">Home</Link>
        <Link to="/dashboard" className="text-blue-600 underline">Dashboard</Link>
        <Link to="/register" className="text-blue-600 underline">Register</Link>
        <Link to="/about" className="text-blue-600 underline">About</Link>
        <Link to="/privacy" className="text-blue-600 underline">Privacy</Link>
        <Link to="/terms" className="text-blue-600 underline">Terms</Link>
      </nav>

      {/* ✅ Page Routing */}
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
