import { BiMessageSquareError } from 'react-icons/bi';

import React from 'react';

export const Error = ({ children }) => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex w-full flex-col items-center">
        <BiMessageSquareError className="text-6xl font-medium text-brand" />
        {children}
      </div>
    </div>
  );
};
