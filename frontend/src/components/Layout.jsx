import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import MemberNavbar from "./MemberNavbar";

const Layout = () => {
  const location = useLocation();

  // Define routes that should use the MemberNavbar
  const memberPaths = ["/member", "/vault", "/dao", "/infotrade", "/founder"];

  const isMemberRoute = memberPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {isMemberRoute ? <MemberNavbar /> : <Navbar />}
    </>
  );
};

export default Layout;
