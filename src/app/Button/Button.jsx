import React from 'react';

const Button = ({ onClick, children, className }) => (
  <button className={`py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200 ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
