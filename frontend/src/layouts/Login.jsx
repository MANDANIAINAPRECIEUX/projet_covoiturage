import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../images/covoiturage-logo-1426779809-613.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
    <main className="w-full  h-screen grid grid-cols-1 sm:grid-cols-[600px,1fr]">
      <div className="px-4 sm:px-8 flex justify-center items-center flex-col">
        <h1 className="text-center font-bold text-2xl py-6 px-8">
          Interface Login
        </h1>
        <h1 className="text-center mb-8">
          Veuillez remplir le champs login pour vous connectez
        </h1>
        <form
          onSubmit={LoginUser}
          className="w-full px-8 flex flex-col space-y-4"
        >
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
          <Button type="submit">Sign in</Button>
        </form>
        <p className="my-4">
          Vous n ' avez pas de compte?{" "}
          <Link to="/signup">
            <span className="underline">Créer un Compte</span>
          </Link>
        </p>
      </div>
      <div className="hidden sm:block">
        <img src={logo} alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
};

export default Login;
