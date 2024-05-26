import { Section } from '../generics/Section';
import FilterVenues from './FilterVenues';
import { useFetchVenues } from '../../context/useFetchVenues';
import { VenuesContainer } from './VenuesContainer';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ResultsHeader from './ResultsHeader';
import filterVenuesByDestination from '../../utils/filterVenues';
import Pagination from './Pagination';
import { Pending } from '../generics/Pending';
import { Error } from '../generics/Error';

export const Venues = () => {
  const [fetchPage, setFetchPage] = useState(1);
  const { venues, error, pending } = useFetchVenues(50, fetchPage);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [destination, setDestination] = useState(
    queryParams.get('destination'),
  );
  let filteredVenues = filterVenuesByDestination(venues?.data, destination);

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
          <ResultsHeader
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
