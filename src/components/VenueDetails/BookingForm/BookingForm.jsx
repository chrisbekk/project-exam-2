import getNextDay from '../../../utils/getNextDay';
import getOptionsArray from '../../../utils/getOptionsArray';
import getFormattedTodayDate from '../../../utils/getTodayDate';
import { Button } from '../../Button';
import BookingPrices from './BookingPrices';
import { useAuthContext } from '../../../context/authContext';
import usePostBooking from '../../../hooks/usePostBooking';
import { useState } from 'react';
export default function BookingForm({
  price,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  maxGuests,
  totalPrice,
  nights,
  setGuests,
  guests,
  venueId,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const options = getOptionsArray(maxGuests);
  const minFromDate = getFormattedTodayDate();
  const minToDate = getNextDay(fromDate);
  const { isSignedIn, user, apiKey } = useAuthContext();
  console.log(user);
  console.log(apiKey);
  const { postBooking } = usePostBooking();
  const handleChange = e => {
    setFromDate(e.target.value);
    setIsDisabled(false);
  };
  const selectGuests = e => {
    console.log(e.target.value);
    setGuests(e.target.value);
  };
  console.log(guests);
  const handleBooking = () => {
    const bookingData = {
      dateFrom: fromDate,
      dateTo: toDate,
      guests: parseInt(guests),
      venueId: venueId,
    };
    console.log(bookingData);
    postBooking(user.data.accessToken, apiKey.key, bookingData);
  };
  return (
    <div className="hidden w-full  rounded-2xl border-[0.5px] border-neutral-200 bg-neutral-50 px-6 py-16 shadow-[-1px_1px_2px_0px_#0A0A0A25,-1px_-2px_4px_0px_#0A0A0A25] md:sticky md:bottom-auto md:top-32 md:block md:h-[65vh] md:w-[45%]">
      <p className="font-thin">
        <span className="text-xl font-semibold">${price}</span> per night
      </p>
      <div className="my-8 w-full rounded-lg border-[0.5px] border-neutral-400">
        <div className="flex w-full">
          <div className="relative h-16 w-full rounded-tl-lg border p-1">
            <label htmlFor="checkIn" className="absolute text-sm font-semibold">
              Check In
            </label>
            <input
              type="date"
              id="checkIn"
              min={minFromDate}
              value={fromDate}
              onChange={handleChange}
              className="h-full bg-neutral-50 text-xs"
            />
          </div>
          <div className="relative h-16 w-full rounded-tr-lg border p-1">
            <label
              htmlFor="checkOut"
              className="absolute text-sm font-semibold"
            >
              Check Out
            </label>
            <input
              type="date"
              id="checkOut"
              disabled={isDisabled}
              min={minToDate}
              value={toDate}
              onChange={e => setToDate(e.target.value)}
              className="h-full bg-neutral-50 text-xs"
            />
          </div>
        </div>
        <div className="relative h-16 w-full">
          <label
            htmlFor="addGuests"
            className="absolute p-1 text-sm font-semibold"
          >
            Guests
          </label>
          <select
            className="h-full w-full rounded-b-lg bg-neutral-50 p-1"
            onChange={selectGuests}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button disabled={!isSignedIn} handleClick={handleBooking}>
        {isSignedIn ? 'Make Reservation' : 'Sign In to Reserve'}
      </Button>
      <div>
        <BookingPrices totalPrice={totalPrice} nights={nights} price={price} />
      </div>
    </div>
  );
}
