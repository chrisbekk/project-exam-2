import getNextDay from '../../../utils/getNextDay';
import getOptionsArray from '../../../utils/getOptionsArray';
import getFormattedTodayDate from '../../../utils/getTodayDate';
import { Button } from '../../Button';
import BookingPrices from './BookingPrices';
import { useAuthContext } from '../../../context/authContext';
import usePostBooking from '../../../hooks/usePostBooking';
import { useState } from 'react';
import { format } from 'date-fns';
export default function BookingForm({
  price,
  fromDate,
  toDate,
  maxGuests,
  totalPrice,
  nights,
  setGuests,
  guests,
  venueId,
  setConfirmBooking,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const options = getOptionsArray(maxGuests);
  const minFromDate = getFormattedTodayDate();
  const minToDate = getNextDay(fromDate);
  const { isSignedIn } = useAuthContext();

  const selectGuests = e => {
    console.log(e.target.value);
    setGuests(e.target.value);
  };

  const handleBooking = () => {
    const bookingData = {
      dateFrom: fromDate,
      dateTo: toDate,
      guests: parseInt(guests),
      venueId: venueId,
    };
    console.log(bookingData);
    if (
      bookingData.dateFrom &&
      bookingData.dateTo &&
      bookingData.guests &&
      bookingData.venueId
    ) {
      setConfirmBooking(true);
    }
  };
  return (
    <div className="hidden w-full  rounded-2xl border-[0.5px] border-neutral-200 bg-neutral-50 px-6 py-16 shadow-[-1px_1px_2px_0px_#0A0A0A25,-1px_-2px_4px_0px_#0A0A0A25] md:sticky md:bottom-auto md:top-32 md:block md:h-[65vh] md:w-[45%]">
      <p className="font-thin">
        <span className="text-xl font-semibold">${price}</span> per night
      </p>
      <div className="my-8 w-full rounded-lg border-[0.5px] border-neutral-400">
        <div className="flex w-full">
          <div className="relative h-16 w-full rounded-tl-lg border p-1">
            <p className="absolute text-sm font-semibold">Check In</p>
            <p className="absolute bottom-1 text-sm font-semibold">
              {fromDate && format(fromDate, 'MMM dd')}
            </p>
          </div>
          <div className="relative h-16 w-full rounded-tr-lg border p-1">
            <p className="absolute text-sm font-semibold">Check Out</p>
            <p className="absolute bottom-1 text-sm font-semibold">
              {toDate && format(toDate, 'MMM dd')}
            </p>
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
      <Button fill={true} disabled={!isSignedIn} handleClick={handleBooking}>
        {isSignedIn ? 'Make Reservation' : 'Sign In to Reserve'}
      </Button>
      <div>
        <BookingPrices totalPrice={totalPrice} nights={nights} price={price} />
      </div>
    </div>
  );
}