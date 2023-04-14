import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./Header";
import Navbar from "./Navbar";


function Layout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
       <div className={`container ${sidebarOpen ? 'open' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <Navbar sidebarOpen={sidebarOpen}/>
        <Outlet />
      </div>
  );
}

export default Layout;
