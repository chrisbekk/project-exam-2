import React from 'react';
import { Register } from './Register';

export const VenueManager = ({ venueManager }) => {
  console.log(venueManager);
  if (!venueManager) return <Register />;
  return <div>VenueManager</div>;
};
