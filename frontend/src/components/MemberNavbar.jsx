import { Link } from 'react-router-dom';

export default function MemberNavbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eef' }}>
      <Link to="/member/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/member/mycases" style={{ marginRight: '1rem' }}>My Cases</Link>
      <Link to="/member/myprotection" style={{ marginRight: '1rem' }}>My Protection</Link>
      <Link to="/member/profile" style={{ marginRight: '1rem' }}>Profile</Link>
    </nav>
  );
}
