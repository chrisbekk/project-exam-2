import { useState } from 'react';

export default function useFetchUser() {
  const [userData, setUserData] = useState(null);
  const [pending, setPending] = useState(false);
  const [responseError, setResponseError] = useState(false);

  const fetchUser = async (user, accessToken, apiKey) => {
    const url = `https://v2.api.noroff.dev/holidaze/profiles/${user}?_bookings=true&_venues=true`;
    const OPTIONS = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'X-Noroff-API-Key': apiKey,
      },
    };
    try {
      setPending(true);
      setResponseError(false);
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
      setResponseError(true);
    } finally {
      setPending(false);
    }
  };

  return { userData, pending, responseError, fetchUser };
}
