import React from 'react';
import { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { ProductCard } from '../productCard';
import { Pending } from '../Pending';

export const CardCarousel = ({ venues, error, pending }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Deal with error and pending states
  if (error) return <p>Nope</p>;
  if (pending) return <Pending text={'Fetching venues...'} />;

  // The carousel displays the 12 highest rated venues
  let filteredVenues = venues?.data
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  const handleNextPage = () => {
    if (currentPage + 1 === 3) return;
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div className="pb-8 xl:border xl:border-red-600">
      <div className="flex justify-between">
        <div>
          <h1 className="pb-1 text-xl font-semibold xs:text-2xl sm:text-3xl">
            Top Rated Holiday Homes
          </h1>
          <p className="pb-10 text-xs text-neutral-500 xs:text-sm sm:text-base">
            The guests approve: These holiday homes are highly rated.
          </p>
        </div>
        <div className="hidden items-center gap-6 xl:flex">
          <p className="text-xl font-thin">
            {currentPage + 1}
            <span className="px-3">/</span>3
          </p>
          <div className="flex size-12 items-center justify-center rounded-full border-[0.5px] border-neutral-500 bg-neutral-50">
            <GoChevronLeft
              className="text-3xl hover:cursor-pointer"
              onClick={handlePrevPage}
            />
          </div>
          <div className="flex size-12 items-center justify-center rounded-full border-[0.5px] border-neutral-500 bg-neutral-50">
            <GoChevronRight
              className="text-3xl hover:cursor-pointer"
              onClick={handleNextPage}
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          className="grid place-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:gap-4"
          style={{
            transform: `translateX(-${currentPage * 101.25}%)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {venues &&
            filteredVenues.map((venue, index) => (
              <ProductCard venue={venue} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
