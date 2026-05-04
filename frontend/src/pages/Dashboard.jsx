import { React, useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard dfd df df</h1>
      <>{!!user && <h2>Hi {user.name} !</h2>}</>
    </div>
  );
}
