import React from 'react';
import { Button } from '../../../Button';
import { BiMessageSquareError } from 'react-icons/bi';
export const Error = ({ setError }) => {
  const handleClick = () => {
    setError(false);
  };
  return (
    <div className="mx-auto w-full max-w-[450px] rounded-2xl bg-white p-6 shadow-xl md:p-8">
      <div className="flex w-full flex-col items-center justify-center ">
        <BiMessageSquareError className="mb-5 size-14 text-center text-brand" />
        <h1 className="mb-5 text-center text-xl font-semibold">
          Something went wrong!
        </h1>
        <p className="mb-1 text-center text-base sm:mb-3 sm:text-lg">
          Something went wrong on our end.
        </p>
        <p className="mb-3 text-center text-base sm:text-lg">
          Please try again later!
        </p>
        <Button small={true} handleClick={handleClick}>
          Back
        </Button>
      </div>
    </div>
  );
};
