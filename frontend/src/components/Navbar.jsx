import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 px-4 py-2 flex items-center justify-between shadow-sm">
      {/* Left: Logo + Brand Name */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/favicon.png" alt="ShieldUnion Logo" className="h-10 w-10 object-contain" style={{ maxWidth: '40px', maxHeight: '40px' }} />
        <span className="text-xl font-bold text-gray-800">ShieldUnion</span>
      </Link>

      {/* Right: Navigation Links */}
      <div className="flex space-x-4 text-sm text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Public Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/privacy">Privacy</Link>
      </div>
    </nav>
  );
};

export default Navbar;
