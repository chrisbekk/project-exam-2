import React from 'react';
import { BiError } from 'react-icons/bi';
export const FormError = ({ message }) => {
  return (
    <div className="bg-rose-300 p-1 flex gap-1 items-center mb-4 rounded-lg">
      <BiError />
      <p>{message}</p>
    </div>
  );
};
