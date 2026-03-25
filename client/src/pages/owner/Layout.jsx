import { Outlet } from "react-router-dom";
import Navbar from "../../components/owner/Navbar";
import Sidebar from "../../components/owner/Sidebar";

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />

      <div className="layout-body">
        <Sidebar />

        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;