import React, { useState } from 'react';

export const useRegisterVenueManager = () => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const registerVenueManager = async (
    userName,
    accessToken,
    apiKey,
    payload,
  ) => {
    let url = `https://v2.api.noroff.dev/holidaze/profiles/${userName}`;
    const OPTIONS = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'X-Noroff-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
    };
    try {
      setPending(true);
      setError(false);
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setPending(false);
    }
  };

  return {
    data,
    pending,
    error,
    setError,
    registerVenueManager,
  };
};
