import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main className="relative">
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
