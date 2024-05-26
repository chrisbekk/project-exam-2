import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
export const Booking = ({ booking }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(booking.venue.id);
    navigate(`/venue/${booking.venue.id}`);
  };
  return (
    <div
      role="button"
      onClick={handleClick}
      className="rounded-lg border p-1 shadow-lg hover:cursor-pointer"
    >
      <div className="h-48 w-full rounded-lg">
        <img
          src={booking.venue.media[0]?.url}
          alt={booking.venue.media[0]?.alt}
          className="h-full w-full rounded-t-lg object-cover"
        />
      </div>
      <h1 className="my-3 w-full overflow-hidden text-lg font-semibold">
        {booking.venue.name}
      </h1>
      <div className="mb-3">
        <div className="flex gap-1">
          <p className="font-semibold">Rating:</p>
          <p>{booking.venue.rating}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Price per night:</p>
          <p>${booking.venue.price}</p>
        </div>
      </div>
      <div className="border-blue-500">
        <div className="flex gap-1">
          <p className="font-semibold">Check In:</p>
          <p>{format(booking.dateFrom, 'MMM dd yyyy')}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Check Out:</p>
          <p>{format(booking.dateTo, 'MMM dd yyyy')}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Guests:</p>
          <p>{booking.guests}</p>
        </div>
      </div>
    </div>
  );
};
