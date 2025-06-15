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
      <Link to="/vault" style={{ marginRight: '1rem' }}>Vault</Link>
      <Link to="/civguard" style={{ marginRight: '1rem' }}>CivGuard</Link>
      <Link to="/founder" style={{ marginRight: '1rem' }}>Founder</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
      <Link to="/terms" style={{ marginRight: '1rem' }}>Terms</Link>
      <Link to="/privacy" style={{ marginRight: '1rem' }}>Privacy</Link>
    </nav>
  );
}
