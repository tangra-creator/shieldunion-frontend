import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import PublicDashboard from "./pages/PublicDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import Register from "./pages/Register";
import SubmitCase from "./pages/SubmitCase";
import DAO from "./pages/DAO";
import ClassifiedVault from "./pages/ClassifiedVault";
import InfoTrade from "./pages/InfoTrade";
import FounderControl from "./pages/FounderControl";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<PublicDashboard />} />
    <Route path="dashboard" element={<PublicDashboard />} />

    {/* Public Routes */}
    <Route path="register" element={<Register />} />
    <Route path="contact" element={<Contact />} />
    <Route path="about" element={<About />} />
    <Route path="terms" element={<Terms />} />
    <Route path="privacy" element={<Privacy />} />

    {/* Member Routes */}
    <Route path="member/dashboard" element={<MemberDashboard />} />
    <Route path="member/dao" element={<DAO />} />
    <Route path="member/submitcase" element={<SubmitCase />} />
    <Route path="member/infotrade" element={<InfoTrade />} />

    {/* Other routes */}
    <Route path="vault" element={<ClassifiedVault />} />
    <Route path="founder" element={<FounderControl />} />
  </Route>
</Routes>
    </Router>
  );
}

export default App;
