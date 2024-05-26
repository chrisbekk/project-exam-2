import { Section } from '../components/Section';
import FilterVenues from '../components/FilterVenues';
import { useFetchVenues } from '../context/useFetchVenues';
import { VenuesContainer } from '../components/VenuesContainer';
import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import FilterResults from '../components/FilterResults';
import filterVenuesByDestination from '../utils/filterVenues';
import Pagination from '../components/Pagination';
import { Pending } from '../components/Pending';
import { Error } from '../components/Error';

export const Venues = () => {
  const [fetchPage, setFetchPage] = useState(1);
  const { venues, error, pending } = useFetchVenues(50, fetchPage);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [destination, setDestination] = useState(
    queryParams.get('destination'),
  );

  let filteredVenues = useMemo(() => {
    return filterVenuesByDestination(venues?.data, destination);
  }, [venues, destination, fetchPage]);

  if (pending) return <Pending text={'Loading venues..'} />;
  if (error)
    return (
      <Error
        text={'Failed to load venues'}
        path={'/'}
        redirectTo={'Back to Home page'}
      />
    );

  return (
    <>
      <div className="px-2">
        <FilterVenues setDestination={setDestination} />
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
      {filteredVenues?.length > 1 && (
        <Pagination meta={venues?.meta} setFetchPage={setFetchPage} />
      )}
    </>
  );
};
