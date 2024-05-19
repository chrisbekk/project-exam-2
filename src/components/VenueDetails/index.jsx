import React from 'react';
import { VenueInformation } from './VenueInformation';
import { Host } from './Host';
import { Description } from './Description';
import { MetaDetails } from './MetaDetails';

export const VenueDetails = ({
  data,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  nights,
  setNights,
}) => {
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
        {location.address !== 'string' &&
          location.address !== null &&
          location.address + ', '}
        {location.city !== 'string' &&
          location.city !== null &&
          location.city + ', '}
        {location.zip !== 'string' &&
          location.zip !== null &&
          location.zip + ', '}
        {location.country !== 'string' &&
          location.country !== null &&
          location.country}
      </p>
      <VenueInformation price={price} rating={rating} maxGuests={maxGuests} />
      <Host owner={owner} />
      <Description description={description} />
      <MetaDetails meta={meta} />
    </div>
  );
};
