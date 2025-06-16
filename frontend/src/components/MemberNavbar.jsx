import { Link } from "react-router-dom";

const MemberNavbar = () => (
  <nav>
    <Link to="/member">Dashboard</Link>
    <Link to="/vault">Vault</Link>
    <Link to="/dao">DAO</Link>
    <Link to="/infotrade">Info Trade</Link>
    <Link to="/founder">Founder</Link>
  </nav>
);

export default MemberNavbar;
