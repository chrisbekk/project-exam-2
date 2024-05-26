import React from 'react';
import { HiStar } from 'react-icons/hi';

export const VenueInformation = ({ price, rating, maxGuests }) => {
  return (
    <div className="flex gap-4 py-2 md:gap-20">
      <div className="flex flex-col items-start p-2 md:p-0">
        <p className="hidden md:block md:text-xl md:font-semibold">Price</p>
        <p className="font-semibold">
          ${price} <span className="text-sm text-neutral-500">per night</span>
        </p>
      </div>
      <div className="flex flex-col items-start p-2 md:p-0">
        <p className="hidden md:block md:text-xl md:font-semibold">Rating</p>
        <p className="flex items-center gap-2 font-semibold">
          <HiStar /> {rating}
        </p>
      </div>
      <div className="flex flex-col items-start  p-2 md:p-0">
        <p className="hidden md:block md:text-xl md:font-semibold">
          Max Guests
        </p>
        <p className="flex items-center gap-2 text-base">
          <span className="md:hidden">Max Guests:</span> {maxGuests}
        </p>
      </div>
    </div>
  );
};
