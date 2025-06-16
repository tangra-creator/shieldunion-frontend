import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 px-4 py-3 flex flex-wrap items-center justify-between shadow-sm">
      {/* Logo and Site Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="ShieldUnion Logo" className="h-8 w-8" />
        <span className="font-bold text-lg text-black">ShieldUnion</span>
      </Link>


      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-800 mt-2 sm:mt-0">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/submitcase">Submit Case</Link>
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
