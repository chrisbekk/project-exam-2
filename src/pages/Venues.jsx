import { Section } from '../components/Section';
import { FilterVenues } from '../components/FilterVenues';
import { useFetchVenues } from '../context/useFetchVenues';
import { Button } from '../components/Button';
import { VenuesContainer } from '../components/VenuesContainer';
import { useSearchParams } from 'react-router-dom';
import { useSiteContext } from '../context/venueContext';
import React from 'react';
export const Venues = () => {
  const { venues, error, pending } = useFetchVenues();
  console.log(venues);

  const {
    filter: { venues: state, filterDispatch },
  } = useSiteContext();
  console.log(state);
  let filteredVenues = venues?.data;

  // Filter venues by destination
  if (state.destination !== '') {
    filteredVenues = filteredVenues?.filter(
      venue =>
        venue.location.city?.toLowerCase() === state.destination.toLowerCase(),
    );
  }

  // Filter venues by availability between specified dates
  if (state.fromDate && state.toDate) {
    filteredVenues = filteredVenues?.filter(venue => {
      // Check if venue has any bookings that overlap with the specified date range
      const hasOverlappingBookings = venue.bookings.some(booking => {
        return (
          (booking.dateFrom <= state.fromDate &&
            booking.dateTo >= state.fromDate) ||
          (booking.dateFrom <= state.toDate &&
            booking.dateTo >= state.toDate) ||
          (booking.dateFrom >= state.fromDate && booking.dateTo <= state.toDate)
        );
      });

      return !hasOverlappingBookings; // Exclude venues with overlapping bookings
    });
  }
  console.log(filteredVenues);
  return (
    <>
      <div className="px-2">
        <FilterVenues />
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
