import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SubmitCase from './pages/SubmitCase';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>🛡️ Shieldunion Platform</h1>
        <p>✅ The backend is live and your protection is active.</p>

        <nav style={{ margin: '1rem 0' }}>
          <Link to="/submit" style={navLink}>Submit Case</Link>
          <Link to="/register" style={navLink}>Register</Link>
          <Link to="/dashboard" style={navLink}>Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<p>Welcome to the Shieldunion. Choose an action above.</p>} />
          <Route path="/submit" element={<SubmitCase />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

const navLink = {
  marginRight: '1rem',
  textDecoration: 'none',
  color: '#0066cc',
  fontWeight: 'bold'
};

export default App;
