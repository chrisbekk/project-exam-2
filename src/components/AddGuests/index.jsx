import React from 'react';

export const AddGuests = ({ setGuests }) => {
  return (
    <div className="h-max w-[320px] rounded-2xl bg-white px-2 py-10">
      <p className="pb-3 pl-5 font-medium">Add Guests</p>
      <div className="w-full">
        <button
          onClick={() => setGuests(1)}
          className="w-full border-b-[0.5px] border-[neutral-50] py-3 pl-5 text-left transition-all hover:drop-shadow-md"
        >
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">1</p>
        </button>
        <button
          onClick={() => setGuests(2)}
          className="w-full border-b-[0.5px] border-[neutral-50] py-3 pl-5 text-left transition-all hover:drop-shadow-md"
        >
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">2</p>
        </button>
        <button
          onClick={() => setGuests(3)}
          className="w-full border-b-[0.5px] border-[neutral-50] py-3 pl-5 text-left transition-all hover:drop-shadow-md"
        >
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">3</p>
        </button>
        <button
          onClick={() => setGuests(4)}
          className="w-full border-b-[0.5px] border-[neutral-50] py-3 pl-5 text-left transition-all hover:drop-shadow-md"
        >
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">4</p>
        </button>
        <button
          onClick={() => setGuests(5)}
          className="w-full border-b-[0.5px] border-[neutral-50] py-3 pl-5 text-left transition-all hover:drop-shadow-md"
        >
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">5</p>
        </button>
        <button
          onClick={() => setGuests(6)}
          className="w-full border-b-[0.5px] border-[neutral-50] py-3 pl-5 text-left transition-all hover:drop-shadow-md"
        >
          <p className="pb-2 text-sm font-bold">Guests</p>
          <p className="text-sm font-light text-neutral-500">6+</p>
        </button>
      </div>
    </div>
  );
};
