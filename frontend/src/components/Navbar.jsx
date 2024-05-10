import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-25 bg-red-700 fixed top-0 left-0 text-black flex justify-center items-center z-50">
      <div className=" bg-white w-3/12 flex ">
        <img
          src="../public/images/capture.png"
          alt=""
          className="h-20 object-scale-down rounded-lg"
        />
        <div
          className="px-4 flex items-center font-Caveat text-4xl"
          style={{
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
            color: "#7A520B",
          }}
        >
          {" "}
          COVOIT
        </div>
      </div>
      <div className="flex justify-between items-center px-8 py-7 text-white bg-gray-700 w-7/12">
        <Link to="/proposer">
          <div>PROPOSER</div>
        </Link>

        <Link to="/rechercher">
          <div>RECHERCHER</div>
        </Link>

        <Link to="/se connecter">
          <div>SE CONNECTER</div>
        </Link>
        <a href="">
          <div>S'INSCRIRE</div>
        </a>
      </div>
      <div className="w-2/12 px-4 bg-white flex py-8 ">
        <div className="px-4 ">
          <a href="">
            <MdMail />
          </a>
        </div>
        <div className="px-4">
          <a href="">
            <BsFacebook />
          </a>
        </div>
        <div className="px-4">
          <a href="">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
