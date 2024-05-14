import { Section } from '../components/Section';
import { FilterVenues } from '../components/FilterVenues';
import { useFetchVenues } from '../context/useFetchVenues';
import { Button } from '../components/Button';
import { VenuesContainer } from '../components/VenuesContainer';
import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import FilterResults from '../components/FilterResults';
import filterVenuesByDestination from '../utils/filterVenues';
export const Venues = () => {
  const { venues, error, pending } = useFetchVenues();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [destination, setDestination] = useState(
    queryParams.get('destination'),
  );
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState(null);
  const filteredVenues = useMemo(() => {
    return filterVenuesByDestination(venues?.data, destination);
  }, [venues, destination]);
  return (
    <>
      <div className="px-2">{destination}</div>
      <Section>
        {destination !== '' && (
          <FilterResults
            filteredVenues={filteredVenues}
            destination={destination}
          />
        )}
      </Section>
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
