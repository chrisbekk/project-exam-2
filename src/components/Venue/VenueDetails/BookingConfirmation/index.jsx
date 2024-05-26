import React from 'react';
import { VenueDetails } from './VenueDetails';
import { ContactInformation } from './ContactInformation';
import { Summary } from './Summary';
import { Button } from '../../generics/Button';
import { Success } from './Success';
import { Error } from './Error';
import usePostBooking from '../../../hooks/usePostBooking';
import { useUserContext } from '../../../context/userContext';
export const BookingConfirmation = ({
  venue,
  fromDate,
  toDate,
  guests,
  setConfirmBooking,
  nights,
}) => {
  const { accessToken, apiKey } = useAuthContext();
  const { postBooking, responseData, pending, responseError } =
    usePostBooking();

  const handleClick = () => {
    const bookingData = {
      dateFrom: fromDate,
      dateTo: toDate,
      guests: parseInt(guests),
      venueId: venue?.data.id,
    };

    postBooking(accessToken, apiKey, bookingData);
  };
  if (!responseError) return <Error />;
  if (responseData) return <Success />;

  return (
    <div>
      <div className="max-w-[670px] border px-2 py-5 xs:rounded-2xl xs:bg-white xs:p-8 xs:shadow-xl sm:mx-auto">
        <h1 className="mb-5 text-xl font-semibold xs:pt-0">
          Booking Information
        </h1>
        <VenueDetails venue={venue} />
        <ContactInformation manager={venue?.data.owner} />
        <Summary
          fromDate={fromDate}
          toDate={toDate}
          guests={guests}
          venueId={venue?.data.id}
          nights={nights}
          price={venue?.data.price}
        />
        <div className="mx-auto mt-5 flex w-full max-w-[420px] justify-between">
          <Button fill={true} small={true} handleClick={handleClick}>
            Book Venue
          </Button>
          <Button handleClick={() => setConfirmBooking(false)} small={true}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
