import React from "react";

const Button = ({ children, onClick, type }) => {
  const func = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={func}
      className="w-full 
      px-4
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
    hover:-translate-y-1"
    >
      {children}
    </button>
  );
};

export default Button;
