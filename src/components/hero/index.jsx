import React from 'react';
import { SearchForm } from './SearchForm';

export const Hero = () => {
  return (
    <div className="relative md:flex md:justify-end">
      <div className="w-full md:max-w-[720px]">
        <img
          src="hero.webp"
          alt="An image of a fancy appartment."
          className="sm:rounded-xl md:w-full"
        />
      </div>

      <SearchForm />
    </div>
  );
};
