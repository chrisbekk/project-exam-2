export const deleteVenue = async (venueId, accessToken, apiKey) => {
  const url = `https://v2.api.noroff.dev/holidaze/venues/${venueId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'X-Noroff-API-Key': apiKey,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error('Failed to delete venue');
    }
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
