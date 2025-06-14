import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6">
      <img
        src="/shield-logo.svg"
        alt="ShieldUnion Logo"
        style={{ width: '60px', marginBottom: '1rem' }}
      />
      <h1 className="text-3xl font-bold mb-4">Welcome to ShieldUnion!</h1>
      <p className="mb-2">The backend is live and your protection is active.</p>

      <div className="space-y-1 mb-6">
        <Link to="/register" className="text-blue-600 underline block">Register</Link>
        <Link to="/submit" className="text-blue-600 underline block">Submit Case</Link>
        <Link to="/dashboard" className="text-blue-600 underline block">Dashboard</Link>
        <Link to="/proposal" className="text-blue-600 underline block">Proposal</Link>
        <Link to="/vault" className="text-blue-600 underline block">Vault</Link>
        <Link to="/civguard" className="text-blue-600 underline block">CivGuard Apply</Link>
        <Link to="/admin" className="text-blue-600 underline block">Admin</Link>
        <Link to="/daocontrol" className="text-blue-600 underline block">DAO Control</Link>
        <Link to="/infotrade" className="text-blue-600 underline block">InfoTrade</Link>
        <Link to="/memberprofile" className="text-blue-600 underline block">Profile</Link>
        <Link to="/mycases" className="text-blue-600 underline block">MyCases</Link>
        <Link to="/myprotection" className="text-blue-600 underline block">MyProtection</Link>
      </div>

      <p className="font-semibold mt-6">ShieldUnion Frontend</p>
      <p className="text-sm text-gray-500">Shieldunion backend server is running.</p>
    </div>
  );
};

export default Home;
