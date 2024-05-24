import { useState } from 'react';

export default function usePostBooking() {
  const [responseData, setResponseData] = useState(null);
  const [pending, setPending] = useState(false);
  const [responseError, setResponseError] = useState(false);

  const postBooking = async (accessToken, apiKey, bookingData) => {
    let url = `https://v2.api.noroff.dev/holidaze/bookings`;
    const OPTIONS = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'X-Noroff-API-Key': apiKey,
      },
      body: JSON.stringify(bookingData),
    };
    try {
      setPending(true);
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
      }
      const data = await response.json();

      setResponseData(data);
    } catch (error) {
      console.log(error);
      setResponseError(true);
    }
  };
  return { responseData, pending, responseError, postBooking };
}
