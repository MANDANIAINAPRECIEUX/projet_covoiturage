import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../images/covoiturage-logo-1426779809-613.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sary from "../components/Sary.jsx";
import SaryCore from "../components/SaryCore.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const LoginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/proposer");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      toast.error("Une erreur est survenue lors de la connexion.");
    }
  };

  return (
    <main className="w-full h-screen relative overflow-hidden">
      {/* Background général */}
      <div className="absolute inset-0 -z-10">
        <img
          src="../public/images/cov5.jpg"
          alt="lolo2"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            filter: "brightness(1) contrast(0.8) blur(4px)",
          }}
        />
      </div>

      {/* Bloc Login */}
      <div className="relative z-10 px-4 sm:px-8 flex justify-center items-center flex-col h-full">
        <div className="w-full sm:w-[90%] lg:w-[500px] p-8 bg-[#f0f4f8]/20 backdrop-blur-md rounded-2xl shadow-lg">
          <h1 className="text-center font-bold text-3xl py-6 text-[#00B3BE] ">
            Interface Login
          </h1>
          <h2 className="text-center mb-8 text-white">
            Veuillez remplir le champ login pour vous connecter
          </h2>
          <form onSubmit={LoginUser} className="w-full flex flex-col space-y-6">
            <Input
              type="text"
              label="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Input
              type="password"
              label="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Button
              type="submit"
              className="
              px-4
    w-full 
    bg-[#00B3BE] bg-opacity-100
    text-white 
    font-extrabold 
    text-xl 
    rounded-3xl 
    shadow-[0_8px_15px_rgba(0,179,190,0.7)] 
    transition-all 
    duration-300 
    transform 
    hover:bg-[#00AFC3] hover:bg-opacity-100
    hover:shadow-[0_10px_20px_rgba(0,179,190,0.9)] 
    hover:-translate-y-1
  "
            >
              Sign in
            </Button>
          </form>
          <p className="mt-6 text-center text-gray-800">
            Vous n'avez pas de compte?{" "}
            <Link to="/signup">
              <span className="underline text-blue-500">Créer un Compte</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
