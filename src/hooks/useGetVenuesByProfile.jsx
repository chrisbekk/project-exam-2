import { useState } from 'react';

export const useGetVenuesByProfile = () => {
  const [venues, setVenues] = useState(null);
  const [pending, setPending] = useState(false);
  const [responseError, setResponseError] = useState(false);

  const getVenuesByProfile = async (username, accessToken, apiKey) => {
    const url = `https://v2.api.noroff.dev/holidaze/profiles/${username}/venues?_bookings=true`;
    const OPTIONS = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'X-Noroff-API-Key': apiKey,
      },
    };
    setPending(false);
    setResponseError(false);
    try {
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error('Failed to fetch venues');
      }
      const { data } = await response.json();
      setVenues(data);
    } catch (error) {
      console.log(error);
      setResponseError(true);
    } finally {
      setPending(false);
    }
  };

  return { venues, setVenues, pending, responseError, getVenuesByProfile };
};
