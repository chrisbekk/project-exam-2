import React from 'react';

export const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="py-4 rounded-xl text-white text-base w-full bg-gradient-to-r from-pink-500 to-rose-500"
    >
      {children}
    </button>
  );
};
