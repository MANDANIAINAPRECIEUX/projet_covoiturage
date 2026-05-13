import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayouts = () => {
  return (
    <main className="w-full  h-screen  grid grid-cols-1 md:grid-cols-[250px,1fr]">
      <Sidebar />
      <div className="content  grid  grid-rows-[60px,1fr] md:col-[2]">
        <Navbar />

        <div className="row-[2] dark:bg-slate-950 dark:text-white">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayouts;
