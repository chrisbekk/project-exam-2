import React from 'react';
import { SearchForm } from './SearchForm';
import BrowseVenues from './BrowseVenues';

export const Hero = () => {
  return (
    <div className="relative md:flex md:justify-end xl:mx-auto xl:max-w-[1280px]">
      <div className="w-full md:max-w-[720px]">
        <img
          src="hero.webp"
          alt="An image of a fancy appartment."
          className="sm:rounded-xl md:w-full"
        />
      </div>

      <BrowseVenues />
    </div>
  );
};
