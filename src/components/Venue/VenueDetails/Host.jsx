import React from 'react';

export const Host = ({ owner }) => {
  return (
    <div className="my-8 flex items-center gap-4 border-b-[0.5px] border-t-[0.5px] border-neutral-950 py-8">
      <div className="size-20 rounded-full border">
        <img
          src={owner.avatar.url}
          alt={owner.avatar.alt}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      {owner.name}
    </div>
  );
};
