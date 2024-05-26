import React from 'react';

export const ContactInformation = ({ manager }) => {
  return (
    <div className="mt-5 w-full">
      <div className="flex w-full items-center gap-5">
        <div className="size-12 rounded-full sm:size-20">
          <img
            src={manager.avatar.url}
            className="h-full w-full rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold">{manager.name}</p>
          <p className="font-thin">{manager.email}</p>
        </div>
      </div>
    </div>
  );
};
