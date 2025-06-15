import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'; // 👈 use your actual filename
import Navbar from './components/Navbar'; // Optional if you created it
import SubmitCase from './pages/SubmitCase';
import Dashboard from './pages/Dashboard';
import InfoTrade from './pages/InfoTrade';
import DAO from './pages/DAO';
import ClassifiedVault from './pages/ClassifiedVault';
import CivGuardApply from './pages/CivGuardApply';
import FounderControl from './pages/FounderControl';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';



function App() {
  return (
    <Router>
      <Navbar /> {/* Optional but useful */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<SubmitCase />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info" element={<InfoTrade />} />
        <Route path="/dao" element={<DAO />} />
        <Route path="/vault" element={<ClassifiedVault />} />
        <Route path="/civguard" element={<CivGuardApply />} />
        <Route path="/founder" element={<FounderControl />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
