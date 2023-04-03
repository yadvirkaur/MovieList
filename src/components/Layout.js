import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./Header";
import Navbar from "./Navbar";


function Layout() {

  return (
       <div class="container">
        <Header/>
        <Navbar/>
        <Outlet />
      </div>
  );
}

export default Layout;
