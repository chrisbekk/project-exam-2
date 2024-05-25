import React from 'react';

export const Meta = ({ children, handleClick, toggle }) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`${toggle ? 'bg-brand text-white' : 'bg-neutral-50 text-neutral-950'} size-32 rounded-xl border border-neutral-300`}
    >
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </button>
  );
};
