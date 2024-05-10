import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Proposer from "./pages/proposer";
import Rechercher from "./pages/rechercher";
import Login from "./layouts/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Signup from "./layouts/Signup";

axios.defaults.baseURL = "http://localhost:4025";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/login" element={<div>Login</div>}></Route>
        <Route element={<Layout />} Path="/">
          <Route element={<Home />} path="/" />
          <Route element={<Proposer />} path="/proposer" />
          <Route element={<Rechercher />} path="/rechercher" />
          <Route element={<Login />} path="/se connecter" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<div> conducteur</div>} path="/conducteur" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
