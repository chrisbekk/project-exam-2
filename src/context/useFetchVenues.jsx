import React from 'react';
import { useState, useEffect } from 'react';
export const useFetchVenues = (limit = 100, page = 1) => {
  const [venues, setVenues] = useState(null);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setPending(true);
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/venues?_owner=true&_bookings=true&limit=${limit}&page=${page}`,
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch venues from: ${response.url} with status code: ${response.status}`,
          );
        }
        const data = await response.json();
        setVenues(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setPending(false);
      }
    };
    fetchVenues();
  }, [limit, page]);

  return { venues, error, pending };
};
