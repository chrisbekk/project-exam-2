export const createVenue = async (accessToken, apiKey, payload) => {
  const url = `https://v2.api.noroff.dev/holidaze/venues`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'X-Noroff-API-Key': apiKey,
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    console.log('Full response:', responseData);

    if (!response.ok) {
      console.error('Error response:', responseData);
      throw new Error('Failed to create venue');
    }

    return responseData;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
