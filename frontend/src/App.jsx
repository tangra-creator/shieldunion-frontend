import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Home</a> | <a href="/register">Register</a>
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome to ShieldUnion</div>} />
        <Route path="/register" element={<div>Register Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
