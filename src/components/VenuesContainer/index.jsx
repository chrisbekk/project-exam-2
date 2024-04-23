import React from 'react';
import { ProductCard } from '../productCard';
export const VenuesContainer = ({ venues, error, pending }) => {
  return (
    <div>
      {venues?.map((venue, index) => (
        <p key={index}>{venue.name}</p>
      ))}
    </div>
  );
};
