import { BiMessageSquareError } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import React from 'react';

export const Error = ({ text, path, redirectTo }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex w-full flex-col items-center">
        <BiMessageSquareError className="mt-4 text-6xl font-medium text-brand" />
        <h1 className="mt-5 text-lg font-semibold">Something went wrong!</h1>
        <p className="my-2 text-lg font-semibold">{text}</p>
        <Button fill={true} small={true} handleClick={handleClick}>
          {redirectTo}
        </Button>
      </div>
    </div>
  );
};
