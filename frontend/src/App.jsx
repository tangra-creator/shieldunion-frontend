import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicDashboard from "./pages/PublicDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import Register from "./pages/Register";
import SubmitCase from "./pages/SubmitCase";
import InfoTrade from "./pages/InfoTrade";
import DAO from "./pages/DAO";
import Vault from './pages/ClassifiedVault';
import CivGuard from "./pages/CivGuard";
import Founder from "./pages/Founder";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Vote from "./pages/Vote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicDashboard />} />
        <Route path="/dashboard" element={<PublicDashboard />} />
        <Route path="/member" element={<MemberDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submitcase" element={<SubmitCase />} />
        <Route path="/infotrade" element={<InfoTrade />} />
        <Route path="/dao" element={<DAO />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/civguard" element={<CivGuard />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </Router>
  );
}

export default App;
