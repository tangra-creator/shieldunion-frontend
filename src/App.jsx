import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Page imports
import Home from './pages/Home';
import Register from './pages/Register';
import SubmitCase from './pages/SubmitCase';
import Dashboard from './pages/Dashboard';
// ... (add other imports as needed)

function App() {
  return (
    <>
      <nav className="p-4 bg-gray-100 mb-6 flex-wrap gap-4">
        <a href="/" className="text-blue-600 underline">Home</a>
        <a href="/dashboard" className="text-blue-600 underline">Dashboard</a>
        <a href="/register" className="text-blue-600 underline">Register</a>
        {/* Add other links */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<SubmitCase />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes */}
      </Routes>
    </>
  );
}

export default App;
