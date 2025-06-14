import React from 'react';


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
  <Router>                // ← START deleting here
    {/* Navigation Bar */}
    <nav className="p-4 bg-gray-100 mb-6 flex-wrap gap-4">
      ...
    </nav>

    {/* Page Routing */}
    <Routes>
      ...
    </Routes>
  </Router>
);

}

export default App;
