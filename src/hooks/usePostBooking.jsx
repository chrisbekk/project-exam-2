import { useState } from 'react';

export default function usePostBooking() {
  const [responseData, setResponseData] = useState(null);
  const [pending, setPending] = useState(false);
  const [responseError, setResponseError] = useState(null);

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
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };
  return { responseData, pending, responseError, postBooking };
}
