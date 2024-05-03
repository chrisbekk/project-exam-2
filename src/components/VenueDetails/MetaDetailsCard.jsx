import React from 'react';

export const MetaDetailsCard = ({ children, text }) => {
  return (
    <div className="mt-10 flex items-center gap-8 sm:mt-0 sm:flex-col sm:rounded-lg  sm:py-4 sm:shadow-xl sm:drop-shadow-lg">
      <p className="text-5xl sm:text-3xl">{children}</p>
      <p>{text}</p>
    </div>
  );
};
