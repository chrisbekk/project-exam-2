import React from 'react';
import { format } from 'date-fns';
export const Booking = ({ booking }) => {
  return (
    <div className="mb-2 rounded-xl border border-neutral-300 p-2">
      <div className="sm:flex sm:items-center sm:justify-around">
        <div className="sm:flex sm:items-center sm:gap-4 ">
          <div className=" size-20 rounded-lg">
            <img
              src={booking?.customer.avatar.url}
              alt={booking?.customer.avatar.alt}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="mt-3">
            <div>
              <p className="text-sm font-semibold">Name</p>
              <p className="text-sm font-light">{booking?.customer.name}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Email address</p>
              <p className="text-sm font-light">{booking?.customer.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-4  sm:mt-0">
          <h3 className="font-semibold">Booking Information</h3>
          <div className="flex gap-2">
            <p className="text-sm font-semibold">Check In:</p>
            <p className="text-sm font-light">
              {format(booking?.dateFrom, 'MMM dd yyyy')}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm font-semibold">Check Out:</p>
            <p className="text-sm font-light">
              {format(booking?.dateTo, 'MMM dd yyyy')}
            </p>
          </div>

          <div className="flex gap-2">
            <p className="text-sm font-semibold">Guests:</p>
            <p className="text-sm font-light">{booking?.guests}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
