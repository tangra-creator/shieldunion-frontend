import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MemberNavbar from "./MemberNavbar";

const Layout = () => {
  const location = useLocation();

  const memberPaths = ["/member", "/vault", "/dao", "/infotrade", "/founder"];
  const isMemberRoute = memberPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {isMemberRoute ? <MemberNavbar /> : <Navbar />}
      
      {/* This renders the page content! */}
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
