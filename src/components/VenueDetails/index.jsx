import React from 'react';
import { VenueInformation } from './VenueInformation';
import { Host } from './Host';

export const VenueDetails = ({ data }) => {
  console.log(data);
  const {
    description,
    id,
    location,
    maxGuests,
    meta,
    name,
    owner,
    price,
    rating,
  } = data;
  return (
    <div>
      <h1 className="text-3xl font-semibold md:hidden">{name}</h1>
      <p className="text-neutral-500">
        {location.address !== 'string' && location.address + ', '}
        {location.city !== 'string' && location.city + ', '}
        {location.zip !== 'string' && location.zip + ', '}
        {location.country !== 'string' && location.country}
      </p>
      <VenueInformation price={price} rating={rating} maxGuests={maxGuests} />
      <Host owner={owner} />
    </div>
  );
};
