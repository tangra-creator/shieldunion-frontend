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

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
