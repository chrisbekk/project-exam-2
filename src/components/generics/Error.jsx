import { BiMessageSquareError } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import React from 'react';

export const Error = ({ text, path, redirectTo }) => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex w-full flex-col items-center">
        <BiMessageSquareError className="mt-4 text-6xl font-medium text-brand" />
        <h1 className="mt-5 text-lg font-semibold">Something went wrong!</h1>
        <p className="my-2 text-lg font-semibold">{text}</p>
        <Link to={path}>{redirectTo}</Link>
      </div>
    </div>
  );
};
