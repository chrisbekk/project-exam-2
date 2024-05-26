import React from 'react';
import { Booking } from './Booking';

export const Bookings = ({ bookings }) => {
  return (
    <div className="mt-10 w-full">
      <div className="sm:p-1">
        <h1 className="text-xl font-semibold">Your Bookings</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {bookings?.map((booking, index) => (
            <Booking booking={booking} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
