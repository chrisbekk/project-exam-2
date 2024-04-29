import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import React from 'react';

export const Pending = ({ text }) => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex w-full flex-col items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl font-medium text-brand" />
        <p className="mt-5 text-sm">{text}</p>
      </div>
    </div>
  );
};
