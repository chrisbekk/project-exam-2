export const getUser = async (username, accessToken, apiKey) => {
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${username}?_bookings=true&_venues=true`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'X-Noroff-API-Key': apiKey,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      throw new Error('noo, could not fetch user data');
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
