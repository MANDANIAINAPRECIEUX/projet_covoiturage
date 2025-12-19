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
    <main className="w-full h-screen relative overflow-hidden">
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

      <div className="relative z-10 px-4 sm:px-8 flex justify-center items-center flex-col h-full">
        <div className="w-full sm:w-[90%] lg:w-[500px] p-8 bg-[#f0f4f8]/20 backdrop-blur-md rounded-2xl shadow-lg">
          <h1 className="text-center font-bold text-2xl py-6 px-8 text-[#00B3BE]">
            CREER VOTRE COMPTE
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
      </div>
    </main>
  );
};

export default Signup;
