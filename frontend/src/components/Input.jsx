import React from "react";
import clsx from "clsx";

const Input = ({ type, label, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={clsx(
            "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-indigo-600 "
          )}
        />
      </div>
    </div>
  );
};

export default Input;
