import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ icon: Icon, title, href }) => {
  return (
    <Link to={href}>
      <div className="flex items-center space-x-3 text-lg">
        <Icon className="text-3xl md:text-lg" />
        <p className="hidden md:block">{title}</p>
      </div>
    </Link>
  );
};

export default Navlink;
