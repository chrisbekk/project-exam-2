import { useParams } from 'react-router-dom';
import { useFetchVenue } from '../hooks/useFetchVenue';
import { Section } from '../components/Section';
import BookingFormMobile from '../components/VenueDetails/BookingForm/BookingFormMobile';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Media } from '../components/VenueDetails/Media';
import { Pending } from '../components/Pending';
import { Error } from '../components/Error';
import { VenueDetails } from '../components/VenueDetails';
import BookingForm from '../components/VenueDetails/BookingForm/BookingForm';
import calculateNightsBooked from '../utils/calculateNightsBooked';
import DateManager from '../components/VenueDetails/DateManager';
import { BookingConfirmation } from '../components/VenueDetails/BookingConfirmation';
import { Guests } from '../components/VenueDetails/Guests';
export const Venue = () => {
  const { venueId } = useParams();
  const { venue, error, pending } = useFetchVenue(venueId);
  const [confirmBooking, setConfirmBooking] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [nights, setNights] = useState(0); // Total nights booked
  const [guests, setGuests] = useState(0);

  useEffect(() => {
    setNights(calculateNightsBooked(fromDate, toDate));
  }, [fromDate, toDate]);

  let totalPrice = nights * venue?.data.price; //
  if (error)
    return (
      <Error
        text={'Failed to fetch venue information'}
        path={'/'}
        redirectTo={'Back to Home page'}
      />
    );
  if (pending || !venue) return <Pending text={'Fetching venues...'} />;
  if (confirmBooking)
    return (
      <BookingConfirmation
        venue={venue}
        fromDate={fromDate}
        toDate={toDate}
        guests={guests}
        setConfirmBooking={setConfirmBooking}
        nights={nights}
      />
    );

  return (
    <div className="max-w-[1024px] md:mx-auto">
      <h1 className="hidden md:my-4 md:block md:text-3xl md:font-semibold">
        {venue?.data.name}
      </h1>
      <Section ySpace={false}>
        <Media mediaArray={venue?.data.media} />
      </Section>
      <Section>
        <div className="relative min-h-[100vh] md:gap-4 lg:flex">
          <div className=" md:w-[100%]">
            <VenueDetails
              data={venue?.data}
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
              nights={nights}
              setNights={setNights}
            />

            <DateManager
              bookings={venue?.data.bookings}
              fromDate={fromDate}
              toDate={toDate}
              setFromDate={setFromDate}
              setToDate={setToDate}
            />
            <Guests
              maxGuests={venue?.data.maxGuests}
              guests={guests}
              setGuests={setGuests}
            />
          </div>

          <BookingForm
            price={venue?.data.price}
            nights={nights}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            maxGuests={venue?.data.maxGuests}
            totalPrice={totalPrice}
            guests={guests}
            setGuests={setGuests}
            venueId={venue?.data.id}
            setConfirmBooking={setConfirmBooking}
          />

          <BookingFormMobile
            price={venue?.data.price}
            nights={nights}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            maxGuests={venue?.data.maxGuests}
            totalPrice={totalPrice}
            guests={guests}
            setGuests={setGuests}
            venueId={venue?.data.id}
            setConfirmBooking={setConfirmBooking}
          />
        </div>
      </Section>
    </div>
  );
};
