import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/register" style={{ marginRight: '1rem' }}>Register</Link>
      <Link to="/submit" style={{ marginRight: '1rem' }}>Submit Case</Link>
      <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/info" style={{ marginRight: '1rem' }}>InfoTrade</Link>
      <Link to="/dao" style={{ marginRight: '1rem' }}>DAO</Link>
    </nav>
  );
}
