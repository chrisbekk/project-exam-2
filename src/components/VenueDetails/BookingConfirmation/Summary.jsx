import React from 'react';
import { format } from 'date-fns';
export const Summary = ({
  fromDate,
  toDate,
  guests,
  venueId,
  nights,
  price,
}) => {
  console.log(venueId);
  let checkIn = fromDate && format(fromDate, 'MMM dd');
  let checkOut = toDate && format(toDate, 'MMM dd');
  const cleaningFee = 100;
  const holidazeBookingFee = 150;
  const totalPrice = nights * price + (cleaningFee + holidazeBookingFee);
  return (
    <div className="mx-auto mt-5 max-w-[420px]">
      <div className="p-7">
        <div className="mt-4 flex justify-between  font-thin">
          <p className=" font-thin">Check In</p>
          <p className="font-semibold">{checkIn}</p>
        </div>
        <div className="mt-4 flex justify-between  font-thin">
          <p className="font-thin">Check Out</p>
          <p className="font-semibold">{checkOut}</p>
        </div>
        <div className="mt-4 flex justify-between  font-thin">
          <p className="font-thin">Guests</p>
          <p className="font-semibold">{guests}</p>
        </div>
        <div className="mt-4 flex justify-between font-thin">
          <p className="font-thin">Nights</p>
          <p className="font-semibold">{nights}</p>
        </div>
        <div className="mt-4 flex justify-between border-t border-neutral-900 pt-4 font-thin">
          <p className="font-thin">Cleaning</p>
          <p className="font-semibold ">${cleaningFee}</p>
        </div>
        <div className="mt-4 flex justify-between  font-thin">
          <p className="font-thin">Holidaze Booking Fee</p>
          <p className="font-semibold">${holidazeBookingFee}</p>
        </div>
        <div className="mt-4 flex justify-between font-thin">
          <p className="text-xl font-semibold">Total</p>
          <p className="text-xl font-bold">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};
