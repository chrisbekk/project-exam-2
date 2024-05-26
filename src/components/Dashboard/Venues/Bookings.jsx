import React from 'react';
import { Booking } from './Booking';

export const Bookings = ({ bookings }) => {
  const bookingsLength = bookings?.length;
  return (
    <div className="pt-3">
      <h1
        className={`${bookingsLength === 0 ? 'text-center text-lg text-neutral-700' : 'text-xl font-semibold'} mb-3  `}
      >
        {bookingsLength > 1
          ? `${bookings?.length} bookings:`
          : bookingsLength === 1
            ? `${bookings?.length} booking`
            : 'No Bookings'}
      </h1>
      {bookings?.map((booking, index) => (
        <Booking key={index} booking={booking} />
      ))}
    </div>
  );
};
