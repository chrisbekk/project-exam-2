import { useParams } from 'react-router-dom';
import { useFetchVenue } from '../hooks/useFetchVenue';
import { Section } from '../components/Section';
import BookingFormMobile from '../components/VenueDetails/BookingForm/BookingFormMobile';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Media } from '../components/VenueDetails/Media';
import { Pending } from '../components/Pending';
import { VenueDetails } from '../components/VenueDetails';
import BookingForm from '../components/VenueDetails/BookingForm/BookingForm';
import calculateNightsBooked from '../utils/calculateNightsBooked';
import Calendar from '../components/Calendar';
import DateManager from '../components/VenueDetails/DateManager';
import { BookingConfirmation } from '../components/VenueDetails/BookingConfirmation';
export const Venue = () => {
  const { venueId } = useParams();

  const { venue, error, pending } = useFetchVenue(venueId);
  const [confirmBooking, setConfirmBooking] = useState(false);
  // State for controlling calendar
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // States for booking information
  const [nights, setNights] = useState(0); // Total nights booked
  const [guests, setGuests] = useState(0);
  console.log(confirmBooking);

  // Calculate total nights booked
  useEffect(() => {
    setNights(calculateNightsBooked(fromDate, toDate));
  }, [fromDate, toDate]);

  // Derived state for total price
  let totalPrice = nights * venue?.data.price; //
  const bookedDates = ['2024-05-20', '2024-05-21', '2024-05-22'];
  if (error) return <p>Error in fetching venues</p>;
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
        <div className="relative min-h-[100vh] md:flex md:gap-4">
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
