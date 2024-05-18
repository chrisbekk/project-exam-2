import { Section } from '../components/Section';
import FilterVenues from '../components/FilterVenues';
import { useFetchVenues } from '../context/useFetchVenues';
import { Button } from '../components/Button';
import { VenuesContainer } from '../components/VenuesContainer';
import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterResults from '../components/FilterResults';
import filterVenuesByDestination from '../utils/filterVenues';
import Pagination from '../components/Pagination';

export const Venues = () => {
  const [fetchPage, setFetchPage] = useState(1);
  const { venues, error, pending } = useFetchVenues(50, fetchPage);
  console.log(venues);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [destination, setDestination] = useState(
    queryParams.get('destination'),
  );
  const [filter, setFilter] = useState(null);
  const [metaFilter, setMetaFilter] = useState({
    wifi: null,
    parking: null,
    breakfast: null,
    pets: null,
  });
  const [applyMetaFilter, setApplyMetaFilter] = useState(false); // Flag to apply metaFilter

  let filteredVenues = useMemo(() => {
    return filterVenuesByDestination(venues?.data, destination);
  }, [venues, destination, fetchPage]);

  // Effect to apply metaFilter when it changes
  useEffect(() => {
    setApplyMetaFilter(true); // Set flag to apply metaFilter
  }, [metaFilter]);

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

  // Filter Venues by user defined tags
  filteredVenues = filteredVenues?.filter(venue => {
    if (!applyMetaFilter) return true; // If flag is false, include all venues
    for (const key in metaFilter) {
      if (metaFilter[key] !== null && metaFilter[key] !== venue.meta[key]) {
        return false; // If metaFilter is not null and venue's meta value doesn't match, exclude venue
      }
    }
    return true; // Include venue if all metaFilter values are null or match venue's meta values
  });

  const fetchNextPage = () => {
    setFetchPage(prev => prev + 1);
  };

  return (
    <>
      <div className="px-2">
        <FilterVenues
          filter={filter}
          setFilter={setFilter}
          metaFilter={metaFilter}
          setMetaFilter={setMetaFilter}
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
      <Pagination meta={venues?.meta} setFetchPage={setFetchPage} />
    </>
  );
};
