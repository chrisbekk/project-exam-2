import React, { useState } from 'react';

export const useFetchUser = () => {
  const [userData, setUserData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const getUser = async (username, accessToken, apiKey) => {
    const url = `https://v2.api.noroff.dev/holidaze/profiles/${username}?_bookings=true&_venues=true`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'X-Noroff-API-Key': apiKey,
      },
    };

    try {
      setPending(true);
      setError(false);
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error('noo, could not fetch user data');
      }
      const { data } = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setPending(false);
    }
  };
  return { userData, setUserData, pending, error, getUser };
};
