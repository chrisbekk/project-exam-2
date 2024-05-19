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
export const Venue = () => {
  const { venueId } = useParams();

  const { venue, error, pending } = useFetchVenue(venueId);
  const [isVisible, setIsVisible] = useState(false); // Toggle Booking Form Modal

  // State for controlling calendar
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // States for booking information
  const [nights, setNights] = useState(0); // Total nights booked
  const [guests, setGuests] = useState(0);
  // Calculate total nights booked
  useEffect(() => {
    setNights(calculateNightsBooked(fromDate, toDate));
  }, [fromDate, toDate]);

  // Derived state for total price
  let totalPrice = nights * venue?.data.price; //

  if (error) return <p>Error in fetching venues</p>;
  if (pending || !venue) return <Pending text={'Fetching venues...'} />;
  return (
    <div className="max-w-[1024px] border border-red-500 md:mx-auto">
      <h1 className="hidden md:my-4 md:block md:text-3xl md:font-semibold">
        {venue?.data.name}
      </h1>
      <Section ySpace={false}>
        <Media mediaArray={venue?.data.media} />
      </Section>
      <Section>
        <div className="relative min-h-[100vh] md:flex md:gap-4">
          <div className="border border-red-600 md:max-w-[60%]">
            <VenueDetails
              data={venue?.data}
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
              nights={nights}
              setNights={setNights}
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
          />

          <div className="fixed bottom-0 left-0 w-full md:hidden">
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
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
