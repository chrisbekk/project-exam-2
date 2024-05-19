import { useParams } from 'react-router-dom';
import { useFetchVenue } from '../hooks/useFetchVenue';
import { Section } from '../components/Section';
import { BookingFormMobile } from '../components/VenueDetails/BookingForm/BookingFormMobile';
import React from 'react';
import { useState } from 'react';
import { Media } from '../components/VenueDetails/Media';
import { Pending } from '../components/Pending';
import { VenueDetails } from '../components/VenueDetails';
export const Venue = () => {
  const { venueId } = useParams();

  const { venue, error, pending } = useFetchVenue(venueId);
  const [isVisible, setIsVisible] = useState(false); // Toggle Booking Form Modal

  // State for controlling calendar
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // States for booking information
  const [nights, setNights] = useState(0); // Total nights booked

  // Derived state for total price
  let totalPrice = nights * venue?.data.price; //

  if (error) return <p>Error in fetching venues</p>;
  if (pending || !venue) return <Pending text={'Fetching venues...'} />;
  return (
    <div className="max-w-[1024px] lg:mx-auto">
      <h1 className="hidden md:my-4 md:block md:text-3xl md:font-semibold">
        {venue?.data.name}
      </h1>
      <Section ySpace={false}>
        <Media mediaArray={venue?.data.media} />
      </Section>
      <Section>
        <div className="relative min-h-[100vh] md:grid md:grid-cols-[0.60fr_0.40fr] md:gap-4 lg:grid-cols-[0.70fr_0.30fr]">
          <div className="">
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
          <div className="hidden bg-red-300 md:sticky md:bottom-auto md:top-32 md:block md:h-[45vh]">
            aside
          </div>
          <div className="fixed bottom-0 left-0 w-full md:hidden">
            <BookingFormMobile price={venue?.data.price} nights={nights} />
          </div>
        </div>
      </Section>
    </div>
  );
};
