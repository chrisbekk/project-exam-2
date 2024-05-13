import { useState } from 'react';
import { Button } from '../../Button';
export const BookingForm = ({ price, nights }) => {
  return (
    <div className=" flex justify-between border-t-[0.5px] border-neutral-700 p-8 md:block md:rounded-lg md:border-none md:p-4 md:shadow-md">
      <div className="text-left ">
        <p className="text-base font-semibold">${price} per night</p>
        <p className="text-sm font-thin">
          {nights === 0 ? 'Add Dates' : nights}
        </p>
      </div>
      <button className="rounded-md bg-gradient-to-r from-pink-500 to-rose-500 p-2 text-white md:w-full">
        Reserve
      </button>
    </div>
  );
};
