import React from 'react';
import { BiError } from 'react-icons/bi';
export const FormError = ({ message }) => {
  return (
    <div className="mb-4 mt-4 flex items-center gap-1 rounded-lg bg-rose-300 p-1">
      <BiError />
      <p className="my-3">{message}</p>
    </div>
  );
};
