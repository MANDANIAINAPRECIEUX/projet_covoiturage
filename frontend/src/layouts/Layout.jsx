import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main className="relative">
      <Navbar />
      <div className="mt-20">
        <Outlet /> HYHGHGY UUIGUGUIG IGUIGIUGU IUGUIGUIG  
      </div>
    </main>
  );
};

export default Layout;
