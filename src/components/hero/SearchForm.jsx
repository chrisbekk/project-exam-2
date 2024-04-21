import React from 'react';
import { useState } from 'react';
import { Button } from '../Button';
export const SearchForm = () => {
  const [destination, setDestination] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  console.log(new Date(fromDate));
  return (
    <div className="bg-neutral-50 p-2 shadow-md md:absolute md:bottom-1/2 md:left-0 md:w-[570px] md:-translate-x-0 md:translate-y-1/2 md:transform md:rounded-lg md:p-14">
      <h1 className="my-2 text-base font-semibold">
        Search for vacation destination
      </h1>
      <form>
        <div className="relative mb-7">
          <label className="absolute left-1 top-1 text-xs font-bold">
            Where
          </label>
          <input
            type="text"
            value={destination}
            onChange={event => setDestination(event.target.value)}
            id="destination"
            className="w-full rounded-lg border-[0.5px] border-neutral-500 bg-neutral-100 pb-[16px] pl-4 pt-[20px] text-sm"
            aria-placeholder="Where"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative mb-7 flex-auto">
            <p className="absolute left-1 top-1 text-xs font-bold">From</p>
            <input
              type="date"
              value={fromDate}
              onChange={event => setFromDate(event.target.value)}
              aria-label="From"
              className="w-full rounded-lg border-[0.5px] border-neutral-500 bg-neutral-100 pb-[16px] pl-4 pt-[20px] text-sm"
            />
          </div>
          <div className="relative mb-7 flex-auto">
            <p className="absolute left-1 top-1 text-xs font-bold">To</p>
            <input
              type="date"
              value={toDate}
              onChange={event => setToDate(event.target.value)}
              aria-label="To"
              className="w-full rounded-lg border-[0.5px] border-neutral-500 bg-neutral-100 pb-[16px] pl-4 pt-[20px] text-sm"
            />
          </div>
        </div>
        <Button>Search</Button>
      </form>
    </div>
  );
};
