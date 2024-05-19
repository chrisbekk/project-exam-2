import { useState } from 'react';
import getFormattedTodayDate from '../../../utils/getTodayDate';
import getNextDay from '../../../utils/getNextDay';
import getOptionsArray from '../../../utils/getOptionsArray';
export default function BookingInformation({
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  maxGuests,
  guests,
  setGuests,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const minFromDate = getFormattedTodayDate();
  const minToDate = getNextDay(fromDate);
  const options = getOptionsArray(maxGuests);
  const handleChange = e => {
    setFromDate(e.target.value);
    setIsDisabled(false);
  };
  const selectGuests = e => {
    console.log(e.target.value);
    setGuests(e.target.value);
  };
  return (
    <div className="mx-auto max-w-[640px]">
      <form className="p-4 sm:rounded-lg sm:border-[0.5px] sm:border-neutral-300">
        <div className="  xs:flex xs:gap-5">
          <div className="flex-auto">
            <label htmlFor="fromDate" className="text-sm font-semibold">
              Check In
            </label>
            <input
              id="fromDate"
              type="date"
              min={minFromDate}
              value={fromDate}
              onChange={handleChange}
              className="h-14 w-full border-[0.5px] bg-neutral-50"
            />
          </div>
          <div className="flex-auto">
            <label htmlFor="toDate" className="text-sm font-semibold">
              Check Out
            </label>
            <input
              id="toDate"
              type="date"
              disabled={isDisabled}
              min={minToDate}
              value={toDate}
              onChange={e => setToDate(e.target.value)}
              className="h-14 w-full border-[0.5px] bg-neutral-50"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="guests" className="text-sm font-semibold">
            Add Guests
          </label>
          <select
            id="guests"
            onChange={selectGuests}
            className="h-14 w-full border-[0.5px]"
          >
            {options.map((option, index) => (
              <option key={index} value={option} className="bg-neutral-50">
                {option}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
