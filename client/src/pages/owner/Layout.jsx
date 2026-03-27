import { Outlet } from "react-router-dom";
import Navbar from "../../components/owner/Navbar";
import Sidebar from "../../components/owner/Sidebar";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

const Layout = () => {
  const {isOwner, navigate} = useAppContext();

  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  },[isOwner]);
  
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