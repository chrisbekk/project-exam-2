import { useState } from 'react';

export default function useUpdateProfile() {
  const [responseData, setResponseData] = useState(null);
  const [pending, setPending] = useState(false);
  const [responseError, setResponseError] = useState(null);

  const updateProfile = async (userName, accessToken, apiKey, payload) => {
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
      setResponseError(null);
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error('Failed to update profile');
      }
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.log(error);
      setResponseError(error.message);
    } finally {
      setPending(false);
    }
  };

  return { responseData, pending, responseError, updateProfile };
}
