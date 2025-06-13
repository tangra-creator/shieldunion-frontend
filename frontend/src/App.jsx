import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // make sure Link is imported
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// your existing imports stay as they are...

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
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<SubmitCase />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proposal" element={<ProposalForm />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        {/* Add others as needed */}
      </Routes>
    </Router>
  );
}

export default App;
