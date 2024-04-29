import { useParams } from 'react-router-dom';
import { useFetchVenue } from '../hooks/useFetchVenue';
import { Section } from '../components/Section';
import { VenueComponent } from '../components/VenueComponent';
import React from 'react';

export const Venue = () => {
  const { venueId } = useParams();
  console.log(venueId);
  const { venue, error, pending } = useFetchVenue(venueId);
  console.log(venue);
  return (
    <>
      <Section ySpace={false}>
        <VenueComponent data={venue?.data} error={error} pending={pending} />
      </Section>
    </>
  );
};
