import { useState } from 'react';

export const useUpdateUser = () => {
  const [responseData, setResponseData] = useState(null);
  const [pending, setPending] = useState(false);
  const [responseError, setResponseError] = useState(false);

  const updateUser = async (userName, accessToken, apiKey, payload) => {
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
    setPending(true);
    setResponseError(false);
    try {
      const response = await fetch(url, OPTIONS);
      console.log(response);
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error('Failed to update profile');
      }
      const { data } = await response.json();
      console.log(data);
      setResponseData(data);
      return data;
    } catch (error) {
      console.log(error);
      setResponseError(true);
    } finally {
      setPending(false);
    }
  };
  return { responseData, pending, responseError, updateUser };
};
