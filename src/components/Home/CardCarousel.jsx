import React from 'react';
import { ProductCard } from '../generics/productCard';
import { Pending } from '../generics/Pending';
import { Error } from '../generics/Error';

export const CardCarousel = ({ venues, error, pending }) => {
  if (error)
    return (
      <Error text={'Failed to fetch venue'} path={'/'} redirectTo={'Reload'} />
    );
  if (pending) return <Pending text={'Fetching venues...'} />;
  let filteredVenues = venues?.data
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <div className=" pb-8 xl:mx-auto xl:max-w-[1280px]">
      <div className="flex justify-between">
        <div>
          <h1 className="pb-1 text-xl font-semibold xs:text-2xl sm:text-3xl">
            Top Rated Holiday Homes
          </h1>
          <p className="pb-10 text-xs text-neutral-500 xs:text-sm sm:text-base">
            The guests approve: These holiday homes are highly rated.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden border ">
        <div className="grid place-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {venues &&
            filteredVenues.map((venue, index) => (
              <ProductCard venue={venue} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
