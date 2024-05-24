import { useState } from 'react';
import getFormattedTodayDate from '../../../utils/getTodayDate';
import getNextDay from '../../../utils/getNextDay';
import getOptionsArray from '../../../utils/getOptionsArray';
import { format } from 'date-fns';
export default function BookingInformation({
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  maxGuests,
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
    console.log(typeof e.target.value);
    setGuests(e.target.value);
  };

  return (
    <div className="mx-auto max-w-[640px]">
      <form className="p-4 sm:rounded-lg sm:border-[0.5px] sm:border-neutral-300">
        <div className="  xs:flex xs:gap-5">
          <div className="flex-auto">
            <p className="text-sm font-semibold">Check In</p>
            <p className="h-14 w-full border-[0.5px] bg-neutral-50 p-3">
              {fromDate && format(fromDate, 'MMM dd')}
            </p>
          </div>
          <div className="flex-auto">
            <p className="text-sm font-semibold">Check In</p>
            <p className="h-14 w-full border-[0.5px] bg-neutral-50 p-3">
              {toDate && format(toDate, 'MMM dd')}
            </p>
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
