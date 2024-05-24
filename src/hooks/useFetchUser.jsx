const fetchUser = async (user, accessToken, apiKey) => {
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${user}?_bookings=true&_venues=true`;
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
      const error = await response.json();
      throw new Error(JSON.stringify(error));
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export default fetchUser;
