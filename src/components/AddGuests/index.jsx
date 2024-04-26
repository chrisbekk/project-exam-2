import React from 'react';

export const AddGuests = () => {
  return (
    <div className="h-max w-[320px] rounded-2xl bg-white px-2 py-10">
      <p className="pb-3 pl-5 font-medium">Add Guests</p>
      <div className="w-full">
        <button className="w-full border-b-[0.5px] border-[neutral-50] py-5 pl-5 text-left transition-all hover:drop-shadow-md">
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">1-2</p>
        </button>
        <button className="w-full border-b-[0.5px] border-[neutral-50] py-5 pl-5 text-left transition-all hover:drop-shadow-md">
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">3-4</p>
        </button>
        <button className="w-full border-b-[0.5px] border-[neutral-50] py-5 pl-5 text-left transition-all hover:drop-shadow-md">
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">4-6</p>
        </button>
        <button className="w-full border-b-[0.5px] border-[neutral-50] py-5 pl-5 text-left transition-all hover:drop-shadow-md">
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">6+</p>
        </button>
      </div>
    </div>
  );
};
