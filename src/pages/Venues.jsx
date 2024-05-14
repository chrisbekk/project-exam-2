import { Section } from '../components/Section';
import FilterVenues from '../components/FilterVenues';
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
  const [filter, setFilter] = useState(null);

  let filteredVenues = useMemo(() => {
    return filterVenuesByDestination(venues?.data, destination);
  }, [venues, destination]);

  if (filter) {
    if (filter === 'price') {
      filteredVenues = filteredVenues.sort((low, high) => {
        return low.price - high.price;
      });
    } else {
      filteredVenues = filteredVenues.sort((low, high) => {
        return high.rating - low.rating;
      });
    }
  }

  return (
    <>
      <div className="px-2">
        <FilterVenues
          filter={filter}
          setFilter={setFilter}
          setDestination={setDestination}
        />
      </div>
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
