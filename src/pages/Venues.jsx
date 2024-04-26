import { Section } from '../components/Section';
import { FilterVenues } from '../components/FilterVenues';
import { useFetchVenues } from '../context/useFetchVenues';
import { Button } from '../components/Button';
import { VenuesContainer } from '../components/VenuesContainer';
import { useSearchParams } from 'react-router-dom';
import { useSiteContext } from '../context/venueContext';
import React from 'react';

export const Venues = () => {
  const context = useSiteContext();
  console.log(context);
  const { venues, error, pending } = useFetchVenues();
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination');
  const fromDate = searchParams.get('fromDate');
  const toDate = searchParams.get('toDate');
  let filteredVenues;
  if (destination === '') {
    filteredVenues = venues?.data;
  } else {
    filteredVenues = venues?.data.filter(
      venue =>
        venue.location.city?.toLowerCase() ===
        searchParams.get('destination').toLowerCase(),
    );
  }
  // Filter venues

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
