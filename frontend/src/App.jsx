<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // make sure Link is imported
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// your existing imports stay as they are...
>>>>>>> d54881f (Fix build issues and install proper Node version)

function App() {
  return (
    <Router>
      {/* ✅ Navigation Bar */}
      <nav className="p-4 bg-gray-100 mb-6 flex flex-wrap gap-4">
        <Link to="/" className="text-blue-600 underline">Home</Link>
        <Link to="/dashboard" className="text-blue-600 underline">Dashboard</Link>
        <Link to="/register" className="text-blue-600 underline">Register</Link>
        <Link to="/about" className="text-blue-600 underline">About</Link>
        <Link to="/contact" className="text-blue-600 underline">Contact</Link>
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
<<<<<<< HEAD
        <Route path="/civguard" element={<CivGuardApply />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/daocontrol" element={<DAOControl />} />
        <Route path="/infotrade" element={<InfoTrade />} />
        <Route path="/profile" element={<MemberProfile />} />
        <Route path="/mycases" element={<MyCases />} />
        <Route path="/myprotection" element={<MyProtection />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
=======
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        {/* Add others as needed */}
>>>>>>> d54881f (Fix build issues and install proper Node version)
      </Routes>
    </Router>
  );
}

export default App;
