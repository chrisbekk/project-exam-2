import React from 'react';
import { SearchForm } from './SearchForm';

export const Hero = () => {
  return (
    <div className="relative">
      <img src="hero.webp" alt="An image of a fancy appartment." />
      <SearchForm />
    </div>
  );
};
