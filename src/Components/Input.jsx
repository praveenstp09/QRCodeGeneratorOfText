import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  label = "",
  ...props
}) => {
  return (
    <div className="flex items-center gap-2">
      {label && <label className="text-base">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`text-base ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
