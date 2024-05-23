import React, { useState } from 'react';

export const useRegisterVenueManager = () => {
  const [responseData, setResponseData] = useState(null);
  const [pending, setPending] = useState(false);
  const [responseError, setResponseError] = useState(false);

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
      setResponseError(false);
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
      }
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.log(error);
      setResponseError(true);
    }
  };

  return {
    responseData,
    pending,
    responseError,
    setResponseError,
    registerVenueManager,
  };
};
