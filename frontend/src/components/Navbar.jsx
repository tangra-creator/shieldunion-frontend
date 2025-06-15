import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 flex flex-wrap gap-4 text-sm">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/submitcase">Submit Case</Link>
      <Link to="/dashboard">Public Dashboard</Link>
      <Link to="/member">Member Dashboard</Link> {/* NEW LINK */}
      <Link to="/infotrade">InfoTrade</Link>
      <Link to="/dao">DAO</Link>
      <Link to="/vault">Vault</Link>
      <Link to="/civguard">CivGuard</Link>
      <Link to="/founder">Founder</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/vote">Vote</Link>
    </nav>
  );
}

export default Navbar;
