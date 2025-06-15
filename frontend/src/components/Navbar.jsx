import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex flex-wrap gap-4 text-sm">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/submitcase">Submit Case</Link>
      <Link to="/dashboard">Public Dashboard</Link>
      <Link to="/member">Member Dashboard</Link>
      <Link to="/infotrade">InfoTrade</Link>
      <Link to="/dao">DAO</Link>
      <Link to="/vault">Vault</Link>
      <Link to="/founder">Founder</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy</Link>
    </nav>
  );
};

export default Navbar;
