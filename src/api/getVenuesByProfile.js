export const getVenuesByProfile = async (username, accessToken, apiKey) => {
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${username}/venues?_bookings=true`;
  const OPTIONS = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'X-Noroff-API-Key': apiKey,
    },
  };
  try {
    const response = await fetch(url, OPTIONS);
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error('Failed to fetch venues');
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
