import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-25  fixed top-0 left-0 text-black flex justify-center items-center z-50">
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
      <div
        className="flex flex-wrap lg:flex-nowrap justify-around lg:justify-between items-center 
                bg-gray-700 text-white 
                w-full lg:w-7/12 
                px-4 sm:px-6 lg:px-8 
                py-4 lg:py-7"
      >
        <Link to="/proposer">
          <div className="text-base lg:text-lg font-semibold">PROPOSER</div>
        </Link>

        <Link to="/rechercher">
          <div className="text-base lg:text-lg font-semibold">RECHERCHER</div>
        </Link>

        <Link to="/se connecter">
          <div className="text-base lg:text-lg font-semibold">SE CONNECTER</div>
        </Link>

        <Link to="/signup">
          <div className="text-base lg:text-lg font-semibold">S'INSCRIRE</div>
        </Link>
      </div>

      {/* <div className="w-2/12 px-4 bg-white flex py-8 ">
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
      </div> */}
    </div>
  );
};

export default Navbar;
