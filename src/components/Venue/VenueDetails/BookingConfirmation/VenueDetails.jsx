import React from 'react';

export const VenueDetails = ({ venue }) => {
  return (
    <div className="w-full">
      <div className="relative h-80 w-full bg-lime-200">
        <img
          src={venue?.data.media[0].url}
          alt={venue?.data.media[0].alt}
          className="h-full w-full rounded-xl object-cover"
        />
        <h1 className="absolute bottom-0 rounded-tr-xl bg-neutral-50 bg-opacity-75 py-3 pl-2 pr-3 text-2xl font-semibold">
          {venue?.data.name}
        </h1>
      </div>
      <div className="mt-4 ">
        <div>
          {venue?.data.location.city && (
            <p>
              <span className="font-semibold">City:</span>{' '}
              {venue?.data.location.city}
            </p>
          )}

          {venue?.data.location.address && (
            <p>
              <span className="font-semibold">Address:</span>{' '}
              {venue?.data.location.address}
            </p>
          )}
          {venue?.data.location.country && (
            <p>
              <span className="font-semibold">Country:</span>{' '}
              {venue?.data.location.country}
            </p>
          )}
          {(!venue?.data?.location?.country ||
            !venue?.data?.location?.city ||
            !venue?.data?.location?.address) && (
            <p className="mt-2 text-sm font-semibold">
              Some location information is missing. Contact venue host for more
              information.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
