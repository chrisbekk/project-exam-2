import React from 'react';
import { Button } from '../Button';
export const SearchForm = () => {
  return (
    <div className="xs:absolute xs:bottom-0 xs:p-14 xs:rounded-lg bg-neutral-50 shadow-md p-2">
      <h1 className="text-base font-semibold my-2">
        Search for vacation destination
      </h1>
      <form>
        <div className="relative mb-7">
          <label className="absolute top-1 left-1 text-xs font-bold">
            Where
          </label>
          <input
            type="text"
            id="destination"
            className="w-full bg-neutral-100 pt-[20px] pb-[16px] pl-4 text-sm border-[0.5px] border-neutral-500 rounded-lg"
            aria-placeholder="Where"
          />
        </div>
        <div className="flex gap-3">
          <div className="relative mb-7 flex-auto">
            <label className="absolute top-1 left-1 text-xs font-bold">
              Where
            </label>
            <input
              type="text"
              id="destination"
              className="w-full bg-neutral-100 pt-[20px] pb-[16px] pl-4 text-sm border-[0.5px] border-neutral-500 rounded-lg"
              aria-placeholder="Where"
            />
          </div>
          <div className="relative mb-7 flex-auto">
            <label className="absolute top-1 left-1 text-xs font-bold">
              Where
            </label>
            <input
              type="text"
              id="destination"
              className="w-full bg-neutral-100 pt-[20px] pb-[16px] pl-4 text-sm border-[0.5px] border-neutral-500 rounded-lg"
              aria-placeholder="Where"
            />
          </div>
        </div>
        <Button>Search</Button>
      </form>
    </div>
  );
};
