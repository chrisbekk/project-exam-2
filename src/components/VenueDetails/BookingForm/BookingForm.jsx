import { Button } from '../../Button';
import BookingPrices from './BookingPrices';
import { useUserContext } from '../../../context/userContext';
import usePostBooking from '../../../hooks/usePostBooking';
import { useState } from 'react';
import { format } from 'date-fns';
export default function BookingForm({
  price,
  fromDate,
  toDate,
  totalPrice,
  nights,
  guests,
  venueId,
  setConfirmBooking,
}) {
  // const [isDisabled, setIsDisabled] = useState(true);

  const { user } = useUserContext();

  const handleBooking = () => {
    const bookingData = {
      dateFrom: fromDate,
      dateTo: toDate,
      guests: guests,
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
    <div className="hidden w-full  rounded-2xl border-[0.5px] border-neutral-200 bg-neutral-50 px-6 py-16 shadow-[-1px_1px_2px_0px_#0A0A0A25,-1px_-2px_4px_0px_#0A0A0A25] md:sticky md:bottom-auto md:top-32 md:h-[65vh] md:w-[45%] lg:block">
      <p className="font-thin">
        <span className="text-xl font-semibold">${price}</span> per night
      </p>
      <div className="my-8 w-full rounded-lg border-[0.5px] border-neutral-400">
        <div className="flex w-full">
          <div className="flex h-16 w-full flex-col justify-between rounded-tl-lg border p-2">
            <p className="text-sm font-semibold">Check In</p>
            <p className=" font-semibold">
              {fromDate && format(fromDate, 'MMM dd')}
            </p>
          </div>
          <div className="flex h-16 w-full flex-col justify-between rounded-tr-lg border p-2">
            <p className="text-sm font-semibold">Check Out</p>
            <p className="font-semibold">
              {toDate && format(toDate, 'MMM dd')}
            </p>
          </div>
        </div>
        <div className="flex h-16 w-full flex-col justify-between p-2">
          <p className="text-sm font-semibold">Guests</p>
          <p className="font-semibold">{guests}</p>
        </div>
      </div>
      <Button fill={true} disabled={!user} handleClick={handleBooking}>
        {user ? 'Make Reservation' : 'Sign In to Reserve'}
      </Button>
      <div>
        <BookingPrices totalPrice={totalPrice} nights={nights} price={price} />
      </div>
    </div>
  );
}
