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


function App() {
  return (
    <Router>
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
        <Route path="/profile" element={<MemberProfile />} />
        <Route path="/mycases" element={<MyCases />} />
        <Route path="/myprotection" element={<MyProtection />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
