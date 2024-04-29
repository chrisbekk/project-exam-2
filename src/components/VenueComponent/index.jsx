import React from 'react';
import { Pending } from '../Pending';
import { Media } from './Media';
export const VenueComponent = ({ data, error, pending }) => {
  console.log(data);
  if (error) return <p>Error in fetching venue</p>;
  if (pending || !data) return <Pending text={'Fetching venue...'} />;

  return (
    <div>
      <Media mediaArray={data?.media} />
    </div>
  );
};
