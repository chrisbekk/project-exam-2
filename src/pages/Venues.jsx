import { Section } from '../components/Section';
import { FilterVenues } from '../components/FilterVenues';
import { useFetchVenues } from '../context/useFetchVenues';
import { Button } from '../components/Button';
import { VenuesContainer } from '../components/VenuesContainer';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
export const Venues = () => {
  const { venues, error, pending } = useFetchVenues();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [destination, setDestination] = useState(
    queryParams.get('destination'),
  );
  const [fromDate, setFromDate] = useState(queryParams.get('fromDate'));
  const [toDate, setToDate] = useState(queryParams.get('toDate'));
  const [guests, setGuests] = useState(queryParams.get('guests'));

  let filteredVenues = venues?.data;

  // Filter venues by destination
  if (destination !== '') {
    filteredVenues = filteredVenues?.filter(
      venue => venue.location.city?.toLowerCase() === destination.toLowerCase(),
    );
  }

  // Filter venues by availability between specified dates
  if (fromDate && toDate) {
    filteredVenues = filteredVenues?.filter(venue => {
      // Check if venue has any bookings that overlap with the specified date range
      const hasOverlappingBookings = venue.bookings.some(booking => {
        return (
          (booking.dateFrom <= fromDate && booking.dateTo >= fromDate) ||
          (booking.dateFrom <= toDate && booking.dateTo >= toDate) ||
          (booking.dateFrom >= fromDate && booking.dateTo <= toDate)
        );
      });

      return !hasOverlappingBookings; // Exclude venues with overlapping bookings
    });
  }

  return (
    <>
      <div className="px-2">
        <FilterVenues
          setDestination={setDestination}
          setFromDate={setFromDate}
          setToDate={setToDate}
          setGuests={setGuests}
        />
      </div>

      <Section>
        <VenuesContainer
          venues={filteredVenues}
          error={error}
          pending={pending}
        />
      </Section>
      <Button>View More</Button>
    </>
  );
};

// import { Section } from '../components/Section';
// import { FilterVenues } from '../components/FilterVenues';
// import { useFetchVenues } from '../context/useFetchVenues';
// import { Button } from '../components/Button';
// import { VenuesContainer } from '../components/VenuesContainer';
// import { useSearchParams } from 'react-router-dom';
// import { useSiteContext } from '../context/venueContext';
// import React from 'react';

// export const Venues = () => {
//   const { venues, error, pending } = useFetchVenues();
//   // const [searchParams] = useSearchParams();
//   // const destination = searchParams.get('destination');
//   // const fromDate = searchParams.get('fromDate');
//   // const toDate = searchParams.get('toDate');
//   const {
//     filter: { venues: state, filterDispatch },
//   } = useSiteContext();
//   console.log(state);
//   console.log(venues);
//   let filteredVenues;
//   if (state.destination === '') {
//     filteredVenues = venues?.data;
//   } else {
//     filteredVenues = venues?.data.filter(
//       venue =>
//         venue.location.city?.toLowerCase() === state.destination.toLowerCase(),
//     );
//   }
//   //Filter venues

//   //console.log(filteredVenues);

//   return (
//     <>
//       <div className="px-2">
//         <FilterVenues />
//       </div>

//       <Section>
//         <VenuesContainer
//           venues={filteredVenues}
//           error={error}
//           pending={pending}
//         />
//       </Section>
//       <Button>View More</Button>
//     </>
//   );
// };
