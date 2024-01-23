import React from "react";

const Button = ({ text, onClick, style }) => {
  return (
    <div>
      <button className={`px-3 py-1 bg-white ${style}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
