import React from 'react';
import { useState, useEffect } from 'react';
export const useFetchVenue = id => {
  const [venue, setVenue] = useState(null);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const fetchVenue = async id => {
      try {
        setPending(true);
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/venues/${id}?_owner=true&_bookings=true`,
        );
        if (!response.ok) {
          const responseError = await response.json();
          console.log(responseError);
          throw new Error('Failed to fetch venue data');
        }
        const json = await response.json();
        setVenue(json);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setPending(false);
      }
    };

    fetchVenue(id);
  }, [id]);

  return { venue, error, pending };
};
