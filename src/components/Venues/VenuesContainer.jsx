import React from 'react';
import { ProductCard } from '../generics/productCard';
import { Pending } from '../generics/Pending';
export const VenuesContainer = ({ venues, error, pending }) => {
  if (error) return <p>Failed</p>;
  if (pending) return <Pending text={'Fetching venues...'} />;
  return (
    <div className="grid place-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {venues?.map((venue, index) => (
        <ProductCard venue={venue} key={index} />
      ))}
    </div>
  );
};
