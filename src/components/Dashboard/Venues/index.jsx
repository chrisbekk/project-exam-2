import React from 'react';
import { Venue } from './Venue';
import { Error } from '../../generics/Error';
export const Venues = ({ venues, setVenues }) => {
  console.log(venues);

  return (
    <div className="rounded-xl border border-red-300 p-2">
      {venues?.map(venue => (
        <Venue
          key={venue.id + Math.random()}
          venue={venue}
          setVenues={setVenues}
        />
      ))}
    </div>
  );
};
