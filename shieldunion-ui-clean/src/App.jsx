import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import DAOVoting from "./components/DAOVoting";
import ViewProposals from "./pages/ViewProposals";
import PublicVault from "./pages/PublicVault";
import ClassifiedVault from "./pages/ClassifiedVault";
import SubmitProposal from "./pages/SubmitProposal";
import DAO from "./pages/DAO";





// Layouts
import MemberLayout from "./components/MemberLayout";
import MemberPortal from "./pages/MemberPortal";
import MemberProfile from "./pages/MemberProfile";
import MyCases from "./pages/MyCases";
import MyProtection from "./pages/MyProtection";

// CivGuard
import CivGuardLayout from "./components/CivGuardLayout";
import CivGuardApply from "./pages/CivGuardApply";
import CivGuardFlag from "./pages/CivGuardFlag";
import CivGuardReview from "./pages/CivGuardReview";
import CivGuardVerify from "./pages/CivGuardVerify";
import CivGuardFlagReview from "./pages/CivGuardFlagReview";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vote" element={<DAOVoting />} />
        <Route path="/proposals" element={<ViewProposals />} />
        <Route path="/public-vault" element={<PublicVault />} />
        <Route path="/vault" element={<ClassifiedVault />} />
        <Route path="/dao/submit" element={<SubmitProposal />} />
        <Route path="/dao" element={<DAO />} />
        
        

        {/* 🔐 Member Area */}
        <Route path="/member" element={<MemberLayout />}>
          <Route index element={<MemberPortal />} />
          <Route path="profile" element={<MemberProfile />} />
          <Route path="my-cases" element={<MyCases />} />
          <Route path="my-protection" element={<MyProtection />} />
        </Route>

        {/* 🛡️ CivGuard Area */}
        <Route path="/civguard" element={<CivGuardLayout />}>
           <Route index element={<CivGuardVerify />} />
           <Route path="verify" element={<CivGuardVerify />} />  {/* ✅ Add this line */}
           <Route path="apply" element={<CivGuardApply />} />
           <Route path="flag" element={<CivGuardFlag />} />
           <Route path="review" element={<CivGuardReview />} />
           <Route path="flag-review" element={<CivGuardFlagReview />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
