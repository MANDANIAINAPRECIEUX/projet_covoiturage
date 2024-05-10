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
      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {children}
    </button>
  );
};

export default Button;
