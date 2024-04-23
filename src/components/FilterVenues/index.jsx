import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

export const FilterVenues = () => {
  return (
    <div className="container h-20 rounded-full border border-red-400 bg-white shadow-lg">
      <form>
        <div className="flex">
          <HiOutlineSearch />
          <div>
            <label htmlFor="destination">Where</label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Search for destinations"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
