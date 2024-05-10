import { React, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../images/covoiturage-logo-1426779809-613.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signupUser = async (e) => {
    e.preventDefault();
    const { username, email, password } = data;
    try {
      const { data } = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Authentification Réussi. Bienvenue !");
        navigate("/se connecter");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      toast.error("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <main className="w-full  h-screen grid grid-cols-1 sm:grid-cols-[600px,1fr]">
      <div className="px-4 sm:px-8 flex justify-center items-center flex-col">
        <h1 className="text-center font-bold text-2xl py-6 px-8">
          Sign up pour créer un compte
        </h1>
        <form
          onSubmit={signupUser}
          className="w-full px-8 flex flex-col space-y-4"
        >
          <Input
            type="text"
            label="Username"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
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
          <Button>Sign up</Button>
        </form>
      </div>
      <div className="hidden sm:block">
        <img src={logo} alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
};

export default Signup;
