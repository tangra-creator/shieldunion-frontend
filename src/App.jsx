import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Register from './Register';
import SubmitCase from './SubmitCase';
import Dashboard from './Dashboard';
import ProposalForm from './components/ProposalForm';
import DAOVoting from './components/DAOVoting';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>🛡️ Welcome to ShieldUnion!</h1>
        <p>The backend is live and your protection is active.</p>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/">Home</Link> |{' '}
          <Link to="/register">Register</Link> |{' '}
          <Link to="/submit">Submit Case</Link> |{' '}
          <Link to="/dashboard">Dashboard</Link> |{' '}
          <Link to="/proposal">Proposal</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h3>ShieldUnion Frontend</h3>
                <p>Shieldunion backend server is running.</p>
              </div>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/submit" element={<SubmitCase />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposal" element={<ProposalForm />} />
          <Route path="/vote" element={<DAOVoting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
